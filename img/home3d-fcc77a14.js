var Home3D=(()=>{var yo=Object.defineProperty;var yf=Object.getOwnPropertyDescriptor;var vf=Object.getOwnPropertyNames;var Mf=Object.prototype.hasOwnProperty;var bf=(i,t)=>{for(var e in t)yo(i,e,{get:t[e],enumerable:!0})},Sf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of vf(t))!Mf.call(i,s)&&s!==e&&yo(i,s,{get:()=>t[s],enumerable:!(n=yf(t,s))||n.enumerable});return i};var wf=i=>Sf(yo({},"__esModule",{value:!0}),i);var C_={};bf(C_,{D0:()=>Cn,D1:()=>In,DX:()=>pi,RD:()=>ot,RW:()=>Xt,STARS:()=>Oc,WH:()=>sn,cozyOf:()=>qr,dailyIncome:()=>Fc,demoHome:()=>E_,freshHome:()=>Zu,starsOf:()=>Nc,start:()=>R_});var Ef=0,lh=1,Tf=2;var gu=1,Af=2,Ti=3,$i=0,gn=1,cn=2,Xi=0,$s=1,gs=2,ch=3,hh=4,Rf=5,fs=100,Cf=101,If=102,Pf=103,Lf=104,Df=200,Uf=201,Nf=202,Ff=203,Qo=204,tl=205,Of=206,zf=207,Bf=208,kf=209,Vf=210,Hf=211,Gf=212,Wf=213,Xf=214,el=0,nl=1,il=2,js=3,sl=4,rl=5,al=6,ol=7,_c=0,qf=1,Yf=2,qi=0,$f=1,Zf=2,Jf=3,Kf=4,jf=5,Qf=6,td=7;var _u=300,Qs=301,tr=302,ll=303,cl=304,io=306,er=1e3,ps=1001,hl=1002,jn=1003,ed=1004;var aa=1005;var oi=1006,vo=1007;var ms=1008;var Ii=1009,xu=1010,yu=1011,Lr=1012,xc=1013,_s=1014,Ai=1015,Wr=1016,yc=1017,vc=1018,nr=1020,vu=35902,Mu=1021,bu=1022,Kn=1023,Su=1024,wu=1025,Zs=1026,ir=1027,Eu=1028,Mc=1029,Tu=1030,bc=1031;var Sc=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,_l=37496,xl=37808,yl=37809,vl=37810,Ml=37811,bl=37812,Sl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Oa=36492,Ll=36494,Dl=36495,Au=36283,Ul=36284,Nl=36285,Fl=36286;var za=2300,Ol=2301,Mo=2302,uh=2400,fh=2401,dh=2402;var nd=3200,id=3201;var Ru=0,sd=1,Gi="",on="srgb",ur="srgb-linear",so="linear",Pe="srgb";var Cs=7680;var ph=519,rd=512,ad=513,od=514,Cu=515,ld=516,cd=517,hd=518,ud=519,zl=35044;var mh="300 es",Ri=2e3,Ba=2001,Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bo=Math.PI/180,Bl=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function En(i,t,e){return Math.max(t,Math.min(e,i))}function fd(i,t){return(i%t+t)%t}function So(i,t,e){return(1-e)*i+e*t}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class i{constructor(t,e,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],p=n[2],g=n[5],v=n[8],w=s[0],_=s[3],f=s[6],R=s[1],A=s[4],E=s[7],k=s[2],L=s[5],U=s[8];return r[0]=a*w+o*R+c*k,r[3]=a*_+o*A+c*L,r[6]=a*f+o*E+c*U,r[1]=h*w+u*R+d*k,r[4]=h*_+u*A+d*L,r[7]=h*f+u*E+d*U,r[2]=p*w+g*R+v*k,r[5]=p*_+g*A+v*L,r[8]=p*f+g*E+v*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,p=o*c-u*r,g=h*r-a*c,v=e*d+n*p+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=d*w,t[1]=(s*h-u*n)*w,t[2]=(o*n-s*a)*w,t[3]=p*w,t[4]=(u*e-s*c)*w,t[5]=(s*r-o*e)*w,t[6]=g*w,t[7]=(n*c-h*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new se;function Iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Dr("canvas");return i.style.display="block",i}var gh={};function Cr(i){i in gh||(gh[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ve={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Pe&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Pe&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _h=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],yh=[.3127,.329],vh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[ur]:{primaries:_h,whitePoint:yh,transfer:so,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:_h,whitePoint:yh,transfer:Pe,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});var Is,kl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=Dr("canvas")),Is.width=t.width,Is.height=t.height;let n=Is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Eo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,Pn=class i extends Zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ps,s=ps,r=oi,a=ms,o=Kn,c=Ii,h=i.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Yi(),this.name="",this.source=new ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=_u;Pn.DEFAULT_ANISOTROPY=1;var De=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],d=c[8],p=c[1],g=c[5],v=c[9],w=c[2],_=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+w)<.1&&Math.abs(v+_)<.1&&Math.abs(h+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(h+1)/2,E=(g+1)/2,k=(f+1)/2,L=(u+p)/4,U=(d+w)/4,O=(v+_)/4;return A>E&&A>k?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=L/n,r=U/n):E>k?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=L/s,r=O/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=U/r,s=O/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-v)*(_-v)+(d-w)*(d-w)+(p-u)*(p-u));return Math.abs(R)<.001&&(R=1),this.x=(_-v)/R,this.y=(d-w)/R,this.z=(p-u)/R,this.w=Math.acos((h+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vl=class extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Va=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],g=r[a+1],v=r[a+2],w=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=g,t[e+2]=v,t[e+3]=w;return}if(d!==w||c!==p||h!==g||u!==v){let _=1-o,f=c*p+h*g+u*v+d*w,R=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){let k=Math.sqrt(A),L=Math.atan2(k,f*R);_=Math.sin(_*L)/k,o=Math.sin(o*L)/k}let E=o*R;if(c=c*_+p*E,h=h*_+g*E,u=u*_+v*E,d=d*_+w*E,_===1-o){let k=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=k,h*=k,u*=k,d*=k}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a],p=r[a+1],g=r[a+2],v=r[a+3];return t[e]=o*v+u*d+c*g-h*p,t[e+1]=c*v+u*p+h*d-o*g,t[e+2]=h*v+u*g+o*p-c*d,t[e+3]=u*v-o*d-c*p-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),g=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*u*d+h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d-p*g*v;break;case"YXZ":this._x=p*u*d+h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d+p*g*v;break;case"ZXY":this._x=p*u*d-h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d-p*g*v;break;case"ZYX":this._x=p*u*d-h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d+p*g*v;break;case"YZX":this._x=p*u*d+h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d-p*g*v;break;case"XZY":this._x=p*u*d-h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(a-s)*g}else if(n>o&&n>d){let g=2*Math.sqrt(1+n-o-d);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+h)/g}else if(o>d){let g=2*Math.sqrt(1+o-n-d);this._w=(r-h)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+d-n-o);this._w=(a-s)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=s+c*d+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new N,bh=new Ji,Pi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),la.subVectors(this.max,Mr),Ps.subVectors(t.a,Mr),Ls.subVectors(t.b,Mr),Ds.subVectors(t.c,Mr),Oi.subVectors(Ls,Ps),zi.subVectors(Ds,Ls),rs.subVectors(Ps,Ds);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-rs.z,rs.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,rs.z,0,-rs.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-rs.y,rs.x,0];return!Ao(e,Ps,Ls,Ds,la)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,Ps,Ls,Ds,la))?!1:(ca.crossVectors(Oi,zi),e=[ca.x,ca.y,ca.z],Ao(e,Ps,Ls,Ds,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new N,new N,new N,new N,new N,new N,new N,new N],Yn=new N,oa=new Pi,Ps=new N,Ls=new N,Ds=new N,Oi=new N,zi=new N,rs=new N,Mr=new N,la=new N,ca=new N,as=new N;function Ao(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){as.fromArray(i,r);let o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=t.dot(as),h=e.dot(as),u=n.dot(as);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var yd=new Pi,br=new N,Ro=new N,sr=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);let e=br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Ro)),this.expandByPoint(br.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new N,Co=new N,ha=new N,Bi=new N,Io=new N,ua=new N,Po=new N,Ur=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Co.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(Co);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=Bi.dot(this.direction),c=-Bi.dot(ha),h=Bi.lengthSq(),u=Math.abs(1-a*a),d,p,g,v;if(u>0)if(d=a*c-o,p=a*o-c,v=r*u,d>=0)if(p>=-v)if(p<=v){let w=1/u;d*=w,p*=w,g=d*(d+a*p+2*o)+p*(a*d+p+2*c)+h}else p=r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;else p=-r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;else p<=-v?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+p*(p+2*c)+h):p<=v?(d=0,p=Math.min(Math.max(-r,-c),r),g=p*(p+2*c)+h):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+p*(p+2*c)+h);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Co).addScaledVector(ha,p),g}intersectSphere(t,e){bi.subVectors(t.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){Io.subVectors(e,t),ua.subVectors(n,t),Po.crossVectors(Io,ua);let a=this.direction.dot(Po),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);let c=o*this.direction.dot(ua.crossVectors(Bi,ua));if(c<0)return null;let h=o*this.direction.dot(Io.cross(Bi));if(h<0||c+h>a)return null;let u=-o*Bi.dot(Po);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(t,e,n,s,r,a,o,c,h,u,d,p,g,v,w,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,d,p,g,v,w,_)}set(t,e,n,s,r,a,o,c,h,u,d,p,g,v,w,_){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=u,f[10]=d,f[14]=p,f[3]=g,f[7]=v,f[11]=w,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*u,g=a*d,v=o*u,w=o*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=g+v*h,e[5]=p-w*h,e[9]=-o*c,e[2]=w-p*h,e[6]=v+g*h,e[10]=a*c}else if(t.order==="YXZ"){let p=c*u,g=c*d,v=h*u,w=h*d;e[0]=p+w*o,e[4]=v*o-g,e[8]=a*h,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=g*o-v,e[6]=w+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*u,g=c*d,v=h*u,w=h*d;e[0]=p-w*o,e[4]=-a*d,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*u,e[9]=w-p*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*u,g=a*d,v=o*u,w=o*d;e[0]=c*u,e[4]=v*h-g,e[8]=p*h+w,e[1]=c*d,e[5]=w*h+p,e[9]=g*h-v,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,g=a*h,v=o*c,w=o*h;e[0]=c*u,e[4]=w-p*d,e[8]=v*d+g,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=g*d+v,e[10]=p-w*d}else if(t.order==="XZY"){let p=a*c,g=a*h,v=o*c,w=o*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=p*d+w,e[5]=a*u,e[9]=g*d-v,e[2]=v*d-g,e[6]=o*u,e[10]=w*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,Md)}lookAt(t,e,n){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ki.crossVectors(n,kn),ki.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ki.crossVectors(n,kn)),ki.normalize(),fa.crossVectors(kn,ki),s[0]=ki.x,s[4]=fa.x,s[8]=kn.x,s[1]=ki.y,s[5]=fa.y,s[9]=kn.y,s[2]=ki.z,s[6]=fa.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],p=n[9],g=n[13],v=n[2],w=n[6],_=n[10],f=n[14],R=n[3],A=n[7],E=n[11],k=n[15],L=s[0],U=s[4],O=s[8],T=s[12],S=s[1],F=s[5],Z=s[9],J=s[13],tt=s[2],nt=s[6],j=s[10],ht=s[14],et=s[3],Mt=s[7],Tt=s[11],zt=s[15];return r[0]=a*L+o*S+c*tt+h*et,r[4]=a*U+o*F+c*nt+h*Mt,r[8]=a*O+o*Z+c*j+h*Tt,r[12]=a*T+o*J+c*ht+h*zt,r[1]=u*L+d*S+p*tt+g*et,r[5]=u*U+d*F+p*nt+g*Mt,r[9]=u*O+d*Z+p*j+g*Tt,r[13]=u*T+d*J+p*ht+g*zt,r[2]=v*L+w*S+_*tt+f*et,r[6]=v*U+w*F+_*nt+f*Mt,r[10]=v*O+w*Z+_*j+f*Tt,r[14]=v*T+w*J+_*ht+f*zt,r[3]=R*L+A*S+E*tt+k*et,r[7]=R*U+A*F+E*nt+k*Mt,r[11]=R*O+A*Z+E*j+k*Tt,r[15]=R*T+A*J+E*ht+k*zt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],p=t[10],g=t[14],v=t[3],w=t[7],_=t[11],f=t[15];return v*(+r*c*d-s*h*d-r*o*p+n*h*p+s*o*g-n*c*g)+w*(+e*c*g-e*h*p+r*a*p-s*a*g+s*h*u-r*c*u)+_*(+e*h*d-e*o*g-r*a*d+n*a*g+r*o*u-n*h*u)+f*(-s*o*u-e*c*d+e*o*p+s*a*d-n*a*p+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],p=t[10],g=t[11],v=t[12],w=t[13],_=t[14],f=t[15],R=d*_*h-w*p*h+w*c*g-o*_*g-d*c*f+o*p*f,A=v*p*h-u*_*h-v*c*g+a*_*g+u*c*f-a*p*f,E=u*w*h-v*d*h+v*o*g-a*w*g-u*o*f+a*d*f,k=v*d*c-u*w*c-v*o*p+a*w*p+u*o*_-a*d*_,L=e*R+n*A+s*E+r*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=R*U,t[1]=(w*p*r-d*_*r-w*s*g+n*_*g+d*s*f-n*p*f)*U,t[2]=(o*_*r-w*c*r+w*s*h-n*_*h-o*s*f+n*c*f)*U,t[3]=(d*c*r-o*p*r-d*s*h+n*p*h+o*s*g-n*c*g)*U,t[4]=A*U,t[5]=(u*_*r-v*p*r+v*s*g-e*_*g-u*s*f+e*p*f)*U,t[6]=(v*c*r-a*_*r-v*s*h+e*_*h+a*s*f-e*c*f)*U,t[7]=(a*p*r-u*c*r+u*s*h-e*p*h-a*s*g+e*c*g)*U,t[8]=E*U,t[9]=(v*d*r-u*w*r-v*n*g+e*w*g+u*n*f-e*d*f)*U,t[10]=(a*w*r-v*o*r+v*n*h-e*w*h-a*n*f+e*o*f)*U,t[11]=(u*o*r-a*d*r-u*n*h+e*d*h+a*n*g-e*o*g)*U,t[12]=k*U,t[13]=(u*w*s-v*d*s+v*n*p-e*w*p-u*n*_+e*d*_)*U,t[14]=(v*o*s-a*w*s-v*n*c+e*w*c+a*n*_-e*o*_)*U,t[15]=(a*d*s-u*o*s+u*n*c-e*d*c-a*n*p+e*o*p)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,d=o+o,p=r*h,g=r*u,v=r*d,w=a*u,_=a*d,f=o*d,R=c*h,A=c*u,E=c*d,k=n.x,L=n.y,U=n.z;return s[0]=(1-(w+f))*k,s[1]=(g+E)*k,s[2]=(v-A)*k,s[3]=0,s[4]=(g-E)*L,s[5]=(1-(p+f))*L,s[6]=(_+R)*L,s[7]=0,s[8]=(v+A)*U,s[9]=(_-R)*U,s[10]=(1-(p+w))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);let h=1/r,u=1/a,d=1/o;return $n.elements[0]*=h,$n.elements[1]*=h,$n.elements[2]*=h,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ri){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,v;if(o===Ri)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ba)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ri){let c=this.elements,h=1/(e-t),u=1/(n-s),d=1/(a-r),p=(e+t)*h,g=(n+s)*u,v,w;if(o===Ri)v=(a+r)*d,w=-2*d;else if(o===Ba)v=r*d,w=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=w,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new N,$n=new Be,vd=new N(0,0,0),Md=new N(1,1,1),ki=new N,fa=new N,kn=new N,Sh=new Be,wh=new Ji,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,Eh=new N,Ns=new Ji,Si=new Be,da=new N,Sr=new N,Sd=new N,wd=new Ji,Th=new N(1,0,0),Ah=new N(0,1,0),Rh=new N(0,0,1),Ch={type:"added"},Ed={type:"removed"},Fs={type:"childadded",child:null},Lo={type:"childremoved",child:null},hn=class i extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new li,n=new Ji,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new se}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Rh,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Sr,da,this.up):Si.lookAt(da,Sr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Si),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ch),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ch),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new N(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new N,wi=new N,Do=new N,Ei=new N,Os=new N,zs=new N,Ih=new N,Uo=new N,No=new N,Fo=new N,Oo=new De,zo=new De,Bo=new De,Wi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),wi.subVectors(n,e),Do.subVectors(t,e);let a=Zn.dot(Zn),o=Zn.dot(wi),c=Zn.dot(Do),h=wi.dot(wi),u=wi.dot(Do),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(h*c-o*u)*p,v=(a*u-o*c)*p;return r.set(1-g-v,v,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oo.setScalar(0),zo.setScalar(0),Bo.setScalar(0),Oo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),wi.subVectors(t,e),Zn.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Zn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),zs.subVectors(r,n),Uo.subVectors(t,n);let c=Os.dot(Uo),h=zs.dot(Uo);if(c<=0&&h<=0)return e.copy(n);No.subVectors(t,s);let u=Os.dot(No),d=zs.dot(No);if(u>=0&&d<=u)return e.copy(s);let p=c*d-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Os,a);Fo.subVectors(t,r);let g=Os.dot(Fo),v=zs.dot(Fo);if(v>=0&&g<=v)return e.copy(r);let w=g*h-c*v;if(w<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(n).addScaledVector(zs,o);let _=u*v-g*d;if(_<=0&&d-u>=0&&g-v>=0)return Ih.subVectors(r,s),o=(d-u)/(d-u+(g-v)),e.copy(s).addScaledVector(Ih,o);let f=1/(_+w+p);return a=w*f,o=p*f,e.copy(n).addScaledVector(Os,a).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=fd(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ko(a,r,t+1/3),this.g=ko(a,r,t),this.b=ko(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ve.fromWorkingColorSpace(mn.copy(this),t),Math.round(En(mn.r*255,0,255))*65536+Math.round(En(mn.g*255,0,255))*256+Math.round(En(mn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=on){ve.fromWorkingColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(pa);let n=So(Vi.h,pa.h,e),s=So(Vi.s,pa.s,e),r=So(Vi.l,pa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new te;te.NAMES=Pu;var Td=0,Li=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Yi(),this.name="",this.blending=$s,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new N,ma=new qt,Tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}};var Ha=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=0,Hn=new Be,Vo=new hn,Bs=new N,Vn=new Pi,wr=new Pi,rn=new N,Je=class i extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?Ga:Ha)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Vn.min,wr.min),Vn.expandByPoint(rn),rn.addVectors(Vn.max,wr.max),Vn.expandByPoint(rn)):(Vn.expandByPoint(wr.min),Vn.expandByPoint(wr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)rn.fromBufferAttribute(o,h),c&&(Bs.fromBufferAttribute(t,h),rn.add(Bs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new N,c[O]=new N;let h=new N,u=new N,d=new N,p=new qt,g=new qt,v=new qt,w=new N,_=new N;function f(O,T,S){h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,T),v.fromBufferAttribute(r,S),u.sub(h),d.sub(h),g.sub(p),v.sub(p);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(w.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(F),_.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(F),o[O].add(w),o[T].add(w),o[S].add(w),c[O].add(_),c[T].add(_),c[S].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,T=R.length;O<T;++O){let S=R[O],F=S.start,Z=S.count;for(let J=F,tt=F+Z;J<tt;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let A=new N,E=new N,k=new N,L=new N;function U(O){k.fromBufferAttribute(s,O),L.copy(k);let T=o[O];A.copy(T),A.sub(k.multiplyScalar(k.dot(T))).normalize(),E.crossVectors(L,T);let F=E.dot(c[O])<0?-1:1;a.setXYZW(O,A.x,A.y,A.z,F)}for(let O=0,T=R.length;O<T;++O){let S=R[O],F=S.start,Z=S.count;for(let J=F,tt=F+Z;J<tt;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,d=new N;if(t)for(let p=0,g=t.count;p<g;p+=3){let v=t.getX(p+0),w=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,_),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,_),o.add(u),c.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,d=o.normalized,p=new h.constructor(c.length*u),g=0,v=0;for(let w=0,_=c.length;w<_;w++){o.isInterleavedBufferAttribute?g=c[w]*o.data.stride+o.offset:g=c[w]*u;for(let f=0;f<u;f++)p[v++]=h[g++]}return new Tn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){let p=h[u],g=t(p,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let d=0,p=h.length;d<p;d++){let g=h[d];u.push(g.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],d=r[h];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new Be,os=new Ur,ga=new sr,Lh=new N,_a=new N,xa=new N,ya=new N,Ho=new N,va=new N,Dh=new N,Ma=new N,wt=class extends hn{constructor(t=new Je,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],d=r[c];u!==0&&(Ho.fromBufferAttribute(d,t),a?va.addScaledVector(Ho,u):va.addScaledVector(Ho.sub(e),u))}e.add(va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(ga.containsPoint(os.origin)===!1&&(os.intersectSphere(ga,Lh)===null||os.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ph.copy(r).invert(),os.copy(t.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=p.length;v<w;v++){let _=p[v],f=a[_.materialIndex],R=Math.max(_.start,g.start),A=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let E=R,k=A;E<k;E+=3){let L=o.getX(E),U=o.getX(E+1),O=o.getX(E+2);s=ba(this,f,t,n,h,u,d,L,U,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),w=Math.min(o.count,g.start+g.count);for(let _=v,f=w;_<f;_+=3){let R=o.getX(_),A=o.getX(_+1),E=o.getX(_+2);s=ba(this,a,t,n,h,u,d,R,A,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,w=p.length;v<w;v++){let _=p[v],f=a[_.materialIndex],R=Math.max(_.start,g.start),A=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let E=R,k=A;E<k;E+=3){let L=E,U=E+1,O=E+2;s=ba(this,f,t,n,h,u,d,L,U,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let _=v,f=w;_<f;_+=3){let R=_,A=_+1,E=_+2;s=ba(this,a,t,n,h,u,d,R,A,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Rd(i,t,e,n,s,r,a,o){let c;if(t.side===gn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ma);return h<e.near||h>e.far?null:{distance:h,point:Ma.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,_a),i.getVertexPosition(c,xa),i.getVertexPosition(h,ya);let u=Rd(i,t,e,n,_a,xa,ya,Dh);if(u){let d=new N;Wi.getBarycoord(Dh,_a,xa,ya,d),s&&(u.uv=Wi.getInterpolatedAttribute(s,o,c,h,d,new qt)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,o,c,h,d,new qt)),a&&(u.normal=Wi.getInterpolatedAttribute(a,o,c,h,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:h,normal:new N,materialIndex:0};Wi.getNormal(_a,xa,ya,p.normal),u.face=p,u.barycoord=d}return u}var $e=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],d=[],p=0,g=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(d,2));function v(w,_,f,R,A,E,k,L,U,O,T){let S=E/U,F=k/O,Z=E/2,J=k/2,tt=L/2,nt=U+1,j=O+1,ht=0,et=0,Mt=new N;for(let Tt=0;Tt<j;Tt++){let zt=Tt*F-J;for(let $t=0;$t<nt;$t++){let ne=$t*S-Z;Mt[w]=ne*R,Mt[_]=zt*A,Mt[f]=tt,h.push(Mt.x,Mt.y,Mt.z),Mt[w]=0,Mt[_]=0,Mt[f]=L>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),d.push($t/U),d.push(1-Tt/O),ht+=1}}for(let Tt=0;Tt<O;Tt++)for(let zt=0;zt<U;zt++){let $t=p+zt+nt*Tt,ne=p+zt+nt*(Tt+1),st=p+(zt+1)+nt*(Tt+1),ft=p+(zt+1)+nt*Tt;c.push($t,ne,ft),c.push(ne,st,ft),et+=6}o.addGroup(g,et,T),g+=et,p+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=rr(i[e]);for(let s in n)t[s]=n[s]}return t}function Cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Id={clone:rr,merge:wn},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wa=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new N,Uh=new qt,Nh=new qt,ln=class extends Wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Nh),e.subVectors(Nh,Uh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ks=-90,Vs=1,Gl=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(ks,Vs,t,e);s.layers=this.layers,this.add(s);let r=new ln(ks,Vs,t,e);r.layers=this.layers,this.add(r);let a=new ln(ks,Vs,t,e);a.layers=this.layers,this.add(a);let o=new ln(ks,Vs,t,e);o.layers=this.layers,this.add(o);let c=new ln(ks,Vs,t,e);c.layers=this.layers,this.add(c);let h=new ln(ks,Vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Xa=class extends Pn{constructor(t,e,n,s,r,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wl=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Xi});r.uniforms.tEquirect.value=e;let a=new wt(s,r),o=e.minFilter;return e.minFilter===ms&&(e.minFilter=oi),new Gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Go=new N,Dd=new N,Ud=new se,Jn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Go.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new sr,Sa=new N,Fr=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],v=s[9],w=s[10],_=s[11],f=s[12],R=s[13],A=s[14],E=s[15];if(n[0].setComponents(c-r,p-h,_-g,E-f).normalize(),n[1].setComponents(c+r,p+h,_+g,E+f).normalize(),n[2].setComponents(c+a,p+u,_+v,E+R).normalize(),n[3].setComponents(c-a,p-u,_-v,E-R).normalize(),n[4].setComponents(c-o,p-d,_-w,E-A).normalize(),e===Ri)n[5].setComponents(c+o,p+d,_+w,E+A).normalize();else if(e===Ba)n[5].setComponents(o,d,w,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Du(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,d=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),o.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){let u=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,u);else{d.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<d.length;g++){let v=d[p],w=d[g];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++p,d[p]=w)}d.length=p+1;for(let g=0,v=d.length;g<v;g++){let w=d[g];i.bufferSubData(h,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Ze=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,d=t/o,p=e/c,g=[],v=[],w=[],_=[];for(let f=0;f<u;f++){let R=f*p-a;for(let A=0;A<h;A++){let E=A*d-r;v.push(E,-R,0),w.push(0,0,1),_.push(A/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let R=0;R<o;R++){let A=R+h*f,E=R+h*(f+1),k=R+1+h*(f+1),L=R+1+h*f;g.push(A,E,L),g.push(E,k,L)}this.setIndex(g),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(w,3)),this.setAttribute("uv",new Me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Up=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,e0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,s0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,o0=`#define TOON
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
}`,l0=`#define TOON
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
}`,c0=`uniform float size;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,p0=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Fd,alphahash_pars_fragment:Od,alphamap_fragment:zd,alphamap_pars_fragment:Bd,alphatest_fragment:kd,alphatest_pars_fragment:Vd,aomap_fragment:Hd,aomap_pars_fragment:Gd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:$d,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:dp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Rp,envmap_vertex:xp,fog_vertex:yp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:bp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Cp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:Fp,lights_fragment_end:Op,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Vp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:$p,morphcolor_vertex:Zp,morphnormal_vertex:Jp,morphtarget_pars_vertex:Kp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:xm,shadowmap_vertex:ym,shadowmask_pars_fragment:vm,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Im,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Nm,background_frag:Fm,backgroundCube_vert:Om,backgroundCube_frag:zm,cube_vert:Bm,cube_frag:km,depth_vert:Vm,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:$m,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:Km,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:s0,meshphysical_vert:r0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:l0,points_vert:c0,points_frag:h0,shadow_vert:u0,shadow_frag:f0,sprite_vert:d0,sprite_frag:p0},xt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ri={basic:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new te(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:wn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:wn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new te(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:wn([xt.points,xt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:wn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:wn([xt.common,xt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:wn([xt.sprite,xt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:wn([xt.common,xt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:wn([xt.lights,xt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ri.physical={uniforms:wn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var wa={r:0,b:0,g:0},cs=new li,m0=new Be;function g0(i,t,e,n,s,r,a){let o=new te(0),c=r===!0?0:1,h,u,d=null,p=0,g=null;function v(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function w(R){let A=!1,E=v(R);E===null?f(o,c):E&&E.isColor&&(f(E,1),A=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,A){let E=v(A);E&&(E.isCubeTexture||E.mapping===io)?(u===void 0&&(u=new wt(new $e(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:rr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cs.copy(A.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(cs)),u.material.toneMapped=ve.getTransfer(E.colorSpace)!==Pe,(d!==E||p!==E.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,p=E.version,g=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new wt(new Ze(2,2),new ci({name:"BackgroundMaterial",uniforms:rr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=ve.getTransfer(E.colorSpace)!==Pe,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,p=E.version,g=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function f(R,A){R.getRGB(wa,Lu(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),c=A,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,f(o,c)},render:w,addToRenderList:_}}function _0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(S,F,Z,J,tt){let nt=!1,j=d(J,Z,F);r!==j&&(r=j,h(r.object)),nt=g(S,J,Z,tt),nt&&v(S,J,Z,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,E(S,F,Z,J),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,F,Z){let J=Z.wireframe===!0,tt=n[S.id];tt===void 0&&(tt={},n[S.id]=tt);let nt=tt[F.id];nt===void 0&&(nt={},tt[F.id]=nt);let j=nt[J];return j===void 0&&(j=p(c()),nt[J]=j),j}function p(S){let F=[],Z=[],J=[];for(let tt=0;tt<e;tt++)F[tt]=0,Z[tt]=0,J[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:J,object:S,attributes:{},index:null}}function g(S,F,Z,J){let tt=r.attributes,nt=F.attributes,j=0,ht=Z.getAttributes();for(let et in ht)if(ht[et].location>=0){let Tt=tt[et],zt=nt[et];if(zt===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(zt=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(zt=S.instanceColor)),Tt===void 0||Tt.attribute!==zt||zt&&Tt.data!==zt.data)return!0;j++}return r.attributesNum!==j||r.index!==J}function v(S,F,Z,J){let tt={},nt=F.attributes,j=0,ht=Z.getAttributes();for(let et in ht)if(ht[et].location>=0){let Tt=nt[et];Tt===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor));let zt={};zt.attribute=Tt,Tt&&Tt.data&&(zt.data=Tt.data),tt[et]=zt,j++}r.attributes=tt,r.attributesNum=j,r.index=J}function w(){let S=r.newAttributes;for(let F=0,Z=S.length;F<Z;F++)S[F]=0}function _(S){f(S,0)}function f(S,F){let Z=r.newAttributes,J=r.enabledAttributes,tt=r.attributeDivisors;Z[S]=1,J[S]===0&&(i.enableVertexAttribArray(S),J[S]=1),tt[S]!==F&&(i.vertexAttribDivisor(S,F),tt[S]=F)}function R(){let S=r.newAttributes,F=r.enabledAttributes;for(let Z=0,J=F.length;Z<J;Z++)F[Z]!==S[Z]&&(i.disableVertexAttribArray(Z),F[Z]=0)}function A(S,F,Z,J,tt,nt,j){j===!0?i.vertexAttribIPointer(S,F,Z,tt,nt):i.vertexAttribPointer(S,F,Z,J,tt,nt)}function E(S,F,Z,J){w();let tt=J.attributes,nt=Z.getAttributes(),j=F.defaultAttributeValues;for(let ht in nt){let et=nt[ht];if(et.location>=0){let Mt=tt[ht];if(Mt===void 0&&(ht==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),ht==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),Mt!==void 0){let Tt=Mt.normalized,zt=Mt.itemSize,$t=t.get(Mt);if($t===void 0)continue;let ne=$t.buffer,st=$t.type,ft=$t.bytesPerElement,It=st===i.INT||st===i.UNSIGNED_INT||Mt.gpuType===xc;if(Mt.isInterleavedBufferAttribute){let gt=Mt.data,Gt=gt.stride,Jt=Mt.offset;if(gt.isInstancedInterleavedBuffer){for(let re=0;re<et.locationSize;re++)f(et.location+re,gt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let re=0;re<et.locationSize;re++)_(et.location+re);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let re=0;re<et.locationSize;re++)A(et.location+re,zt/et.locationSize,st,Tt,Gt*ft,(Jt+zt/et.locationSize*re)*ft,It)}else{if(Mt.isInstancedBufferAttribute){for(let gt=0;gt<et.locationSize;gt++)f(et.location+gt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let gt=0;gt<et.locationSize;gt++)_(et.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let gt=0;gt<et.locationSize;gt++)A(et.location+gt,zt/et.locationSize,st,Tt,zt*ft,zt/et.locationSize*gt*ft,It)}}else if(j!==void 0){let Tt=j[ht];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(et.location,Tt);break;case 3:i.vertexAttrib3fv(et.location,Tt);break;case 4:i.vertexAttrib4fv(et.location,Tt);break;default:i.vertexAttrib1fv(et.location,Tt)}}}}R()}function k(){O();for(let S in n){let F=n[S];for(let Z in F){let J=F[Z];for(let tt in J)u(J[tt].object),delete J[tt];delete F[Z]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;let F=n[S.id];for(let Z in F){let J=F[Z];for(let tt in J)u(J[tt].object),delete J[tt];delete F[Z]}delete n[S.id]}function U(S){for(let F in n){let Z=n[F];if(Z[S.id]===void 0)continue;let J=Z[S.id];for(let tt in J)u(J[tt].object),delete J[tt];delete Z[S.id]}}function O(){T(),a=!0,r!==s&&(r=s,h(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:T,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:_,disableUnusedAttributes:R}}function x0(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function o(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,n,1)}function c(h,u,d,p){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h.length;v++)a(h[v],u[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,d);let v=0;for(let w=0;w<d;w++)v+=u[w]*p[w];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==Kn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let O=U===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Ii&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ai&&!O)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:k,maxSamples:L}}function v0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Jn,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||s;return s=p,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,g){let v=d.clippingPlanes,w=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||v===null||v.length===0||r&&!_)r?u(null):h();else{let R=r?0:n,A=R*4,E=f.clippingState||null;c.value=E,E=u(v,p,A,g);for(let k=0;k!==A;++k)E[k]=e[k];f.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,g,v){let w=d!==null?d.length:0,_=null;if(w!==0){if(_=c.value,v!==!0||_===null){let f=g+w*4,R=p.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<f)&&(_=new Float32Array(f));for(let A=0,E=g;A!==w;++A,E+=4)a.copy(d[A]).applyMatrix4(R,o),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,_}}function M0(i){let t=new WeakMap;function e(a,o){return o===ll?a.mapping=Qs:o===cl&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ll||o===cl)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Wl(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var qa=class extends Wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ys=4,Fh=[.125,.215,.35,.446,.526,.582],ds=20,Wo=new qa,Oh=new te,Xo=null,qo=0,Yo=0,$o=!1,us=(1+Math.sqrt(5))/2,Hs=1/us,zh=[new N(-us,Hs,0),new N(us,Hs,0),new N(-Hs,0,us),new N(Hs,0,us),new N(0,us,-Hs),new N(0,us,Hs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=$o,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Wr,format:Kn,colorSpace:ur,depthBuffer:!1},s=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(r)),this._blurMaterial=S0(r,t,e)}return s}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s){let o=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Oh),u.toneMapping=qi,u.autoClear=!1;let g=new qe({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new wt(new $e,g),w=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,w=!0):(g.color.copy(Oh),w=!0);for(let f=0;f<6;f++){let R=f%3;R===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):R===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));let A=this._cubeSize;Ea(s,R*A,f>2?A:0,A,A),u.setRenderTarget(s),w&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new wt(this._lodPlanes[s],h),p=h.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ds-1),w=r/v,_=isFinite(r)?1+Math.floor(u*w):ds;_>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ds}`);let f=[],R=0;for(let U=0;U<ds;++U){let O=U/w,T=Math.exp(-O*O/2);f.push(T),U===0?R+=T:U<_&&(R+=2*T)}for(let U=0;U<f.length;U++)f[U]=f[U]/R;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:A}=this;p.dTheta.value=v,p.mipInt.value=A-n;let E=this._sizeLods[s],k=3*E*(s>A-Ys?s-A+Ys:0),L=4*(this._cubeSize-E);Ea(e,k,L,3*E,2*E),c.setRenderTarget(e),c.render(d,Wo)}};function b0(i){let t=[],e=[],n=[],s=i,r=i-Ys+1+Fh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ys?c=Fh[a-i+Ys-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,v=6,w=3,_=2,f=1,R=new Float32Array(w*v*g),A=new Float32Array(_*v*g),E=new Float32Array(f*v*g);for(let L=0;L<g;L++){let U=L%3*2/3-1,O=L>2?0:-1,T=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];R.set(T,w*v*L),A.set(p,_*v*L);let S=[L,L,L,L,L,L];E.set(S,f*v*L)}let k=new Je;k.setAttribute("position",new Tn(R,w)),k.setAttribute("uv",new Tn(A,_)),k.setAttribute("faceIndex",new Tn(E,f)),t.push(k),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(i,t,e){let n=new Qn(i,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function S0(i,t,e){let n=new Float32Array(ds),s=new N(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function kh(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Vh(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function w0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===ll||c===cl,u=c===Qs||c===tr;if(h||u){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Ya(i)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let g=o.image;return h&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new Ya(i)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function E0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T0(i,t,e,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let w=p.morphAttributes[v];for(let _=0,f=w.length;_<f;_++)t.remove(w[_])}p.removeEventListener("dispose",a),delete s[p.id];let g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){let p=d.attributes;for(let v in p)t.update(p[v],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let v in g){let w=g[v];for(let _=0,f=w.length;_<f;_++)t.update(w[_],i.ARRAY_BUFFER)}}function h(d){let p=[],g=d.index,v=d.attributes.position,w=0;if(g!==null){let R=g.array;w=g.version;for(let A=0,E=R.length;A<E;A+=3){let k=R[A+0],L=R[A+1],U=R[A+2];p.push(k,L,L,U,U,k)}}else if(v!==void 0){let R=v.array;w=v.version;for(let A=0,E=R.length/3-1;A<E;A+=3){let k=A+0,L=A+1,U=A+2;p.push(k,L,L,U,U,k)}}else return;let _=new(Iu(p)?Ga:Ha)(p,1);_.version=w;let f=r.get(d);f&&t.remove(f),r.set(d,_)}function u(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function A0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,g){i.drawElements(n,g,r,p*a),e.update(g,n,1)}function h(p,g,v){v!==0&&(i.drawElementsInstanced(n,g,r,p*a,v),e.update(g,n,v))}function u(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,v);let _=0;for(let f=0;f<v;f++)_+=g[f];e.update(_,n,1)}function d(p,g,v,w){if(v===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)h(p[f]/a,g[f],w[f]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,w,0,v);let f=0;for(let R=0;R<v;R++)f+=g[R]*w[R];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function R0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,t,e){let n=new WeakMap,s=new De;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let T=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],A=0;g===!0&&(A=1),v===!0&&(A=2),w===!0&&(A=3);let E=o.attributes.position.count*A,k=1;E>t.maxTextureSize&&(k=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let L=new Float32Array(E*k*4*d),U=new Va(L,E,k,d);U.type=Ai,U.needsUpdate=!0;let O=A*4;for(let S=0;S<d;S++){let F=_[S],Z=f[S],J=R[S],tt=E*k*4*S;for(let nt=0;nt<F.count;nt++){let j=nt*O;g===!0&&(s.fromBufferAttribute(F,nt),L[tt+j+0]=s.x,L[tt+j+1]=s.y,L[tt+j+2]=s.z,L[tt+j+3]=0),v===!0&&(s.fromBufferAttribute(Z,nt),L[tt+j+4]=s.x,L[tt+j+5]=s.y,L[tt+j+6]=s.z,L[tt+j+7]=0),w===!0&&(s.fromBufferAttribute(J,nt),L[tt+j+8]=s.x,L[tt+j+9]=s.y,L[tt+j+10]=s.z,L[tt+j+11]=J.itemSize===4?s.w:1)}}p={count:d,texture:U,size:new qt(E,k)},n.set(o,p),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let w=0;w<h.length;w++)g+=h[w];let v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function I0(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var $a=class extends Pn{constructor(t,e,n,s,r,a,o,c,h,u=Zs){if(u!==Zs&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zs&&(n=_s),n===void 0&&u===ir&&(n=nr),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:jn,this.minFilter=c!==void 0?c:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uu=new Pn,Hh=new $a(1,1),Nu=new Va,Fu=new Hl,Ou=new Xa,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),en(e,n)}}function F0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),en(e,n)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),en(e,n)}}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=Cu,r=Hh):r=Uu,e.setTexture2D(t||r,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fu,s)}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function J0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return V0;case 5125:return H0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}function K0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){let e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function Q0(i,t){let e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){let e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){let e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){let e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){let e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function ag(i,t){i.uniform3iv(this.addr,t)}function og(i,t){i.uniform4iv(this.addr,t)}function lg(i,t){i.uniform1uiv(this.addr,t)}function cg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function fg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uu,r[a])}function dg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fu,r[a])}function pg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ou,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nu,r[a])}function gg(i){switch(i){case 5126:return K0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}},Yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function _g(i,t,e){let n=i.name,s=n.length;for(Zo.lastIndex=0;;){let r=Zo.exec(n),a=Zo.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){$h(e,h===void 0?new Xl(o,i,t):new ql(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Yl(o),$h(e,d)),e=d}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);_g(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Zh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xg=37297,yg=0;function vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Jh=new se;function Mg(i){ve._getMatrix(Jh,ve.workingColorSpace,i);let t=`mat3( ${Jh.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case so:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(t),a)}else return s}function bg(i,t){let e=Mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(i,t){let e;switch(t){case $f:e="Linear";break;case Zf:e="Reinhard";break;case Jf:e="Cineon";break;case Kf:e="ACESFilmic";break;case Qf:e="AgX";break;case td:e="Neutral";break;case jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ta=new N;function wg(){ve.getLuminanceCoefficients(Ta);let i=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ir(i){return i!==""}function jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(Rg,Ig)}var Cg=new Map;function Ig(i,t){let e=oe[t];if(e===void 0){let n=Cg.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Pg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Af?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function Fg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:t="ENVMAP_BLENDING_MULTIPLY";break;case qf:t="ENVMAP_BLENDING_MIX";break;case Yf:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Dg(e),h=Ug(e),u=Ng(e),d=Fg(e),p=Og(e),g=Eg(e),v=Tg(r),w=s.createProgram(),_,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(_=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?oe.tonemapping_pars_fragment:"",e.toneMapping!==qi?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=$l(a),a=jh(a,e),a=Qh(a,e),o=$l(o),o=jh(o,e),o=Qh(o,e),a=tu(a),o=tu(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=R+_+a,E=R+f+o,k=Zh(s,s.VERTEX_SHADER,A),L=Zh(s,s.FRAGMENT_SHADER,E);s.attachShader(w,k),s.attachShader(w,L),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function U(F){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(w).trim(),J=s.getShaderInfoLog(k).trim(),tt=s.getShaderInfoLog(L).trim(),nt=!0,j=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,k,L);else{let ht=Kh(s,k,"vertex"),et=Kh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+ht+`
`+et)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(J===""||tt==="")&&(j=!1);j&&(F.diagnostics={runnable:nt,programLog:Z,vertexShader:{log:J,prefix:_},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(k),s.deleteShader(L),O=new Ks(s,w),T=Ag(s,w)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(w,xg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=L,this}var Bg=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jl(t),e.set(t,n)),n}},Jl=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function kg(i,t,e,n,s,r,a){let o=new Nr,c=new Zl,h=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return h.add(T),T===0?"uv":`uv${T}`}function _(T,S,F,Z,J){let tt=Z.fog,nt=J.geometry,j=T.isMeshStandardMaterial?Z.environment:null,ht=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),et=ht&&ht.mapping===io?ht.image.height:null,Mt=v[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));let Tt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,zt=Tt!==void 0?Tt.length:0,$t=0;nt.morphAttributes.position!==void 0&&($t=1),nt.morphAttributes.normal!==void 0&&($t=2),nt.morphAttributes.color!==void 0&&($t=3);let ne,st,ft,It;if(Mt){let ge=ri[Mt];ne=ge.vertexShader,st=ge.fragmentShader}else ne=T.vertexShader,st=T.fragmentShader,c.update(T),ft=c.getVertexShaderID(T),It=c.getFragmentShaderID(T);let gt=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),Jt=J.isInstancedMesh===!0,re=J.isBatchedMesh===!0,we=!!T.map,de=!!T.matcap,ke=!!ht,V=!!T.aoMap,yn=!!T.lightMap,le=!!T.bumpMap,ce=!!T.normalMap,kt=!!T.displacementMap,me=!!T.emissiveMap,Ut=!!T.metalnessMap,I=!!T.roughnessMap,M=T.anisotropy>0,X=T.clearcoat>0,at=T.dispersion>0,lt=T.iridescence>0,it=T.sheen>0,Nt=T.transmission>0,_t=M&&!!T.anisotropyMap,dt=X&&!!T.clearcoatMap,he=X&&!!T.clearcoatNormalMap,ct=X&&!!T.clearcoatRoughnessMap,At=lt&&!!T.iridescenceMap,Vt=lt&&!!T.iridescenceThicknessMap,Bt=it&&!!T.sheenColorMap,Et=it&&!!T.sheenRoughnessMap,ue=!!T.specularMap,Qt=!!T.specularColorMap,xe=!!T.specularIntensityMap,z=Nt&&!!T.transmissionMap,mt=Nt&&!!T.thicknessMap,Q=!!T.gradientMap,rt=!!T.alphaMap,St=T.alphaTest>0,yt=!!T.alphaHash,Yt=!!T.extensions,Ne=qi;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Ke={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:st,defines:T.defines,customVertexShaderID:ft,customFragmentShaderID:It,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:re,batchingColor:re&&J._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&J.instanceColor!==null,instancingMorph:Jt&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ur,alphaToCoverage:!!T.alphaToCoverage,map:we,matcap:de,envMap:ke,envMapMode:ke&&ht.mapping,envMapCubeUVHeight:et,aoMap:V,lightMap:yn,bumpMap:le,normalMap:ce,displacementMap:p&&kt,emissiveMap:me,normalMapObjectSpace:ce&&T.normalMapType===sd,normalMapTangentSpace:ce&&T.normalMapType===Ru,metalnessMap:Ut,roughnessMap:I,anisotropy:M,anisotropyMap:_t,clearcoat:X,clearcoatMap:dt,clearcoatNormalMap:he,clearcoatRoughnessMap:ct,dispersion:at,iridescence:lt,iridescenceMap:At,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:ue,specularColorMap:Qt,specularIntensityMap:xe,transmission:Nt,transmissionMap:z,thicknessMap:mt,gradientMap:Q,opaque:T.transparent===!1&&T.blending===$s&&T.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:yt,combine:T.combine,mapUv:we&&w(T.map.channel),aoMapUv:V&&w(T.aoMap.channel),lightMapUv:yn&&w(T.lightMap.channel),bumpMapUv:le&&w(T.bumpMap.channel),normalMapUv:ce&&w(T.normalMap.channel),displacementMapUv:kt&&w(T.displacementMap.channel),emissiveMapUv:me&&w(T.emissiveMap.channel),metalnessMapUv:Ut&&w(T.metalnessMap.channel),roughnessMapUv:I&&w(T.roughnessMap.channel),anisotropyMapUv:_t&&w(T.anisotropyMap.channel),clearcoatMapUv:dt&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&w(T.sheenRoughnessMap.channel),specularMapUv:ue&&w(T.specularMap.channel),specularColorMapUv:Qt&&w(T.specularColorMap.channel),specularIntensityMapUv:xe&&w(T.specularIntensityMap.channel),transmissionMapUv:z&&w(T.transmissionMap.channel),thicknessMapUv:mt&&w(T.thicknessMap.channel),alphaMapUv:rt&&w(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ce||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!nt.attributes.uv&&(we||rt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Gt,skinning:J.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:we&&T.map.isVideoTexture===!0&&ve.getTransfer(T.map.colorSpace)===Pe,decodeVideoTextureEmissive:me&&T.emissiveMap.isVideoTexture===!0&&ve.getTransfer(T.emissiveMap.colorSpace)===Pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function f(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let F in T.defines)S.push(F),S.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(R(S,T),A(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function R(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function A(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function E(T){let S=v[T.type],F;if(S){let Z=ri[S];F=Id.clone(Z.uniforms)}else F=T.uniforms;return F}function k(T,S){let F;for(let Z=0,J=u.length;Z<J;Z++){let tt=u[Z];if(tt.cacheKey===S){F=tt,++F.usedTimes;break}}return F===void 0&&(F=new zg(i,S,T,r),u.push(F)),F}function L(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function U(T){c.remove(T)}function O(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:E,acquireProgram:k,releaseProgram:L,releaseShaderCache:U,programs:u,dispose:O}}function Vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function iu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,g,v,w,_){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:v,renderOrder:d.renderOrder,z:w,group:_},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=w,f.group=_),t++,f}function o(d,p,g,v,w,_){let f=a(d,p,g,v,w,_);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function c(d,p,g,v,w,_){let f=a(d,p,g,v,w,_);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,p){e.length>1&&e.sort(d||Hg),n.length>1&&n.sort(p||nu),s.length>1&&s.sort(p||nu)}function u(){for(let d=t,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new iu,i.set(n,[a])):s>=r.length?(a=new iu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new te};break;case"SpotLight":e={position:new N,direction:new N,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $g(i){let t=new Wg,e=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);let s=new N,r=new Be,a=new Be;function o(h){let u=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,v=0,w=0,_=0,f=0,R=0,A=0,E=0,k=0,L=0,U=0;h.sort(Yg);for(let T=0,S=h.length;T<S;T++){let F=h[T],Z=F.color,J=F.intensity,tt=F.distance,nt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Z.r*J,d+=Z.g*J,p+=Z.b*J;else if(F.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(F.sh.coefficients[j],J);U++}else if(F.isDirectionalLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ht=F.shadow,et=e.get(F);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=F.shadow.matrix,R++}n.directional[g]=j,g++}else if(F.isSpotLight){let j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(Z).multiplyScalar(J),j.distance=tt,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,n.spot[w]=j;let ht=F.shadow;if(F.map&&(n.spotLightMap[k]=F.map,k++,ht.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[w]=ht.matrix,F.castShadow){let et=e.get(F);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,n.spotShadow[w]=et,n.spotShadowMap[w]=nt,E++}w++}else if(F.isRectAreaLight){let j=t.get(F);j.color.copy(Z).multiplyScalar(J),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=j,_++}else if(F.isPointLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let ht=F.shadow,et=e.get(F);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,et.shadowCameraNear=ht.camera.near,et.shadowCameraFar=ht.camera.far,n.pointShadow[v]=et,n.pointShadowMap[v]=nt,n.pointShadowMatrix[v]=F.shadow.matrix,A++}n.point[v]=j,v++}else if(F.isHemisphereLight){let j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(J),j.groundColor.copy(F.groundColor).multiplyScalar(J),n.hemi[f]=j,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let O=n.hash;(O.directionalLength!==g||O.pointLength!==v||O.spotLength!==w||O.rectAreaLength!==_||O.hemiLength!==f||O.numDirectionalShadows!==R||O.numPointShadows!==A||O.numSpotShadows!==E||O.numSpotMaps!==k||O.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=w,n.rectArea.length=_,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+k-L,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,O.directionalLength=g,O.pointLength=v,O.spotLength=w,O.rectAreaLength=_,O.hemiLength=f,O.numDirectionalShadows=R,O.numPointShadows=A,O.numSpotShadows=E,O.numSpotMaps=k,O.numLightProbes=U,n.version=qg++)}function c(h,u){let d=0,p=0,g=0,v=0,w=0,_=u.matrixWorldInverse;for(let f=0,R=h.length;f<R;f++){let A=h[f];if(A.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),d++}else if(A.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(A.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),p++}else if(A.isHemisphereLight){let E=n.hemi[w];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(_),w++}}}return{setup:o,setupView:c,state:n}}function su(i){let t=new $g(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Zg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new su(i),t.set(s,[o])):r>=a.length?(o=new su(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Kl=class extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new Fr,s=new qt,r=new qt,a=new De,o=new Kl({depthPacking:id}),c=new jl,h={},u=e.maxTextureSize,d={[$i]:gn,[gn]:$i,[cn]:cn},p=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Jg,fragmentShader:Kg}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let v=new Je;v.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new wt(v,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let f=this.type;this.render=function(L,U,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;let T=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Xi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=f!==Ti&&this.type===Ti,tt=f===Ti&&this.type!==Ti;for(let nt=0,j=L.length;nt<j;nt++){let ht=L[nt],et=ht.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let Mt=et.getFrameExtents();if(s.multiply(Mt),r.copy(et.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,et.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,et.mapSize.y=r.y)),et.map===null||J===!0||tt===!0){let zt=this.type!==Ti?{minFilter:jn,magFilter:jn}:{};et.map!==null&&et.map.dispose(),et.map=new Qn(s.x,s.y,zt),et.map.texture.name=ht.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();let Tt=et.getViewportCount();for(let zt=0;zt<Tt;zt++){let $t=et.getViewport(zt);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),Z.viewport(a),et.updateMatrices(ht,zt),n=et.getFrustum(),E(U,O,et.camera,ht,this.type)}et.isPointLightShadow!==!0&&this.type===Ti&&R(et,O),et.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,S,F)};function R(L,U){let O=t.update(w);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qn(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(U,null,O,p,w,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(U,null,O,g,w,null)}function A(L,U,O,T){let S=null,F=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)S=F;else if(S=O.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let Z=S.uuid,J=U.uuid,tt=h[Z];tt===void 0&&(tt={},h[Z]=tt);let nt=tt[J];nt===void 0&&(nt=S.clone(),tt[J]=nt,U.addEventListener("dispose",k)),S=nt}if(S.visible=U.visible,S.wireframe=U.wireframe,T===Ti?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:d[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Z=i.properties.get(S);Z.light=O}return S}function E(L,U,O,T,S){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ti)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);let J=t.update(L),tt=L.material;if(Array.isArray(tt)){let nt=J.groups;for(let j=0,ht=nt.length;j<ht;j++){let et=nt[j],Mt=tt[et.materialIndex];if(Mt&&Mt.visible){let Tt=A(L,Mt,T,S);L.onBeforeShadow(i,L,U,O,J,Tt,et),i.renderBufferDirect(O,null,J,Tt,L,et),L.onAfterShadow(i,L,U,O,J,Tt,et)}}}else if(tt.visible){let nt=A(L,tt,T,S);L.onBeforeShadow(i,L,U,O,J,nt,null),i.renderBufferDirect(O,null,J,nt,L,null),L.onAfterShadow(i,L,U,O,J,nt,null)}}let Z=L.children;for(let J=0,tt=Z.length;J<tt;J++)E(Z[J],U,O,T,S)}function k(L){L.target.removeEventListener("dispose",k);for(let O in h){let T=h[O],S=L.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var Qg={[el]:nl,[il]:al,[sl]:ol,[js]:rl,[nl]:el,[al]:il,[ol]:sl,[rl]:js};function t_(i,t){function e(){let z=!1,mt=new De,Q=null,rt=new De(0,0,0,0);return{setMask:function(St){Q!==St&&!z&&(i.colorMask(St,St,St,St),Q=St)},setLocked:function(St){z=St},setClear:function(St,yt,Yt,Ne,Ke){Ke===!0&&(St*=Ne,yt*=Ne,Yt*=Ne),mt.set(St,yt,Yt,Ne),rt.equals(mt)===!1&&(i.clearColor(St,yt,Yt,Ne),rt.copy(mt))},reset:function(){z=!1,Q=null,rt.set(-1,0,0,0)}}}function n(){let z=!1,mt=!1,Q=null,rt=null,St=null;return{setReversed:function(yt){if(mt!==yt){let Yt=t.get("EXT_clip_control");mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Ne=St;St=null,this.setClear(Ne)}mt=yt},getReversed:function(){return mt},setTest:function(yt){yt?gt(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(yt){Q!==yt&&!z&&(i.depthMask(yt),Q=yt)},setFunc:function(yt){if(mt&&(yt=Qg[yt]),rt!==yt){switch(yt){case el:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=yt}},setLocked:function(yt){z=yt},setClear:function(yt){St!==yt&&(mt&&(yt=1-yt),i.clearDepth(yt),St=yt)},reset:function(){z=!1,Q=null,rt=null,St=null,mt=!1}}}function s(){let z=!1,mt=null,Q=null,rt=null,St=null,yt=null,Yt=null,Ne=null,Ke=null;return{setTest:function(ge){z||(ge?gt(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(ge){mt!==ge&&!z&&(i.stencilMask(ge),mt=ge)},setFunc:function(ge,vn,an){(Q!==ge||rt!==vn||St!==an)&&(i.stencilFunc(ge,vn,an),Q=ge,rt=vn,St=an)},setOp:function(ge,vn,an){(yt!==ge||Yt!==vn||Ne!==an)&&(i.stencilOp(ge,vn,an),yt=ge,Yt=vn,Ne=an)},setLocked:function(ge){z=ge},setClear:function(ge){Ke!==ge&&(i.clearStencil(ge),Ke=ge)},reset:function(){z=!1,mt=null,Q=null,rt=null,St=null,yt=null,Yt=null,Ne=null,Ke=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},d={},p=new WeakMap,g=[],v=null,w=!1,_=null,f=null,R=null,A=null,E=null,k=null,L=null,U=new te(0,0,0),O=0,T=!1,S=null,F=null,Z=null,J=null,tt=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ht=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=ht>=1):et.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=ht>=2);let Mt=null,Tt={},zt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ne=new De().fromArray(zt),st=new De().fromArray($t);function ft(z,mt,Q,rt){let St=new Uint8Array(4),yt=i.createTexture();i.bindTexture(z,yt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Q;Yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return yt}let It={};It[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(js),le(!1),ce(lh),gt(i.CULL_FACE),V(Xi);function gt(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Gt(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Jt(z,mt){return d[z]!==mt?(i.bindFramebuffer(z,mt),d[z]=mt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function re(z,mt){let Q=g,rt=!1;if(z){Q=p.get(mt),Q===void 0&&(Q=[],p.set(mt,Q));let St=z.textures;if(Q.length!==St.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Yt=St.length;yt<Yt;yt++)Q[yt]=i.COLOR_ATTACHMENT0+yt;Q.length=St.length,rt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,rt=!0);rt&&i.drawBuffers(Q)}function we(z){return v!==z?(i.useProgram(z),v=z,!0):!1}let de={[fs]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};de[Pf]=i.MIN,de[Lf]=i.MAX;let ke={[Df]:i.ZERO,[Uf]:i.ONE,[Nf]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[kf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[Xf]:i.ONE_MINUS_CONSTANT_ALPHA};function V(z,mt,Q,rt,St,yt,Yt,Ne,Ke,ge){if(z===Xi){w===!0&&(Gt(i.BLEND),w=!1);return}if(w===!1&&(gt(i.BLEND),w=!0),z!==Rf){if(z!==_||ge!==T){if((f!==fs||E!==fs)&&(i.blendEquation(i.FUNC_ADD),f=fs,E=fs),ge)switch(z){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}R=null,A=null,k=null,L=null,U.set(0,0,0),O=0,_=z,T=ge}return}St=St||mt,yt=yt||Q,Yt=Yt||rt,(mt!==f||St!==E)&&(i.blendEquationSeparate(de[mt],de[St]),f=mt,E=St),(Q!==R||rt!==A||yt!==k||Yt!==L)&&(i.blendFuncSeparate(ke[Q],ke[rt],ke[yt],ke[Yt]),R=Q,A=rt,k=yt,L=Yt),(Ne.equals(U)===!1||Ke!==O)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Ke),U.copy(Ne),O=Ke),_=z,T=!1}function yn(z,mt){z.side===cn?Gt(i.CULL_FACE):gt(i.CULL_FACE);let Q=z.side===gn;mt&&(Q=!Q),le(Q),z.blending===$s&&z.transparent===!1?V(Xi):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let rt=z.stencilWrite;o.setTest(rt),rt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),me(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function ce(z){z!==Ef?(gt(i.CULL_FACE),z!==F&&(z===lh?i.cullFace(i.BACK):z===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),F=z}function kt(z){z!==Z&&(j&&i.lineWidth(z),Z=z)}function me(z,mt,Q){z?(gt(i.POLYGON_OFFSET_FILL),(J!==mt||tt!==Q)&&(i.polygonOffset(mt,Q),J=mt,tt=Q)):Gt(i.POLYGON_OFFSET_FILL)}function Ut(z){z?gt(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function I(z){z===void 0&&(z=i.TEXTURE0+nt-1),Mt!==z&&(i.activeTexture(z),Mt=z)}function M(z,mt,Q){Q===void 0&&(Mt===null?Q=i.TEXTURE0+nt-1:Q=Mt);let rt=Tt[Q];rt===void 0&&(rt={type:void 0,texture:void 0},Tt[Q]=rt),(rt.type!==z||rt.texture!==mt)&&(Mt!==Q&&(i.activeTexture(Q),Mt=Q),i.bindTexture(z,mt||It[z]),rt.type=z,rt.texture=mt)}function X(){let z=Tt[Mt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(z){ne.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ne.copy(z))}function Et(z){st.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),st.copy(z))}function ue(z,mt){let Q=h.get(mt);Q===void 0&&(Q=new WeakMap,h.set(mt,Q));let rt=Q.get(z);rt===void 0&&(rt=i.getUniformBlockIndex(mt,z.name),Q.set(z,rt))}function Qt(z,mt){let rt=h.get(mt).get(z);c.get(mt)!==rt&&(i.uniformBlockBinding(mt,rt,z.__bindingPointIndex),c.set(mt,rt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Mt=null,Tt={},d={},p=new WeakMap,g=[],v=null,w=!1,_=null,f=null,R=null,A=null,E=null,k=null,L=null,U=new te(0,0,0),O=0,T=!1,S=null,F=null,Z=null,J=null,tt=null,ne.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Gt,bindFramebuffer:Jt,drawBuffers:re,useProgram:we,setBlending:V,setMaterial:yn,setFlipSided:le,setCullFace:ce,setLineWidth:kt,setPolygonOffset:me,setScissorTest:Ut,activeTexture:I,bindTexture:M,unbindTexture:X,compressedTexImage2D:at,compressedTexImage3D:lt,texImage2D:At,texImage3D:Vt,updateUBOMapping:ue,uniformBlockBinding:Qt,texStorage2D:he,texStorage3D:ct,texSubImage2D:it,texSubImage3D:Nt,compressedTexSubImage2D:_t,compressedTexSubImage3D:dt,scissor:Bt,viewport:Et,reset:xe}}function ru(i,t,e,n){let s=e_(n);switch(e){case Mu:return i*t;case Su:return i*t;case wu:return i*t*2;case Eu:return i*t/s.components*s.byteLength;case Mc:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(i,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(i,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Au:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nl:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(i){switch(i){case Ii:case xu:return{byteLength:1,components:1};case Lr:case yu:case Wr:return{byteLength:2,components:1};case yc:case vc:return{byteLength:2,components:4};case _s:case xc:case Ai:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,u=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,M){return g?new OffscreenCanvas(I,M):Dr("canvas")}function w(I,M,X){let at=1,lt=Ut(I);if((lt.width>X||lt.height>X)&&(at=X/Math.max(lt.width,lt.height)),at<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let it=Math.floor(at*lt.width),Nt=Math.floor(at*lt.height);d===void 0&&(d=v(it,Nt));let _t=M?v(it,Nt):d;return _t.width=it,_t.height=Nt,_t.getContext("2d").drawImage(I,0,0,it,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Nt+")."),_t}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function _(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(I,M,X,at,lt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=M;if(M===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),M===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),M===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),M===i.RGBA){let Nt=lt?so:ve.getTransfer(at);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=Nt===Pe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function E(I,M){let X;return I?M===null||M===_s||M===nr?X=i.DEPTH24_STENCIL8:M===Ai?X=i.DEPTH32F_STENCIL8:M===Lr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_s||M===nr?X=i.DEPTH_COMPONENT24:M===Ai?X=i.DEPTH_COMPONENT32F:M===Lr&&(X=i.DEPTH_COMPONENT16),X}function k(I,M){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==jn&&I.minFilter!==oi?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function L(I){let M=I.target;M.removeEventListener("dispose",L),O(M),M.isVideoTexture&&u.delete(M)}function U(I){let M=I.target;M.removeEventListener("dispose",U),S(M)}function O(I){let M=n.get(I);if(M.__webglInit===void 0)return;let X=I.source,at=p.get(X);if(at){let lt=at[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&T(I),Object.keys(at).length===0&&p.delete(X)}n.remove(I)}function T(I){let M=n.get(I);i.deleteTexture(M.__webglTexture);let X=I.source,at=p.get(X);delete at[M.__cacheKey],a.memory.textures--}function S(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(M.__webglFramebuffer[at]))for(let lt=0;lt<M.__webglFramebuffer[at].length;lt++)i.deleteFramebuffer(M.__webglFramebuffer[at][lt]);else i.deleteFramebuffer(M.__webglFramebuffer[at]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[at])}else{if(Array.isArray(M.__webglFramebuffer))for(let at=0;at<M.__webglFramebuffer.length;at++)i.deleteFramebuffer(M.__webglFramebuffer[at]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let at=0;at<M.__webglColorRenderbuffer.length;at++)M.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[at]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=I.textures;for(let at=0,lt=X.length;at<lt;at++){let it=n.get(X[at]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(X[at])}n.remove(I)}let F=0;function Z(){F=0}function J(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function tt(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function nt(I,M){let X=n.get(I);if(I.isVideoTexture&&kt(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){let at=I.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(X,I,M);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function j(I,M){let X=n.get(I);if(I.version>0&&X.__version!==I.version){st(X,I,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function ht(I,M){let X=n.get(I);if(I.version>0&&X.__version!==I.version){st(X,I,M);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function et(I,M){let X=n.get(I);if(I.version>0&&X.__version!==I.version){ft(X,I,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let Mt={[er]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[hl]:i.MIRRORED_REPEAT},Tt={[jn]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},zt={[rd]:i.NEVER,[ud]:i.ALWAYS,[ad]:i.LESS,[Cu]:i.LEQUAL,[od]:i.EQUAL,[hd]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function $t(I,M){if(M.type===Ai&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===oi||M.magFilter===vo||M.magFilter===aa||M.magFilter===ms||M.minFilter===oi||M.minFilter===vo||M.minFilter===aa||M.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Mt[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Mt[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Mt[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Tt[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,zt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==aa&&M.minFilter!==ms||M.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ne(I,M){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",L));let at=M.source,lt=p.get(at);lt===void 0&&(lt={},p.set(at,lt));let it=tt(M);if(it!==I.__cacheKey){lt[it]===void 0&&(lt[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),lt[it].usedTimes++;let Nt=lt[I.__cacheKey];Nt!==void 0&&(lt[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&T(M)),I.__cacheKey=it,I.__webglTexture=lt[it].texture}return X}function st(I,M,X){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);let lt=ne(I,M),it=M.source;e.bindTexture(at,I.__webglTexture,i.TEXTURE0+X);let Nt=n.get(it);if(it.version!==Nt.__version||lt===!0){e.activeTexture(i.TEXTURE0+X);let _t=ve.getPrimaries(ve.workingColorSpace),dt=M.colorSpace===Gi?null:ve.getPrimaries(M.colorSpace),he=M.colorSpace===Gi||_t===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ct=w(M.image,!1,s.maxTextureSize);ct=me(M,ct);let At=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type),Bt=A(M.internalFormat,At,Vt,M.colorSpace,M.isVideoTexture);$t(at,M);let Et,ue=M.mipmaps,Qt=M.isVideoTexture!==!0,xe=Nt.__version===void 0||lt===!0,z=it.dataReady,mt=k(M,ct);if(M.isDepthTexture)Bt=E(M.format===ir,M.type),xe&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ct.width,ct.height,0,At,Vt,null));else if(M.isDataTexture)if(ue.length>0){Qt&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,ue[0].width,ue[0].height);for(let Q=0,rt=ue.length;Q<rt;Q++)Et=ue[Q],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Et.width,Et.height,At,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,Et.width,Et.height,0,At,Vt,Et.data);M.generateMipmaps=!1}else Qt?(xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,ct.width,ct.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,At,Vt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ct.width,ct.height,0,At,Vt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,ue[0].width,ue[0].height,ct.depth);for(let Q=0,rt=ue.length;Q<rt;Q++)if(Et=ue[Q],M.format!==Kn)if(At!==null)if(Qt){if(z)if(M.layerUpdates.size>0){let St=ru(Et.width,Et.height,M.format,M.type);for(let yt of M.layerUpdates){let Yt=Et.data.subarray(yt*St/Et.data.BYTES_PER_ELEMENT,(yt+1)*St/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,yt,Et.width,Et.height,1,At,Yt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Et.width,Et.height,ct.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Et.width,Et.height,ct.depth,At,Vt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,Et.width,Et.height,ct.depth,0,At,Vt,Et.data)}else{Qt&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,ue[0].width,ue[0].height);for(let Q=0,rt=ue.length;Q<rt;Q++)Et=ue[Q],M.format!==Kn?At!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Et.width,Et.height,At,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,Et.width,Et.height,0,At,Vt,Et.data)}else if(M.isDataArrayTexture)if(Qt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,ct.width,ct.height,ct.depth),z)if(M.layerUpdates.size>0){let Q=ru(ct.width,ct.height,M.format,M.type);for(let rt of M.layerUpdates){let St=ct.data.subarray(rt*Q/ct.data.BYTES_PER_ELEMENT,(rt+1)*Q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,At,Vt,St)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,At,Vt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ct.width,ct.height,ct.depth,0,At,Vt,ct.data);else if(M.isData3DTexture)Qt?(xe&&e.texStorage3D(i.TEXTURE_3D,mt,Bt,ct.width,ct.height,ct.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,At,Vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ct.width,ct.height,ct.depth,0,At,Vt,ct.data);else if(M.isFramebufferTexture){if(xe)if(Qt)e.texStorage2D(i.TEXTURE_2D,mt,Bt,ct.width,ct.height);else{let Q=ct.width,rt=ct.height;for(let St=0;St<mt;St++)e.texImage2D(i.TEXTURE_2D,St,Bt,Q,rt,0,At,Vt,null),Q>>=1,rt>>=1}}else if(ue.length>0){if(Qt&&xe){let Q=Ut(ue[0]);e.texStorage2D(i.TEXTURE_2D,mt,Bt,Q.width,Q.height)}for(let Q=0,rt=ue.length;Q<rt;Q++)Et=ue[Q],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At,Vt,Et):e.texImage2D(i.TEXTURE_2D,Q,Bt,At,Vt,Et);M.generateMipmaps=!1}else if(Qt){if(xe){let Q=Ut(ct);e.texStorage2D(i.TEXTURE_2D,mt,Bt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Vt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,Vt,ct);_(M)&&f(at),Nt.__version=it.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ft(I,M,X){if(M.image.length!==6)return;let at=ne(I,M),lt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let it=n.get(lt);if(lt.version!==it.__version||at===!0){e.activeTexture(i.TEXTURE0+X);let Nt=ve.getPrimaries(ve.workingColorSpace),_t=M.colorSpace===Gi?null:ve.getPrimaries(M.colorSpace),dt=M.colorSpace===Gi||Nt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let he=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!he&&!ct?At[rt]=w(M.image[rt],!0,s.maxCubemapSize):At[rt]=ct?M.image[rt].image:M.image[rt],At[rt]=me(M,At[rt]);let Vt=At[0],Bt=r.convert(M.format,M.colorSpace),Et=r.convert(M.type),ue=A(M.internalFormat,Bt,Et,M.colorSpace),Qt=M.isVideoTexture!==!0,xe=it.__version===void 0||at===!0,z=lt.dataReady,mt=k(M,Vt);$t(i.TEXTURE_CUBE_MAP,M);let Q;if(he){Qt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ue,Vt.width,Vt.height);for(let rt=0;rt<6;rt++){Q=At[rt].mipmaps;for(let St=0;St<Q.length;St++){let yt=Q[St];M.format!==Kn?Bt!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,ue,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,yt.width,yt.height,Bt,Et,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,ue,yt.width,yt.height,0,Bt,Et,yt.data)}}}else{if(Q=M.mipmaps,Qt&&xe){Q.length>0&&mt++;let rt=Ut(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ue,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,Bt,Et,At[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ue,At[rt].width,At[rt].height,0,Bt,Et,At[rt].data);for(let St=0;St<Q.length;St++){let Yt=Q[St].image[rt].image;Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Yt.width,Yt.height,Bt,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,ue,Yt.width,Yt.height,0,Bt,Et,Yt.data)}}else{Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Bt,Et,At[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ue,Bt,Et,At[rt]);for(let St=0;St<Q.length;St++){let yt=Q[St];Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Bt,Et,yt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,ue,Bt,Et,yt.image[rt])}}}_(M)&&f(i.TEXTURE_CUBE_MAP),it.__version=lt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function It(I,M,X,at,lt,it){let Nt=r.convert(X.format,X.colorSpace),_t=r.convert(X.type),dt=A(X.internalFormat,Nt,_t,X.colorSpace),he=n.get(M),ct=n.get(X);if(ct.__renderTarget=M,!he.__hasExternalTextures){let At=Math.max(1,M.width>>it),Vt=Math.max(1,M.height>>it);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,dt,At,Vt,M.depth,0,Nt,_t,null):e.texImage2D(lt,it,dt,At,Vt,0,Nt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,lt,ct.__webglTexture,0,le(M)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,lt,ct.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){let at=M.depthTexture,lt=at&&at.isDepthTexture?at.type:null,it=E(M.stencilBuffer,lt),Nt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=le(M);ce(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,it,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,I)}else{let at=M.textures;for(let lt=0;lt<at.length;lt++){let it=at[lt],Nt=r.convert(it.format,it.colorSpace),_t=r.convert(it.type),dt=A(it.internalFormat,Nt,_t,it.colorSpace),he=le(M);X&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,dt,M.width,M.height):ce(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,dt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(M.depthTexture);at.__renderTarget=M,(!at.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);let lt=at.__webglTexture,it=le(M);if(M.depthTexture.format===Zs)ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(M.depthTexture.format===ir)ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Jt(I){let M=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let at=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){let lt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",lt)};at.addEventListener("dispose",lt),M.__depthDisposeCallback=lt}M.__boundDepthTexture=at}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Gt(M.__webglFramebuffer,I)}else if(X){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=i.createRenderbuffer(),gt(M.__webglDepthbuffer[at],I,!1);else{let lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),gt(M.__webglDepthbuffer,I,!1);else{let at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,M,X){let at=n.get(I);M!==void 0&&It(at.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Jt(I)}function we(I){let M=I.texture,X=n.get(I),at=n.get(M);I.addEventListener("dispose",U);let lt=I.textures,it=I.isWebGLCubeRenderTarget===!0,Nt=lt.length>1;if(Nt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,a.memory.textures++),it){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let dt=0;dt<M.mipmaps.length;dt++)X.__webglFramebuffer[_t][dt]=i.createFramebuffer()}else X.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)X.__webglFramebuffer[_t]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let _t=0,dt=lt.length;_t<dt;_t++){let he=n.get(lt[_t]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ce(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){let dt=lt[_t];X.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);let he=r.convert(dt.format,dt.colorSpace),ct=r.convert(dt.type),At=A(dt.internalFormat,he,ct,dt.colorSpace,I.isXRRenderTarget===!0),Vt=le(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),$t(i.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)It(X.__webglFramebuffer[_t][dt],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,dt);else It(X.__webglFramebuffer[_t],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let _t=0,dt=lt.length;_t<dt;_t++){let he=lt[_t],ct=n.get(he);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),$t(i.TEXTURE_2D,he),It(X.__webglFramebuffer,I,he,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),_(he)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,at.__webglTexture),$t(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)It(X.__webglFramebuffer[dt],I,M,i.COLOR_ATTACHMENT0,_t,dt);else It(X.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,_t,0);_(M)&&f(_t),e.unbindTexture()}I.depthBuffer&&Jt(I)}function de(I){let M=I.textures;for(let X=0,at=M.length;X<at;X++){let lt=M[X];if(_(lt)){let it=R(I),Nt=n.get(lt).__webglTexture;e.bindTexture(it,Nt),f(it),e.unbindTexture()}}}let ke=[],V=[];function yn(I){if(I.samples>0){if(ce(I)===!1){let M=I.textures,X=I.width,at=I.height,lt=i.COLOR_BUFFER_BIT,it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(I),_t=M.length>1;if(_t)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[dt]);let he=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,X,at,0,0,X,at,lt,i.NEAREST),c===!0&&(ke.length=0,V.length=0,ke.push(i.COLOR_ATTACHMENT0+dt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ke.push(it),V.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[dt]);let he=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function le(I){return Math.min(s.maxSamples,I.samples)}function ce(I){let M=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(I){let M=a.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function me(I,M){let X=I.colorSpace,at=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ur&&X!==Gi&&(ve.getTransfer(X)===Pe?(at!==Kn||lt!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Ut(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.setTexture2D=nt,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=et,this.rebindTextures=re,this.setupRenderTarget=we,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ce}function i_(i,t){function e(n,s=Gi){let r,a=ve.getTransfer(s);if(n===Ii)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.BYTE;if(n===yu)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===xc)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===bu)return i.RGB;if(n===Kn)return i.RGBA;if(n===Su)return i.LUMINANCE;if(n===wu)return i.LUMINANCE_ALPHA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Eu)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Da||n===Ua||n===Na||n===Fa)if(a===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===fl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ml||n===gl)return a===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_l)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xl||n===yl||n===vl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ll||n===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Ul||n===Nl||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ql=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},s_={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let w of t.hand.values()){let _=e.getJointPose(w,n),f=this._getHandJoint(h,w);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,v=.005;h.inputState.pinching&&p>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`,tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ci({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ec=class extends Zi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,p=null,g=null,v=null,w=new tc,_=e.getContextAttributes(),f=null,R=null,A=[],E=[],k=new qt,L=null,U=new ln;U.viewport=new De;let O=new ln;O.viewport=new De;let T=[U,O],S=new Ql,F=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=A[st];return ft===void 0&&(ft=new Pr,A[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=A[st];return ft===void 0&&(ft=new Pr,A[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=A[st];return ft===void 0&&(ft=new Pr,A[st]=ft),ft.getHandSpace()};function J(st){let ft=E.indexOf(st.inputSource);if(ft===-1)return;let It=A[ft];It!==void 0&&(It.update(st.inputSource,st.frame,h||a),It.dispatchEvent({type:st.type,data:st.inputSource}))}function tt(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",nt);for(let st=0;st<A.length;st++){let ft=E[st];ft!==null&&(E[st]=null,A[st].disconnect(ft))}F=null,Z=null,w.reset(),t.setRenderTarget(f),g=null,p=null,d=null,s=null,R=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(st){h=st},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let ft={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new Qn(g.framebufferWidth,g.framebufferHeight,{format:Kn,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ft=null,It=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=_.stencil?ir:Zs,It=_.stencil?nr:_s);let Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Gt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new Qn(p.textureWidth,p.textureHeight,{format:Kn,type:Ii,depthTexture:new $a(p.textureWidth,p.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function nt(st){for(let ft=0;ft<st.removed.length;ft++){let It=st.removed[ft],gt=E.indexOf(It);gt>=0&&(E[gt]=null,A[gt].disconnect(It))}for(let ft=0;ft<st.added.length;ft++){let It=st.added[ft],gt=E.indexOf(It);if(gt===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=E.length){E.push(It),gt=Jt;break}else if(E[Jt]===null){E[Jt]=It,gt=Jt;break}if(gt===-1)break}let Gt=A[gt];Gt&&Gt.connect(It)}}let j=new N,ht=new N;function et(st,ft,It){j.setFromMatrixPosition(ft.matrixWorld),ht.setFromMatrixPosition(It.matrixWorld);let gt=j.distanceTo(ht),Gt=ft.projectionMatrix.elements,Jt=It.projectionMatrix.elements,re=Gt[14]/(Gt[10]-1),we=Gt[14]/(Gt[10]+1),de=(Gt[9]+1)/Gt[5],ke=(Gt[9]-1)/Gt[5],V=(Gt[8]-1)/Gt[0],yn=(Jt[8]+1)/Jt[0],le=re*V,ce=re*yn,kt=gt/(-V+yn),me=kt*-V;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(me),st.translateZ(kt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Gt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Ut=re+kt,I=we+kt,M=le-me,X=ce+(gt-me),at=de*we/I*Ut,lt=ke*we/I*Ut;st.projectionMatrix.makePerspective(M,X,at,lt,Ut,I),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Mt(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ft=st.near,It=st.far;w.texture!==null&&(w.depthNear>0&&(ft=w.depthNear),w.depthFar>0&&(It=w.depthFar)),S.near=O.near=U.near=ft,S.far=O.far=U.far=It,(F!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,Z=S.far),U.layers.mask=st.layers.mask|2,O.layers.mask=st.layers.mask|4,S.layers.mask=U.layers.mask|O.layers.mask;let gt=st.parent,Gt=S.cameras;Mt(S,gt);for(let Jt=0;Jt<Gt.length;Jt++)Mt(Gt[Jt],gt);Gt.length===2?et(S,U,O):S.projectionMatrix.copy(U.projectionMatrix),Tt(st,S,gt)};function Tt(st,ft,It){It===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(It.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Bl*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(st){c=st,p!==null&&(p.fixedFoveation=st),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=st)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(S)};let zt=null;function $t(st,ft){if(u=ft.getViewerPose(h||a),v=ft,u!==null){let It=u.views;g!==null&&(t.setRenderTargetFramebuffer(R,g.framebuffer),t.setRenderTarget(R));let gt=!1;It.length!==S.cameras.length&&(S.cameras.length=0,gt=!0);for(let Jt=0;Jt<It.length;Jt++){let re=It[Jt],we=null;if(g!==null)we=g.getViewport(re);else{let ke=d.getViewSubImage(p,re);we=ke.viewport,Jt===0&&(t.setRenderTargetTextures(R,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(R))}let de=T[Jt];de===void 0&&(de=new ln,de.layers.enable(Jt),de.viewport=new De,T[Jt]=de),de.matrix.fromArray(re.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(re.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(we.x,we.y,we.width,we.height),Jt===0&&(S.matrix.copy(de.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),gt===!0&&S.cameras.push(de)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){let Jt=d.getDepthInformation(It[0]);Jt&&Jt.isValid&&Jt.texture&&w.init(t,Jt,s.renderState)}}for(let It=0;It<A.length;It++){let gt=E[It],Gt=A[It];gt!==null&&Gt!==void 0&&Gt.update(gt,ft,h||a)}zt&&zt(st,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),v=null}let ne=new Du;ne.setAnimationLoop($t),this.setAnimationLoop=function(st){zt=st},this.dispose=function(){}}},hs=new li,o_=new Be;function l_(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Lu(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,R,A,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),u(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&g(_,f,E)):f.isMeshMatcapMaterial?(r(_,f),v(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),w(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?c(_,f,R,A):f.isSpriteMaterial?h(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===gn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===gn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let R=t.get(f),A=R.envMap,E=R.envMapRotation;A&&(_.envMap.value=A,hs.copy(E),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),_.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(hs)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,R,A){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*R,_.scale.value=A*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function g(_,f,R){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function w(_,f){let R=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,A){let E=A.program;n.uniformBlockBinding(R,E)}function h(R,A){let E=s[R.id];E===void 0&&(v(R),E=u(R),s[R.id]=E,R.addEventListener("dispose",_));let k=A.program;n.updateUBOMapping(R,k);let L=t.render.frame;r[R.id]!==L&&(p(R),r[R.id]=L)}function u(R){let A=d();R.__bindingPointIndex=A;let E=i.createBuffer(),k=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,k,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let A=s[R.id],E=R.uniforms,k=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,U=E.length;L<U;L++){let O=Array.isArray(E[L])?E[L]:[E[L]];for(let T=0,S=O.length;T<S;T++){let F=O[T];if(g(F,L,T,k)===!0){let Z=F.__offset,J=Array.isArray(F.value)?F.value:[F.value],tt=0;for(let nt=0;nt<J.length;nt++){let j=J[nt],ht=w(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Z+tt,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,tt),tt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,A,E,k){let L=R.value,U=A+"_"+E;if(k[U]===void 0)return typeof L=="number"||typeof L=="boolean"?k[U]=L:k[U]=L.clone(),!0;{let O=k[U];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return k[U]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(R){let A=R.uniforms,E=0,k=16;for(let U=0,O=A.length;U<O;U++){let T=Array.isArray(A[U])?A[U]:[A[U]];for(let S=0,F=T.length;S<F;S++){let Z=T[S],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let tt=0,nt=J.length;tt<nt;tt++){let j=J[tt],ht=w(j),et=E%k,Mt=et%ht.boundary,Tt=et+Mt;E+=Mt,Tt!==0&&k-Tt<ht.storage&&(E+=k-Tt),Z.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=ht.storage}}}let L=E%k;return L>0&&(E+=k-L),R.__size=E,R.__cache={},this}function w(R){let A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){let A=R.target;A.removeEventListener("dispose",_);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:f}}var Za=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=new Uint32Array(4),w=new Int32Array(4),_=null,f=null,R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=qi,this.toneMappingExposure=1;let E=this,k=!1,L=0,U=0,O=null,T=-1,S=null,F=new De,Z=new De,J=null,tt=new te(0),nt=0,j=e.width,ht=e.height,et=1,Mt=null,Tt=null,zt=new De(0,0,j,ht),$t=new De(0,0,j,ht),ne=!1,st=new Fr,ft=!1,It=!1,gt=new Be,Gt=new Be,Jt=new N,re=new De,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ke(){return O===null?et:1}let V=n;function yn(b,B){return e.getContext(b,B)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",yt,!1),V===null){let B="webgl2";if(V=yn(B,b),V===null)throw yn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,ce,kt,me,Ut,I,M,X,at,lt,it,Nt,_t,dt,he,ct,At,Vt,Bt,Et,ue,Qt,xe,z;function mt(){le=new E0(V),le.init(),Qt=new i_(V,le),ce=new y0(V,le,t,Qt),kt=new t_(V,le),ce.reverseDepthBuffer&&p&&kt.buffers.depth.setReversed(!0),me=new R0(V),Ut=new Vg,I=new n_(V,le,kt,Ut,ce,Qt,me),M=new M0(E),X=new w0(E),at=new Nd(V),xe=new _0(V,at),lt=new T0(V,at,me,xe),it=new I0(V,lt,at,me),Bt=new C0(V,ce,I),ct=new v0(Ut),Nt=new kg(E,M,X,le,ce,xe,ct),_t=new l_(E,Ut),dt=new Gg,he=new Zg(le),Vt=new g0(E,M,X,kt,it,g,c),At=new jg(E,it,ce),z=new c_(V,me,ce,kt),Et=new x0(V,le,me),ue=new A0(V,le,me),me.programs=Nt.programs,E.capabilities=ce,E.extensions=le,E.properties=Ut,E.renderLists=dt,E.shadowMap=At,E.state=kt,E.info=me}mt();let Q=new ec(E,V);this.xr=Q,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(j,ht,!1))},this.getSize=function(b){return b.set(j,ht)},this.setSize=function(b,B,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ht=B,e.width=Math.floor(b*et),e.height=Math.floor(B*et),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(j*et,ht*et).floor()},this.setDrawingBufferSize=function(b,B,$){j=b,ht=B,et=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(zt)},this.setViewport=function(b,B,$,Y){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,B,$,Y),kt.viewport(F.copy(zt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy($t)},this.setScissor=function(b,B,$,Y){b.isVector4?$t.set(b.x,b.y,b.z,b.w):$t.set(b,B,$,Y),kt.scissor(Z.copy($t).multiplyScalar(et).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){kt.setScissorTest(ne=b)},this.setOpaqueSort=function(b){Mt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(b=!0,B=!0,$=!0){let Y=0;if(b){let H=!1;if(O!==null){let ut=O.texture.format;H=ut===Sc||ut===bc||ut===Mc}if(H){let ut=O.texture.type,vt=ut===Ii||ut===_s||ut===Lr||ut===nr||ut===yc||ut===vc,Pt=Vt.getClearColor(),Lt=Vt.getClearAlpha(),Wt=Pt.r,Kt=Pt.g,Ct=Pt.b;vt?(v[0]=Wt,v[1]=Kt,v[2]=Ct,v[3]=Lt,V.clearBufferuiv(V.COLOR,0,v)):(w[0]=Wt,w[1]=Kt,w[2]=Ct,w[3]=Lt,V.clearBufferiv(V.COLOR,0,w))}else Y|=V.COLOR_BUFFER_BIT}B&&(Y|=V.DEPTH_BUFFER_BIT),$&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),dt.dispose(),he.dispose(),Ut.dispose(),M.dispose(),X.dispose(),it.dispose(),xe.dispose(),z.dispose(),Nt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ln),Q.removeEventListener("sessionend",Qi),Dn.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let b=me.autoReset,B=At.enabled,$=At.autoUpdate,Y=At.needsUpdate,H=At.type;mt(),me.autoReset=b,At.enabled=B,At.autoUpdate=$,At.needsUpdate=Y,At.type=H}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yt(b){let B=b.target;B.removeEventListener("dispose",Yt),Ne(B)}function Ne(b){Ke(b),Ut.remove(b)}function Ke(b){let B=Ut.get(b).programs;B!==void 0&&(B.forEach(function($){Nt.releaseProgram($)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,Y,H,ut){B===null&&(B=we);let vt=H.isMesh&&H.matrixWorld.determinant()<0,Pt=bs(b,B,$,Y,H);kt.setMaterial(Y,vt);let Lt=$.index,Wt=1;if(Y.wireframe===!0){if(Lt=lt.getWireframeAttribute($),Lt===void 0)return;Wt=2}let Kt=$.drawRange,Ct=$.attributes.position,D=Kt.start*Wt,fe=(Kt.start+Kt.count)*Wt;ut!==null&&(D=Math.max(D,ut.start*Wt),fe=Math.min(fe,(ut.start+ut.count)*Wt)),Lt!==null?(D=Math.max(D,0),fe=Math.min(fe,Lt.count)):Ct!=null&&(D=Math.max(D,0),fe=Math.min(fe,Ct.count));let Ce=fe-D;if(Ce<0||Ce===1/0)return;xe.setup(H,Y,Pt,$,Lt);let Fe,ye=Et;if(Lt!==null&&(Fe=at.get(Lt),ye=ue,ye.setIndex(Fe)),H.isMesh)Y.wireframe===!0?(kt.setLineWidth(Y.wireframeLinewidth*ke()),ye.setMode(V.LINES)):ye.setMode(V.TRIANGLES);else if(H.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),kt.setLineWidth(Ft*ke()),H.isLineSegments?ye.setMode(V.LINES):H.isLineLoop?ye.setMode(V.LINE_LOOP):ye.setMode(V.LINE_STRIP)}else H.isPoints?ye.setMode(V.POINTS):H.isSprite&&ye.setMode(V.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ye.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ye.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ft=H._multiDrawStarts,Un=H._multiDrawCounts,pe=H._multiDrawCount,Mn=Lt?at.get(Lt).bytesPerElement:1,Nn=Ut.get(Y).currentProgram.getUniforms();for(let Ye=0;Ye<pe;Ye++)Nn.setValue(V,"_gl_DrawID",Ye),ye.render(Ft[Ye]/Mn,Un[Ye])}else if(H.isInstancedMesh)ye.renderInstances(D,Ce,H.count);else if($.isInstancedBufferGeometry){let Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Un=Math.min($.instanceCount,Ft);ye.renderInstances(D,Ce,Un)}else ye.render(D,Ce)};function ge(b,B,$){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,es(b,B,$),b.side=$i,b.needsUpdate=!0,es(b,B,$),b.side=cn):es(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),f=he.get($),f.init(B),A.push(f),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),b!==$&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();let Y=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ut=H.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){let Pt=ut[vt];ge(Pt,$,H),Y.add(Pt)}else ge(ut,$,H),Y.add(ut)}),A.pop(),f=null,Y},this.compileAsync=function(b,B,$=null){let Y=this.compile(b,B,$);return new Promise(H=>{function ut(){if(Y.forEach(function(vt){Ut.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){H(b);return}setTimeout(ut,10)}le.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let vn=null;function an(b){vn&&vn(b)}function Ln(){Dn.stop()}function Qi(){Dn.start()}let Dn=new Du;Dn.setAnimationLoop(an),typeof self!="undefined"&&Dn.setContext(self),this.setAnimationLoop=function(b){vn=b,Q.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},Q.addEventListener("sessionstart",Ln),Q.addEventListener("sessionend",Qi),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,B,O),f=he.get(b,A.length),f.init(B),A.push(f),Gt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),st.setFromProjectionMatrix(Gt),It=this.localClippingEnabled,ft=ct.init(this.clippingPlanes,It),_=dt.get(b,R.length),_.init(),R.push(_),Q.enabled===!0&&Q.isPresenting===!0){let ut=E.xr.getDepthSensingMesh();ut!==null&&ts(ut,B,-1/0,E.sortObjects)}ts(b,B,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(Mt,Tt),de=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,de&&Vt.addToRenderList(_,b),this.info.render.frame++,ft===!0&&ct.beginShadows();let $=f.state.shadowsArray;At.render($,b,B),ft===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,H=_.transmissive;if(f.setupLights(),B.isArrayCamera){let ut=B.cameras;if(H.length>0)for(let vt=0,Pt=ut.length;vt<Pt;vt++){let Lt=ut[vt];$r(Y,H,b,Lt)}de&&Vt.render(b);for(let vt=0,Pt=ut.length;vt<Pt;vt++){let Lt=ut[vt];Yr(_,b,Lt,Lt.viewport)}}else H.length>0&&$r(Y,H,b,B),de&&Vt.render(b),Yr(_,b,B);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(E,b,B),xe.resetDefaultState(),T=-1,S=null,A.pop(),A.length>0?(f=A[A.length-1],ft===!0&&ct.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function ts(b,B,$,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||st.intersectsSprite(b)){Y&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);let vt=it.update(b),Pt=b.material;Pt.visible&&_.push(b,vt,Pt,$,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||st.intersectsObject(b))){let vt=it.update(b),Pt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),re.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),re.copy(vt.boundingSphere.center)),re.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(Pt)){let Lt=vt.groups;for(let Wt=0,Kt=Lt.length;Wt<Kt;Wt++){let Ct=Lt[Wt],D=Pt[Ct.materialIndex];D&&D.visible&&_.push(b,vt,D,$,re.z,Ct)}}else Pt.visible&&_.push(b,vt,Pt,$,re.z,null)}}let ut=b.children;for(let vt=0,Pt=ut.length;vt<Pt;vt++)ts(ut[vt],B,$,Y)}function Yr(b,B,$,Y){let H=b.opaque,ut=b.transmissive,vt=b.transparent;f.setupLightsView($),ft===!0&&ct.setGlobalState(E.clippingPlanes,$),Y&&kt.viewport(F.copy(Y)),H.length>0&&mi(H,B,$),ut.length>0&&mi(ut,B,$),vt.length>0&&mi(vt,B,$),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function $r(b,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Qn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Wr:Ii,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let ut=f.state.transmissionRenderTarget[Y.id],vt=Y.viewport||F;ut.setSize(vt.z,vt.w);let Pt=E.getRenderTarget();E.setRenderTarget(ut),E.getClearColor(tt),nt=E.getClearAlpha(),nt<1&&E.setClearColor(16777215,.5),E.clear(),de&&Vt.render($);let Lt=E.toneMapping;E.toneMapping=qi;let Wt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),ft===!0&&ct.setGlobalState(E.clippingPlanes,Y),mi(b,$,Y),I.updateMultisampleRenderTarget(ut),I.updateRenderTargetMipmap(ut),le.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ct=0,D=B.length;Ct<D;Ct++){let fe=B[Ct],Ce=fe.object,Fe=fe.geometry,ye=fe.material,Ft=fe.group;if(ye.side===cn&&Ce.layers.test(Y.layers)){let Un=ye.side;ye.side=gn,ye.needsUpdate=!0,Rt(Ce,$,Y,Fe,ye,Ft),ye.side=Un,ye.needsUpdate=!0,Kt=!0}}Kt===!0&&(I.updateMultisampleRenderTarget(ut),I.updateRenderTargetMipmap(ut))}E.setRenderTarget(Pt),E.setClearColor(tt,nt),Wt!==void 0&&(Y.viewport=Wt),E.toneMapping=Lt}function mi(b,B,$){let Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ut=b.length;H<ut;H++){let vt=b[H],Pt=vt.object,Lt=vt.geometry,Wt=Y===null?vt.material:Y,Kt=vt.group;Pt.layers.test($.layers)&&Rt(Pt,B,$,Lt,Wt,Kt)}}function Rt(b,B,$,Y,H,ut){b.onBeforeRender(E,B,$,Y,H,ut),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(E,B,$,Y,b,ut),H.transparent===!0&&H.side===cn&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,E.renderBufferDirect($,B,Y,H,b,ut),H.side=$i,H.needsUpdate=!0,E.renderBufferDirect($,B,Y,H,b,ut),H.side=cn):E.renderBufferDirect($,B,Y,H,b,ut),b.onAfterRender(E,B,$,Y,H,ut)}function es(b,B,$){B.isScene!==!0&&(B=we);let Y=Ut.get(b),H=f.state.lights,ut=f.state.shadowsArray,vt=H.state.version,Pt=Nt.getParameters(b,H.state,ut,B,$),Lt=Nt.getProgramCacheKey(Pt),Wt=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?X:M).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Yt),Wt=new Map,Y.programs=Wt);let Kt=Wt.get(Lt);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===vt)return Jr(b,Pt),Kt}else Pt.uniforms=Nt.getUniforms(b),b.onBeforeCompile(Pt,E),Kt=Nt.acquireProgram(Pt,Lt),Wt.set(Lt,Kt),Y.uniforms=Pt.uniforms;let Ct=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=ct.uniform),Jr(b,Pt),Y.needsLights=Kr(b),Y.lightsStateVersion=vt,Y.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.directionalShadowMap.value=H.state.directionalShadowMap,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotShadowMap.value=H.state.spotShadowMap,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMap.value=H.state.pointShadowMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function Zr(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Ks.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Jr(b,B){let $=Ut.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function bs(b,B,$,Y,H){B.isScene!==!0&&(B=we),I.resetTextureUnits();let ut=B.fog,vt=Y.isMeshStandardMaterial?B.environment:null,Pt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ur,Lt=(Y.isMeshStandardMaterial?X:M).get(Y.envMap||vt),Wt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Kt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!$.morphAttributes.position,D=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color,Ce=qi;Y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ce=E.toneMapping);let Fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=Fe!==void 0?Fe.length:0,Ft=Ut.get(Y),Un=f.state.lights;if(ft===!0&&(It===!0||b!==S)){let Ue=b===S&&Y.id===T;ct.setState(Y,b,Ue)}let pe=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Un.state.version||Ft.outputColorSpace!==Pt||H.isBatchedMesh&&Ft.batching===!1||!H.isBatchedMesh&&Ft.batching===!0||H.isBatchedMesh&&Ft.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ft.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ft.instancing===!1||!H.isInstancedMesh&&Ft.instancing===!0||H.isSkinnedMesh&&Ft.skinning===!1||!H.isSkinnedMesh&&Ft.skinning===!0||H.isInstancedMesh&&Ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ft.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ft.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ft.instancingMorph===!1&&H.morphTexture!==null||Ft.envMap!==Lt||Y.fog===!0&&Ft.fog!==ut||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ct.numPlanes||Ft.numIntersection!==ct.numIntersection)||Ft.vertexAlphas!==Wt||Ft.vertexTangents!==Kt||Ft.morphTargets!==Ct||Ft.morphNormals!==D||Ft.morphColors!==fe||Ft.toneMapping!==Ce||Ft.morphTargetsCount!==ye)&&(pe=!0):(pe=!0,Ft.__version=Y.version);let Mn=Ft.currentProgram;pe===!0&&(Mn=es(Y,B,H));let Nn=!1,Ye=!1,Fn=!1,be=Mn.getUniforms(),On=Ft.uniforms;if(kt.useProgram(Mn.program)&&(Nn=!0,Ye=!0,Fn=!0),Y.id!==T&&(T=Y.id,Ye=!0),Nn||S!==b){kt.buffers.depth.getReversed()?(gt.copy(b.projectionMatrix),md(gt),gd(gt),be.setValue(V,"projectionMatrix",gt)):be.setValue(V,"projectionMatrix",b.projectionMatrix),be.setValue(V,"viewMatrix",b.matrixWorldInverse);let Wn=be.map.cameraPosition;Wn!==void 0&&Wn.setValue(V,Jt.setFromMatrixPosition(b.matrixWorld)),ce.logarithmicDepthBuffer&&be.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&be.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ye=!0,Fn=!0)}if(H.isSkinnedMesh){be.setOptional(V,H,"bindMatrix"),be.setOptional(V,H,"bindMatrixInverse");let Ue=H.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),be.setValue(V,"boneTexture",Ue.boneTexture,I))}H.isBatchedMesh&&(be.setOptional(V,H,"batchingTexture"),be.setValue(V,"batchingTexture",H._matricesTexture,I),be.setOptional(V,H,"batchingIdTexture"),be.setValue(V,"batchingIdTexture",H._indirectTexture,I),be.setOptional(V,H,"batchingColorTexture"),H._colorsTexture!==null&&be.setValue(V,"batchingColorTexture",H._colorsTexture,I));let Se=$.morphAttributes;if((Se.position!==void 0||Se.normal!==void 0||Se.color!==void 0)&&Bt.update(H,$,Mn),(Ye||Ft.receiveShadow!==H.receiveShadow)&&(Ft.receiveShadow=H.receiveShadow,be.setValue(V,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(On.envMap.value=Lt,On.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(On.envMapIntensity.value=B.environmentIntensity),Ye&&(be.setValue(V,"toneMappingExposure",E.toneMappingExposure),Ft.needsLights&&ho(On,Fn),ut&&Y.fog===!0&&_t.refreshFogUniforms(On,ut),_t.refreshMaterialUniforms(On,Y,et,ht,f.state.transmissionRenderTarget[b.id]),Ks.upload(V,Zr(Ft),On,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ks.upload(V,Zr(Ft),On,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&be.setValue(V,"center",H.center),be.setValue(V,"modelViewMatrix",H.modelViewMatrix),be.setValue(V,"normalMatrix",H.normalMatrix),be.setValue(V,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Ue=Y.uniformsGroups;for(let Wn=0,Xn=Ue.length;Wn<Xn;Wn++){let ns=Ue[Wn];z.update(ns,Mn),z.bind(ns,Mn)}}return Mn}function ho(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Kr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,B,$){Ut.get(b.texture).__webglTexture=B,Ut.get(b.depthTexture).__webglTexture=$;let Y=Ut.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){let $=Ut.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){O=b,L=B,U=$;let Y=!0,H=null,ut=!1,vt=!1;if(b){let Lt=Ut.get(b);if(Lt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1;else if(Lt.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Lt.__hasExternalTextures)I.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ct=b.depthTexture;if(Lt.__boundDepthTexture!==Ct){if(Ct!==null&&Ut.has(Ct)&&(b.width!==Ct.image.width||b.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(vt=!0);let Kt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?H=Kt[B][$]:H=Kt[B],ut=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?H=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?H=Kt[$]:H=Kt,F.copy(b.viewport),Z.copy(b.scissor),J=b.scissorTest}else F.copy(zt).multiplyScalar(et).floor(),Z.copy($t).multiplyScalar(et).floor(),J=ne;if(kt.bindFramebuffer(V.FRAMEBUFFER,H)&&Y&&kt.drawBuffers(b,H),kt.viewport(F),kt.scissor(Z),kt.setScissorTest(J),ut){let Lt=Ut.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,$)}else if(vt){let Lt=Ut.get(b.texture),Wt=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Lt.__webglTexture,$||0,Wt)}T=-1},this.readRenderTargetPixels=function(b,B,$,Y,H,ut,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){kt.bindFramebuffer(V.FRAMEBUFFER,Pt);try{let Lt=b.texture,Wt=Lt.format,Kt=Lt.type;if(!ce.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&$>=0&&$<=b.height-H&&V.readPixels(B,$,Y,H,Qt.convert(Wt),Qt.convert(Kt),ut)}finally{let Lt=O!==null?Ut.get(O).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,Y,H,ut,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){let Lt=b.texture,Wt=Lt.format,Kt=Lt.type;if(!ce.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-Y&&$>=0&&$<=b.height-H){kt.bindFramebuffer(V.FRAMEBUFFER,Pt);let Ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ct),V.bufferData(V.PIXEL_PACK_BUFFER,ut.byteLength,V.STREAM_READ),V.readPixels(B,$,Y,H,Qt.convert(Wt),Qt.convert(Kt),0);let D=O!==null?Ut.get(O).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,D);let fe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pd(V,fe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ut),V.deleteBuffer(Ct),V.deleteSync(fe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,$=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);let Y=Math.pow(2,-$),H=Math.floor(b.image.width*Y),ut=Math.floor(b.image.height*Y),vt=B!==null?B.x:0,Pt=B!==null?B.y:0;I.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,vt,Pt,H,ut),kt.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,Y=null,H=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],B=arguments[2],H=arguments[3]||0,$=null);let ut,vt,Pt,Lt,Wt,Kt,Ct,D,fe,Ce=b.isCompressedTexture?b.mipmaps[H]:b.image;$!==null?(ut=$.max.x-$.min.x,vt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Lt=$.min.x,Wt=$.min.y,Kt=$.isBox3?$.min.z:0):(ut=Ce.width,vt=Ce.height,Pt=Ce.depth||1,Lt=0,Wt=0,Kt=0),Y!==null?(Ct=Y.x,D=Y.y,fe=Y.z):(Ct=0,D=0,fe=0);let Fe=Qt.convert(B.format),ye=Qt.convert(B.type),Ft;B.isData3DTexture?(I.setTexture3D(B,0),Ft=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),Ft=V.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),Ft=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let Un=V.getParameter(V.UNPACK_ROW_LENGTH),pe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Mn=V.getParameter(V.UNPACK_SKIP_PIXELS),Nn=V.getParameter(V.UNPACK_SKIP_ROWS),Ye=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ce.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ce.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Lt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Wt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kt);let Fn=b.isDataArrayTexture||b.isData3DTexture,be=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let On=Ut.get(b),Se=Ut.get(B),Ue=Ut.get(On.__renderTarget),Wn=Ut.get(Se.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Ue.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Pt;Xn++)Fn&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,H,Kt+Xn),b.isDepthTexture?(be&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.get(B).__webglTexture,H,fe+Xn),V.blitFramebuffer(Lt,Wt,ut,vt,Ct,D,ut,vt,V.DEPTH_BUFFER_BIT,V.NEAREST)):be?V.copyTexSubImage3D(Ft,H,Ct,D,fe+Xn,Lt,Wt,ut,vt):V.copyTexSubImage2D(Ft,H,Ct,D,fe+Xn,Lt,Wt,ut,vt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Ft,H,Ct,D,fe,ut,vt,Pt,Fe,ye,Ce.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Ft,H,Ct,D,fe,ut,vt,Pt,Fe,Ce.data):V.texSubImage3D(Ft,H,Ct,D,fe,ut,vt,Pt,Fe,ye,Ce):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,H,Ct,D,ut,vt,Fe,ye,Ce.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,H,Ct,D,Ce.width,Ce.height,Fe,Ce.data):V.texSubImage2D(V.TEXTURE_2D,H,Ct,D,ut,vt,Fe,ye,Ce);V.pixelStorei(V.UNPACK_ROW_LENGTH,Un),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Mn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Nn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ye),H===0&&B.generateMipmaps&&V.generateMipmap(Ft),kt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$=null,Y=null,H=0){return b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,$,Y,H)},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){L=0,U=0,O=null,kt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var Ja=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Or=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new N,zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ti=class extends Li{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,Er=new N,Ws=new N,Xs=new N,qs=new qt,Tr=new qt,zu=new Be,Aa=new N,Ar=new N,Ra=new N,au=new qt,Jo=new qt,ou=new qt,hi=class extends hn{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ka(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new zr(n,3,0,!1)),Gs.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ca(Aa.set(-.5,-.5,0),Xs,a,Ws,s,r),Ca(Ar.set(.5,-.5,0),Xs,a,Ws,s,r),Ca(Ra.set(.5,.5,0),Xs,a,Ws,s,r),au.set(0,0),Jo.set(1,0),ou.set(1,1);let o=t.ray.intersectTriangle(Aa,Ar,Ra,!1,Er);if(o===null&&(Ca(Ar.set(-.5,.5,0),Xs,a,Ws,s,r),Jo.set(0,1),o=t.ray.intersectTriangle(Aa,Ra,Ar,!1,Er),o===null))return;let c=t.ray.origin.distanceTo(Er);c<t.near||c>t.far||e.push({distance:c,point:Er.clone(),uv:Wi.getInterpolation(Er,Aa,Ar,Ra,au,Jo,ou,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ca(i,t,e,n,s,r){qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Tr.x=r*qs.x-s*qs.y,Tr.y=s*qs.x+r*qs.y):Tr.copy(qs),i.copy(t),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(zu)}var ar=class extends Li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lu=new Be,nc=new Ur,Ia=new sr,Pa=new N,Br=class extends hn{constructor(t=new Je,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;lu.copy(s).invert(),nc.copy(t.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,w=g;v<w;v++){let _=h.getX(v);Pa.fromBufferAttribute(d,_),cu(Pa,_,c,s,t,e,this)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,w=g;v<w;v++)Pa.fromBufferAttribute(d,v),cu(Pa,v,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cu(i,t,e,n,s,r,a){let o=nc.distanceSqToPoint(i);if(o<e){let c=new N;nc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var or=class extends Pn{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ja=class i extends Je{constructor(t=[new qt(0,-.5),new qt(.5,0),new qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=En(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],h=[],u=1/e,d=new N,p=new qt,g=new N,v=new N,w=new N,_=0,f=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:_=t[R+1].x-t[R].x,f=t[R+1].y-t[R].y,g.x=f*1,g.y=-_,g.z=f*0,w.copy(g),g.normalize(),c.push(g.x,g.y,g.z);break;case t.length-1:c.push(w.x,w.y,w.z);break;default:_=t[R+1].x-t[R].x,f=t[R+1].y-t[R].y,g.x=f*1,g.y=-_,g.z=f*0,v.copy(g),g.x+=w.x,g.y+=w.y,g.z+=w.z,g.normalize(),c.push(g.x,g.y,g.z),w.copy(v)}for(let R=0;R<=e;R++){let A=n+R*u*s,E=Math.sin(A),k=Math.cos(A);for(let L=0;L<=t.length-1;L++){d.x=t[L].x*E,d.y=t[L].y,d.z=t[L].x*k,a.push(d.x,d.y,d.z),p.x=R/e,p.y=L/(t.length-1),o.push(p.x,p.y);let U=c[3*L+0]*E,O=c[3*L+1],T=c[3*L+0]*k;h.push(U,O,T)}}for(let R=0;R<e;R++)for(let A=0;A<t.length-1;A++){let E=A+R*t.length,k=E,L=E+t.length,U=E+t.length+1,O=E+1;r.push(k,L,O),r.push(U,O,L)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var xs=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new N,u=new qt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let g=n+d/e*s;h.x=t*Math.cos(g),h.y=t*Math.sin(g),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ki=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],g=[],v=0,w=[],_=n/2,f=0;R(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(g,2));function R(){let E=new N,k=new N,L=0,U=(e-t)/n;for(let O=0;O<=r;O++){let T=[],S=O/r,F=S*(e-t)+t;for(let Z=0;Z<=s;Z++){let J=Z/s,tt=J*c+o,nt=Math.sin(tt),j=Math.cos(tt);k.x=F*nt,k.y=-S*n+_,k.z=F*j,d.push(k.x,k.y,k.z),E.set(nt,U,j).normalize(),p.push(E.x,E.y,E.z),g.push(J,1-S),T.push(v++)}w.push(T)}for(let O=0;O<s;O++)for(let T=0;T<r;T++){let S=w[T][O],F=w[T+1][O],Z=w[T+1][O+1],J=w[T][O+1];(t>0||T!==0)&&(u.push(S,F,J),L+=3),(e>0||T!==r-1)&&(u.push(F,Z,J),L+=3)}h.addGroup(f,L,0),f+=L}function A(E){let k=v,L=new qt,U=new N,O=0,T=E===!0?t:e,S=E===!0?1:-1;for(let Z=1;Z<=s;Z++)d.push(0,_*S,0),p.push(0,S,0),g.push(.5,.5),v++;let F=v;for(let Z=0;Z<=s;Z++){let tt=Z/s*c+o,nt=Math.cos(tt),j=Math.sin(tt);U.x=T*j,U.y=_*S,U.z=T*nt,d.push(U.x,U.y,U.z),p.push(0,S,0),L.x=nt*.5+.5,L.y=j*.5*S+.5,g.push(L.x,L.y),v++}for(let Z=0;Z<s;Z++){let J=k+Z,tt=F+Z;E===!0?u.push(tt,tt+1,J):u.push(tt+1,tt,J),O+=3}h.addGroup(f,O,E===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class i extends Ki{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ic=class i extends Je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(R){let A=new N,E=new N,k=new N;for(let L=0;L<e.length;L+=3)g(e[L+0],A),g(e[L+1],E),g(e[L+2],k),c(A,E,k,R)}function c(R,A,E,k){let L=k+1,U=[];for(let O=0;O<=L;O++){U[O]=[];let T=R.clone().lerp(E,O/L),S=A.clone().lerp(E,O/L),F=L-O;for(let Z=0;Z<=F;Z++)Z===0&&O===L?U[O][Z]=T:U[O][Z]=T.clone().lerp(S,Z/F)}for(let O=0;O<L;O++)for(let T=0;T<2*(L-O)-1;T++){let S=Math.floor(T/2);T%2===0?(p(U[O][S+1]),p(U[O+1][S]),p(U[O][S])):(p(U[O][S+1]),p(U[O+1][S+1]),p(U[O+1][S]))}}function h(R){let A=new N;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(R),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function u(){let R=new N;for(let A=0;A<r.length;A+=3){R.x=r[A+0],R.y=r[A+1],R.z=r[A+2];let E=_(R)/2/Math.PI+.5,k=f(R)/Math.PI+.5;a.push(E,1-k)}v(),d()}function d(){for(let R=0;R<a.length;R+=6){let A=a[R+0],E=a[R+2],k=a[R+4],L=Math.max(A,E,k),U=Math.min(A,E,k);L>.9&&U<.1&&(A<.2&&(a[R+0]+=1),E<.2&&(a[R+2]+=1),k<.2&&(a[R+4]+=1))}}function p(R){r.push(R.x,R.y,R.z)}function g(R,A){let E=R*3;A.x=t[E+0],A.y=t[E+1],A.z=t[E+2]}function v(){let R=new N,A=new N,E=new N,k=new N,L=new qt,U=new qt,O=new qt;for(let T=0,S=0;T<r.length;T+=9,S+=6){R.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),L.set(a[S+0],a[S+1]),U.set(a[S+2],a[S+3]),O.set(a[S+4],a[S+5]),k.copy(R).add(A).add(E).divideScalar(3);let F=_(k);w(L,S+0,R,F),w(U,S+2,A,F),w(O,S+4,E,F)}}function w(R,A,E,k){k<0&&R.x===1&&(a[A]=R.x-1),E.x===0&&E.z===0&&(a[A]=k/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function f(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var lr=class i extends ic{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ui=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],d=new N,p=new N,g=[],v=[],w=[],_=[];for(let f=0;f<=n;f++){let R=[],A=f/n,E=0;f===0&&a===0?E=.5/e:f===n&&c===Math.PI&&(E=-.5/e);for(let k=0;k<=e;k++){let L=k/e;d.x=-t*Math.cos(s+L*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+L*r)*Math.sin(a+A*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),w.push(p.x,p.y,p.z),_.push(L+E,1-A),R.push(h++)}u.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){let A=u[f][R+1],E=u[f][R],k=u[f+1][R],L=u[f+1][R+1];(f!==0||a>0)&&g.push(A,E,L),(f!==n-1||c<Math.PI)&&g.push(E,k,L)}this.setIndex(g),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(w,3)),this.setAttribute("uv",new Me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ys=class i extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new N,d=new N,p=new N;for(let g=0;g<=n;g++)for(let v=0;v<=s;v++){let w=v/s*r,_=g/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(w),d.y=(t+e*Math.cos(_))*Math.sin(w),d.z=e*Math.sin(_),o.push(d.x,d.y,d.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),h.push(v/s),h.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=s;v++){let w=(s+1)*g+v-1,_=(s+1)*(g-1)+v-1,f=(s+1)*(g-1)+v,R=(s+1)*g+v;a.push(w,_,R),a.push(_,f,R)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var nn=class extends Li{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function La(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function h_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var cr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sc=class extends cr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:r=t,o=2*e-n;break;case dh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fh:a=t,c=2*n-e;break;case dh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,v=(n-e)/(s-e),w=v*v,_=w*v,f=-p*_+2*p*w-p*v,R=(1+p)*_+(-1.5-2*p)*w+(-.5+p)*v+1,A=(-1-g)*_+(1.5+g)*w+.5*v,E=g*_-g*w;for(let k=0;k!==o;++k)r[k]=f*a[u+k]+R*a[h+k]+A*a[c+k]+E*a[d+k];return r}},rc=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*d+a[c+p]*u;return r}},ac=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=La(e,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:La(t.times,Array),values:La(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case za:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&h_(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let d=o*n,p=d-n,g=d+n;for(let v=0;v!==n;++v){let w=e[d+v];if(w!==e[p+v]||w!==e[g+v]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,p=a*n;for(let g=0;g!==n;++g)e[p+g]=e[d+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ol;var vs=class extends ei{constructor(t,e,n){super(t,e,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=za;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends ei{};oc.prototype.ValueTypeName="color";var lc=class extends ei{};lc.prototype.ValueTypeName="number";var cc=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Ji.slerpFlat(r,0,a,h-o,a,h,c);return r}},Qa=class extends ei{InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ei{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=za;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends ei{};hc.prototype.ValueTypeName="vector";var hu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},uc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=h.length;d<p;d+=2){let g=h[d],v=h[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null}}},u_=new uc,kr=class{constructor(t){this.manager=t!==void 0?t:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var fc=class extends kr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Dr("img");function c(){u(),hu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(d){u(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var to=class extends kr{constructor(t){super(t)}load(t,e,n,s){let r=new Pn,a=new fc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Vr=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hr=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ko=new Be,uu=new N,fu=new N,eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var du=new Be,Rr=new N,jo=new N,dc=class extends eo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rr),jo.copy(n.position),jo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jo),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}},hr=class extends Vr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pc=class extends eo{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ec="\\[\\]\\.:\\/",f_=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",d_="[^"+Ec.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Tc),m_=/(WCOD+)?/.source.replace("WCOD",d_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),x_=new RegExp("^"+p_+m_+g_+__+"$"),y_=["material","materials","bones","map"],mc=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f_,"")}static parseTrackName(t){let e=x_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);y_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=mc;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P_=new Float32Array(1);var pu=new Be,no=class{constructor(t,e,n=0,s=1/0){this.ray=new Ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(t,e=!0,n=[]){return gc(t,this,n,e),n.sort(mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gc(t[s],this,n,e);return n.sort(mu),n}};function mu(i,t){return i.distance-t.distance}function gc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)gc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ao={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},Bu=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function Vu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Je,h=0;for(let u=0;u<i.length;++u){let d=i[u],p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(d.morphAttributes[g])}if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,g,u),h+=g}}if(e){let u=0,d=[];for(let p=0;p<i.length;++p){let g=i[p].index;for(let v=0;v<g.count;++v)d.push(g.getX(v)+u);u+=i[p].attributes.position.count}c.setIndex(d)}for(let u in r){let d=ku(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){let g=[];for(let w=0;w<a[u].length;++w)g.push(a[u][w][p]);let v=ku(g);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(v)}}return c}function ku(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Tn(a,e,n),c=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let d=c/e;for(let p=0,g=u.count;p<g;p++)for(let v=0;v<e;v++){let w=u.getComponent(p,v);o.setComponent(p+d,v,w)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var An="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",Hu={},Ot=(i,t)=>t?new nn(Object.assign({color:i},t)):Hu[i]||(Hu[i]=new nn({color:i})),Oe=(i,t)=>new qe(Object.assign({color:i},t)),Gu={},v_=i=>Gu[i]||(Gu[i]=new nn({color:i,flatShading:!0}));function _e(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new or(n);return s.colorSpace=on,s.anisotropy=4,s}function oo(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var lo=_e(128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)});function bt(i,t,e,n,s,r,a,o,c){let h=new wt(new $e(t,e,n),typeof s=="string"?Ot(s):s);return h.position.set(r,a,o),c&&(h.rotation.y=c),i.add(h),h}function jt(i,t,e,n,s,r,a,o,c){let h=new wt(new Ki(t,e,n,c||16),typeof s=="string"?Ot(s):s);return h.position.set(r,a,o),i.add(h),h}function Ae(i,t,e,n,s,r,a,o,c,h){let u=new wt(new ui(t,h||16,h?h*.7|0:12),typeof e=="string"?Ot(e):e);return u.position.set(n,s,r),u.scale.set(a||1,o||1,c||1),i.add(u),u}function Gn(i,t,e,n,s,r,a){let o=new wt(new lr(t,1),v_(e));return o.position.set(n,s,r),a&&o.scale.set(a[0],a[1],a[2]),i.add(o),o}function dr(i,t,e,n,s,r,a){let o=new hi(new ti({map:lo,blending:gs,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,n),i.add(o),i.userData.glows=(i.userData.glows||[]).concat(o),o}function pr(i,t,e,n,s,r,a,o,c){let h=new wt(new Ze(t,e),new qe({map:n,transparent:!0,side:c?cn:void 0,alphaTest:.05}));return h.position.set(s,r,a),o&&(h.rotation.y=o),i.add(h),h}function Xr(i,t,e,n,s,r,a){let o=new wt(new ja(t.map(c=>new qt(c[0],c[1])),a||20),typeof e=="string"?Ot(e):e);return o.position.set(n,s,r),i.add(o),o}var Ui="#a8703f",_n="#6b3f1f",mr="#d4a56a",un="#3a2214",M_="#d23a28",b_="#f3e2bd",Wu={};function Ac(i,t,e,n,s,r){let a=i+t+e+n+s;return Wu[a]||(Wu[a]=_e(n,s,o=>{o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let c=[...i];o.font=`900 ${r}px ${An}`,s>n?c.forEach((h,u)=>o.fillText(h,n/2,s/(c.length+1)*(u+1))):o.fillText(i,n/2,s/2+2,n-10)}))}var Xu=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],Rc=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.78,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.36,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.05,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Zt={};Rc.forEach(i=>{i.L=i.L||"main",i.solid===void 0&&(i.solid=i.L==="main"?1:0),Zt[i.k]=i});var Cc=[["wood","\u539F\u6728\u5730\u677F",0],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],Ic=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],ee={};ee.table=i=>{bt(i,1.9,.08,.9,Ui,0,.74,0),bt(i,1.84,.03,.84,mr,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])bt(i,.08,.72,.08,_n,t,.36,e);bt(i,1.6,.06,.04,_n,0,.55,-.36),bt(i,1.6,.06,.04,_n,0,.55,.36)};ee.chabu=i=>{jt(i,.46,.46,.06,Ui,0,.34,0,28),jt(i,.44,.44,.02,mr,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;bt(i,.07,.32,.07,_n,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};ee.counter=i=>{bt(i,1.96,1,.8,_n,0,.5,0),bt(i,2.04,.08,.96,mr,0,1.03,.04),bt(i,1.9,.12,.04,Ui,0,.14,.41);for(let t=-2;t<=2;t++)bt(i,.04,.8,.02,"#5a3216",t*.38,.52,.405)};ee.chair=i=>{bt(i,.48,.06,.48,Ui,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])bt(i,.05,.46,.05,_n,t,.23,e);bt(i,.48,.5,.05,Ui,0,.74,-.2),bt(i,.4,.06,.03,mr,0,.86,-.18)};ee.stool=i=>{jt(i,.22,.2,.07,"#c23a2a",0,.76,0,18),jt(i,.03,.03,.72,"#3a3a40",0,.38,0,8),jt(i,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new wt(new ys(.13,.015,6,18),Ot("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,i.add(t)};ee.zabu=i=>{let t=bt(i,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new $e(.62,.1,.62,2,1,2),Ae(i,.05,"#e9c34a",0,.12,0)};ee.bench=i=>{bt(i,1.9,.07,.42,Ui,0,.44,0);for(let t of[-.8,.8])bt(i,.07,.42,.36,_n,t,.21,0);bt(i,1.6,.05,.04,_n,0,.2,0)};ee.register=i=>{bt(i,.9,.95,.7,_n,0,.475,0),bt(i,.96,.06,.78,mr,0,.98,0),bt(i,.5,.22,.36,"#2b2b33",0,1.12,-.05),bt(i,.42,.1,.3,"#3c3c46",0,1.26,-.12),bt(i,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=Oe("#9fe0b6"),Ae(i,.07,"#e9b830",.3,1.06,.2),Ae(i,.05,"#e9b830",.22,1.04,.26)};ee.lantern=i=>{jt(i,.025,.025,1.7,un,0,.85,0,6),bt(i,.5,.04,.04,un,.2,1.68,0),jt(i,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new Te;t.position.set(.38,1.3,0),i.add(t);let e=Ae(t,.22,Oe("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,jt(t,.14,.14,.06,un,0,.3,0,12),jt(t,.14,.14,.06,un,0,-.3,0,12),pr(t,.2,.34,Ac("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),jt(t,.01,.01,.2,un,0,.42,0,4),dr(t,0,0,.1,1.8,.55),i.userData.swing=t};ee.andon=i=>{for(let e of[-.17,.17])for(let n of[-.17,.17])bt(i,.04,.9,.04,un,e,.45,n);let t=bt(i,.32,.5,.32,Oe("#fff1c8"),0,.55,0);t.userData.lit=1,bt(i,.4,.04,.4,un,0,.82,0),bt(i,.4,.04,.4,un,0,.29,0);for(let e of[-.06,.06])bt(i,.005,.48,.33,un,e,.55,0);dr(i,0,.55,0,2.2,.6)};ee.stonel=i=>{let t="#9a9590";bt(i,.5,.12,.5,t,0,.06,0),jt(i,.1,.13,.5,t,0,.37,0,8),bt(i,.42,.1,.42,t,0,.66,0);let e=bt(i,.3,.28,.3,Oe("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])bt(i,.06,.3,.06,t,s[0],.85,s[1]);let n=new wt(new Di(.45,.3,4),Ot(t));n.rotation.y=Math.PI/4,n.position.y=1.14,i.add(n),Ae(i,.07,t,0,1.33,0),dr(i,0,.85,0,1.6,.55)};ee.chochin=i=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let n=0;n<5;n++){let s=-.8+n*.4,r=2.25-Math.sin(n/4*Math.PI)*.25,a=Ae(i,.12,Oe(t[n]),s,r,.18,1,1.25,1,12);a.userData.lit=1,dr(i,s,r,.26,.8,.35)}let e=[];for(let n=0;n<=8;n++){let s=n/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let n=0;n<8;n++){let[s,r]=e[n],[a,o]=e[n+1],c=bt(i,Math.hypot(a-s,o-r),.015,.015,un,(s+a)/2,(r+o)/2,.18);c.rotation.z=Math.atan2(o-r,a-s)}};ee.tanuki=i=>{let t="#8a6a4a",e="#e8d8b8";Ae(i,.3,t,0,.38,0,1,1.05,.95),Ae(i,.2,e,0,.36,.16,1,1.1,.5),Ae(i,.22,t,0,.82,.02);for(let r of[-.13,.13])Ae(i,.06,t,r,1,0),Ae(i,.055,un,r*.7,.85,.19,1,.8,.5),Ae(i,.02,"#fff",r*.7+.01,.86,.21);Ae(i,.045,un,0,.78,.22),bt(i,.34,.06,.3,"#5a4a3a",0,1.03,0),jt(i,.16,.2,.04,"#5a4a3a",0,1,0,14);let n=jt(i,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);n.rotation.z=-.3;let s=bt(i,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Ae(i,.15,t,-.2,.12,.12,1,.6,1),Ae(i,.15,t,.2,.12,.12,1,.6,1),Ae(i,.12,t,.1,.25,-.3,1,.7,1.4)};ee.barrel=i=>{Xr(i,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new wt(new ys(.34,.025,6,22),Ot("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,i.add(e)}pr(i,.36,.36,Ac("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),jt(i,.3,.3,.02,mr,0,.91,0,22)};ee.crates=i=>{let t=(e,n,s)=>{let r=new Te;r.position.y=e,r.rotation.y=n,i.add(r),bt(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)jt(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),jt(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};ee.byobu=i=>{let t=_e(256,128,(e,n,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,n,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*n,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let n=new Te;n.position.set(-.72+e*.48,0,e%2?.08:-.08),n.rotation.y=e%2?.3:-.3,i.add(n),bt(n,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new wt(new Ze(.42,1.4),new qe({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),n.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,n.add(r)}};ee.shelf=i=>{bt(i,1.9,1.8,.42,_n,0,.9,-.1),bt(i,1.8,1.7,.02,"#2a1408",0,.9,.09);for(let n of[.35,.8,1.25,1.65])bt(i,1.8,.04,.4,Ui,0,n,-.08);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let n of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;jt(i,.055,.065,a,r,-.72+s*.29,n+a/2,-.06,10),jt(i,.02,.03,.09,r,-.72+s*.29,n+a+.04,-.06,6),e%2&&bt(i,.1,.08,.01,b_,-.72+s*.29,n+a*.5,0)}};ee.hibachi=i=>{Xr(i,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),jt(i,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let n=Gn(i,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);n.material=Oe("#ff7a2a"),n.userData.lit=1}jt(i,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=jt(i,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,dr(i,0,.55,0,1.4,.6,"#ff8a3a")};ee.tank=i=>{bt(i,.7,.55,.5,_n,0,.275,0);let t=bt(i,.68,.5,.48,Ot("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,bt(i,.62,.4,.42,Oe("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,bt(i,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let n=new Te;n.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),i.add(n),Ae(n,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new wt(new Di(.04,.07,6),Ot("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,n.add(s),i.userData.fish=(i.userData.fish||[]).concat(n)}Gn(i,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),Gn(i,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};ee.jukebox=i=>{bt(i,.7,.7,.5,_n,0,.35,0),bt(i,.74,.05,.54,Ui,0,.72,0),jt(i,.24,.24,.02,"#141414",-.05,.76,.02,28),jt(i,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=bt(i,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new wt(new Di(.22,.4,18,1,!0),Ot("#d8a83a",{side:cn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),i.add(e),jt(i,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),bt(i,.5,.3,.02,"#2a1408",0,.35,.26),i.userData.spin=i.children[2]};ee.pine=i=>{jt(i,.2,.16,.14,"#3a5a8a",0,.07,0,6),jt(i,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=jt(i,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,Gn(i,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),Gn(i,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),Gn(i,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};ee.bamboo=i=>{jt(i,.22,.18,.32,"#e8e0d0",0,.16,0,18),jt(i,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,n=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;jt(i,.025,.025,s,"#6a9a3a",e,.3+s/2,n,8);for(let r=1;r<4;r++)jt(i,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,n,8);for(let r=0;r<3;r++){let a=new wt(new Ze(.32,.06),new nn({color:"#5a9a3a",side:cn}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),n+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),i.add(a)}}};ee.sakura=i=>{jt(i,.26,.22,.36,"#2a3a5a",0,.18,0,8),jt(i,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=jt(i,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=jt(i,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let n=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],c)=>Gn(i,o,n[c%3],s,r,a,[1,.75,1])),i.userData.petals=1};ee.ajisai=i=>{jt(i,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)Gn(i,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let n=e*1.25;Gn(i,.12,t[e%4],Math.cos(n)*.12,.5+e%2*.08,Math.sin(n)*.12)}};ee.scroll=i=>{let t=_e(96,256,(e,n,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,n,s),e.fillStyle="#c8b890",e.fillRect(0,0,n,30),e.fillRect(0,s-30,n,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${An}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,n/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});bt(i,.5,.04,.04,un,0,2.25,.04),bt(i,.5,.04,.04,un,0,1.02,.04),pr(i,.42,1.2,t,0,1.63,.03)};ee.menu=i=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let n=Ac(t[e],"#e9d3a4","#2a1408",64,256,36);bt(i,.22,.82,.03,_n,-.7+e*.28,1.75,.015),pr(i,.18,.76,n,-.7+e*.28,1.75,.035)}bt(i,1.8,.06,.05,un,0,2.2,.03)};ee.clock=i=>{let t=_e(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${An}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let c=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(c)*46,64+Math.sin(c)*46)}});bt(i,.5,.7,.1,_n,0,1.95,.05),jt(i,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=pr(i,.4,.4,t,0,2.05,.105),n=bt(i,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=bt(i,.01,.17,.01,"#1a1a1a",0,2.1,.115);i.userData.hands=[n,s],i.userData.handY=2.05;let r=new Te;r.position.set(0,1.75,.07),i.add(r),bt(r,.01,.2,.01,"#c8a040",0,-.1,0),i.userData.swing=r};ee.mado=i=>{let t=_e(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let c=0;c<30;c++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let c=0;c<14;c++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new wt(new xs(.62,32),new qe({map:t}));e.position.set(0,1.6,.03),i.add(e);let n=new wt(new ys(.64,.06,8,32),Ot(_n));n.position.set(0,1.6,.04),i.add(n);for(let s of[-.2,.2])bt(i,.02,1.2,.02,un,s,1.6,.05);bt(i,1.2,.02,.02,un,0,1.6,.05),dr(i,0,1.6,.15,1.6,.25,"#b8c8ff")};ee.fuji=i=>{let t=_e(256,160,(e,n,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,n,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,n,20)});bt(i,1.6,1,.05,"#2a1408",0,1.7,.025),pr(i,1.5,.9,t,0,1.7,.055)};ee.maneki=i=>{let t="#f8f4ec";Ae(i,.12,t,0,.13,0,1,1.1,.9),Ae(i,.1,t,0,.32,.01);for(let n of[-.06,.06]){let s=new wt(new Di(.035,.06,4),Ot(t));s.position.set(n,.42,0),i.add(s),Ae(i,.012,"#1a1a1a",n*.6,.34,.09)}Ae(i,.02,"#f08a9a",0,.31,.1),bt(i,.16,.025,.05,M_,0,.23,.06),Ae(i,.02,"#e9b830",0,.21,.1);let e=new Te;e.position.set(.09,.3,.02),i.add(e),Ae(e,.035,t,0,.07,0,1,1.6,1),i.userData.wave=e,Ae(i,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};ee.daruma=i=>{Ae(i,.14,"#d23a28",0,.15,0,1,1.1,1),Ae(i,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Ae(i,.016,"#1a1a1a",t,.2,.125);bt(i,.08,.012,.01,"#1a1a1a",0,.155,.13)};ee.beer=i=>{jt(i,.07,.065,.2,Ot("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),jt(i,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new wt(new ys(.05,.012,6,12,Math.PI),Ot("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,i.add(t)};ee.sake=i=>{bt(i,.34,.02,.2,_n,0,.01,0),Xr(i,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])jt(i,.03,.025,.04,"#f0ece0",t,.04,0,10)};ee.yakitori=i=>{jt(i,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new Te;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,i.add(e),bt(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let n=0;n<4;n++)Gn(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+n*.05,.005,0,[1.1,.9,1])}};ee.sushi=i=>{bt(i,.34,.03,.16,Ui,0,.03,0);for(let t=0;t<4;t++)bt(i,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),bt(i,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};ee.ramen=i=>{Xr(i,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),jt(i,.12,.12,.01,"#d89a4a",0,.09,0,20),Ae(i,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),bt(i,.05,.01,.04,"#8a4a2a",.04,.1,-.02),bt(i,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=bt(i,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};ee.edamame=i=>{jt(i,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)Gn(i,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};ee.vase=i=>{Xr(i,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),jt(i,.006,.006,.25,"#4a7a3a",0,.36,0,4),Ae(i,.035,"#f0e0e8",0,.5,0),Ae(i,.03,"#e898b0",.02,.48,.02)};ee.tatami=i=>{let t=_e(256,256,(n,s,r)=>{n.fillStyle="#c8c47a",n.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)n.fillStyle=a%6?"#bcb86e":"#d2ce86",n.fillRect(0,a,s,1);n.fillStyle="#2a3a2a",n.fillRect(0,0,s,10),n.fillRect(0,r-10,s,10),n.fillRect(0,124,s,8)}),e=new wt(new $e(1.96,.04,1.96),[Ot("#2a3a2a"),Ot("#2a3a2a"),new nn({map:t}),Ot("#2a3a2a"),Ot("#2a3a2a"),Ot("#2a3a2a")]);e.position.y=.02,i.add(e)};ee.rug=i=>{let t=_e(256,256,(n,s,r)=>{n.fillStyle="#23315c",n.fillRect(0,0,s,r),n.strokeStyle="#e8e0d0",n.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let c=26+a*51,h=26+o*51;n.beginPath();for(let u=0;u<3;u++)n.arc(c,h,8+u*7,Math.PI,0);n.stroke()}n.strokeStyle="#c8a040",n.lineWidth=6,n.strokeRect(6,6,s-12,r-12)}),e=new wt(new xs(.96,40),new nn({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,i.add(e)};ee.step=i=>{Gn(i,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function S_(i){let t=new Set,e=i.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),i.updateMatrixWorld(!0);let n=new Map;i.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)});for(let s of n.values())if(!(s.length<2))try{let r=s.map(c=>{let h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let u of Object.keys(h.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&h.deleteAttribute(u);return h.attributes.uv?(h.applyMatrix4(c.matrixWorld),h):null});if(r.some(c=>!c))continue;let a=Vu(r,!1);if(!a)continue;let o=new wt(a,s[0].material);i.add(o),s.forEach(c=>{c.parent.remove(c),c.geometry.dispose()}),r.forEach(c=>c.dispose())}catch{}}function Pc(i){let t=new Te,e=ee[i];return e?e(t):bt(t,.8,.8,.8,"#f0f",0,.4,0),S_(t),t.traverse(n=>{n.isMesh&&(n.userData.item=t)}),t}var Rn=(i,t)=>i+Math.random()*(t-i),ni=(i,t,e)=>Math.max(t,Math.min(e,i));var Ni=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},ze=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Lc=new Uint8Array(256).map((i,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),ji=i=>"\xA5"+Math.round(i).toLocaleString("en-US"),Xt=10,ot=8,sn=3.1,Cn=4,In=6,pi=(Cn+In)/2,fi=-10,di=Xt+10,qu=ot+9,Yu=-4,$u=Xt+4,w_=ot+1,Uc=ot+4,xn={x:7.3,z:ot+1.4},co=new Set;for(let i=ot;i<Uc+1;i++)for(let t=Cn;t<In;t++)co.add(t+","+i);co.add("7,"+(ot+1));var Oc=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function qr(i){let t=0,e={};for(let[n]of i.it||[]){let s=Zt[n];s&&(e[n]=(e[n]||0)+1,t+=e[n]<=2?s.c:s.c*.4)}return i.fl&&i.fl!=="wood"&&(t+=6),i.wa&&i.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function Nc(i){let t=0;return Oc.forEach((e,n)=>{i>=e[0]&&(t=n)}),t}var Fc=i=>Math.min(8e4,3e3+i*400);function Zu(i){return{v:1,name:i||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function E_(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var Dc={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},T_=["daruma","maneki","beer","vase","pine","sake"],A_=`
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
`;function R_(i){let t=i.cv,e=i.root,n=i.cb||{},s=!!i.own,r=i.data||Zu();if(r.it=(r.it||[]).filter(l=>Zt[l[0]]),r.inv=r.inv||{},r.fo=r.fo||{wood:1},r.wo=r.wo||{tsuchi:1},r.gc=r.gc||{},!document.getElementById("h3css")){let l=document.createElement("style");l.id="h3css",l.textContent=A_,document.head.appendChild(l)}let a=new Za({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!i.test});a.setClearColor(1709366,1);let o=new Or;o.fog=new Ja(3811400,26,80);let c=new ln(40,2,.2,500),h=new to,u=(l,m)=>h.load(l,x=>{x.colorSpace=on,x.anisotropy=4,m&&m(x)}),d=new ui(250,24,16);{let l=[],m=d.attributes.position,x=new te("#121032"),y=new te("#7a4058"),C=new te("#3a2350"),P=new te;for(let G=0;G<m.count;G++){let W=m.getY(G)/250;W>.25?P.copy(C).lerp(x,ni((W-.25)/.55,0,1)):P.copy(y).lerp(C,ni((W+.05)/.3,0,1)),l.push(P.r,P.g,P.b)}d.setAttribute("color",new Me(l,3))}let p=new wt(d,new qe({vertexColors:!0,side:gn,fog:!1,depthWrite:!1}));p.renderOrder=-10,o.add(p);{let l=[],m=Ni(11);for(let y=0;y<300;y++){let C=m()*Math.PI*2,P=.2+m()*1.2,G=230;l.push(Math.cos(C)*Math.cos(P)*G,Math.sin(P)*G,Math.sin(C)*Math.cos(P)*G)}let x=new Je;x.setAttribute("position",new Me(l,3)),p.add(new Br(x,new ar({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let l=_e(128,128,x=>{let y=x.createRadialGradient(64,64,20,64,64,64);y.addColorStop(0,"rgba(255,246,214,1)"),y.addColorStop(.5,"rgba(255,240,200,1)"),y.addColorStop(.52,"rgba(255,230,180,.25)"),y.addColorStop(1,"rgba(255,230,180,0)"),x.fillStyle=y,x.fillRect(0,0,128,128)}),m=new hi(new ti({map:l,fog:!1,depthWrite:!1}));m.scale.set(40,40,1),m.position.set(-90,120,-170),p.add(m)}o.add(new Hr(12103408,5914696,1.15));let g=new Gr(16769208,.7);g.position.set(-6,12,10),o.add(g);let v=new hr(16756832,14,13,1.3);v.position.set(Xt*.3,2.7,ot*.45),o.add(v);let w=new hr(16756832,14,13,1.3);w.position.set(Xt*.72,2.7,ot*.55),o.add(w);let _=new hr(16752720,10,9,1.4);_.position.set(pi,2.4,ot+1.4),o.add(_);let f=_e(64,64,l=>{let m=l.createRadialGradient(32,32,2,32,32,32);m.addColorStop(0,"rgba(0,0,0,.7)"),m.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=m,l.fillRect(0,0,64,64)}),R=(l,m,x)=>{let y=l.clone();return y.wrapS=y.wrapT=er,y.repeat.set(m,x),y.needsUpdate=!0,y};function A(l,m,x,y,C,P,G,W){let K=new wt(new $e(l,m,x),y);return K.position.set(C,P,G),(W||o).add(K),K}function E(l,m,x,y,C,P,G){let W=new hi(new ti({map:lo,blending:gs,transparent:!0,depthWrite:!1,opacity:C}));return G&&W.material.color.set(G),W.scale.set(y,y,1),W.position.set(l,m,x),(P||o).add(W),W}let k={wood:()=>_e(256,256,(l,m,x)=>{let y=Ni(4);for(let C=0;C<8;C++){let P=y();l.fillStyle=`hsl(28,${42+P*10}%,${44+P*8}%)`,l.fillRect(0,C*32,m,32),l.fillStyle="rgba(60,30,10,.35)",l.fillRect(0,C*32,m,2),l.fillRect(y()*256|0,C*32,2,32);for(let G=0;G<6;G++)l.fillStyle="rgba(90,50,20,.12)",l.fillRect(y()*m,C*32+6+y()*20,40+y()*60,2)}}),dark:()=>_e(256,256,(l,m,x)=>{let y=Ni(8);for(let C=0;C<8;C++){let P=y();l.fillStyle=`hsl(20,${30+P*10}%,${22+P*7}%)`,l.fillRect(0,C*32,m,32),l.fillStyle="rgba(0,0,0,.4)",l.fillRect(0,C*32,m,2),l.fillRect(y()*256|0,C*32,2,32);for(let G=0;G<5;G++)l.fillStyle="rgba(255,220,180,.05)",l.fillRect(y()*m,C*32+6+y()*20,40+y()*60,2)}}),tatami:()=>_e(256,256,(l,m,x)=>{for(let y=0;y<2;y++){let C=y*128;l.fillStyle="#c4c078",l.fillRect(C,0,128,x);for(let P=0;P<x;P+=3)l.fillStyle=P%6?"#b8b46c":"#cfcb84",l.fillRect(C,P,128,1);l.fillStyle="#2a3a2a",l.fillRect(C,0,6,x),l.fillRect(C+122,0,6,x)}}),stone:()=>_e(256,256,(l,m,x)=>{l.fillStyle="#5a5250",l.fillRect(0,0,m,x);let y=Ni(6);for(let C=0;C<4;C++)for(let P=0;P<4;P++){let G=y()*18|0;l.fillStyle=`rgb(${120+G},${112+G},${104+G})`,l.fillRect(P*64+3+C%2*8,C*64+3,58,58)}}),check:()=>_e(256,256,(l,m,x)=>{for(let y=0;y<4;y++)for(let C=0;C<4;C++)l.fillStyle=(C+y)%2?"#2a3a36":"#d8c8a0",l.fillRect(C*64,y*64,64,64);l.strokeStyle="rgba(0,0,0,.2)",l.lineWidth=2;for(let y=0;y<=4;y++)l.beginPath(),l.moveTo(y*64,0),l.lineTo(y*64,x),l.moveTo(0,y*64),l.lineTo(m,y*64),l.stroke()})};function L(l,m){let y=Math.round(m*64),C=Math.round(sn*64);return _e(y,C,P=>{let G=Ni(m*7|0);if(l==="plank")for(let K=0;K<y;K+=22){let pt=G();P.fillStyle=`hsl(28,${36+pt*8}%,${40+pt*8}%)`,P.fillRect(K,0,22,C),P.fillStyle="rgba(40,20,10,.4)",P.fillRect(K,0,2,C)}else if(l==="red"){P.fillStyle="#b8402e",P.fillRect(0,0,y,C);for(let K=0;K<300;K++)P.fillStyle=G()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",P.fillRect(G()*y,G()*C,8,8);P.fillStyle="#5a2a14";for(let K=0;K<y;K+=128)P.fillRect(K,0,8,C)}else if(l==="ai"){P.fillStyle="#26365e",P.fillRect(0,0,y,C),P.strokeStyle="rgba(230,224,208,.5)",P.lineWidth=2;for(let K=0;K<C;K+=24)for(let pt=K/24%2*12;pt<y;pt+=24)P.beginPath(),P.arc(pt,K,9,Math.PI,0),P.stroke()}else if(l==="sakura"){P.fillStyle="#f6e6e4",P.fillRect(0,0,y,C);for(let K=0;K<y*C/900;K++){let pt=G()*y,Re=G()*C;P.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][K%3];for(let ae=0;ae<5;ae++){let Dt=ae/5*Math.PI*2;P.beginPath(),P.ellipse(pt+Math.cos(Dt)*4,Re+Math.sin(Dt)*4,3.5,2,Dt,0,7),P.fill()}}}else{P.fillStyle="#e8d4ae",P.fillRect(0,0,y,C);for(let K=0;K<y*C/60;K++)P.fillStyle=G()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",P.fillRect(G()*y,G()*C,3,3);P.fillStyle="#6b3f1f";for(let K=0;K<y;K+=64*2.5)P.fillRect(K,0,10,C)}let W=C-.9*64;P.fillStyle="#5a3218",P.fillRect(0,W,y,.9*64),P.fillStyle="rgba(0,0,0,.25)";for(let K=0;K<y;K+=28)P.fillRect(K,W,2,.9*64);P.fillStyle="#3a1e0c",P.fillRect(0,W-6,y,8),P.fillRect(0,0,y,10)})}let U=_e(256,256,(l,m,x)=>{l.fillStyle="#4a4246",l.fillRect(0,0,m,x);let y=Ni(3);for(let C=0;C<4;C++)for(let P=0;P<4;P++){let G=(y()*16|0)-8;l.fillStyle=`rgb(${96+G},${86+G},${84+G})`,l.fillRect(P*64+2,C*64+2,60,60)}}),O=_e(256,256,(l,m,x)=>{l.fillStyle="#2c2830",l.fillRect(0,0,m,x);let y=Ni(5);for(let C=0;C<700;C++){let P=34+(y()*22|0);l.fillStyle=`rgb(${P},${P-3},${P+4})`,l.fillRect(y()*m,y()*x,2,2)}});{let l=new wt(new Ze(600,600),Ot("#1c1826"));l.rotation.x=-Math.PI/2,l.position.y=-.04,o.add(l)}{let l=di-fi+30,m=(fi+di)/2,x=new wt(new Ze(l,6.2),Ot("#ffffff",{map:R(U,l/3,6.2/3)}));x.rotation.x=-Math.PI/2,x.position.set(m,.005,ot+3.1),o.add(x);let y=new wt(new Ze(l,6),Ot("#ffffff",{map:R(O,l/6,1)}));y.rotation.x=-Math.PI/2,y.position.set(m,0,ot+9.2),o.add(y);for(let P=fi-14;P<di+14;P+=3.4)A(1.7,.02,.14,Oe("#cfc8b4"),P,.02,ot+9.2);A(l,.16,.2,Ot("#7a6e66"),m,.08,ot+6.15);let C=new wt(new Ze(l,5),Ot("#ffffff",{map:R(U,l/3,5/3)}));C.rotation.x=-Math.PI/2,C.position.set(m,.005,ot+14.7),o.add(C)}let T=new nn({color:"#ffffff"}),S=new wt(new Ze(Xt,ot),T);S.rotation.x=-Math.PI/2,S.position.set(Xt/2,.02,ot/2),o.add(S);function F(l){T.map&&T.map.dispose();let m=(k[l]||k.wood)();m.wrapS=m.wrapT=er,m.repeat.set(Xt/2,ot/2),T.map=m,T.needsUpdate=!0}A(Xt+.4,.12,ot+.4,Ot("#2a1810"),Xt/2,-.075,ot/2);let Z={back:new nn,left:new nn,right:new nn,front:new nn},J=_e(256,200,(l,m,x)=>{l.fillStyle="#5a3a24",l.fillRect(0,0,m,x);for(let y=0;y<m;y+=16)l.fillStyle=y%32?"#4a2e1c":"#6a4630",l.fillRect(y,0,14,x);l.fillStyle="#2a1810",l.fillRect(0,x-40,m,40)}),tt=new nn({map:R(J,3,1)}),nt=Ot("#3a2214"),j={};function ht(l,m,x,y,C,P){let G=new Te;G.position.set(y,0,C),o.add(G);let W=new wt(new $e(m,sn,x),P);return W.position.y=sn/2,G.add(W),j[l]=j[l]||[],j[l].push(G),G}ht("back",Xt+.4,.2,Xt/2,-.1,[nt,nt,nt,nt,Z.back,tt]),ht("left",.2,ot,-.1,ot/2,[Z.left,tt,nt,nt,nt,nt]),ht("right",.2,ot,Xt+.1,ot/2,[tt,Z.right,nt,nt,nt,nt]);let et=_e(640,200,(l,m,x)=>{l.fillStyle="#6a4228",l.fillRect(0,0,m,x);for(let C=0;C<m;C+=14)l.fillStyle=C%28?"#5a3620":"#74482c",l.fillRect(C,0,12,x);let y=C=>{l.fillStyle="#ffd98a",l.fillRect(C,56,128,70),l.strokeStyle="#2a1408",l.lineWidth=6,l.strokeRect(C,56,128,70),l.lineWidth=3;for(let P=1;P<4;P++)l.beginPath(),l.moveTo(C+P*32,56),l.lineTo(C+P*32,126),l.stroke();l.beginPath(),l.moveTo(C,91),l.lineTo(C+128,91),l.stroke()};y(64),y(448),l.fillStyle="#2a1810",l.fillRect(0,x-40,m,40)}),Mt=new qe({map:et}),Tt=(l,m)=>{let x=new qe({map:et.clone()});return x.map.needsUpdate=!0,x.map.repeat.set(m-l,1),x.map.offset.set(l,0),x};ht("front",Cn+.2,.2,(Cn-.2)/2,ot+.1,[nt,nt,nt,nt,Tt(0,(Cn+.2)/(Xt+.4)),Z.front]),ht("front",Xt-In+.2,.2,(In+Xt+.2)/2,ot+.1,[nt,nt,nt,nt,Tt((In+.2)/(Xt+.4),1),Z.front]);{let l=new Te;l.position.set(pi,0,ot+.1),o.add(l),A(In-Cn,sn-2.35,.2,Ot("#4a2a14"),0,2.35+(sn-2.35)/2,0,l),j.front.push(l)}function zt(l){let m={back:Xt+.4,left:ot,right:ot,front:Xt+.4};for(let x in Z){let y=Z[x];y.map&&y.map.dispose(),y.map=L(l,m[x]),y.needsUpdate=!0}}let $t=new Te;o.add($t),j.front.push($t);let ne=Ot("#3a2214");A(.22,2.45,.34,ne,Cn+.05,1.22,ot+.14,$t),A(.22,2.45,.34,ne,In-.05,1.22,ot+.14,$t),A(In-Cn+.4,.24,.38,ne,pi,2.42,ot+.14,$t);let st=new Te;st.position.set(pi,2.32,ot+.3),$t.add(st);let ft=_e(256,140,(l,m,x)=>{for(let y=0;y<3;y++){let C=4+y*84;l.fillStyle="#23315c",l.fillRect(C,0,80,x-6),l.fillStyle="rgba(0,0,0,.22)",l.fillRect(C,x-16,80,10)}l.fillStyle="#f3e6c8",l.textAlign="center",l.textBaseline="middle",l.font=`900 50px ${An}`,["\u55B6","\u696D","\u4E2D"].forEach((y,C)=>l.fillText(y,44+C*84,56))}),It=new wt(new Ze(1.95,1.05),new qe({map:ft,transparent:!0,side:cn,alphaTest:.05}));It.position.y=-.52,st.add(It);let gt=document.createElement("canvas");gt.width=640,gt.height=140;let Gt=new or(gt);Gt.colorSpace=on,Gt.anisotropy=4;function Jt(){let l=gt.getContext("2d"),m=640,x=140;l.clearRect(0,0,m,x),l.fillStyle="#f3e2bd",l.strokeStyle="#2a1810",l.lineWidth=10,oo(l,6,6,m-12,x-12,16),l.fill(),l.stroke(),l.fillStyle="#3a1e0c",l.textAlign="center",l.textBaseline="middle";let y=72,C=r.name||"";for(l.font=`900 ${y}px ${An}`;l.measureText(C).width>m-60&&y>24;)y-=2,l.font=`900 ${y}px ${An}`;l.fillText(C,m/2,x/2+4),Gt.needsUpdate=!0}Jt();{let l=new wt(new $e(3.6,.76,.12),[ne,ne,ne,ne,new qe({map:Gt}),ne]);l.position.set(pi,2.86,ot+.34),$t.add(l)}let re=[];for(let l of[Cn-.45,In+.45]){let m=new Te;m.position.set(l,1.95,ot+.45),$t.add(m);let x=new wt(new ui(.28,16,12),Oe("#e2452f"));x.scale.y=1.3,m.add(x),A(.26,.06,.26,Oe("#2a1810"),0,.38,0,m),A(.26,.06,.26,Oe("#2a1810"),0,-.38,0,m),re.push(E(0,0,.12,2.3,.55,m))}let we=new Te;o.add(we);{let l=_e(128,128,(P,G,W)=>{P.fillStyle="#2c3044",P.fillRect(0,0,G,W);for(let K=0;K<W;K+=16){P.fillStyle="#3a4058",P.fillRect(0,K,G,3);for(let pt=K/16%2*16;pt<G;pt+=32)P.fillStyle="#20242f",P.fillRect(pt,K,2,16)}}),m=new nn({map:R(l,6,3)}),x=Math.hypot(ot/2+.9,1.6);for(let P of[-1,1]){let G=new wt(new $e(Xt+1.6,.14,x),m);G.position.set(Xt/2,sn+1.5,ot/2+P*(ot/4+.45)),G.rotation.x=P*Math.atan2(1.6,ot/2+.9),we.add(G)}let y=new wt(new $e(Xt+1.7,.2,.3),Ot("#1c1f2a"));y.position.set(Xt/2,sn+2.32,ot/2),we.add(y);for(let P of[-.2,Xt+.2]){let G=new Je;G.setAttribute("position",new Me([P,sn,-.2,P,sn,ot+.2,P,sn+2.32,ot/2,P,sn,-.2,P,sn+.7,-.9,P,sn+2.32,ot/2,P,sn,ot+.2,P,sn+.7,ot+.9,P,sn+2.32,ot/2],3)),G.computeVertexNormals(),we.add(new wt(G,new nn({color:"#4a2e1c",side:cn})))}for(let P of[-.1,ot+.1]){let G=new wt(new $e(Xt+.4,1,.2),tt);G.position.set(Xt/2,sn+.5,P),we.add(G)}let C=new wt(new $e(Xt+1.4,.18,1.3),Ot("#2c3044"));C.position.set(Xt/2,sn+.72,ot+.75),C.rotation.x=.25,we.add(C)}let de=[21,33].map(l=>_e(128,256,(m,x,y)=>{let C=Ni(l);m.fillStyle="#1b1636",m.fillRect(0,0,x,y);for(let P=0;P<16;P++)for(let G=0;G<8;G++)m.fillStyle=C()<.33?C()<.5?"#ffd98a":"#ffbe68":"#272043",m.fillRect(G*16+3,P*16+3,10,10)})),ke=[];function V(l,m,x,y,C,P){let G=m-l,W=(l+m)/2,K=new Te;K.position.set(W,0,0),o.add(K),ke.push(K),A(G-.2,x,ot+1,Ot(y),0,x/2,ot/2-.4,K);let pt=_e(Math.round(G*40),Math.round(x*40),(Dt,Ee,Ve)=>{Dt.fillStyle=y,Dt.fillRect(0,0,Ee,Ve);for(let bn=0;bn<Ee;bn+=12)Dt.fillStyle="rgba(0,0,0,.12)",Dt.fillRect(bn,0,2,Ve);Dt.fillStyle="#ffcf7a",Dt.fillRect(Ee*.18,Ve-2.2*40,Ee*.64,1.6*40),Dt.strokeStyle="#2a1408",Dt.lineWidth=4,Dt.strokeRect(Ee*.18,Ve-2.2*40,Ee*.64,1.6*40);for(let bn=1;bn<4;bn++)Dt.beginPath(),Dt.moveTo(Ee*.18+Ee*.16*bn,Ve-2.2*40),Dt.lineTo(Ee*.18+Ee*.16*bn,Ve-.6*40),Dt.stroke();x>4&&(Dt.fillStyle="#ffd98a",Dt.fillRect(Ee*.25,20,Ee*.2,40),Dt.fillRect(Ee*.55,20,Ee*.2,40))}),Re=new wt(new Ze(G-.2,x),new qe({map:pt}));Re.position.set(0,x/2,ot+.11),K.add(Re);let ae=new wt(new $e(G+.2,.2,1.4),Ot("#2c3044"));if(ae.position.set(0,Math.min(x,3.1),ot+.7),ae.rotation.x=.25,K.add(ae),C){let Dt=_e(256,120,(Ve,bn,xo)=>{for(let q=0;q<3;q++)Ve.fillStyle=P,Ve.fillRect(4+q*84,0,80,xo-6);Ve.fillStyle="#f8ecd8",Ve.textAlign="center",Ve.textBaseline="middle",Ve.font=`900 46px ${An}`,[...C].forEach((q,Ht)=>Ve.fillText(q,44+Ht*84,52))}),Ee=new wt(new Ze(1.8,.85),new qe({map:Dt,transparent:!0,side:cn}));Ee.position.set(0,2.1,ot+.5),K.add(Ee)}E(0,1.2,ot+.6,3.5,.35,K)}V(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),V(-13,-6.6,3.4,"#3a4a4a","",""),V(Xt+.3,Xt+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),V(Xt+6.4,Xt+13,5.4,"#3a3a5a","","");{let l=Ni(17);for(let m=-40;m<60;m+=7+l()*5){let x=8+l()*18,y=6+l()*5,C=new wt(new $e(y,x,6),[Oe("#1c1736"),Oe("#1c1736"),Oe("#18132e"),Oe("#18132e"),Oe("#ffffff",{map:R(de[l()*2|0],y/5,x/6)}),Oe("#1c1736")]);C.position.set(m,x/2,-12-l()*6),o.add(C)}for(let m=-40;m<60;m+=7+l()*6){let x=5+l()*10,y=5+l()*5,C=new wt(new $e(y,x,6),[Oe("#1c1736"),Oe("#1c1736"),Oe("#18132e"),Oe("#18132e"),Oe("#ffffff",{map:R(de[l()*2|0],y/5,x/6)}),Oe("#1c1736")]);C.position.set(m,x/2,ot+22+l()*4),C.rotation.y=Math.PI,o.add(C)}}let yn=[];function le(l,m){let x=new Te;x.position.set(l,0,m),o.add(x),A(.3,.14,.3,Ot("#3a3030"),0,.07,0,x),A(.11,4,.11,Ot("#2b2422"),0,2,0,x),A(.7,.09,.09,Ot("#2b2422"),0,4,0,x);let y=A(.44,.44,.44,Oe("#ffe2a6"),0,3.78,0,x);yn.push(E(0,3.78,0,4.5,.55,x));let C=new wt(new Ze(6,6),new qe({map:lo,blending:gs,transparent:!0,depthWrite:!1,opacity:.28}));C.rotation.x=-Math.PI/2,C.position.y=.03,x.add(C)}le(-3.2,ot+5.7),le(Xt+3.2,ot+5.7),le(-12,ot+5.7),le(Xt+12,ot+5.7);let ce=[];function kt(l,m,x){let y=new Te;y.position.set(l,0,m),y.scale.setScalar(x),o.add(y);let C=new wt(new Ki(.16,.26,2.6,7),Ot("#4a3024"));C.position.y=1.3,y.add(C);let P=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([G,W,K,pt],Re)=>{let ae=new wt(new lr(pt,1),new nn({color:P[Re%3],flatShading:!0}));ae.position.set(G,W,K),y.add(ae)}),ce.push({x:l,z:m,y:3.2*x,r:2*x})}kt(-6,ot+16.5,1.1),kt(3,ot+17,1),kt(13,ot+16.6,1.15),kt(-14,ot+3.5,.95),kt(Xt+15,ot+3.4,1);{let l=_e(64,128,(y,C,P)=>{y.fillStyle="#c23a2a",y.fillRect(0,0,C,P),y.fillStyle="#fff3d6",y.fillRect(6,8,52,50);let G=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let W=0;W<8;W++)y.fillStyle=G[W%4],y.fillRect(10+W%4*12,14+Math.floor(W/4)*20,9,14);y.fillStyle="#111",y.fillRect(10,90,44,12)}),m=new Te;m.position.set(-1.4,0,ot+.6),o.add(m);let x=new wt(new $e(.95,1.9,.75),[Ot("#c23a2a"),Ot("#c23a2a"),Ot("#c23a2a"),Ot("#c23a2a"),Oe("#ffffff",{map:l}),Ot("#c23a2a")]);x.position.y=.95,m.add(x),E(0,1.2,.7,2.2,.35,m)}{let l=new Te;l.position.set(Xt+1.8,0,ot+5.2),o.add(l),A(1.6,.1,.5,Ot("#8a5a30"),0,.5,0,l),A(1.6,.5,.08,Ot("#8a5a30"),0,.8,.22,l),A(.1,.5,.4,Ot("#2b2422"),-.7,.25,0,l),A(.1,.5,.4,Ot("#2b2422"),.7,.25,0,l)}let me=new Te;me.position.set(Xt+1.5,.55,ot+5.2),o.add(me);{let l="#e8a050",m=new wt(new ui(.22,14,10),Ot(l));m.scale.set(1.4,.7,1),me.add(m);let x=new wt(new ui(.13,12,10),Ot(l));x.position.set(.3,.05,0),me.add(x);for(let C of[-.06,.06]){let P=new wt(new Di(.05,.09,4),Ot(l));P.position.set(.32,.17,C),me.add(P)}let y=new wt(new Ki(.035,.03,.4,6),Ot(l));y.rotation.z=1.2,y.position.set(-.34,.02,.08),me.add(y)}let Ut=new Te;Ut.position.set(xn.x,0,xn.z),o.add(Ut);{A(.1,1.5,.1,Ot("#4a2a14"),-.55,.75,0,Ut),A(.1,1.5,.1,Ot("#4a2a14"),.55,.75,0,Ut);let l=_e(256,160,(y,C,P)=>{y.fillStyle="#b8864a",y.fillRect(0,0,C,P),y.strokeStyle="#4a2a14",y.lineWidth=10,y.strokeRect(0,0,C,P);let G=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let W=0;W<5;W++){y.save(),y.translate(40+W%3*80,44+Math.floor(W/3)*70),y.rotate((W%2?-1:1)*.12),y.fillStyle=G[W%4],y.fillRect(-28,-22,56,44),y.fillStyle="#e2452f",y.beginPath(),y.arc(0,-18,4,0,7),y.fill(),y.fillStyle="#8a7a6a";for(let K=0;K<3;K++)y.fillRect(-20,-6+K*9,40-K*8,3);y.restore()}y.fillStyle="#3a1e0c",y.font=`900 26px ${An}`,y.textAlign="right",y.fillText("\u7559\u8A00\u677F",C-14,P-14)}),m=new wt(new $e(1.3,.85,.08),[ne,ne,ne,ne,new qe({map:l}),ne]);m.position.y=1.15,Ut.add(m);let x=new wt(new $e(1.5,.08,.35),Ot("#2c3044"));x.position.y=1.62,x.rotation.x=.2,Ut.add(x),Ut.traverse(y=>{y.isMesh&&(y.userData.board=1)})}let I=[];Ut.traverse(l=>{l.isMesh&&I.push(l)});let M=140,X=new Float32Array(M*3),at=[],lt=_e(32,32,l=>{l.fillStyle="#f8c8d8",l.beginPath(),l.ellipse(16,16,12,7,.5,0,7),l.fill()}),it=new Br(new Je,new ar({map:lt,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));it.geometry.setAttribute("position",new Me(X,3)),o.add(it);function Nt(l,m){let x=ce.concat(_t)[Math.floor(Math.random()*(ce.length+_t.length))]||ce[0];X[l*3]=x.x+Rn(-x.r,x.r),X[l*3+1]=m?Rn(0,x.y):x.y+Rn(-.3,.3),X[l*3+2]=x.z+Rn(-x.r,x.r),at[l]={vx:Rn(-.2,.4),vy:Rn(-.5,-.25),ph:Math.random()*7,fl:x.y}}let _t=[],dt=[],he=[],ct=(l,m)=>l>=0&&l<Xt&&m>=0&&m<ot,At=(l,m)=>l>=Yu&&l<$u&&m>=w_&&m<Uc,Vt=(l,m)=>m%2?[l.d,l.w]:[l.w,l.d];function Bt(l){let m=Zt[l.k];if(m.L==="wall")return Et(l);let[x,y]=Vt(m,l.r),C=[];for(let P=0;P<x;P++)for(let G=0;G<y;G++)C.push([l.x+P,l.z+G]);return C}function Et(l){let m=Zt[l.k],x=[];for(let y=0;y<m.w;y++)l.r===0?x.push(["b",l.x+y]):l.r===2?x.push(["f",l.x+y]):l.r===1?x.push(["l",l.z+y]):x.push(["r",l.z+y]);return x}function ue(l){return l===0?"back":l===2?"front":l===1?"left":"right"}function Qt(l,m){let x=Zt[l.k];for(let[y,C]of Et(l)){let P=y==="b"||y==="f"?Xt:ot;if(C<0||C>=P||y==="f"&&C>=Cn-0&&C<In)return!1;y==="f"&&C>=Cn-1&&C<In+1&&x.w>1}for(let y of dt){if(y===m||Zt[y.k].L!=="wall")continue;let C=Et(y);for(let P of Et(l))if(C.some(G=>G[0]===P[0]&&G[1]===P[1]))return!1}return!0}function xe(l,m,x,y){for(let C of dt)if(!(C===y||Zt[C.k].L!==x)&&Bt(C).some(P=>P[0]===l&&P[1]===m))return C;return null}function z(l,m,x){let y=xe(l,m,"main",x);return y&&Zt[y.k].sf?y:null}function mt(l,m){let x=Zt[l.k];if(x.L==="wall")return Qt(l,m);let y=Bt(l),C=null;for(let[P,G]of y){let W=ct(P,G),K=At(P,G);if(!W&&!K)return!1;if(C===null)C=W;else if(C!==W)return!1;if(co.has(P+","+G))return!1;if(x.L==="top"){if(xe(P,G,"top",m))return!1;let pt=xe(P,G,"main",m);if(pt&&!Zt[pt.k].sf||pt&&pt.k==="tank")return!1}else if(xe(P,G,x.L,m))return!1;if(x.L==="main"&&x.solid&&W&&G===ot-1&&P>=Cn&&P<In)return!1}return x.L==="main"&&x.solid,!0}function Q(l){if(Zt[l.k].L!=="top")return 0;let x=0;for(let[y,C]of Bt(l)){let P=z(y,C);P&&(x=Math.max(x,Zt[P.k].sf))}return x}function rt(l){let m=Zt[l.k];if(m.L==="wall"){let[C,P]=Et(l)[0],G=P+m.w/2;return C==="b"?[G,0,.02]:C==="f"?[G,0,ot-.02]:C==="l"?[.02,0,G]:[Xt-.02,0,G]}let[x,y]=Vt(m,l.r);return[l.x+x/2,Q(l),l.z+y/2]}let St=new qe({map:f,transparent:!0,depthWrite:!1,opacity:.55});function yt(l,m){let x=Zt[l.k];if(l.I=x,l.g=Pc(l.k),o.add(l.g),l.g.userData.e=l,x.L!=="wall"&&x.L!=="rug"){let[y,C]=Vt(x,0),P=new wt(new Ze(y*.95,C*.95),St);P.rotation.x=-Math.PI/2,P.position.y=.012,l.g.add(P),P.raycast=()=>{}}return l.g.traverse(y=>{y.isMesh&&(y.userData.e=l,he.push(y))}),dt.push(l),Yt(l),m||Ln(),l}function Yt(l){let[m,x,y]=rt(l);l.g.position.set(m,x,y),l.g.rotation.y=l.r*Math.PI/2}function Ne(l){let m=dt.indexOf(l);m>=0&&dt.splice(m,1),o.remove(l.g);for(let x=he.length-1;x>=0;x--)he[x].userData.e===l&&he.splice(x,1);l.g.traverse(x=>{x.geometry&&x.geometry.dispose()})}function Ke(l){let m=Bt(l);return dt.filter(x=>Zt[x.k].L==="top"&&Bt(x).some(y=>m.some(C=>C[0]===y[0]&&C[1]===y[1])))}r.it.forEach(([l,m,x,y])=>{let C={k:l,x:m,z:x,r:y||0};mt(C)?yt(C,!0):s&&(r.inv[l]=(r.inv[l]||0)+1)}),dt.filter(l=>Zt[l.k].L==="top").forEach(Yt),F(r.fl),zt(r.wa);function ge(){_t=dt.filter(l=>l.k==="sakura").map(l=>({x:l.g.position.x,z:l.g.position.z,y:2,r:.5}))}ge();for(let l=0;l<M;l++)Nt(l,1);let vn=0;function an(){return r.it=dt.map(l=>[l.k,l.x,l.z,l.r]),r}function Ln(){s&&(an(),clearTimeout(vn),vn=setTimeout(()=>{try{n.save&&n.save(r)}catch{}},700),Xn())}let Qi=[],Dn=1.5,ts={};function Yr(l){return ts[l]?ts[l]:ts[l]=_e(128,112,m=>{if(m.strokeStyle="#2a1810",m.lineWidth=6,m.lineJoin="round",l==="mind"||l==="zzz"){m.fillStyle=l==="zzz"?"#e8f0ff":"#efe9ff";let x=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];x.forEach(([y,C,P])=>{m.beginPath(),m.arc(y,C,P,0,7),m.stroke()}),x.forEach(([y,C,P])=>{m.beginPath(),m.arc(y,C,P,0,7),m.fill()}),m.beginPath(),m.arc(44,90,7,0,7),m.fill(),m.stroke(),m.beginPath(),m.arc(30,104,4,0,7),m.fill(),m.stroke()}else m.fillStyle=l==="idea"?"#fff0a8":l==="msg"?"#ffe0ea":"#ffffff",oo(m,12,8,104,66,24),m.fill(),m.stroke(),m.beginPath(),m.moveTo(44,72),m.lineTo(34,100),m.lineTo(66,74),m.closePath(),m.fill(),m.stroke(),m.fillRect(46,68,18,8);if(m.fillStyle="#2a1810",m.textAlign="center",m.textBaseline="middle",l==="idea")m.font=`900 44px ${An}`,m.fillText("!",64,42);else if(l==="zzz")m.font=`900 30px ${An}`,m.fillText("z z Z",64,42);else if(l==="msg")m.font=`900 40px ${An}`,m.fillText("\u2709",64,42);else for(let x=0;x<3;x++)m.beginPath(),m.arc(40+x*24,42,6,0,7),m.fill()})}function $r(l,m){return _e(512,112,C=>{C.textAlign="center",C.textBaseline="middle";let P=52;C.font=`900 ${P}px ${An}`;let G=String(l||"").slice(0,16);for(;C.measureText(G).width>432&&P>22;)P-=2,C.font=`900 ${P}px ${An}`;let W=Math.min(500,C.measureText(G).width+56);C.fillStyle=m==="me"?"#2a1810e6":m==="owner"?"#7a3a14e6":"#2a2a48e0",C.strokeStyle=m==="me"?"#ffd27a":m==="owner"?"#ffb36b":"#c8c0ff",C.lineWidth=6,oo(C,(512-W)/2,14,W,84,84/2),C.fill(),C.stroke(),C.fillStyle="#fff3d6",C.fillText(G,512/2,112/2+2)})}function mi(l,m,x){x=x||{};let y=new Te;o.add(y);let C=new Ze(1,1);C.translate(0,.5,0);let P=new qe({transparent:!0,alphaTest:.04,color:x.tint||16051952}),G=new wt(C,P);y.add(G);let W={grp:y,m:G,mat:P,h0:m,h:m*Dn,ar:.8,w:m*Dn*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!x.me};u(l,pt=>{P.map=pt,P.needsUpdate=!0,W.ar=pt.image.width/pt.image.height,W.w=W.h*W.ar});let K=new wt(new xs(.5,16),new qe({map:f,transparent:!0,depthWrite:!1,opacity:.8}));if(K.rotation.x=-Math.PI/2,o.add(K),W.sh=K,x.name){let pt=new hi(new ti({map:$r(x.name,x.nk),transparent:!0,depthTest:!1}));pt.renderOrder=30,pt.scale.set(2,.44,1),o.add(pt),W.tag=pt,W.name=x.name}if(x.bubble){let pt=new hi(new ti({map:Yr(x.bubble),transparent:!0,depthWrite:!1}));pt.scale.set(.8,.7,1),o.add(pt),W.bub=pt,W.kind=x.bubble}return Qi.push(W),W}let Rt=mi(i.me.src,1.5,{me:1,name:i.me.name||"\u6211",nk:"me"});Rt.x=pi,Rt.z=ot+2.6,s&&i.startInside!==!1&&(Rt.x=pi,Rt.z=ot-1.6);let es=fi,Zr=di,Jr=qu;function bs(l,m){if(l<es||l>=Zr||m<0||m>=Jr||m<ot&&(l<0||l>=Xt)||m>=ot&&co.has(l+","+m)&&l===7&&m===ot+1)return!0;let x=xe(l,m,"main");return!!(x&&Zt[x.k].solid)}let ho=(l,m,x,y)=>bs(x,y)?!1:m===ot-1&&y===ot||m===ot&&y===ot-1?l>=Cn&&l<In&&x===l:!0;function Kr(l,m,x,y){l=Math.floor(l),m=Math.floor(m);let C=(W,K)=>(W-es)*100+K,P=new Map;P.set(C(l,m),null);let G=[[l,m]];for(;G.length;){let[W,K]=G.shift();if(W===x&&K===y){let pt=[],Re=C(W,K),ae=W,Dt=K;for(;Re!==null;){pt.push([ae+.5,Dt+.5]);let Ee=P.get(Re);if(Ee===null)break;ae=Ee[0],Dt=Ee[1],Re=C(ae,Dt)}return pt.reverse()}for(let[pt,Re]of[[1,0],[-1,0],[0,1],[0,-1]]){let ae=W+pt,Dt=K+Re,Ee=C(ae,Dt);P.has(Ee)||!ho(W,K,ae,Dt)||(P.set(Ee,[W,K]),G.push([ae,Dt]))}}return null}let b=.28;function B(l,m,x){let y=l>=Cn+b&&l<=In-b;if(x<ot){if(m<ot&&(l<b||l>Xt-b||m<b)||m>=ot-b&&!y)return!1}else if(m<ot+b&&!y||m<ot&&!y)return!1;if(l<fi+.4||l>di-.4||m>qu-.4||m<ot&&(l<0||l>Xt))return!1;for(let[C,P]of[[-b,-b],[b,-b],[-b,b],[b,b],[0,0]]){let G=Math.floor(l+C*.8),W=Math.floor(m+P*.8),K=xe(G,W,"main");if(K&&Zt[K.k].solid||G===7&&W===ot+1&&Math.hypot(l-xn.x,m-xn.z)<.7)return!1}return!0}function $(l){let m=[];if(l)for(let x=0;x<ot;x++)for(let y=0;y<Xt;y++)bs(y,x)||m.push([y,x]);else for(let x=ot+1;x<ot+6;x++)for(let y=-6;y<Xt+6;y++)bs(y,x)||m.push([y,x]);return m}let Y=[],H=()=>Nc(qr(an())),ut=vt(Bu.filter(l=>i.walk&&i.walk[l.spr]&&l.spr!=="robot"));function vt(l){for(let m=l.length-1;m>0;m--){let x=Math.floor(Math.random()*(m+1));[l[m],l[x]]=[l[x],l[m]]}return l}let Pt=ni(2+H(),2,7);ut.slice(0,Pt).forEach((l,m)=>{let x=mi(i.walk[l.spr],l.h,{bubble:"chat"});x.d=l,x.sp=l.sp*.8,x.kind2="npc",x.state="out",x.t=m*2.2+Rn(0,1.5),x.x=fi+1,x.z=ot+4,x.hidden=!0,Y.push(x)});function Lt(l){let m=mi(i.me.src,1.5,{name:l.name,nk:"vis",bubble:"msg",tint:16771312});m.d={id:"v"+l.id,name:l.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},m.v=l,m.sp=1.3,m.kind2="vis",m.state="out",m.t=Rn(1,6),m.x=di-1,m.z=ot+4,m.hidden=!0,Y.push(m)}let Wt=null;if(!s){let l=dt.find(y=>y.k==="register"),m=pi,x=2;if(l){let y=[[l.x,l.z-1],[l.x+1,l.z],[l.x-1,l.z],[l.x,l.z+1]].find(([C,P])=>ct(C,P)&&!bs(C,P));y&&(m=y[0]+.5,x=y[1]+.5)}Wt=mi(i.owner&&i.owner.src||i.me.src,1.5,{name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),Wt.x=m,Wt.z=x,Wt.kind2="owner",Wt.state="sleep",Wt.d={name:"\u5E97\u9577 "+(i.owner&&i.owner.name||""),role:r.name},Y.push(Wt)}function Kt(l){let m=l.kind2==="vis"?Math.random()<.6:Math.random()<.82,x=[];dt.forEach(G=>{G.k==="register"&&x.push(...Bt(G))}),x.push([7,ot+1]);let y=$(m).filter(([G,W])=>!x.some(K=>Math.abs(K[0]-G)<=1&&Math.abs(K[1]-W)<=1)&&!Qi.some(K=>K!==l&&!K.hidden&&Math.floor(K.x)===G&&Math.floor(K.z)===W));if(!y.length)return null;let C=y.filter(([G,W])=>dt.some(K=>Zt[K.k].L!=="rug"&&Bt(K).some(pt=>Math.abs(pt[0]-G)+Math.abs(pt[1]-W)===1))),P=C.length&&Math.random()<.75?C:y;return P[Math.floor(Math.random()*P.length)]}function Ct(l,m,x){let y=Kr(l.x,l.z,m,x);return y&&y.length?(l.path=y,l.state="walk",!0):!1}let D={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:Rt.z<ot,cam:new N(Rt.x,1,Rt.z),low:{}},fe=(l,m,x,y)=>{let C=document.createElement(l);return m&&(C.className=m),x!=null&&(C.innerHTML=x),(y||e).appendChild(C),C},Ce=[],Fe=l=>(Ce.push(l),l),ye=Fe(fe("div","h3info")),Ft=Fe(fe("div","h3hud")),Un=Fe(fe("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>')),pe=Fe(fe("div","h3hint")),Mn=Fe(fe("div","h3toast")),Nn=Fe(fe("div","h3j","<i></i>")),Ye=Fe(fe("div","h3card")),Fn=Fe(fe("div","h3bp")),be=Fe(fe("div","h3sel")),On=Fe(fe("div","h3top")),Se=Fe(fe("div","h3pan"));function Ue(l){Mn.textContent=l,Mn.classList.add("on"),clearTimeout(Ue.t),Ue.t=setTimeout(()=>Mn.classList.remove("on"),2200)}function Wn(){if(D.mode==="build"){Ft.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Ft.innerHTML=s?'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function Xn(){let l=qr(an()),m=Nc(l);ye.innerHTML=`<b>\u{1F3EE} ${ze(r.name)}</b><span class="h3st">${"\u2605".repeat(m)}${"\u2606".repeat(5-m)}</span> ${ze(Oc[m][1])}<br><small>\u6EAB\u99A8\u5EA6 ${l}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${ji(Fc(l))}`:`\u30FB\u5E97\u9577 ${ze(i.owner&&i.owner.name||"")}`}</small>`}Wn(),Xn(),Un.querySelectorAll("button").forEach((l,m)=>{let x=m?-1:1;l.addEventListener("pointerdown",C=>{C.preventDefault(),D.camV=x;try{l.setPointerCapture(C.pointerId)}catch{}});let y=()=>{D.camV=0};l.addEventListener("pointerup",y),l.addEventListener("pointercancel",y),l.addEventListener("click",()=>{D.camV||(D.yawT+=x*.5)})});let ns=()=>t.getBoundingClientRect(),Fi=new no,zc=new qt,Ju=new Jn(new N(0,1,0),0),Bc=new N,jr=(l,m)=>{let x=ns();return zc.set((l-x.left)/x.width*2-1,-((m-x.top)/x.height*2-1)),zc},kc=(l,m)=>{let x=ns();return{x:(l-x.left)*(t.clientWidth/x.width),y:(m-x.top)*(t.clientHeight/x.height)}},gr=l=>{let m=l.clone().project(c),x=ns();return{x:(m.x+1)/2*x.width+x.left,y:(1-m.y)/2*x.height+x.top,z:m.z}};function Vc(l,m){return Fi.setFromCamera(jr(l,m),c),Fi.ray.intersectPlane(Ju,Bc)?Bc.clone():null}function uo(l,m){Fi.setFromCamera(jr(l,m),c);let x=Fi.intersectObjects(he.filter(y=>y.visible&&y.parent&&Ku(y)),!1);return x.length?x[0].object.userData.e:null}function Ku(l){let m=l;for(;m;){if(!m.visible)return!1;m=m.parent}return!0}function ju(l,m){let x=null,y=1e9;for(let C of Y){if(C.hidden)continue;let P=gr(new N(C.x,0,C.z)),G=gr(new N(C.x,C.h+.3,C.z)),W=P.y-G.y;if(W<6)continue;let K=Math.max(W*.36,30),pt=Math.abs(l-P.x);if(pt<K&&m>G.y-14&&m<P.y+12){let Re=pt+Math.abs(m-(P.y+G.y)/2)*.3;Re<y&&(y=Re,x=C)}}return x}function Qu(l,m){return Fi.setFromCamera(jr(l,m),c),Fi.intersectObjects(I,!1).length>0}let _r=[],Qr=[];function tf(l,m){return Fi.setFromCamera(jr(l,m),c),Fi.intersectObjects(Qr,!1).length>0}let gi=new Map,Ie=null,is=null;t.addEventListener("contextmenu",l=>l.preventDefault()),t.addEventListener("pointerdown",l=>{l.preventDefault();try{t.setPointerCapture(l.pointerId)}catch{}let m=kc(l.clientX,l.clientY);if(gi.set(l.pointerId,{x:l.clientX,y:l.clientY}),gi.size===2){let[x,y]=[...gi.values()];is={d:Math.hypot(x.x-y.x,x.y-y.y),dist:D.distT,ang:Math.atan2(y.y-x.y,y.x-x.x),yaw:D.yawT},Ie=null,D.joy=null,Nn.style.display="none",Kc();return}if(Ie={id:l.pointerId,sx:m.x,sy:m.y,cx:l.clientX,cy:l.clientY,moved:0,btn:l.button,yaw0:D.yawT},D.mode==="build"){let x=uo(l.clientX,l.clientY);x&&x===D.sel&&!x.I.fixed2?Ie.dragItem=x:x&&(Ie.pickItem=x)}}),t.addEventListener("pointermove",l=>{if(gi.has(l.pointerId)&&gi.set(l.pointerId,{x:l.clientX,y:l.clientY}),is&&gi.size>=2){let[P,G]=[...gi.values()],W=Math.hypot(P.x-G.x,P.y-G.y);D.distT=ni(is.dist*is.d/Math.max(20,W),6,20),D.yawT=is.yaw-(Math.atan2(G.y-P.y,G.x-P.x)-is.ang);return}if(!Ie||Ie.id!==l.pointerId)return;let m=kc(l.clientX,l.clientY),x=m.x-Ie.sx,y=m.y-Ie.sy,C=Math.hypot(x,y);if(!Ie.moved&&C>10&&(Ie.moved=1,Ie.pickItem&&D.mode==="build"&&(As(Ie.pickItem),Ie.dragItem=Ie.pickItem)),!!Ie.moved){if(Ie.btn===2||D.mode==="build"&&!Ie.dragItem){D.yawT=Ie.yaw0-x*.008,D.distT=ni(D.distT+(l.movementY||0)*0,6,20);return}if(D.mode==="build"&&Ie.dragItem){cf(Ie.dragItem,l.clientX,l.clientY);return}if(D.mode==="walk"){let G=Math.min(1,C/55)/Math.max(C,1e-6);D.joy={x:x*G,y:y*G},D.tgt=null,Nn.style.display="block",Nn.style.left=Ie.sx+"px",Nn.style.top=Ie.sy+"px",Nn.firstChild.style.transform=`translate(${D.joy.x*55}px,${D.joy.y*55}px)`}}});let Hc=l=>{gi.delete(l.pointerId),gi.size<2&&(is=null),!(!Ie||Ie.id!==l.pointerId)&&(Ie.moved||ef(l.clientX,l.clientY,Ie),Ie.dragItem&&Kc(),Ie=null,D.joy=null,Nn.style.display="none")};t.addEventListener("pointerup",Hc),t.addEventListener("pointercancel",Hc),t.addEventListener("wheel",l=>{l.preventDefault(),D.distT=ni(D.distT+Math.sign(l.deltaY)*1.2,6,20)},{passive:!1});let Gc=l=>{if(!document.contains(t)||/input|textarea/i.test(l.target&&l.target.tagName||""))return;let m=l.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(m)){if(m==="r"&&D.sel){jc(),l.preventDefault();return}D.keys[m]=1,/^(arrow|w|a|s|d)/.test(m)&&(D.tgt=null),l.preventDefault()}},Wc=l=>{delete D.keys[l.key.toLowerCase()]};document.addEventListener("keydown",Gc),document.addEventListener("keyup",Wc);function ef(l,m){if(Se.classList.contains("on"))return;if(D.mode==="build"){let P=uo(l,m);As(P||null);return}let x=ju(l,m);if(x){qc(x);return}if(Qr.length&&tf(l,m)){ta(xn.x-1,xn.z+.9,pf);return}if(Qu(l,m)){ta(xn.x,xn.z+1,eh);return}let y=uo(l,m);if(y&&Zt[y.k].L==="top"){let P=Bt(y).map(G=>z(G[0],G[1])).find(Boolean);P&&P.k==="register"&&(y=P)}if(y&&y.k==="register"){ta(y.g.position.x,y.g.position.z+1.2,()=>rf(y));return}if(y&&Zt[y.k].L!=="rug"){let P=y.g.position;_i(),sf(y),D.tgt=Xc(P.x,P.z);return}_i();let C=Vc(l,m);C&&(D.tgt={x:C.x,z:C.z})}function Xc(l,m){let x=null,y=1e9;for(let[C,P]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let G=l+C,W=m+P;if(B(G,W,W<ot?0:ot+1)){let K=Math.hypot(G-Rt.x,W-Rt.z);K<y&&(y=K,x={x:G,z:W})}}return x}function ta(l,m,x){_i();let y=Xc(l,m-1)||{x:l,z:m};D.tgt={x:y.x,z:y.z,fn:x},Math.hypot(Rt.x-y.x,Rt.z-y.z)<1.6&&(D.tgt=null,x())}function qc(l){_i(!0),D.talk=l,l.kind2==="npc"&&(l.state="talk",l.t=0);let m=ze(l.d.name),x=ze(l.d.role||""),y="",C=ao.chat,P="";if(l.kind2==="owner")C={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},y=`<p class="h3t mind">\uFF08\u5E97\u9577 ${ze(i.owner&&i.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p><p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>`,P='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(l.kind2==="vis")C={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},y=`<p class="h3t">\u300C${ze(l.v.msg||"\u2026\u2026")}\u300D</p>${l.v.gift&&Zt[l.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${ze(Zt[l.v.gift].n)}\u300D</p>`:""}`;else{let pt=nf(l);C=ao[pt.kind]||ao.chat,y=`<p class="h3t${pt.kind==="mind"?" mind":""}">${pt.kind==="mind"?"\uFF08"+ze(pt.text)+"\uFF09":"\u300C"+ze(pt.text)+"\u300D"}</p>`,P='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let G=l.kind2==="npc"?i.walk[l.d.spr]:l.kind2==="owner"&&i.owner&&i.owner.src||i.me.src;Ye.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${G}')"></div><div class="h3nm"><b>${m}</b><small>${x}</small></div><span class="h3k" style="background:${C.c}">${C.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${y}<div class="h3bt">${P}</div>`;let W=ns(),K=gr(new N(l.x,l.h*.5,l.z));Ye.classList.toggle("r",K.x-W.left<W.width/2),Ye.classList.add("on"),l.bub&&(l.bub.visible=!1)}function nf(l){let m=dt.filter(x=>Dc[x.k]&&Math.hypot(x.g.position.x-l.x,x.g.position.z-l.z)<3.2);if(m.length&&Math.random()<.5){let x=m[Math.floor(Math.random()*m.length)];return{kind:"chat",text:Dc[x.k]}}return(!l.deck||!l.deck.length)&&(l.deck=vt(l.d.lines.map(x=>({kind:x[0],text:x[1]})))),l.deck.pop()}function sf(l){let m=Zt[l.k];D.talk=null,Ye.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${m.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${ze(m.n)}</b><small>\u6EAB\u99A8\u5EA6 +${m.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${ze(Dc[l.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,Ye.classList.remove("r"),Ye.classList.add("on")}function _i(l){Ye.classList.remove("on");let m=D.talk;D.talk=null,m&&m.kind2==="npc"&&m.state==="talk"&&(m.state="idle",m.t=Rn(1,2.5))}function Yc(){if(!s)return 0;let l=n.today?n.today():Math.floor(Date.now()/864e5);return(r.cl?ni(l-r.cl,0,3):1)*Fc(qr(an()))}function rf(l){if(!s){Ue("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let m=Yc();if(m<=0){Ue("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let x=!1;try{x=n.collect?n.collect(m):!1}catch{}if(!x){Ue("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}r.cl=n.today?n.today():Math.floor(Date.now()/864e5),Ln(),af(l),Ue(`\u6536\u5230 ${ji(m)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let ii=new hi(new ti({map:_e(128,128,l=>{l.fillStyle="#f2c230",l.strokeStyle="#8a5a10",l.lineWidth=8,l.beginPath(),l.arc(64,64,52,0,7),l.fill(),l.stroke(),l.fillStyle="#8a5a10",l.font=`900 64px ${An}`,l.textAlign="center",l.textBaseline="middle",l.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));ii.renderOrder=25,ii.scale.set(.55,.55,1),o.add(ii);let ea=[];function af(l){for(let m=0;m<8;m++){let x=ii.clone();x.material=ii.material.clone(),x.position.copy(l.g.position).add(new N(0,1.4,0)),x.userData.v=new N(Rn(-1.2,1.2),Rn(2.5,4),Rn(-1.2,1.2)),x.userData.t=0,o.add(x),ea.push(x)}}function $c(l){if(D.mode=l,As(null),_i(),D.tgt=null,Wn(),Fn.classList.toggle("on",l==="build"),On.classList.toggle("on",l==="build"),l!=="build"&&(Un.style.bottom=""),ye.style.display=l==="build"?"none":"",l==="build")On.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",Ts(),D.distT=13.5;else{if(D.distT=D.inside?10.5:13,!B(Rt.x,Rt.z,Rt.z)){let m=$(Rt.z<ot).sort((x,y)=>Math.hypot(x[0]+.5-Rt.x,x[1]+.5-Rt.z)-Math.hypot(y[0]+.5-Rt.x,y[1]+.5-Rt.z)).find(x=>B(x[0]+.5,x[1]+.5,x[1]));m&&(Rt.x=m[0]+.5,Rt.z=m[1]+.5)}Ln()}}let ss="tbl",na={},Ss=null,ws=null,Es=null;function of(l){if(na[l])return na[l];try{if(!Ss){Ss=new Qn(128,128),ws=new Or,ws.add(new Hr(16774368,8413264,2.2));let Dt=new Gr(16777215,1.4);Dt.position.set(2,4,3),ws.add(Dt),Es=new ln(30,1,.05,50)}let m=Pc(l);ws.add(m);let x=Zt[l],y=new Pi().setFromObject(m),C=y.getCenter(new N),P=y.getSize(new N),W=(Math.max(P.x,P.y,P.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;Es.position.set(C.x+W*.55,C.y+W*.45,C.z+W*.7),Es.lookAt(C),x.L==="wall"&&(Es.position.set(C.x+W*.25,C.y+W*.1,C.z+W*.96),Es.lookAt(C)),a.setRenderTarget(Ss),a.setClearColor(0,0),a.clear(),a.render(ws,Es),a.setRenderTarget(null),a.setClearColor(1709366,1);let K=new Uint8Array(16384*4);a.readRenderTargetPixels(Ss,0,0,128,128,K);let pt=document.createElement("canvas");pt.width=pt.height=128;let Re=pt.getContext("2d"),ae=Re.createImageData(128,128);for(let Dt=0;Dt<128;Dt++)ae.data.set(K.subarray((127-Dt)*512,(128-Dt)*512),Dt*512);for(let Dt=0;Dt<ae.data.length;Dt+=4)ae.data[Dt]=Lc[ae.data[Dt]],ae.data[Dt+1]=Lc[ae.data[Dt+1]],ae.data[Dt+2]=Lc[ae.data[Dt+2]];return Re.putImageData(ae,0,0),ws.remove(m),m.traverse(Dt=>{Dt.geometry&&Dt.geometry.dispose()}),na[l]=pt.toDataURL()}catch{return na[l]=""}}function Ts(){let l=n.coins?n.coins():0,m=Xu.map(([W,K])=>`<button class="h3tab ${ss===W?"on":""}" type="button" data-h3="cat" data-k="${W}">${K}</button>`).join("")+`<button class="h3tab ${ss==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${ji(l)}</span>`,x="";ss==="reno"?x=Cc.map(([W,K,pt])=>{let Re=r.fo[W],ae=r.fl===W;return`<button class="h3it ${ae?"cur":""}" type="button" data-h3="floor" data-k="${W}"><span class="ph" style="background:url(${Zc("f",W)}) center/cover"></span>${ze(K)}${ae?'<span class="pr">\u4F7F\u7528\u4E2D</span>':Re?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${ji(pt)}</span>`}</button>`}).join("")+Ic.map(([W,K,pt])=>{let Re=r.wo[W],ae=r.wa===W;return`<button class="h3it ${ae?"cur":""}" type="button" data-h3="wall" data-k="${W}"><span class="ph" style="background:url(${Zc("w",W)}) center/cover"></span>${ze(K)}${ae?'<span class="pr">\u4F7F\u7528\u4E2D</span>':Re?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${ji(pt)}</span>`}</button>`}).join(""):x=Rc.filter(W=>W.cat===ss&&!W.fixed).map(W=>{let K=r.inv[W.k]||0,pt=of(W.k);return`<button class="h3it ${!K&&l<W.p?"no":""}" type="button" data-h3="item" data-k="${W.k}">${K?`<span class="ow">\xD7${K}</span>`:""}${pt?`<img src="${pt}" alt="">`:'<span class="ph"></span>'}${ze(W.n)}<span class="pr">${K?"\u62FF\u51FA\u4F86\u64FA":ji(W.p)}</span></button>`}).join("");let y=Fn.querySelector(".h3row"),C=y?y.scrollLeft:0,P=Fn.dataset.cat===ss;Fn.innerHTML=`<div class="h3tabs">${m}</div><div class="h3row">${x}</div>`,Fn.dataset.cat=ss,P&&(Fn.querySelector(".h3row").scrollLeft=C);let G=Fn.offsetHeight||150;Un.style.bottom=G+8+"px",be.style.bottom=G+8+"px"}let fo={};function Zc(l,m){let x=l+m;if(fo[x])return fo[x];let y;return l==="f"?y=(k[m]||k.wood)().image:y=L(m,2).image,fo[x]=y.toDataURL()}function As(l){if(D.sel&&D.sel!==l&&(D.sel.ok||Jc(D.sel)),D.sel=l,fn.visible=!!l,be.classList.toggle("on",!!l),l){l.last={x:l.x,z:l.z,r:l.r},l.ok=!0;let m=Zt[l.k];be.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${m.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${m.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,Rs()}}function Jc(l){if(!l.last)return;let m=l.last.x-l.x,x=l.last.z-l.z,y=Zt[l.k].sf?Ke(l):[];l.x=l.last.x,l.z=l.last.z,l.r=l.last.r,Yt(l),y.forEach(C=>{C.x+=m,C.z+=x,Yt(C)}),l.ok=!0,Rs()}let lf=_e(64,64,l=>{l.strokeStyle="#fff",l.lineWidth=6,l.strokeRect(3,3,58,58)}),fn=new wt(new Ze(1,1),new qe({map:lf,transparent:!0,depthWrite:!1,color:"#6aff8a"}));fn.rotation.x=-Math.PI/2,fn.visible=!1,fn.renderOrder=5,o.add(fn);let xr=new wt(new Ze(1,1),new qe({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));xr.rotation.x=-Math.PI/2,fn.add(xr),xr.rotation.x=0,xr.position.z=-.001;function Rs(){let l=D.sel;if(!l)return;let m=Zt[l.k],x=mt(l,l);l.ok=x;let y=x?"#6aff8a":"#ff5a4a";if(fn.material.color.set(y),xr.material.color.set(y),m.L==="wall"){let[P,,G]=rt(l),W=ue(l.r);fn.scale.set(m.w,.6,1),fn.position.set(P+(W==="left"?.35:W==="right"?-.35:0),.03,G+(W==="back"?.35:W==="front"?-.35:0)),fn.rotation.z=W==="left"||W==="right"?Math.PI/2:0}else{let[P,G]=Vt(m,l.r),[W,K,pt]=rt(l);fn.scale.set(P,G,1),fn.rotation.z=0,fn.position.set(W,K+.03,pt)}let C=be.querySelector('[data-h3="ok"]');C&&(C.disabled=!x)}function cf(l,m,x){let y=Vc(m,x);if(!y)return;let C=Zt[l.k],P=l.x,G=l.z;if(C.L==="wall"){let W=[[y.z,0],[y.x,1],[Xt-y.x,3],[ot-y.z,2]].filter(K=>!D.low[ue(K[1])]).sort((K,pt)=>K[0]-pt[0]);if(!W.length)return;l.r=W[0][1],l.r===0||l.r===2?(l.x=ni(Math.round(y.x-C.w/2),0,Xt-C.w),l.z=l.r===0?0:ot-1):(l.z=ni(Math.round(y.z-C.w/2),0,ot-C.w),l.x=l.r===1?0:Xt-1)}else{let[W,K]=Vt(C,l.r);l.x=Math.round(y.x-W/2),l.z=Math.round(y.z-K/2)}(l.x!==P||l.z!==G||C.L==="wall")&&(C.sf&&hf(l,P,G),Yt(l),Rs())}function hf(l,m,x){let y={x:m,z:x,r:l.r,k:l.k},C=Bt(y);dt.filter(P=>Zt[P.k].L==="top"&&Bt(P).some(G=>C.some(W=>W[0]===G[0]&&W[1]===G[1]))).forEach(P=>{P.x+=l.x-m,P.z+=l.z-x,Yt(P)})}function Kc(){D.sel&&(Rs(),dt.filter(l=>Zt[l.k].L==="top").forEach(Yt))}function jc(){let l=D.sel;if(!l||Zt[l.k].L==="wall")return;let m=Zt[l.k].sf?Ke(l):[];m.length&&(m.forEach(x=>{Ne(x),r.inv[x.k]=(r.inv[x.k]||0)+1}),Ue("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),l.r=(l.r+1)%4,Yt(l),Rs()}function uf(){let l=D.sel;if(!l||Zt[l.k].fixed)return;(Zt[l.k].sf?Ke(l):[]).forEach(x=>{Ne(x),r.inv[x.k]=(r.inv[x.k]||0)+1}),D.sel=null,Ne(l),r.inv[l.k]=(r.inv[l.k]||0)+1,fn.visible=!1,be.classList.remove("on"),ge(),Ln(),Ts()}function ff(){let l=D.sel;if(l){if(!mt(l,l)){Ue("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}l.last=null,D.sel=null,fn.visible=!1,be.classList.remove("on"),ge(),Ln()}}function Qc(l){let m=Zt[l],x={k:l,x:0,z:0,r:0},y=D.cam.x,C=D.cam.z,P=null,G=1e9;if(m.L==="wall")for(let W of[0,1,3,2].filter(K=>!D.low[ue(K)]))for(let K=0;K<10;K++){let pt={k:l,r:W,x:W===0||W===2?K:W===1?0:Xt-1,z:W===1||W===3?K:W===0?0:ot-1};if(Qt(pt)){let[Re,,ae]=rt(pt),Dt=Math.hypot(Re-y,ae-C);Dt<G&&(G=Dt,P=pt)}}else for(let W=0;W<Uc;W++)for(let K=Yu;K<$u;K++){let pt={k:l,x:K,z:W,r:0};if(!mt(pt))continue;let[Re,,ae]=rt(pt),Dt=ct(K,W),Ee=Math.hypot(Re-y,ae-C)+(Dt===D.inside?0:6)+(m.L==="top"&&!z(K,W)?1.5:0);Ee<G&&(G=Ee,P=pt)}P?Object.assign(x,P):(x.x=1,x.z=1),yt(x,!0),r.inv[l]--,r.inv[l]||delete r.inv[l],As(x),P||Rs(),ge(),Ln(),Ts()}function po(l,m,x,y,C){let P=n.coins?n.coins():0;Se.innerHTML=`<h3>\u8CB7\u4E0B\u300C${ze(x)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${ji(y)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${ji(P)}</b></p>${P<y?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${P<y?"disabled":""}>\u8CB7\u4E0B</button></div>`,Se.classList.add("on"),Se._buy=()=>{let G=!1;try{G=n.buy?n.buy(y,x):!1}catch{}if(!G){Ue("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}Se.classList.remove("on"),C()}}let zn=null,mo=!1;function th(l){return zn&&!l?Promise.resolve(zn):n.msgs?Promise.resolve(n.msgs()).then(m=>(zn=(m||[]).slice().sort((x,y)=>(y.t||0)-(x.t||0)),mo=!1,zn),()=>(mo=!0,zn=[],zn)):(zn=[],Promise.resolve(zn))}let yr="";function eh(){_i(),Se.innerHTML=`<h3>\u{1F4DC} ${ze(r.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,Se.classList.add("on"),th(!0).then(l=>{if(!Se.classList.contains("on"))return;let m=l.slice(0,30).map(y=>`<div class="msg"><b>${ze(y.name||"\u73A9\u5BB6")}</b><small>${y.t?new Date(y.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${y.gift&&Zt[y.gift]?` <small>\u{1F381} ${ze(Zt[y.gift].n)}</small>`:""}<br>${ze(y.msg||"")}</div>`).join("")||`<p style="opacity:.7">${mo?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,x="";if(s)x='<div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u95DC\u9589</button></div>';else{let y=n.giftSent?n.giftSent():!1;x=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${i.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${y?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...T_].map(C=>`<button type="button" data-h3="gpick" data-k="${C}" class="${yr===C?"on":""}">${C?ze(Zt[C].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}Se.innerHTML=`<h3>\u{1F4DC} ${ze(r.name)} \u7684\u7559\u8A00\u677F</h3>${m}${x}`})}function df(){if(i.demo){Ue("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),Se.classList.remove("on");return}let l=Se.querySelector("#h3msg"),m=(l&&l.value||"").trim().slice(0,60);if(m.length<1){Ue("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let x=n.giftSent&&n.giftSent()?"":yr,y=Se.querySelector('[data-h3="post"]');y&&(y.disabled=!0),Promise.resolve(n.post?n.post({msg:m,gift:x}):null).then(()=>{Ue(x?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),yr="",zn=null,Se.classList.remove("on")},()=>{Ue("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),y&&(y.disabled=!1)})}function nh(){if(_r.forEach(m=>o.remove(m)),_r.length=0,Qr.length=0,!s||!zn)return;let l=zn.filter(m=>m.gift&&Zt[m.gift]&&!r.gc[m.id]);l.slice(0,5).forEach((m,x)=>{let y=new Te;y.position.set(xn.x-1.1-x%3*.55,0,xn.z+.4+Math.floor(x/3)*.5),o.add(y);let C=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][x%5],P=A(.42,.36,.42,Ot(C),0,.18,0,y);A(.44,.38,.08,Ot("#fff3d6"),0,.18,0,y),A(.08,.38,.44,Ot("#fff3d6"),0,.18,0,y);let G=A(.46,.08,.46,Ot(C),0,.4,0,y),W=new wt(new ui(.08,10,8),Ot("#fff3d6"));W.position.y=.48,W.scale.set(1.6,.8,1),y.add(W),y.traverse(K=>{K.isMesh&&Qr.push(K)}),_r.push(y),y.userData.ph=x}),l.length&&Ue(`\u9580\u53E3\u6709 ${l.length} \u4EFD\u79AE\u7269\uFF01`)}function pf(){if(!s||!zn)return;let l=zn.filter(m=>m.gift&&Zt[m.gift]&&!r.gc[m.id]);l.length&&(l.forEach(m=>{r.inv[m.gift]=(r.inv[m.gift]||0)+1,r.gc[m.id]=1}),Ln(),nh(),Se.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${l.map(m=>`<div class="msg"><b>${ze(m.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${ze(Zt[m.gift].n)}\u300D<br>${ze(m.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,Se.classList.add("on"))}function mf(){_i(),Se.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u9580\u53E3\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${ze(r.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,Se.classList.add("on")}let ih=l=>{let m=l.target.closest("[data-h3]");if(!m||!e.contains(m)||m.disabled)return;let x=m.dataset.h3,y=m.dataset.k;if(x==="close")_i();else if(x==="more"&&D.talk)qc(D.talk);else if(x==="build")$c("build");else if(x==="done")$c("walk");else if(x==="rename")mf();else if(x==="nameok"){let C=(Se.querySelector("#h3name").value||"").trim().slice(0,12);C&&(r.name=C,Jt(),Ln()),Se.classList.remove("on")}else if(x==="board"){if(D.mode!=="walk")return;ta(xn.x,xn.z+1,eh)}else if(x==="pclose")Se.classList.remove("on");else if(x==="post")df();else if(x==="gpick")yr=y||"",Se.querySelectorAll('[data-h3="gpick"]').forEach(C=>C.classList.toggle("on",(C.dataset.k||"")===yr));else if(x==="buyok"&&Se._buy)Se._buy();else if(x==="cat")ss=y,Ts();else if(x==="item"){let C=Zt[y];D.sel&&!D.sel.ok&&Jc(D.sel),As(null),r.inv[y]?Qc(y):po("item",y,C.n,C.p,()=>{r.inv[y]=(r.inv[y]||0)+1,Qc(y)})}else if(x==="floor"){let C=Cc.find(G=>G[0]===y),P=()=>{r.fo[y]=1,r.fl=y,F(y),Ln(),Ts()};r.fo[y]?P():po("floor",y,C[1],C[2],P)}else if(x==="wall"){let C=Ic.find(G=>G[0]===y),P=()=>{r.wo[y]=1,r.wa=y,zt(y),Ln(),Ts()};r.wo[y]?P():po("wall",y,C[1],C[2],P)}else x==="rot"?jc():x==="store"?uf():x==="ok"&&ff()};e.addEventListener("click",ih),th().then(l=>{if(!D.dead&&s){nh();let m={};l.filter(x=>x.name&&!m[x.from||x.name]&&(m[x.from||x.name]=1)).slice(0,3).forEach(Lt)}});let gf={get dead(){return D.dead},set dead(l){l&&go()},cv:t,dispose:go,data:()=>JSON.parse(JSON.stringify(an())),probe(){let l=m=>{let x=gr(m);return{x:Math.round(x.x),y:Math.round(x.y)}};return{mode:D.mode,inside:D.inside,calls:a.info.render.calls,tris:a.info.render.triangles,me:{x:+Rt.x.toFixed(2),z:+Rt.z.toFixed(2)},yaw:+D.yaw.toFixed(2),sel:D.sel?{k:D.sel.k,x:D.sel.x,z:D.sel.z,r:D.sel.r,ok:D.sel.ok}:null,items:dt.map(m=>Object.assign({k:m.k,x:m.x,z:m.z,r:m.r},l(new N(m.g.position.x,m.g.position.y+.4,m.g.position.z)))),npcs:Y.filter(m=>!m.hidden).map(m=>Object.assign({id:m.d.id||m.kind2,kind:m.kind2,state:m.state},l(new N(m.x,m.h*.5,m.z)))),board:l(new N(xn.x,1.15,xn.z)),gifts:_r.length,card:Ye.classList.contains("on")?Ye.textContent:"",pan:Se.classList.contains("on")?Se.textContent:"",cozy:qr(an()),inv:Object.assign({},r.inv),name:r.name,fl:r.fl,wa:r.wa,tag:Rt.tag?Rt.tag.visible:!1,cellPx:(m,x)=>l(new N(m,0,x))}},px(l,m,x){let y=gr(new N(l,m,x));return{x:Math.round(y.x),y:Math.round(y.y)}},teleport(l,m){Rt.x=l,Rt.z=m,D.inside=m<ot},setYaw(l){D.yaw=D.yawT=l},setDist(l){D.dist=D.distT=l}};function go(){if(!D.dead){if(D.dead=!0,cancelAnimationFrame(D.raf),clearTimeout(vn),s)try{an(),n.save&&n.save(r,!0)}catch{}document.removeEventListener("keydown",Gc),document.removeEventListener("keyup",Wc),e.removeEventListener("click",ih),Ce.forEach(l=>l.remove()),o.traverse(l=>{l.geometry&&l.geometry.dispose(),(l.material?Array.isArray(l.material)?l.material:[l.material]:[]).forEach(x=>{x.map&&x.map.dispose(),x.dispose()})}),Ss&&Ss.dispose();try{a.dispose(),a.forceContextLoss()}catch{}}}let ia=0,sa=0,sh=0,xi=1,ra=0,_o=0,rh=9,vr=new N,qn=new N,yi=new N;function _f(l){return Math.round(ni(1.75-(l-380)/440*.6,1.15,1.75)*20)/20}function xf(){let l=t.getBoundingClientRect(),m=Math.max(1,t.clientWidth),x=Math.max(1,t.clientHeight),y=Math.min(2,window.devicePixelRatio||1),C=_f(l.height||x);C!==Dn&&(Dn=C,Qi.forEach(P=>{P.h=P.h0*Dn,P.w=P.h*P.ar})),!(m===ia&&x===sa&&y===sh)&&(ia=m,sa=x,sh=y,xi=ni(l.width*y/m,.5,2.2),xi=Math.min(xi,rh,Math.sqrt(14e5/(m*x))),a.setPixelRatio(xi),a.setSize(m,x,!1),c.aspect=m/x,c.updateProjectionMatrix())}function ah(l,m){if(!l.path||!l.path.length)return!0;let[x,y]=l.path[0],C=x-l.x,P=y-l.z,G=Math.hypot(C,P),W=l.sp;if(G<.06)return l.path.shift(),!l.path.length;let K=Math.min(G,W*m);l.x+=C/G*K,l.z+=P/G*K,l.moving=!0,l.ph+=m*(4+W*3.2);let pt=C*qn.x+P*qn.z;return Math.abs(pt)>.05&&(l.face=pt>0?1:-1),!1}function oh(l){if(D.dead)return;if(!document.contains(t)){go();return}D.raf=requestAnimationFrame(oh);let m=Math.min(.1,(l-D.last)/1e3);D.last=l,D.t+=m;let x=D.t;xf(),ra+=m,_o++,ra>1.2&&(ra/_o>.028&&xi>.55&&(xi=Math.max(.55,xi*.85),rh=xi,a.setPixelRatio(xi),a.setSize(ia,sa,!1)),ra=0,_o=0);let y=D.keys;y.q&&(D.yawT+=m*1.8),y.e&&(D.yawT-=m*1.8),D.camV&&(D.yawT+=D.camV*m*1.8),D.yaw+=(D.yawT-D.yaw)*Math.min(1,m*8),D.dist+=(D.distT-D.dist)*Math.min(1,m*5);let C=Math.sin(D.yaw),P=Math.cos(D.yaw);if(vr.set(-C,0,-P),qn.set(P,0,-C),Rt.moving=!1,D.mode==="walk"&&!Se.classList.contains("on")){let q=0,Ht=0,ie=0,He=1e9;if(D.joy)q=qn.x*D.joy.x+vr.x*-D.joy.y,Ht=qn.z*D.joy.x+vr.z*-D.joy.y,ie=Math.hypot(D.joy.x,D.joy.y);else{let Ge=(y.arrowright||y.d?1:0)-(y.arrowleft||y.a?1:0),We=(y.arrowup||y.w?1:0)-(y.arrowdown||y.s?1:0);if(Ge||We){let Qe=Math.hypot(Ge,We);q=(qn.x*Ge+vr.x*We)/Qe,Ht=(qn.z*Ge+vr.z*We)/Qe,ie=1}else if(D.tgt){if(!D.tgt.path){let dn=Kr(Rt.x,Rt.z,Math.floor(D.tgt.x),Math.floor(D.tgt.z));D.tgt.path=dn?dn.slice(1):[],dn?D.tgt.path.length?D.tgt.path[D.tgt.path.length-1]=[D.tgt.x,D.tgt.z]:D.tgt.path=[[D.tgt.x,D.tgt.z]]:D.tgt.path=[[D.tgt.x,D.tgt.z]]}let Qe=D.tgt.path[0];if(Qe){let dn=Qe[0]-Rt.x,vi=Qe[1]-Rt.z,Bn=Math.hypot(dn,vi);if(Bn<.12){if(D.tgt.path.shift(),!D.tgt.path.length){let si=D.tgt.fn;D.tgt=null,si&&si()}}else q=dn/Bn,Ht=vi/Bn,ie=1,He=Bn}else{let dn=D.tgt.fn;D.tgt=null,dn&&dn()}}}if(ie>.05){let Ge=Math.hypot(q,Ht)||1,We=4*Math.min(1,ie),Qe=Math.min(We*m,He),dn=q/Ge*Qe,vi=Ht/Ge*Qe,Bn=!1;if(B(Rt.x+dn,Rt.z+vi,Rt.z)?(Rt.x+=dn,Rt.z+=vi,Bn=!0):B(Rt.x+dn,Rt.z,Rt.z)?(Rt.x+=dn,Bn=!0):B(Rt.x,Rt.z+vi,Rt.z)&&(Rt.z+=vi,Bn=!0),!Bn&&D.tgt&&(D.tgt.stuck=(D.tgt.stuck||0)+m,D.tgt.stuck>.6)){let si=D.tgt.fn;D.tgt=null,si&&Math.hypot(Rt.x-xn.x,Rt.z-xn.z)<3&&si()}if(Bn){Rt.moving=!0,Rt.ph+=m*9*Math.min(1,ie);let si=q/Ge*qn.x+Ht/Ge*qn.z;Math.abs(si)>.2&&(Rt.face=si>0?1:-1)}D.talk&&Math.hypot(D.talk.x-Rt.x,D.talk.z-Rt.z)>6&&_i()}}let G=D.inside;D.inside=Rt.z<ot-.05,G!==D.inside&&D.mode==="walk"&&(D.distT=D.inside?10.5:13,pe.textContent=D.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${r.name}\u300D`:"\u5E97\u5916",pe.classList.add("on"),clearTimeout(pe.t),pe.t=setTimeout(()=>pe.classList.remove("on"),1800));for(let q of Y){if(q.moving=!1,q.kind2==="owner")continue;if(q.state==="talk"){q.face=(Rt.x-q.x)*qn.x+(Rt.z-q.z)*qn.z>0?1:-1;continue}if(q.state==="out"){if(q.t-=m,q.t<=0){let We=Math.random()<.5;q.x=We?fi+4:di-4,q.z=ot+Rn(3.5,5.5),q.hidden=!1,q.alpha=0,q.stops=2+Math.floor(Math.random()*3);let Qe=Kt(q);(!Qe||!Ct(q,Qe[0],Qe[1]))&&(q.hidden=!0,q.t=3)}continue}if(q.alpha=Math.min(1,(q.alpha||0)+m*2),q.state==="walk")ah(q,m)&&(q.state="idle",q.t=Rn(3,7));else if(q.state==="idle"){if(q.t-=m,q.t<=0)if(q.stops--,q.stops<=0){let We=Math.random()<.5?fi+1:di-2;Ct(q,We,ot+4)?q.state="leave":q.t=2}else{let We=Kt(q);(!We||!Ct(q,We[0],We[1]))&&(q.t=2)}}else q.state==="leave"&&(ah(q,m)?(q.hidden=!0,q.state="out",q.t=Rn(4,12)):(q.x<fi+3||q.x>di-3)&&(q.alpha=Math.max(0,Math.min(q.alpha,Math.min(q.x-fi,di-q.x)/3))));let Ht=q.x-Rt.x,ie=q.z-Rt.z,He=Math.hypot(Ht,ie),Ge=.55;if(He<Ge&&He>.001&&q.state!=="walk"&&q.state!=="leave"){let We=q.x+Ht/He*(Ge-He),Qe=q.z+ie/He*(Ge-He);B(We,Qe,q.z)&&(q.x=We,q.z=Qe)}}let W=Rt.x,K=Rt.z,pt=1.1;D.mode==="build"&&(D.inside?(W=Xt/2+C*2.2,K=ot/2+P*2.2):(W=pi+C*2,K=ot+2.5+P*2),pt=.4),D.cam.x+=(W-D.cam.x)*Math.min(1,m*(D.mode==="build"?4:12)),D.cam.z+=(K-D.cam.z)*Math.min(1,m*(D.mode==="build"?4:12)),D.cam.y+=(pt-D.cam.y)*Math.min(1,m*4);let Re=ia/sa,ae=Re<1.45?1.45/Re:1,Dt=D.dist*ae,Ee=D.mode==="build"?.86:.64;yi.set(D.cam.x+C*Math.cos(Ee)*Dt,D.cam.y+Math.sin(Ee)*Dt,D.cam.z+P*Math.cos(Ee)*Dt),c.position.copy(yi),c.lookAt(D.cam.x,D.cam.y+.5,D.cam.z),p.position.copy(yi);let Ve=D.inside||D.mode==="build"&&D.inside;we.visible=!Ve;let bn=D.low={back:Ve&&yi.z<0,front:Ve&&yi.z>ot,left:Ve&&yi.x<0,right:Ve&&yi.x>Xt};for(let q in j){let Ht=bn[q];for(let ie of j[q]){let He=Ht?.14:1;ie.scale.y+=(He-ie.scale.y)*Math.min(1,m*10)}}for(let q of dt)if(Zt[q.k].L==="wall"){let Ht=ue(q.r);q.g.visible=!bn[Ht]||!Ve}$t.visible=!bn.front;for(let q of ke)q.visible=!(Ve&&(bn.left&&q.position.x<0||bn.right&&q.position.x>Xt));v.intensity=w.intensity=Ve?14:6;let xo=Math.atan2(yi.x-D.cam.x,yi.z-D.cam.z);for(let q of Qi){let Ht=!q.hidden,ie=!Ve&&q.z<ot;if(q.grp.visible=Ht,q.sh.visible=Ht,q.tag&&(q.tag.visible=Ht&&!ie),q.bub&&(q.bub.visible=Ht&&!ie&&q!==D.talk&&q.state!=="leave"),!Ht)continue;let He=q.w,Ge=q.h,We=q.moving?1:0,Qe=Math.sin(q.ph),dn=We?Math.abs(Qe)*.06:0,vi=We?Qe*.06:Math.sin(x*1.6+q.ph)*.01,Bn=We?1+Math.cos(q.ph*2)*.025:1+Math.sin(x*1.6+q.ph)*.008,si=q.state==="sleep"?Math.sin(x*1.2)*.015:0;q.grp.position.set(q.x,dn,q.z),q.m.rotation.set(0,xo,vi*q.face+si),q.m.scale.set(He*q.face*(2-Bn),Ge*Bn,1),q.mat.opacity=q.alpha==null?1:q.alpha,q.sh.position.set(q.x,.025,q.z),q.sh.scale.set(He*.7,He*.4,1),q.tag&&(q.tag.position.set(q.x,Ge+.3,q.z),q.tag.material.opacity=q.alpha==null?1:q.alpha),q.bub&&q.bub.position.set(q.x,Ge+(q.tag?.82:.45)+Math.sin(x*2.3+q.ph)*.06,q.z)}st.rotation.x=Math.sin(x*1.7)*.05;for(let q of re)q.material.opacity=.45+.12*Math.sin(x*6);for(let q of yn)q.material.opacity=.5+.05*Math.sin(x*3+q.parent.position.x);for(let q of dt){let Ht=q.g.userData;if(Ht.glows)for(let ie of Ht.glows)ie.material.opacity=(ie.userData.o0||(ie.userData.o0=ie.material.opacity))*(.85+.15*Math.sin(x*5+q.x*1.7));if(Ht.swing&&(Ht.swing.rotation.z=Math.sin(x*1.5+q.x)*.06),Ht.wave&&(Ht.wave.rotation.x=-.6+Math.sin(x*4)*.5),Ht.fish&&Ht.fish.forEach((ie,He)=>{let Ge=x*(.6+He*.2)+He*2;ie.position.x=Math.cos(Ge)*.2,ie.position.z=Math.sin(Ge)*.12,ie.rotation.y=-Ge+Math.PI/2*(He%2?1:-1)}),Ht.spin&&(Ht.spin.rotation.y=x*3),Ht.hands){let ie=new Date;Ht.hands[0].rotation.z=-(ie.getHours()%12+ie.getMinutes()/60)/12*Math.PI*2,Ht.hands[1].rotation.z=-ie.getMinutes()/60*Math.PI*2,Ht.hands.forEach(He=>{let Ge=He.rotation.z,We=He.geometry.parameters.height/2;He.position.x=-Math.sin(Ge)*We,He.position.y=Ht.handY+Math.cos(Ge)*We})}}for(let q of _r)q.position.y=Math.abs(Math.sin(x*3+q.userData.ph))*.12;{let q=it.geometry.attributes.position.array;for(let Ht=0;Ht<M;Ht++){let ie=at[Ht];q[Ht*3]+=(ie.vx+Math.sin(x*1.5+ie.ph)*.3)*m,q[Ht*3+1]+=ie.vy*m,q[Ht*3+2]+=Math.cos(x*1.2+ie.ph)*.2*m,q[Ht*3+1]<.02&&Nt(Ht)}it.geometry.attributes.position.needsUpdate=!0}me.children[1].rotation.z=Math.sin(x*.8)*.08,me.children[4].rotation.y=Math.sin(x*2)*.4;{let q=s?dt.find(ie=>ie.k==="register"):null,Ht=q?Yc():0;ii.visible=!!(q&&Ht>0&&D.mode==="walk"&&D.inside),ii.visible&&(ii.position.set(q.g.position.x,1.75+Math.sin(x*3)*.1,q.g.position.z),ii.material.rotation=0,ii.scale.set(.55*Math.abs(Math.cos(x*2))+.05,.55,1))}for(let q=ea.length-1;q>=0;q--){let Ht=ea[q],ie=Ht.userData;ie.t+=m,ie.v.y-=9*m,Ht.position.addScaledVector(ie.v,m),Ht.material.opacity=Math.max(0,1-ie.t/1.1),ie.t>1.1&&(o.remove(Ht),Ht.material.dispose(),ea.splice(q,1))}D.sel&&(fn.material.opacity=.7+.3*Math.sin(x*6)),a.render(o,c)}return D.raf=requestAnimationFrame(oh),gf}return wf(C_);})();
