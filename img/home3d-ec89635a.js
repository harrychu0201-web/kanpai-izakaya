var Home3D=(()=>{var kl=Object.defineProperty;var Bd=Object.getOwnPropertyDescriptor;var Vd=Object.getOwnPropertyNames;var Hd=Object.prototype.hasOwnProperty;var Gd=(n,t)=>{for(var e in t)kl(n,e,{get:t[e],enumerable:!0})},Wd=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Vd(t))!Hd.call(n,s)&&s!==e&&kl(n,s,{get:()=>t[s],enumerable:!(i=Bd(t,s))||i.enumerable});return n};var Xd=n=>Wd(kl({},"__esModule",{value:!0}),n);var Cy={};Gd(Cy,{D0:()=>yi,D1:()=>vi,DX:()=>is,EXO:()=>Vi,H3CSS:()=>Ay,RD:()=>xt,RW:()=>xe,STARS:()=>vu,WH:()=>Gn,cozyOf:()=>_o,dailyIncome:()=>yu,defaultEx:()=>pu,demoHome:()=>Ty,freshHome:()=>Cd,freshHomeInterior:()=>Sy,island:()=>Td,starsOf:()=>_u,start:()=>Ry});var qd=0,Lu=1,Yd=2;var Xf=1,Zh=2,Is=3,Qs=0,Yn=1,Rn=2,Js=0,la=1,ds=2,Du=3,Uu=4,$d=5,yr=100,Zd=101,Jd=102,Kd=103,jd=104,Qd=200,tp=201,ep=202,np=203,Mc=204,wc=205,ip=206,sp=207,rp=208,ap=209,op=210,lp=211,cp=212,hp=213,up=214,Sc=0,Tc=1,Ec=2,fa=3,Ac=4,Rc=5,Cc=6,Ic=7,Jh=0,fp=1,dp=2,Ks=0,pp=1,mp=2,gp=3,xp=4,_p=5,yp=6,vp=7;var qf=300,da=301,pa=302,Pc=303,Lc=304,Rl=306,Ns=1e3,br=1001,Dc=1002,Ki=1003,bp=1004;var To=1005;var fs=1006,Bl=1007;var Mr=1008;var zs=1009,Yf=1010,$f=1011,Qa=1012,Kh=1013,wr=1014,Ps=1015,fo=1016,jh=1017,Qh=1018,ma=1020,Zf=35902,Jf=1021,Kf=1022,Ji=1023,jf=1024,Qf=1025,ca=1026,ga=1027,td=1028,tu=1029,ed=1030,eu=1031;var nu=1033,el=33776,nl=33777,il=33778,sl=33779,Uc=35840,Nc=35841,zc=35842,Fc=35843,Oc=36196,kc=37492,Bc=37496,Vc=37808,Hc=37809,Gc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,$c=37815,Zc=37816,Jc=37817,Kc=37818,jc=37819,Qc=37820,th=37821,rl=36492,eh=36494,nh=36495,nd=36283,ih=36284,sh=36285,rh=36286;var al=2300,ah=2301,Vl=2302,Nu=2400,zu=2401,Fu=2402;var Mp=3200,wp=3201;var id=0,Sp=1,$s="",On="srgb",Ca="srgb-linear",Cl="linear",un="srgb";var Hr=7680;var Ou=519,Tp=512,Ep=513,Ap=514,sd=515,Rp=516,Cp=517,Ip=518,Pp=519,oh=35044;var ku="300 es",Ls=2e3,ol=2001,tr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hl=Math.PI/180,lh=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ci[n&255]+ci[n>>8&255]+ci[n>>16&255]+ci[n>>24&255]+"-"+ci[t&255]+ci[t>>8&255]+"-"+ci[t>>16&15|64]+ci[t>>24&255]+"-"+ci[e&63|128]+ci[e>>8&255]+"-"+ci[e>>16&255]+ci[e>>24&255]+ci[i&255]+ci[i>>8&255]+ci[i>>16&255]+ci[i>>24&255]).toLowerCase()}function ti(n,t,e){return Math.max(t,Math.min(e,n))}function Lp(n,t){return(n%t+t)%t}function Gl(n,t,e){return(1-e)*n+e*t}function us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Et=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class n{constructor(t,e,i,s,r,a,o,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],u=i[4],f=i[7],p=i[2],d=i[5],v=i[8],S=s[0],x=s[3],m=s[6],w=s[1],C=s[4],M=s[7],q=s[2],N=s[5],V=s[8];return r[0]=a*S+o*w+l*q,r[3]=a*x+o*C+l*N,r[6]=a*m+o*M+l*V,r[1]=h*S+u*w+f*q,r[4]=h*x+u*C+f*N,r[7]=h*m+u*M+f*V,r[2]=p*S+d*w+v*q,r[5]=p*x+d*C+v*N,r[8]=p*m+d*M+v*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-i*r*u+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=u*a-o*h,p=o*l-u*r,d=h*r-a*l,v=e*f+i*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return t[0]=f*S,t[1]=(s*h-u*i)*S,t[2]=(o*i-s*a)*S,t[3]=p*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(i*l-h*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new De;function rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){let n=to("canvas");return n.style.display="block",n}var Bu={};function $a(n){n in Bu||(Bu[n]=!0,console.warn(n))}function Up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Np(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Je={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===un&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===un&&(n.r=ha(n.r),n.g=ha(n.g),n.b=ha(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$s?Cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vu=[.64,.33,.3,.6,.15,.06],Hu=[.2126,.7152,.0722],Gu=[.3127,.329],Wu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Ca]:{primaries:Vu,whitePoint:Gu,transfer:Cl,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:Hu,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:Vu,whitePoint:Gu,transfer:un,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:Hu,outputColorSpaceConfig:{drawingBufferColorSpace:On}}});var Gr,ch=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gr===void 0&&(Gr=to("canvas")),Gr.width=t.width,Gr.height=t.height;let i=Gr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Us(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Us(e[i]/255)*255):e[i]=Us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fp=0,ll=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Xl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Op=0,Si=class n extends tr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=br,s=br,r=fs,a=Mr,o=Ji,l=zs,h=n.DEFAULT_ANISOTROPY,u=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ds(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=qf;Si.DEFAULT_ANISOTROPY=1;var dn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],f=l[8],p=l[1],d=l[5],v=l[9],S=l[2],x=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-S)<.01&&Math.abs(v-x)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+S)<.1&&Math.abs(v+x)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(h+1)/2,M=(d+1)/2,q=(m+1)/2,N=(u+p)/4,V=(f+S)/4,B=(v+x)/4;return C>M&&C>q?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=N/i,r=V/i):M>q?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=N/s,r=B/s):q<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),i=V/r,s=B/r),this.set(i,s,r,e),this}let w=Math.sqrt((x-v)*(x-v)+(f-S)*(f-S)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(x-v)/w,this.y=(f-S)/w,this.z=(p-u)/w,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hh=class extends tr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new dn(0,0,t,e),this.scissorTest=!1,this.viewport=new dn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fs,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Si(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends hh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},cl=class extends Si{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uh=class extends Si{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],u=i[s+2],f=i[s+3],p=r[a+0],d=r[a+1],v=r[a+2],S=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=S;return}if(f!==S||l!==p||h!==d||u!==v){let x=1-o,m=l*p+h*d+u*v+f*S,w=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){let q=Math.sqrt(C),N=Math.atan2(q,m*w);x=Math.sin(x*N)/q,o=Math.sin(o*N)/q}let M=o*w;if(l=l*x+p*M,h=h*x+d*M,u=u*x+v*M,f=f*x+S*M,x===1-o){let q=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=q,h*=q,u*=q,f*=q}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a],p=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+u*f+l*d-h*p,t[e+1]=l*v+u*p+h*f-o*d,t[e+2]=h*v+u*d+o*p-l*f,t[e+3]=u*v-o*f-l*p-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),u=o(s/2),f=o(r/2),p=l(i/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*f+h*d*v,this._y=h*d*f-p*u*v,this._z=h*u*v+p*d*f,this._w=h*u*f-p*d*v;break;case"YXZ":this._x=p*u*f+h*d*v,this._y=h*d*f-p*u*v,this._z=h*u*v-p*d*f,this._w=h*u*f+p*d*v;break;case"ZXY":this._x=p*u*f-h*d*v,this._y=h*d*f+p*u*v,this._z=h*u*v+p*d*f,this._w=h*u*f-p*d*v;break;case"ZYX":this._x=p*u*f-h*d*v,this._y=h*d*f+p*u*v,this._z=h*u*v-p*d*f,this._w=h*u*f+p*d*v;break;case"YZX":this._x=p*u*f+h*d*v,this._y=h*d*f+p*u*v,this._z=h*u*v-p*d*f,this._w=h*u*f-p*d*v;break;case"XZY":this._x=p*u*f-h*d*v,this._y=h*d*f-p*u*v,this._z=h*u*v+p*d*f,this._w=h*u*f+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],u=e[6],f=e[10],p=i+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ti(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-i*h,this._z=r*u+a*h+i*l-s*o,this._w=a*u-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,o),f=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*h+a*f-o*u,this.y=i+l*u+o*h-r*f,this.z=s+l*f+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ql.copy(this).projectOnVector(t),this.sub(ql)}reflect(t){return this.sub(ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new z,qu=new er,Fs=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yi):Yi.fromBufferAttribute(r,a),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),Ao.subVectors(this.max,Ba),Wr.subVectors(t.a,Ba),Xr.subVectors(t.b,Ba),qr.subVectors(t.c,Ba),Hs.subVectors(Xr,Wr),Gs.subVectors(qr,Xr),fr.subVectors(Wr,qr);let e=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-fr.z,fr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,fr.z,0,-fr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-fr.y,fr.x,0];return!Yl(e,Wr,Xr,qr,Ao)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Wr,Xr,qr,Ao))?!1:(Ro.crossVectors(Hs,Gs),e=[Ro.x,Ro.y,Ro.z],Yl(e,Wr,Xr,qr,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ts=[new z,new z,new z,new z,new z,new z,new z,new z],Yi=new z,Eo=new Fs,Wr=new z,Xr=new z,qr=new z,Hs=new z,Gs=new z,fr=new z,Ba=new z,Ao=new z,Ro=new z,dr=new z;function Yl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){dr.fromArray(n,r);let o=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),l=t.dot(dr),h=e.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var kp=new Fs,Va=new z,$l=new z,xa=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Va.subVectors(t,this.center);let e=Va.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Va.copy(t.center).add($l)),this.expandByPoint(Va.copy(t.center).sub($l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Es=new z,Zl=new z,Co=new z,Ws=new z,Jl=new z,Io=new z,Kl=new z,eo=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zl.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Ws.copy(this.origin).sub(Zl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Co),o=Ws.dot(this.direction),l=-Ws.dot(Co),h=Ws.lengthSq(),u=Math.abs(1-a*a),f,p,d,v;if(u>0)if(f=a*l-o,p=a*o-l,v=r*u,f>=0)if(p>=-v)if(p<=v){let S=1/u;f*=S,p*=S,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+h}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;else p<=-v?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+h):p<=v?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Zl).addScaledVector(Co,p),d}intersectSphere(t,e){Es.subVectors(t.center,this.origin);let i=Es.dot(this.direction),s=Es.dot(Es)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,i,s,r){Jl.subVectors(e,t),Io.subVectors(i,t),Kl.crossVectors(Jl,Io);let a=this.direction.dot(Kl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ws.subVectors(this.origin,t);let l=o*this.direction.dot(Io.crossVectors(Ws,Io));if(l<0)return null;let h=o*this.direction.dot(Jl.cross(Ws));if(h<0||l+h>a)return null;let u=-o*Ws.dot(Kl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class n{constructor(t,e,i,s,r,a,o,l,h,u,f,p,d,v,S,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,u,f,p,d,v,S,x)}set(t,e,i,s,r,a,o,l,h,u,f,p,d,v,S,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=v,m[11]=S,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Yr.setFromMatrixColumn(t,0).length(),r=1/Yr.setFromMatrixColumn(t,1).length(),a=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=a*u,d=a*f,v=o*u,S=o*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=d+v*h,e[5]=p-S*h,e[9]=-o*l,e[2]=S-p*h,e[6]=v+d*h,e[10]=a*l}else if(t.order==="YXZ"){let p=l*u,d=l*f,v=h*u,S=h*f;e[0]=p+S*o,e[4]=v*o-d,e[8]=a*h,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=S+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*u,d=l*f,v=h*u,S=h*f;e[0]=p-S*o,e[4]=-a*f,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=S-p*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*u,d=a*f,v=o*u,S=o*f;e[0]=l*u,e[4]=v*h-d,e[8]=p*h+S,e[1]=l*f,e[5]=S*h+p,e[9]=d*h-v,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,d=a*h,v=o*l,S=o*h;e[0]=l*u,e[4]=S-p*f,e[8]=v*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*f+v,e[10]=p-S*f}else if(t.order==="XZY"){let p=a*l,d=a*h,v=o*l,S=o*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=p*f+S,e[5]=a*u,e[9]=d*f-v,e[2]=v*f-d,e[6]=o*u,e[10]=S*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bp,t,Vp)}lookAt(t,e,i){let s=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Xs.crossVectors(i,Ci),Xs.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Xs.crossVectors(i,Ci)),Xs.normalize(),Po.crossVectors(Ci,Xs),s[0]=Xs.x,s[4]=Po.x,s[8]=Ci.x,s[1]=Xs.y,s[5]=Po.y,s[9]=Ci.y,s[2]=Xs.z,s[6]=Po.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],u=i[1],f=i[5],p=i[9],d=i[13],v=i[2],S=i[6],x=i[10],m=i[14],w=i[3],C=i[7],M=i[11],q=i[15],N=s[0],V=s[4],B=s[8],L=s[12],R=s[1],H=s[5],st=s[9],nt=s[13],at=s[2],yt=s[6],rt=s[10],At=s[14],lt=s[3],Dt=s[7],$t=s[11],Ft=s[15];return r[0]=a*N+o*R+l*at+h*lt,r[4]=a*V+o*H+l*yt+h*Dt,r[8]=a*B+o*st+l*rt+h*$t,r[12]=a*L+o*nt+l*At+h*Ft,r[1]=u*N+f*R+p*at+d*lt,r[5]=u*V+f*H+p*yt+d*Dt,r[9]=u*B+f*st+p*rt+d*$t,r[13]=u*L+f*nt+p*At+d*Ft,r[2]=v*N+S*R+x*at+m*lt,r[6]=v*V+S*H+x*yt+m*Dt,r[10]=v*B+S*st+x*rt+m*$t,r[14]=v*L+S*nt+x*At+m*Ft,r[3]=w*N+C*R+M*at+q*lt,r[7]=w*V+C*H+M*yt+q*Dt,r[11]=w*B+C*st+M*rt+q*$t,r[15]=w*L+C*nt+M*At+q*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],u=t[2],f=t[6],p=t[10],d=t[14],v=t[3],S=t[7],x=t[11],m=t[15];return v*(+r*l*f-s*h*f-r*o*p+i*h*p+s*o*d-i*l*d)+S*(+e*l*d-e*h*p+r*a*p-s*a*d+s*h*u-r*l*u)+x*(+e*h*f-e*o*d-r*a*f+i*a*d+r*o*u-i*h*u)+m*(-s*o*u-e*l*f+e*o*p+s*a*f-i*a*p+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=t[9],p=t[10],d=t[11],v=t[12],S=t[13],x=t[14],m=t[15],w=f*x*h-S*p*h+S*l*d-o*x*d-f*l*m+o*p*m,C=v*p*h-u*x*h-v*l*d+a*x*d+u*l*m-a*p*m,M=u*S*h-v*f*h+v*o*d-a*S*d-u*o*m+a*f*m,q=v*f*l-u*S*l-v*o*p+a*S*p+u*o*x-a*f*x,N=e*w+i*C+s*M+r*q;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return t[0]=w*V,t[1]=(S*p*r-f*x*r-S*s*d+i*x*d+f*s*m-i*p*m)*V,t[2]=(o*x*r-S*l*r+S*s*h-i*x*h-o*s*m+i*l*m)*V,t[3]=(f*l*r-o*p*r-f*s*h+i*p*h+o*s*d-i*l*d)*V,t[4]=C*V,t[5]=(u*x*r-v*p*r+v*s*d-e*x*d-u*s*m+e*p*m)*V,t[6]=(v*l*r-a*x*r-v*s*h+e*x*h+a*s*m-e*l*m)*V,t[7]=(a*p*r-u*l*r+u*s*h-e*p*h-a*s*d+e*l*d)*V,t[8]=M*V,t[9]=(v*f*r-u*S*r-v*i*d+e*S*d+u*i*m-e*f*m)*V,t[10]=(a*S*r-v*o*r+v*i*h-e*S*h-a*i*m+e*o*m)*V,t[11]=(u*o*r-a*f*r-u*i*h+e*f*h+a*i*d-e*o*d)*V,t[12]=q*V,t[13]=(u*S*s-v*f*s+v*i*p-e*S*p-u*i*x+e*f*x)*V,t[14]=(v*o*s-a*S*s-v*i*l+e*S*l+a*i*x-e*o*x)*V,t[15]=(a*f*s-u*o*s+u*i*l-e*f*l-a*i*p+e*o*p)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,u=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+i,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,u=a+a,f=o+o,p=r*h,d=r*u,v=r*f,S=a*u,x=a*f,m=o*f,w=l*h,C=l*u,M=l*f,q=i.x,N=i.y,V=i.z;return s[0]=(1-(S+m))*q,s[1]=(d+M)*q,s[2]=(v-C)*q,s[3]=0,s[4]=(d-M)*N,s[5]=(1-(p+m))*N,s[6]=(x+w)*N,s[7]=0,s[8]=(v+C)*V,s[9]=(x-w)*V,s[10]=(1-(p+S))*V,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Yr.set(s[0],s[1],s[2]).length(),a=Yr.set(s[4],s[5],s[6]).length(),o=Yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$i.copy(this);let h=1/r,u=1/a,f=1/o;return $i.elements[0]*=h,$i.elements[1]*=h,$i.elements[2]*=h,$i.elements[4]*=u,$i.elements[5]*=u,$i.elements[6]*=u,$i.elements[8]*=f,$i.elements[9]*=f,$i.elements[10]*=f,e.setFromRotationMatrix($i),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Ls){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),d,v;if(o===Ls)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ol)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ls){let l=this.elements,h=1/(e-t),u=1/(i-s),f=1/(a-r),p=(e+t)*h,d=(i+s)*u,v,S;if(o===Ls)v=(a+r)*f,S=-2*f;else if(o===ol)v=r*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Yr=new z,$i=new gn,Bp=new z(0,0,0),Vp=new z(1,1,1),Xs=new z,Po=new z,Ci=new z,Yu=new gn,$u=new er,ps=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ti(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ti(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ti(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ti(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ti(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ps.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,Zu=new z,$r=new er,As=new gn,Lo=new z,Ha=new z,Gp=new z,Wp=new er,Ju=new z(1,0,0),Ku=new z(0,1,0),ju=new z(0,0,1),Qu={type:"added"},Xp={type:"removed"},Zr={type:"childadded",child:null},jl={type:"childremoved",child:null},ei=class n extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new ps,i=new er,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gn},normalMatrix:{value:new De}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Ha,Lo,this.up):As.lookAt(Lo,Ha,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(As),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ei.DEFAULT_UP=new z(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=new z,Rs=new z,Ql=new z,Cs=new z,Jr=new z,Kr=new z,tf=new z,tc=new z,ec=new z,nc=new z,ic=new dn,sc=new dn,rc=new dn,Zs=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zi.subVectors(t,e),s.cross(Zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zi.subVectors(s,e),Rs.subVectors(i,e),Ql.subVectors(t,e);let a=Zi.dot(Zi),o=Zi.dot(Rs),l=Zi.dot(Ql),h=Rs.dot(Rs),u=Rs.dot(Ql),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(h*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cs.x),l.addScaledVector(a,Cs.y),l.addScaledVector(o,Cs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ic,r.x),a.addScaledVector(sc,r.y),a.addScaledVector(rc,r.z),a}static isFrontFacing(t,e,i,s){return Zi.subVectors(i,e),Rs.subVectors(t,e),Zi.cross(Rs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Zi.cross(Rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Jr.subVectors(s,i),Kr.subVectors(r,i),tc.subVectors(t,i);let l=Jr.dot(tc),h=Kr.dot(tc);if(l<=0&&h<=0)return e.copy(i);ec.subVectors(t,s);let u=Jr.dot(ec),f=Kr.dot(ec);if(u>=0&&f<=u)return e.copy(s);let p=l*f-u*h;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Jr,a);nc.subVectors(t,r);let d=Jr.dot(nc),v=Kr.dot(nc);if(v>=0&&d<=v)return e.copy(r);let S=d*h-l*v;if(S<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(i).addScaledVector(Kr,o);let x=u*v-d*f;if(x<=0&&f-u>=0&&d-v>=0)return tf.subVectors(r,s),o=(f-u)/(f-u+(d-v)),e.copy(s).addScaledVector(tf,o);let m=1/(x+S+p);return a=S*m,o=p*m,e.copy(i).addScaledVector(Jr,a).addScaledVector(Kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},Do={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Me=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Je.workingColorSpace){return this.r=t,this.g=e,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Je.workingColorSpace){if(t=Lp(t,1),e=ti(e,0,1),i=ti(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ac(a,r,t+1/3),this.g=ac(a,r,t),this.b=ac(a,r,t-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(t,e=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=On){let i=ad[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return Je.fromWorkingColorSpace(hi.copy(this),t),Math.round(ti(hi.r*255,0,255))*65536+Math.round(ti(hi.g*255,0,255))*256+Math.round(ti(hi.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(hi.copy(this),e);let i=hi.r,s=hi.g,r=hi.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(hi.copy(this),e),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=On){Je.fromWorkingColorSpace(hi.copy(this),t);let e=hi.r,i=hi.g,s=hi.b;return t!==On?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qs),this.setHSL(qs.h+t,qs.s+e,qs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qs),t.getHSL(Do);let i=Gl(qs.h,Do.h,e),s=Gl(qs.s,Do.s,e),r=Gl(qs.l,Do.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new Me;Me.NAMES=ad;var qp=0,Os=class extends tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ds(),this.name="",this.blending=la,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=wc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==Qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Un=new z,Uo=new Et,xi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=oh,this.updateRanges=[],this.gpuType=Ps,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix3(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}};var hl=class extends xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ul=class extends xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ie=class extends xi{constructor(t,e,i){super(new Float32Array(t),e,i)}},Yp=0,Fi=new gn,oc=new ei,jr=new z,Ii=new Fs,Ga=new Fs,qn=new z,xn=class n extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?ul:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,i){return Fi.makeTranslation(t,e,i),this.applyMatrix4(Fi),this}scale(t,e,i){return Fi.makeScale(t,e,i),this.applyMatrix4(Fi),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(qn.addVectors(Ii.min,Ga.min),Ii.expandByPoint(qn),qn.addVectors(Ii.max,Ga.max),Ii.expandByPoint(qn)):(Ii.expandByPoint(Ga.min),Ii.expandByPoint(Ga.max))}Ii.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)qn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)qn.fromBufferAttribute(o,h),l&&(jr.fromBufferAttribute(t,h),qn.add(jr)),s=Math.max(s,i.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new z,l[B]=new z;let h=new z,u=new z,f=new z,p=new Et,d=new Et,v=new Et,S=new z,x=new z;function m(B,L,R){h.fromBufferAttribute(i,B),u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,R),p.fromBufferAttribute(r,B),d.fromBufferAttribute(r,L),v.fromBufferAttribute(r,R),u.sub(h),f.sub(h),d.sub(p),v.sub(p);let H=1/(d.x*v.y-v.x*d.y);isFinite(H)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(H),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(H),o[B].add(S),o[L].add(S),o[R].add(S),l[B].add(x),l[L].add(x),l[R].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,L=w.length;B<L;++B){let R=w[B],H=R.start,st=R.count;for(let nt=H,at=H+st;nt<at;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let C=new z,M=new z,q=new z,N=new z;function V(B){q.fromBufferAttribute(s,B),N.copy(q);let L=o[B];C.copy(L),C.sub(q.multiplyScalar(q.dot(L))).normalize(),M.crossVectors(N,L);let H=M.dot(l[B])<0?-1:1;a.setXYZW(B,C.x,C.y,C.z,H)}for(let B=0,L=w.length;B<L;++B){let R=w[B],H=R.start,st=R.count;for(let nt=H,at=H+st;nt<at;nt+=3)V(t.getX(nt+0)),V(t.getX(nt+1)),V(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,h=new z,u=new z,f=new z;if(t)for(let p=0,d=t.count;p<d;p+=3){let v=t.getX(p+0),S=t.getX(p+1),x=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,x),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),o.add(u),l.add(u),h.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qn.fromBufferAttribute(t,e),qn.normalize(),t.setXYZ(e,qn.x,qn.y,qn.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(l.length*u),d=0,v=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let m=0;m<u;m++)p[v++]=h[d++]}return new xi(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],d=t(p,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let f=0,p=h.length;f<p;f++){let d=h[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ef=new gn,pr=new eo,No=new xa,nf=new z,zo=new z,Fo=new z,Oo=new z,lc=new z,ko=new z,sf=new z,Bo=new z,ht=class extends ei{constructor(t=new xn,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],f=r[l];u!==0&&(lc.fromBufferAttribute(f,t),a?ko.addScaledVector(lc,u):ko.addScaledVector(lc.sub(e),u))}e.add(ko)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),pr.copy(t.ray).recast(t.near),!(No.containsPoint(pr.origin)===!1&&(pr.intersectSphere(No,nf)===null||pr.origin.distanceToSquared(nf)>(t.far-t.near)**2))&&(ef.copy(r).invert(),pr.copy(t.ray).applyMatrix4(ef),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){let x=p[v],m=a[x.materialIndex],w=Math.max(x.start,d.start),C=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let M=w,q=C;M<q;M+=3){let N=o.getX(M),V=o.getX(M+1),B=o.getX(M+2);s=Vo(this,m,t,i,h,u,f,N,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let x=v,m=S;x<m;x+=3){let w=o.getX(x),C=o.getX(x+1),M=o.getX(x+2);s=Vo(this,a,t,i,h,u,f,w,C,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){let x=p[v],m=a[x.materialIndex],w=Math.max(x.start,d.start),C=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let M=w,q=C;M<q;M+=3){let N=M,V=M+1,B=M+2;s=Vo(this,m,t,i,h,u,f,N,V,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let x=v,m=S;x<m;x+=3){let w=x,C=x+1,M=x+2;s=Vo(this,a,t,i,h,u,f,w,C,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function $p(n,t,e,i,s,r,a,o){let l;if(t.side===Yn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Qs,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Bo);return h<e.near||h>e.far?null:{distance:h,point:Bo.clone(),object:n}}function Vo(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,zo),n.getVertexPosition(l,Fo),n.getVertexPosition(h,Oo);let u=$p(n,t,e,i,zo,Fo,Oo,sf);if(u){let f=new z;Zs.getBarycoord(sf,zo,Fo,Oo,f),s&&(u.uv=Zs.getInterpolatedAttribute(s,o,l,h,f,new Et)),r&&(u.uv1=Zs.getInterpolatedAttribute(r,o,l,h,f,new Et)),a&&(u.normal=Zs.getInterpolatedAttribute(a,o,l,h,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c:h,normal:new z,materialIndex:0};Zs.getNormal(zo,Fo,Oo,p.normal),u.face=p,u.barycoord=f}return u}var an=class n extends xn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],f=[],p=0,d=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,s,a,2),v("x","z","y",1,-1,t,i,-e,s,a,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function v(S,x,m,w,C,M,q,N,V,B,L){let R=M/V,H=q/B,st=M/2,nt=q/2,at=N/2,yt=V+1,rt=B+1,At=0,lt=0,Dt=new z;for(let $t=0;$t<rt;$t++){let Ft=$t*H-nt;for(let ie=0;ie<yt;ie++){let Ee=ie*R-st;Dt[S]=Ee*w,Dt[x]=Ft*C,Dt[m]=at,h.push(Dt.x,Dt.y,Dt.z),Dt[S]=0,Dt[x]=0,Dt[m]=N>0?1:-1,u.push(Dt.x,Dt.y,Dt.z),f.push(ie/V),f.push(1-$t/B),At+=1}}for(let $t=0;$t<B;$t++)for(let Ft=0;Ft<V;Ft++){let ie=p+Ft+yt*$t,Ee=p+Ft+yt*($t+1),pt=p+(Ft+1)+yt*($t+1),It=p+(Ft+1)+yt*$t;l.push(ie,Ee,It),l.push(Ee,pt,It),lt+=6}o.addGroup(d,lt,L),d+=lt,p+=At}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _a(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gi(n){let t={};for(let e=0;e<n.length;e++){let i=_a(n[e]);for(let s in i)t[s]=i[s]}return t}function Zp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function od(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}var Jp={clone:_a,merge:gi},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ms=class extends Os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_a(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},fl=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Ls}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ys=new z,rf=new Et,af=new Et,kn=class extends fl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ys.x,Ys.y).multiplyScalar(-t/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ys.x,Ys.y).multiplyScalar(-t/Ys.z)}getViewSize(t,e){return this.getViewBounds(t,rf,af),e.subVectors(af,rf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qr=-90,ta=1,fh=class extends ei{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Qr,ta,t,e);s.layers=this.layers,this.add(s);let r=new kn(Qr,ta,t,e);r.layers=this.layers,this.add(r);let a=new kn(Qr,ta,t,e);a.layers=this.layers,this.add(a);let o=new kn(Qr,ta,t,e);o.layers=this.layers,this.add(o);let l=new kn(Qr,ta,t,e);l.layers=this.layers,this.add(l);let h=new kn(Qr,ta,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},dl=class extends Si{constructor(t,e,i,s,r,a,o,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:da,super(t,e,i,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dh=class extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new dl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fs}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Js});r.uniforms.tEquirect.value=e;let a=new ht(s,r),o=e.minFilter;return e.minFilter===Mr&&(e.minFilter=fs),new fh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},cc=new z,Qp=new z,tm=new De,Pi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cc.subVectors(i,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(cc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||tm.getNormalMatrix(t),s=this.coplanarPoint(cc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new xa,Ho=new z,io=class{constructor(t=new Pi,e=new Pi,i=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ls){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],v=s[9],S=s[10],x=s[11],m=s[12],w=s[13],C=s[14],M=s[15];if(i[0].setComponents(l-r,p-h,x-d,M-m).normalize(),i[1].setComponents(l+r,p+h,x+d,M+m).normalize(),i[2].setComponents(l+a,p+u,x+v,M+w).normalize(),i[3].setComponents(l-a,p-u,x-v,M-w).normalize(),i[4].setComponents(l-o,p-f,x-S,M-C).normalize(),e===Ls)i[5].setComponents(l+o,p+f,x+S,M+C).normalize();else if(e===ol)i[5].setComponents(o,f,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ld(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function em(n){let t=new WeakMap;function e(o,l){let h=o.array,u=o.usage,f=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,h){let u=l.array,f=l.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,u);else{f.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<f.length;d++){let v=f[p],S=f[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,f[p]=S)}f.length=p+1;for(let d=0,v=f.length;d<v;d++){let S=f[d];n.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Ve=class n extends xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,u=l+1,f=t/o,p=e/l,d=[],v=[],S=[],x=[];for(let m=0;m<u;m++){let w=m*p-a;for(let C=0;C<h;C++){let M=C*f-r;v.push(M,-w,0),S.push(0,0,1),x.push(C/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let C=w+h*m,M=w+h*(m+1),q=w+1+h*(m+1),N=w+1+h*m;d.push(C,M,N),d.push(M,q,N)}this.setIndex(d),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(S,3)),this.setAttribute("uv",new Ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,t0=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
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
}`,og=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:bm,color_pars_fragment:Mm,color_pars_vertex:wm,color_vertex:Sm,common:Tm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:zm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Om,fog_vertex:km,fog_pars_vertex:Bm,fog_fragment:Vm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Km,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:v0,normal_pars_fragment:b0,normal_pars_vertex:M0,normal_vertex:w0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:I0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:O0,shadowmap_vertex:k0,shadowmask_pars_fragment:B0,skinbase_vertex:V0,skinning_pars_vertex:H0,skinning_vertex:G0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:K0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distanceRGBA_vert:cg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:xg,meshlambert_frag:_g,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:bg,meshnormal_frag:Mg,meshphong_vert:wg,meshphong_frag:Sg,meshphysical_vert:Tg,meshphysical_frag:Eg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Ig,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ug},qt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},hs={basic:{uniforms:gi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:gi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:gi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:gi([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:gi([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:gi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:gi([qt.points,qt.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:gi([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:gi([qt.common,qt.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:gi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:gi([qt.sprite,qt.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:gi([qt.common,qt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:gi([qt.lights,qt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};hs.physical={uniforms:gi([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Go={r:0,b:0,g:0},gr=new ps,Ng=new gn;function zg(n,t,e,i,s,r,a){let o=new Me(0),l=r===!0?0:1,h,u,f=null,p=0,d=null;function v(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?e:t).get(C)),C}function S(w){let C=!1,M=v(w);M===null?m(o,l):M&&M.isColor&&(m(M,1),C=!0);let q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,C){let M=v(C);M&&(M.isCubeTexture||M.mapping===Rl)?(u===void 0&&(u=new ht(new an(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:_a(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(q,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gr.copy(C.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(gr)),u.material.toneMapped=Je.getTransfer(M.colorSpace)!==un,(f!==M||p!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ht(new Ve(2,2),new ms({name:"BackgroundMaterial",uniforms:_a(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Je.getTransfer(M.colorSpace)!==un,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function m(w,C){w.getRGB(Go,od(n)),i.buffers.color.setClear(Go.r,Go.g,Go.b,C,a)}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),l=C,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:S,addToRenderList:x}}function Fg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,a=!1;function o(R,H,st,nt,at){let yt=!1,rt=f(nt,st,H);r!==rt&&(r=rt,h(r.object)),yt=d(R,nt,st,at),yt&&v(R,nt,st,at),at!==null&&t.update(at,n.ELEMENT_ARRAY_BUFFER),(yt||a)&&(a=!1,M(R,H,st,nt),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function f(R,H,st){let nt=st.wireframe===!0,at=i[R.id];at===void 0&&(at={},i[R.id]=at);let yt=at[H.id];yt===void 0&&(yt={},at[H.id]=yt);let rt=yt[nt];return rt===void 0&&(rt=p(l()),yt[nt]=rt),rt}function p(R){let H=[],st=[],nt=[];for(let at=0;at<e;at++)H[at]=0,st[at]=0,nt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:nt,object:R,attributes:{},index:null}}function d(R,H,st,nt){let at=r.attributes,yt=H.attributes,rt=0,At=st.getAttributes();for(let lt in At)if(At[lt].location>=0){let $t=at[lt],Ft=yt[lt];if(Ft===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(Ft=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(Ft=R.instanceColor)),$t===void 0||$t.attribute!==Ft||Ft&&$t.data!==Ft.data)return!0;rt++}return r.attributesNum!==rt||r.index!==nt}function v(R,H,st,nt){let at={},yt=H.attributes,rt=0,At=st.getAttributes();for(let lt in At)if(At[lt].location>=0){let $t=yt[lt];$t===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&($t=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&($t=R.instanceColor));let Ft={};Ft.attribute=$t,$t&&$t.data&&(Ft.data=$t.data),at[lt]=Ft,rt++}r.attributes=at,r.attributesNum=rt,r.index=nt}function S(){let R=r.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function x(R){m(R,0)}function m(R,H){let st=r.newAttributes,nt=r.enabledAttributes,at=r.attributeDivisors;st[R]=1,nt[R]===0&&(n.enableVertexAttribArray(R),nt[R]=1),at[R]!==H&&(n.vertexAttribDivisor(R,H),at[R]=H)}function w(){let R=r.newAttributes,H=r.enabledAttributes;for(let st=0,nt=H.length;st<nt;st++)H[st]!==R[st]&&(n.disableVertexAttribArray(st),H[st]=0)}function C(R,H,st,nt,at,yt,rt){rt===!0?n.vertexAttribIPointer(R,H,st,at,yt):n.vertexAttribPointer(R,H,st,nt,at,yt)}function M(R,H,st,nt){S();let at=nt.attributes,yt=st.getAttributes(),rt=H.defaultAttributeValues;for(let At in yt){let lt=yt[At];if(lt.location>=0){let Dt=at[At];if(Dt===void 0&&(At==="instanceMatrix"&&R.instanceMatrix&&(Dt=R.instanceMatrix),At==="instanceColor"&&R.instanceColor&&(Dt=R.instanceColor)),Dt!==void 0){let $t=Dt.normalized,Ft=Dt.itemSize,ie=t.get(Dt);if(ie===void 0)continue;let Ee=ie.buffer,pt=ie.type,It=ie.bytesPerElement,se=pt===n.INT||pt===n.UNSIGNED_INT||Dt.gpuType===Kh;if(Dt.isInterleavedBufferAttribute){let zt=Dt.data,he=zt.stride,le=Dt.offset;if(zt.isInstancedInterleavedBuffer){for(let ae=0;ae<lt.locationSize;ae++)m(lt.location+ae,zt.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let ae=0;ae<lt.locationSize;ae++)x(lt.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ae=0;ae<lt.locationSize;ae++)C(lt.location+ae,Ft/lt.locationSize,pt,$t,he*It,(le+Ft/lt.locationSize*ae)*It,se)}else{if(Dt.isInstancedBufferAttribute){for(let zt=0;zt<lt.locationSize;zt++)m(lt.location+zt,Dt.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let zt=0;zt<lt.locationSize;zt++)x(lt.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let zt=0;zt<lt.locationSize;zt++)C(lt.location+zt,Ft/lt.locationSize,pt,$t,Ft*It,Ft/lt.locationSize*zt*It,se)}}else if(rt!==void 0){let $t=rt[At];if($t!==void 0)switch($t.length){case 2:n.vertexAttrib2fv(lt.location,$t);break;case 3:n.vertexAttrib3fv(lt.location,$t);break;case 4:n.vertexAttrib4fv(lt.location,$t);break;default:n.vertexAttrib1fv(lt.location,$t)}}}}w()}function q(){B();for(let R in i){let H=i[R];for(let st in H){let nt=H[st];for(let at in nt)u(nt[at].object),delete nt[at];delete H[st]}delete i[R]}}function N(R){if(i[R.id]===void 0)return;let H=i[R.id];for(let st in H){let nt=H[st];for(let at in nt)u(nt[at].object),delete nt[at];delete H[st]}delete i[R.id]}function V(R){for(let H in i){let st=i[H];if(st[R.id]===void 0)continue;let nt=st[R.id];for(let at in nt)u(nt[at].object),delete nt[at];delete st[R.id]}}function B(){L(),a=!0,r!==s&&(r=s,h(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:N,releaseStatesOfProgram:V,initAttributes:S,enableAttribute:x,disableUnusedAttributes:w}}function Og(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function a(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function o(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let d=0;for(let v=0;v<f;v++)d+=u[v];e.update(d,i,1)}function l(h,u,f,p){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)a(h[v],u[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,u,0,p,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*p[S];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(V){return!(V!==Ji&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(V){let B=V===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==zs&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ps&&!B)}function l(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),q=v>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:q,maxSamples:N}}function Bg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Pi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||i!==0||s;return s=p,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,d){let v=f.clippingPlanes,S=f.clipIntersection,x=f.clipShadows,m=n.get(f);if(!s||v===null||v.length===0||r&&!x)r?u(null):h();else{let w=r?0:i,C=w*4,M=m.clippingState||null;l.value=M,M=u(v,p,C,d);for(let q=0;q!==C;++q)M[q]=e[q];m.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,d,v){let S=f!==null?f.length:0,x=null;if(S!==0){if(x=l.value,v!==!0||x===null){let m=d+S*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<m)&&(x=new Float32Array(m));for(let C=0,M=d;C!==S;++C,M+=4)a.copy(f[C]).applyMatrix4(w,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function Vg(n){let t=new WeakMap;function e(a,o){return o===Pc?a.mapping=da:o===Lc&&(a.mapping=pa),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pc||o===Lc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new dh(l.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var pl=class extends fl{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},aa=4,of=[.125,.215,.35,.446,.526,.582],vr=20,hc=new pl,lf=new Me,uc=null,fc=0,dc=0,pc=!1,_r=(1+Math.sqrt(5))/2,ea=1/_r,cf=[new z(-_r,ea,0),new z(_r,ea,0),new z(-ea,0,_r),new z(ea,0,_r),new z(0,_r,-ea),new z(0,_r,ea),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,fc,dc),this._renderer.xr.enabled=pc,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===da||t.mapping===pa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fs,minFilter:fs,generateMipmaps:!1,type:fo,format:Ji,colorSpace:Ca,depthBuffer:!1},s=hf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Gg(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,i,s){let o=new kn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(lf),u.toneMapping=Ks,u.autoClear=!1;let d=new ke({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),v=new ht(new an,d),S=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,S=!0):(d.color.copy(lf),S=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));let C=this._cubeSize;Wo(s,w*C,m>2?C:0,C,C),u.setRenderTarget(s),S&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===da||t.mapping===pa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,hc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cf[(s-r-1)%cf.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ht(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vr-1),S=r/v,x=isFinite(r)?1+Math.floor(u*S):vr;x>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vr}`);let m=[],w=0;for(let V=0;V<vr;++V){let B=V/S,L=Math.exp(-B*B/2);m.push(L),V===0?w+=L:V<x&&(w+=2*L)}for(let V=0;V<m.length;V++)m[V]=m[V]/w;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:C}=this;p.dTheta.value=v,p.mipInt.value=C-i;let M=this._sizeLods[s],q=3*M*(s>C-aa?s-C+aa:0),N=4*(this._cubeSize-M);Wo(e,q,N,3*M,2*M),l.setRenderTarget(e),l.render(f,hc)}};function Hg(n){let t=[],e=[],i=[],s=n,r=n-aa+1+of.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-aa?l=of[a-n+aa-1]:a===0&&(l=0),i.push(l);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,S=3,x=2,m=1,w=new Float32Array(S*v*d),C=new Float32Array(x*v*d),M=new Float32Array(m*v*d);for(let N=0;N<d;N++){let V=N%3*2/3-1,B=N>2?0:-1,L=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];w.set(L,S*v*N),C.set(p,x*v*N);let R=[N,N,N,N,N,N];M.set(R,m*v*N)}let q=new xn;q.setAttribute("position",new xi(w,S)),q.setAttribute("uv",new xi(C,x)),q.setAttribute("faceIndex",new xi(M,m)),t.push(q),s>aa&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hf(n,t,e){let i=new ji(n,t,e);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gg(n,t,e){let i=new Float32Array(vr),s=new z(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Js,depthTest:!1,depthWrite:!1})}function uf(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Js,depthTest:!1,depthWrite:!1})}function ff(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Js,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function Wg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===Pc||l===Lc,u=l===da||l===pa;if(h||u){let f=t.get(o),p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new ml(n)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let d=o.image;return h&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ml(n)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Xg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$a("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qg(n,t,e,i){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let S=p.morphAttributes[v];for(let x=0,m=S.length;x<m;x++)t.remove(S[x])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(f){let p=f.attributes;for(let v in p)t.update(p[v],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let v in d){let S=d[v];for(let x=0,m=S.length;x<m;x++)t.update(S[x],n.ARRAY_BUFFER)}}function h(f){let p=[],d=f.index,v=f.attributes.position,S=0;if(d!==null){let w=d.array;S=d.version;for(let C=0,M=w.length;C<M;C+=3){let q=w[C+0],N=w[C+1],V=w[C+2];p.push(q,N,N,V,V,q)}}else if(v!==void 0){let w=v.array;S=v.version;for(let C=0,M=w.length/3-1;C<M;C+=3){let q=C+0,N=C+1,V=C+2;p.push(q,N,N,V,V,q)}}else return;let x=new(rd(p)?ul:hl)(p,1);x.version=S;let m=r.get(f);m&&t.remove(m),r.set(f,x)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Yg(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function h(p,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,p*a,v),e.update(d,i,v))}function u(p,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,v);let x=0;for(let m=0;m<v;m++)x+=d[m];e.update(x,i,1)}function f(p,d,v,S){if(v===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)h(p[m]/a,d[m],S[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,S,0,v);let m=0;for(let w=0;w<v;w++)m+=d[w]*S[w];e.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $g(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zg(n,t,e){let i=new WeakMap,s=new dn;function r(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,p=i.get(o);if(p===void 0||p.count!==f){let L=function(){V.dispose(),i.delete(o),o.removeEventListener("dispose",L)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;d===!0&&(C=1),v===!0&&(C=2),S===!0&&(C=3);let M=o.attributes.position.count*C,q=1;M>t.maxTextureSize&&(q=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*q*4*f),V=new cl(N,M,q,f);V.type=Ps,V.needsUpdate=!0;let B=C*4;for(let R=0;R<f;R++){let H=x[R],st=m[R],nt=w[R],at=M*q*4*R;for(let yt=0;yt<H.count;yt++){let rt=yt*B;d===!0&&(s.fromBufferAttribute(H,yt),N[at+rt+0]=s.x,N[at+rt+1]=s.y,N[at+rt+2]=s.z,N[at+rt+3]=0),v===!0&&(s.fromBufferAttribute(st,yt),N[at+rt+4]=s.x,N[at+rt+5]=s.y,N[at+rt+6]=s.z,N[at+rt+7]=0),S===!0&&(s.fromBufferAttribute(nt,yt),N[at+rt+8]=s.x,N[at+rt+9]=s.y,N[at+rt+10]=s.z,N[at+rt+11]=nt.itemSize===4?s.w:1)}}p={count:f,texture:V,size:new Et(M,q)},i.set(o,p),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<h.length;S++)d+=h[S];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Jg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var gl=class extends Si{constructor(t,e,i,s,r,a,o,l,h,u=ca){if(u!==ca&&u!==ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ca&&(i=wr),i===void 0&&u===ga&&(i=ma),super(null,s,r,a,o,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ki,this.minFilter=l!==void 0?l:Ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cd=new Si,df=new gl(1,1),hd=new cl,ud=new uh,fd=new dl,pf=[],mf=[],gf=new Float32Array(16),xf=new Float32Array(9),_f=new Float32Array(4);function Ia(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Bn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Vn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Il(n,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2fv(this.addr,t),Vn(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Bn(e,t))return;n.uniform3fv(this.addr,t),Vn(e,t)}}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4fv(this.addr,t),Vn(e,t)}}function ex(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Vn(e,t)}else{if(Bn(e,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),Vn(e,i)}}function nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Vn(e,t)}else{if(Bn(e,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),Vn(e,i)}}function ix(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Vn(e,t)}else{if(Bn(e,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),Vn(e,i)}}function sx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2iv(this.addr,t),Vn(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;n.uniform3iv(this.addr,t),Vn(e,t)}}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4iv(this.addr,t),Vn(e,t)}}function lx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2uiv(this.addr,t),Vn(e,t)}}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;n.uniform3uiv(this.addr,t),Vn(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4uiv(this.addr,t),Vn(e,t)}}function fx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(df.compareFunction=sd,r=df):r=cd,e.setTexture2D(t||r,s)}function dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ud,s)}function px(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fd,s)}function mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hd,s)}function gx(n){switch(n){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(n,t){n.uniform1fv(this.addr,t)}function _x(n,t){let e=Ia(t,this.size,2);n.uniform2fv(this.addr,e)}function yx(n,t){let e=Ia(t,this.size,3);n.uniform3fv(this.addr,e)}function vx(n,t){let e=Ia(t,this.size,4);n.uniform4fv(this.addr,e)}function bx(n,t){let e=Ia(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Mx(n,t){let e=Ia(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wx(n,t){let e=Ia(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sx(n,t){n.uniform1iv(this.addr,t)}function Tx(n,t){n.uniform2iv(this.addr,t)}function Ex(n,t){n.uniform3iv(this.addr,t)}function Ax(n,t){n.uniform4iv(this.addr,t)}function Rx(n,t){n.uniform1uiv(this.addr,t)}function Cx(n,t){n.uniform2uiv(this.addr,t)}function Ix(n,t){n.uniform3uiv(this.addr,t)}function Px(n,t){n.uniform4uiv(this.addr,t)}function Lx(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||cd,r[a])}function Dx(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ud,r[a])}function Ux(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fd,r[a])}function Nx(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),Vn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||hd,r[a])}function zx(n){switch(n){case 5126:return xx;case 35664:return _x;case 35665:return yx;case 35666:return vx;case 35674:return bx;case 35675:return Mx;case 35676:return wx;case 5124:case 35670:return Sx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Ix;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}var ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}},mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zx(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mc=/(\w+)(\])?(\[|\.)?/g;function yf(n,t){n.seq.push(t),n.map[t.id]=t}function Fx(n,t,e){let i=n.name,s=i.length;for(mc.lastIndex=0;;){let r=mc.exec(i),a=mc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){yf(e,h===void 0?new ph(o,n,t):new mh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new gh(o),yf(e,f)),e=f}}}var ua=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Fx(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function vf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ox=37297,kx=0;function Bx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var bf=new De;function Vx(n){Je._getMatrix(bf,Je.workingColorSpace,n);let t=`mat3( ${bf.elements.map(e=>e.toFixed(4))} )`;switch(Je.getTransfer(n)){case Cl:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Mf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bx(n.getShaderSource(t),a)}else return s}function Hx(n,t){let e=Vx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gx(n,t){let e;switch(t){case pp:e="Linear";break;case mp:e="Reinhard";break;case gp:e="Cineon";break;case xp:e="ACESFilmic";break;case yp:e="AgX";break;case vp:e="Neutral";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xo=new z;function Wx(){Je.getLuminanceCoefficients(Xo);let n=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function qx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Za(n){return n!==""}function wf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace($x,Jx)}var Zx=new Map;function Jx(n,t){let e=Fe[t];if(e===void 0){let i=Zx.get(t);if(i!==void 0)e=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xh(e)}var Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(Kx,jx)}function jx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Qx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Is&&(t="SHADOWMAP_TYPE_VSM"),t}function t_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case pa:t="ENVMAP_TYPE_CUBE";break;case Rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===pa&&(t="ENVMAP_MODE_REFRACTION"),t}function n_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case dp:t="ENVMAP_BLENDING_ADD";break}return t}function i_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function s_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Qx(e),h=t_(e),u=e_(e),f=n_(e),p=i_(e),d=Xx(e),v=qx(r),S=s.createProgram(),x,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Za).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(x=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ks?"#define TONE_MAPPING":"",e.toneMapping!==Ks?Fe.tonemapping_pars_fragment:"",e.toneMapping!==Ks?Gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Hx("linearToOutputTexel",e.outputColorSpace),Wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Za).join(`
`)),a=xh(a),a=wf(a,e),a=Sf(a,e),o=xh(o),o=wf(o,e),o=Sf(o,e),a=Tf(a),o=Tf(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=w+x+a,M=w+m+o,q=vf(s,s.VERTEX_SHADER,C),N=vf(s,s.FRAGMENT_SHADER,M);s.attachShader(S,q),s.attachShader(S,N),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function V(H){if(n.debug.checkShaderErrors){let st=s.getProgramInfoLog(S).trim(),nt=s.getShaderInfoLog(q).trim(),at=s.getShaderInfoLog(N).trim(),yt=!0,rt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(yt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,q,N);else{let At=Mf(s,q,"vertex"),lt=Mf(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+At+`
`+lt)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||at==="")&&(rt=!1);rt&&(H.diagnostics={runnable:yt,programLog:st,vertexShader:{log:nt,prefix:x},fragmentShader:{log:at,prefix:m}})}s.deleteShader(q),s.deleteShader(N),B=new ua(s,S),L=Yx(s,S)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,Ox)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=q,this.fragmentShader=N,this}var r_=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yh(t),e.set(t,i)),i}},yh=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function a_(n,t,e,i,s,r,a){let o=new no,l=new _h,h=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(L){return h.add(L),L===0?"uv":`uv${L}`}function x(L,R,H,st,nt){let at=st.fog,yt=nt.geometry,rt=L.isMeshStandardMaterial?st.environment:null,At=(L.isMeshStandardMaterial?e:t).get(L.envMap||rt),lt=At&&At.mapping===Rl?At.image.height:null,Dt=v[L.type];L.precision!==null&&(d=s.getMaxPrecision(L.precision),d!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",d,"instead."));let $t=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Ft=$t!==void 0?$t.length:0,ie=0;yt.morphAttributes.position!==void 0&&(ie=1),yt.morphAttributes.normal!==void 0&&(ie=2),yt.morphAttributes.color!==void 0&&(ie=3);let Ee,pt,It,se;if(Dt){let _e=hs[Dt];Ee=_e.vertexShader,pt=_e.fragmentShader}else Ee=L.vertexShader,pt=L.fragmentShader,l.update(L),It=l.getVertexShaderID(L),se=l.getFragmentShaderID(L);let zt=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),le=nt.isInstancedMesh===!0,ae=nt.isBatchedMesh===!0,Ue=!!L.map,vt=!!L.matcap,Lt=!!At,O=!!L.aoMap,re=!!L.lightMap,mt=!!L.bumpMap,Ut=!!L.normalMap,Ct=!!L.displacementMap,ye=!!L.emissiveMap,Yt=!!L.metalnessMap,U=!!L.roughnessMap,A=L.anisotropy>0,tt=L.clearcoat>0,ft=L.dispersion>0,gt=L.iridescence>0,dt=L.sheen>0,Bt=L.transmission>0,Nt=A&&!!L.anisotropyMap,Wt=tt&&!!L.clearcoatMap,Pe=tt&&!!L.clearcoatNormalMap,St=tt&&!!L.clearcoatRoughnessMap,Zt=gt&&!!L.iridescenceMap,de=gt&&!!L.iridescenceThicknessMap,pe=dt&&!!L.sheenColorMap,Jt=dt&&!!L.sheenRoughnessMap,Le=!!L.specularMap,Qt=!!L.specularColorMap,Ye=!!L.specularIntensityMap,Y=Bt&&!!L.transmissionMap,Xt=Bt&&!!L.thicknessMap,ct=!!L.gradientMap,Q=!!L.alphaMap,Vt=L.alphaTest>0,Ot=!!L.alphaHash,Ae=!!L.extensions,Ze=Ks;L.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let Mn={shaderID:Dt,shaderType:L.type,shaderName:L.name,vertexShader:Ee,fragmentShader:pt,defines:L.defines,customVertexShaderID:It,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:d,batching:ae,batchingColor:ae&&nt._colorsTexture!==null,instancing:le,instancingColor:le&&nt.instanceColor!==null,instancingMorph:le&&nt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:zt===null?n.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:Ca,alphaToCoverage:!!L.alphaToCoverage,map:Ue,matcap:vt,envMap:Lt,envMapMode:Lt&&At.mapping,envMapCubeUVHeight:lt,aoMap:O,lightMap:re,bumpMap:mt,normalMap:Ut,displacementMap:p&&Ct,emissiveMap:ye,normalMapObjectSpace:Ut&&L.normalMapType===Sp,normalMapTangentSpace:Ut&&L.normalMapType===id,metalnessMap:Yt,roughnessMap:U,anisotropy:A,anisotropyMap:Nt,clearcoat:tt,clearcoatMap:Wt,clearcoatNormalMap:Pe,clearcoatRoughnessMap:St,dispersion:ft,iridescence:gt,iridescenceMap:Zt,iridescenceThicknessMap:de,sheen:dt,sheenColorMap:pe,sheenRoughnessMap:Jt,specularMap:Le,specularColorMap:Qt,specularIntensityMap:Ye,transmission:Bt,transmissionMap:Y,thicknessMap:Xt,gradientMap:ct,opaque:L.transparent===!1&&L.blending===la&&L.alphaToCoverage===!1,alphaMap:Q,alphaTest:Vt,alphaHash:Ot,combine:L.combine,mapUv:Ue&&S(L.map.channel),aoMapUv:O&&S(L.aoMap.channel),lightMapUv:re&&S(L.lightMap.channel),bumpMapUv:mt&&S(L.bumpMap.channel),normalMapUv:Ut&&S(L.normalMap.channel),displacementMapUv:Ct&&S(L.displacementMap.channel),emissiveMapUv:ye&&S(L.emissiveMap.channel),metalnessMapUv:Yt&&S(L.metalnessMap.channel),roughnessMapUv:U&&S(L.roughnessMap.channel),anisotropyMapUv:Nt&&S(L.anisotropyMap.channel),clearcoatMapUv:Wt&&S(L.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&S(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&S(L.iridescenceMap.channel),iridescenceThicknessMapUv:de&&S(L.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(L.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&S(L.sheenRoughnessMap.channel),specularMapUv:Le&&S(L.specularMap.channel),specularColorMapUv:Qt&&S(L.specularColorMap.channel),specularIntensityMapUv:Ye&&S(L.specularIntensityMap.channel),transmissionMapUv:Y&&S(L.transmissionMap.channel),thicknessMapUv:Xt&&S(L.thicknessMap.channel),alphaMapUv:Q&&S(L.alphaMap.channel),vertexTangents:!!yt.attributes.tangent&&(Ut||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!yt.attributes.uv&&(Ue||Q),fog:!!at,useFog:L.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:he,skinning:nt.isSkinnedMesh===!0,morphTargets:yt.morphAttributes.position!==void 0,morphNormals:yt.morphAttributes.normal!==void 0,morphColors:yt.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ue&&L.map.isVideoTexture===!0&&Je.getTransfer(L.map.colorSpace)===un,decodeVideoTextureEmissive:ye&&L.emissiveMap.isVideoTexture===!0&&Je.getTransfer(L.emissiveMap.colorSpace)===un,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Rn,flipSided:L.side===Yn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ae&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&L.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Mn.vertexUv1s=h.has(1),Mn.vertexUv2s=h.has(2),Mn.vertexUv3s=h.has(3),h.clear(),Mn}function m(L){let R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(let H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(w(R,L),C(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function w(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function C(L,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),L.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),L.push(o.mask)}function M(L){let R=v[L.type],H;if(R){let st=hs[R];H=Jp.clone(st.uniforms)}else H=L.uniforms;return H}function q(L,R){let H;for(let st=0,nt=u.length;st<nt;st++){let at=u[st];if(at.cacheKey===R){H=at,++H.usedTimes;break}}return H===void 0&&(H=new s_(n,R,L,r),u.push(H)),H}function N(L){if(--L.usedTimes===0){let R=u.indexOf(L);u[R]=u[u.length-1],u.pop(),L.destroy()}}function V(L){l.remove(L)}function B(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:q,releaseProgram:N,releaseShaderCache:V,programs:u,dispose:B}}function o_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function l_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Af(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,p,d,v,S,x){let m=n[t];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:v,renderOrder:f.renderOrder,z:S,group:x},n[t]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=S,m.group=x),t++,m}function o(f,p,d,v,S,x){let m=a(f,p,d,v,S,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,p,d,v,S,x){let m=a(f,p,d,v,S,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(f,p){e.length>1&&e.sort(f||l_),i.length>1&&i.sort(p||Af),s.length>1&&s.sort(p||Af)}function u(){for(let f=t,p=n.length;f<p;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function c_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Rf,n.set(i,[a])):s>=r.length?(a=new Rf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function h_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Me};break;case"SpotLight":e={position:new z,direction:new z,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function u_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var f_=0;function d_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function p_(n){let t=new h_,e=u_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new z);let s=new z,r=new gn,a=new gn;function o(h){let u=0,f=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,v=0,S=0,x=0,m=0,w=0,C=0,M=0,q=0,N=0,V=0;h.sort(d_);for(let L=0,R=h.length;L<R;L++){let H=h[L],st=H.color,nt=H.intensity,at=H.distance,yt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=st.r*nt,f+=st.g*nt,p+=st.b*nt;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)i.probe[rt].addScaledVector(H.sh.coefficients[rt],nt);V++}else if(H.isDirectionalLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let At=H.shadow,lt=e.get(H);lt.shadowIntensity=At.intensity,lt.shadowBias=At.bias,lt.shadowNormalBias=At.normalBias,lt.shadowRadius=At.radius,lt.shadowMapSize=At.mapSize,i.directionalShadow[d]=lt,i.directionalShadowMap[d]=yt,i.directionalShadowMatrix[d]=H.shadow.matrix,w++}i.directional[d]=rt,d++}else if(H.isSpotLight){let rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(st).multiplyScalar(nt),rt.distance=at,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,i.spot[S]=rt;let At=H.shadow;if(H.map&&(i.spotLightMap[q]=H.map,q++,At.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[S]=At.matrix,H.castShadow){let lt=e.get(H);lt.shadowIntensity=At.intensity,lt.shadowBias=At.bias,lt.shadowNormalBias=At.normalBias,lt.shadowRadius=At.radius,lt.shadowMapSize=At.mapSize,i.spotShadow[S]=lt,i.spotShadowMap[S]=yt,M++}S++}else if(H.isRectAreaLight){let rt=t.get(H);rt.color.copy(st).multiplyScalar(nt),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),i.rectArea[x]=rt,x++}else if(H.isPointLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){let At=H.shadow,lt=e.get(H);lt.shadowIntensity=At.intensity,lt.shadowBias=At.bias,lt.shadowNormalBias=At.normalBias,lt.shadowRadius=At.radius,lt.shadowMapSize=At.mapSize,lt.shadowCameraNear=At.camera.near,lt.shadowCameraFar=At.camera.far,i.pointShadow[v]=lt,i.pointShadowMap[v]=yt,i.pointShadowMatrix[v]=H.shadow.matrix,C++}i.point[v]=rt,v++}else if(H.isHemisphereLight){let rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(nt),rt.groundColor.copy(H.groundColor).multiplyScalar(nt),i.hemi[m]=rt,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qt.LTC_FLOAT_1,i.rectAreaLTC2=qt.LTC_FLOAT_2):(i.rectAreaLTC1=qt.LTC_HALF_1,i.rectAreaLTC2=qt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=p;let B=i.hash;(B.directionalLength!==d||B.pointLength!==v||B.spotLength!==S||B.rectAreaLength!==x||B.hemiLength!==m||B.numDirectionalShadows!==w||B.numPointShadows!==C||B.numSpotShadows!==M||B.numSpotMaps!==q||B.numLightProbes!==V)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=x,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+q-N,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=V,B.directionalLength=d,B.pointLength=v,B.spotLength=S,B.rectAreaLength=x,B.hemiLength=m,B.numDirectionalShadows=w,B.numPointShadows=C,B.numSpotShadows=M,B.numSpotMaps=q,B.numLightProbes=V,i.version=f_++)}function l(h,u){let f=0,p=0,d=0,v=0,S=0,x=u.matrixWorldInverse;for(let m=0,w=h.length;m<w;m++){let C=h[m];if(C.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(C.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(C.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),a.identity(),r.copy(C.matrixWorld),r.premultiply(x),a.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),p++}else if(C.isHemisphereLight){let M=i.hemi[S];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(x),S++}}}return{setup:o,setupView:l,state:i}}function Cf(n){let t=new p_(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function m_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Cf(n),t.set(s,[o])):r>=a.length?(o=new Cf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var vh=class extends Os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bh=class extends Os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function __(n,t,e){let i=new io,s=new Et,r=new Et,a=new dn,o=new vh({depthPacking:wp}),l=new bh,h={},u=e.maxTextureSize,f={[Qs]:Yn,[Yn]:Qs,[Rn]:Rn},p=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let v=new xn;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ht(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let m=this.type;this.render=function(N,V,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;let L=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),st=n.state;st.setBlending(Js),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let nt=m!==Is&&this.type===Is,at=m===Is&&this.type!==Is;for(let yt=0,rt=N.length;yt<rt;yt++){let At=N[yt],lt=At.shadow;if(lt===void 0){console.warn("THREE.WebGLShadowMap:",At,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let Dt=lt.getFrameExtents();if(s.multiply(Dt),r.copy(lt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Dt.x),s.x=r.x*Dt.x,lt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Dt.y),s.y=r.y*Dt.y,lt.mapSize.y=r.y)),lt.map===null||nt===!0||at===!0){let Ft=this.type!==Is?{minFilter:Ki,magFilter:Ki}:{};lt.map!==null&&lt.map.dispose(),lt.map=new ji(s.x,s.y,Ft),lt.map.texture.name=At.name+".shadowMap",lt.camera.updateProjectionMatrix()}n.setRenderTarget(lt.map),n.clear();let $t=lt.getViewportCount();for(let Ft=0;Ft<$t;Ft++){let ie=lt.getViewport(Ft);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),st.viewport(a),lt.updateMatrices(At,Ft),i=lt.getFrustum(),M(V,B,lt.camera,At,this.type)}lt.isPointLightShadow!==!0&&this.type===Is&&w(lt,B),lt.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(L,R,H)};function w(N,V){let B=t.update(S);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,d.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ji(s.x,s.y)),p.uniforms.shadow_pass.value=N.map.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(V,null,B,p,S,null),d.uniforms.shadow_pass.value=N.mapPass.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(V,null,B,d,S,null)}function C(N,V,B,L){let R=null,H=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?l:o,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let st=R.uuid,nt=V.uuid,at=h[st];at===void 0&&(at={},h[st]=at);let yt=at[nt];yt===void 0&&(yt=R.clone(),at[nt]=yt,V.addEventListener("dispose",q)),R=yt}if(R.visible=V.visible,R.wireframe=V.wireframe,L===Is?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:f[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let st=n.properties.get(R);st.light=B}return R}function M(N,V,B,L,R){if(N.visible===!1)return;if(N.layers.test(V.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Is)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);let nt=t.update(N),at=N.material;if(Array.isArray(at)){let yt=nt.groups;for(let rt=0,At=yt.length;rt<At;rt++){let lt=yt[rt],Dt=at[lt.materialIndex];if(Dt&&Dt.visible){let $t=C(N,Dt,L,R);N.onBeforeShadow(n,N,V,B,nt,$t,lt),n.renderBufferDirect(B,null,nt,$t,N,lt),N.onAfterShadow(n,N,V,B,nt,$t,lt)}}}else if(at.visible){let yt=C(N,at,L,R);N.onBeforeShadow(n,N,V,B,nt,yt,null),n.renderBufferDirect(B,null,nt,yt,N,null),N.onAfterShadow(n,N,V,B,nt,yt,null)}}let st=N.children;for(let nt=0,at=st.length;nt<at;nt++)M(st[nt],V,B,L,R)}function q(N){N.target.removeEventListener("dispose",q);for(let B in h){let L=h[B],R=N.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}var y_={[Sc]:Tc,[Ec]:Cc,[Ac]:Ic,[fa]:Rc,[Tc]:Sc,[Cc]:Ec,[Ic]:Ac,[Rc]:fa};function v_(n,t){function e(){let Y=!1,Xt=new dn,ct=null,Q=new dn(0,0,0,0);return{setMask:function(Vt){ct!==Vt&&!Y&&(n.colorMask(Vt,Vt,Vt,Vt),ct=Vt)},setLocked:function(Vt){Y=Vt},setClear:function(Vt,Ot,Ae,Ze,Mn){Mn===!0&&(Vt*=Ze,Ot*=Ze,Ae*=Ze),Xt.set(Vt,Ot,Ae,Ze),Q.equals(Xt)===!1&&(n.clearColor(Vt,Ot,Ae,Ze),Q.copy(Xt))},reset:function(){Y=!1,ct=null,Q.set(-1,0,0,0)}}}function i(){let Y=!1,Xt=!1,ct=null,Q=null,Vt=null;return{setReversed:function(Ot){if(Xt!==Ot){let Ae=t.get("EXT_clip_control");Xt?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT);let Ze=Vt;Vt=null,this.setClear(Ze)}Xt=Ot},getReversed:function(){return Xt},setTest:function(Ot){Ot?zt(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(Ot){ct!==Ot&&!Y&&(n.depthMask(Ot),ct=Ot)},setFunc:function(Ot){if(Xt&&(Ot=y_[Ot]),Q!==Ot){switch(Ot){case Sc:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ec:n.depthFunc(n.LESS);break;case fa:n.depthFunc(n.LEQUAL);break;case Ac:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Cc:n.depthFunc(n.GREATER);break;case Ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Ot}},setLocked:function(Ot){Y=Ot},setClear:function(Ot){Vt!==Ot&&(Xt&&(Ot=1-Ot),n.clearDepth(Ot),Vt=Ot)},reset:function(){Y=!1,ct=null,Q=null,Vt=null,Xt=!1}}}function s(){let Y=!1,Xt=null,ct=null,Q=null,Vt=null,Ot=null,Ae=null,Ze=null,Mn=null;return{setTest:function(_e){Y||(_e?zt(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(_e){Xt!==_e&&!Y&&(n.stencilMask(_e),Xt=_e)},setFunc:function(_e,Ln,Tn){(ct!==_e||Q!==Ln||Vt!==Tn)&&(n.stencilFunc(_e,Ln,Tn),ct=_e,Q=Ln,Vt=Tn)},setOp:function(_e,Ln,Tn){(Ot!==_e||Ae!==Ln||Ze!==Tn)&&(n.stencilOp(_e,Ln,Tn),Ot=_e,Ae=Ln,Ze=Tn)},setLocked:function(_e){Y=_e},setClear:function(_e){Mn!==_e&&(n.clearStencil(_e),Mn=_e)},reset:function(){Y=!1,Xt=null,ct=null,Q=null,Vt=null,Ot=null,Ae=null,Ze=null,Mn=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,h=new WeakMap,u={},f={},p=new WeakMap,d=[],v=null,S=!1,x=null,m=null,w=null,C=null,M=null,q=null,N=null,V=new Me(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,at=null,yt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,At=0,lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(lt)[1]),rt=At>=1):lt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),rt=At>=2);let Dt=null,$t={},Ft=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ee=new dn().fromArray(Ft),pt=new dn().fromArray(ie);function It(Y,Xt,ct,Q){let Vt=new Uint8Array(4),Ot=n.createTexture();n.bindTexture(Y,Ot),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<ct;Ae++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Xt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,Vt):n.texImage2D(Xt+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Vt);return Ot}let se={};se[n.TEXTURE_2D]=It(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=It(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=It(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=It(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),zt(n.DEPTH_TEST),a.setFunc(fa),mt(!1),Ut(Lu),zt(n.CULL_FACE),O(Js);function zt(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function he(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function le(Y,Xt){return f[Y]!==Xt?(n.bindFramebuffer(Y,Xt),f[Y]=Xt,Y===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Xt),Y===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Xt),!0):!1}function ae(Y,Xt){let ct=d,Q=!1;if(Y){ct=p.get(Xt),ct===void 0&&(ct=[],p.set(Xt,ct));let Vt=Y.textures;if(ct.length!==Vt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Ot=0,Ae=Vt.length;Ot<Ae;Ot++)ct[Ot]=n.COLOR_ATTACHMENT0+Ot;ct.length=Vt.length,Q=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Q=!0);Q&&n.drawBuffers(ct)}function Ue(Y){return v!==Y?(n.useProgram(Y),v=Y,!0):!1}let vt={[yr]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Jd]:n.FUNC_REVERSE_SUBTRACT};vt[Kd]=n.MIN,vt[jd]=n.MAX;let Lt={[Qd]:n.ZERO,[tp]:n.ONE,[ep]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[op]:n.SRC_ALPHA_SATURATE,[rp]:n.DST_COLOR,[ip]:n.DST_ALPHA,[np]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[sp]:n.ONE_MINUS_DST_ALPHA,[lp]:n.CONSTANT_COLOR,[cp]:n.ONE_MINUS_CONSTANT_COLOR,[hp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function O(Y,Xt,ct,Q,Vt,Ot,Ae,Ze,Mn,_e){if(Y===Js){S===!0&&(he(n.BLEND),S=!1);return}if(S===!1&&(zt(n.BLEND),S=!0),Y!==$d){if(Y!==x||_e!==L){if((m!==yr||M!==yr)&&(n.blendEquation(n.FUNC_ADD),m=yr,M=yr),_e)switch(Y){case la:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}w=null,C=null,q=null,N=null,V.set(0,0,0),B=0,x=Y,L=_e}return}Vt=Vt||Xt,Ot=Ot||ct,Ae=Ae||Q,(Xt!==m||Vt!==M)&&(n.blendEquationSeparate(vt[Xt],vt[Vt]),m=Xt,M=Vt),(ct!==w||Q!==C||Ot!==q||Ae!==N)&&(n.blendFuncSeparate(Lt[ct],Lt[Q],Lt[Ot],Lt[Ae]),w=ct,C=Q,q=Ot,N=Ae),(Ze.equals(V)===!1||Mn!==B)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Mn),V.copy(Ze),B=Mn),x=Y,L=!1}function re(Y,Xt){Y.side===Rn?he(n.CULL_FACE):zt(n.CULL_FACE);let ct=Y.side===Yn;Xt&&(ct=!ct),mt(ct),Y.blending===la&&Y.transparent===!1?O(Js):O(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Q=Y.stencilWrite;o.setTest(Q),Q&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ye(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?zt(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function mt(Y){R!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),R=Y)}function Ut(Y){Y!==qd?(zt(n.CULL_FACE),Y!==H&&(Y===Lu?n.cullFace(n.BACK):Y===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),H=Y}function Ct(Y){Y!==st&&(rt&&n.lineWidth(Y),st=Y)}function ye(Y,Xt,ct){Y?(zt(n.POLYGON_OFFSET_FILL),(nt!==Xt||at!==ct)&&(n.polygonOffset(Xt,ct),nt=Xt,at=ct)):he(n.POLYGON_OFFSET_FILL)}function Yt(Y){Y?zt(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=n.TEXTURE0+yt-1),Dt!==Y&&(n.activeTexture(Y),Dt=Y)}function A(Y,Xt,ct){ct===void 0&&(Dt===null?ct=n.TEXTURE0+yt-1:ct=Dt);let Q=$t[ct];Q===void 0&&(Q={type:void 0,texture:void 0},$t[ct]=Q),(Q.type!==Y||Q.texture!==Xt)&&(Dt!==ct&&(n.activeTexture(ct),Dt=ct),n.bindTexture(Y,Xt||se[Y]),Q.type=Y,Q.texture=Xt)}function tt(){let Y=$t[Dt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ft(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function St(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(Y){Ee.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Jt(Y){pt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),pt.copy(Y))}function Le(Y,Xt){let ct=h.get(Xt);ct===void 0&&(ct=new WeakMap,h.set(Xt,ct));let Q=ct.get(Y);Q===void 0&&(Q=n.getUniformBlockIndex(Xt,Y.name),ct.set(Y,Q))}function Qt(Y,Xt){let Q=h.get(Xt).get(Y);l.get(Xt)!==Q&&(n.uniformBlockBinding(Xt,Q,Y.__bindingPointIndex),l.set(Xt,Q))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Dt=null,$t={},f={},p=new WeakMap,d=[],v=null,S=!1,x=null,m=null,w=null,C=null,M=null,q=null,N=null,V=new Me(0,0,0),B=0,L=!1,R=null,H=null,st=null,nt=null,at=null,Ee.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:zt,disable:he,bindFramebuffer:le,drawBuffers:ae,useProgram:Ue,setBlending:O,setMaterial:re,setFlipSided:mt,setCullFace:Ut,setLineWidth:Ct,setPolygonOffset:ye,setScissorTest:Yt,activeTexture:U,bindTexture:A,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:gt,texImage2D:Zt,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:Qt,texStorage2D:Pe,texStorage3D:St,texSubImage2D:dt,texSubImage3D:Bt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Wt,scissor:pe,viewport:Jt,reset:Ye}}function If(n,t,e,i){let s=b_(i);switch(e){case Jf:return n*t;case jf:return n*t;case Qf:return n*t*2;case td:return n*t/s.components*s.byteLength;case tu:return n*t/s.components*s.byteLength;case ed:return n*t*2/s.components*s.byteLength;case eu:return n*t*2/s.components*s.byteLength;case Kf:return n*t*3/s.components*s.byteLength;case Ji:return n*t*4/s.components*s.byteLength;case nu:return n*t*4/s.components*s.byteLength;case el:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(n,16)*Math.max(t,8)/4;case Uc:case zc:return Math.max(n,8)*Math.max(t,8)/2;case Oc:case kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rl:case eh:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nd:case ih:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sh:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b_(n){switch(n){case zs:case Yf:return{byteLength:1,components:1};case Qa:case $f:case fo:return{byteLength:2,components:1};case jh:case Qh:return{byteLength:2,components:4};case wr:case Kh:case Ps:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function M_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return d?new OffscreenCanvas(U,A):to("canvas")}function S(U,A,tt){let ft=1,gt=Yt(U);if((gt.width>tt||gt.height>tt)&&(ft=tt/Math.max(gt.width,gt.height)),ft<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let dt=Math.floor(ft*gt.width),Bt=Math.floor(ft*gt.height);f===void 0&&(f=v(dt,Bt));let Nt=A?v(dt,Bt):f;return Nt.width=dt,Nt.height=Bt,Nt.getContext("2d").drawImage(U,0,0,dt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+dt+"x"+Bt+")."),Nt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),U;return U}function x(U){return U.generateMipmaps}function m(U){n.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(U,A,tt,ft,gt=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=A;if(A===n.RED&&(tt===n.FLOAT&&(dt=n.R32F),tt===n.HALF_FLOAT&&(dt=n.R16F),tt===n.UNSIGNED_BYTE&&(dt=n.R8)),A===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(dt=n.R8UI),tt===n.UNSIGNED_SHORT&&(dt=n.R16UI),tt===n.UNSIGNED_INT&&(dt=n.R32UI),tt===n.BYTE&&(dt=n.R8I),tt===n.SHORT&&(dt=n.R16I),tt===n.INT&&(dt=n.R32I)),A===n.RG&&(tt===n.FLOAT&&(dt=n.RG32F),tt===n.HALF_FLOAT&&(dt=n.RG16F),tt===n.UNSIGNED_BYTE&&(dt=n.RG8)),A===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(dt=n.RG8UI),tt===n.UNSIGNED_SHORT&&(dt=n.RG16UI),tt===n.UNSIGNED_INT&&(dt=n.RG32UI),tt===n.BYTE&&(dt=n.RG8I),tt===n.SHORT&&(dt=n.RG16I),tt===n.INT&&(dt=n.RG32I)),A===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(dt=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(dt=n.RGB16UI),tt===n.UNSIGNED_INT&&(dt=n.RGB32UI),tt===n.BYTE&&(dt=n.RGB8I),tt===n.SHORT&&(dt=n.RGB16I),tt===n.INT&&(dt=n.RGB32I)),A===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(dt=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(dt=n.RGBA16UI),tt===n.UNSIGNED_INT&&(dt=n.RGBA32UI),tt===n.BYTE&&(dt=n.RGBA8I),tt===n.SHORT&&(dt=n.RGBA16I),tt===n.INT&&(dt=n.RGBA32I)),A===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(dt=n.RGB9_E5),A===n.RGBA){let Bt=gt?Cl:Je.getTransfer(ft);tt===n.FLOAT&&(dt=n.RGBA32F),tt===n.HALF_FLOAT&&(dt=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(dt=Bt===un?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(dt=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(dt=n.RGB5_A1)}return(dt===n.R16F||dt===n.R32F||dt===n.RG16F||dt===n.RG32F||dt===n.RGBA16F||dt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function M(U,A){let tt;return U?A===null||A===wr||A===ma?tt=n.DEPTH24_STENCIL8:A===Ps?tt=n.DEPTH32F_STENCIL8:A===Qa&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wr||A===ma?tt=n.DEPTH_COMPONENT24:A===Ps?tt=n.DEPTH_COMPONENT32F:A===Qa&&(tt=n.DEPTH_COMPONENT16),tt}function q(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ki&&U.minFilter!==fs?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function N(U){let A=U.target;A.removeEventListener("dispose",N),B(A),A.isVideoTexture&&u.delete(A)}function V(U){let A=U.target;A.removeEventListener("dispose",V),R(A)}function B(U){let A=i.get(U);if(A.__webglInit===void 0)return;let tt=U.source,ft=p.get(tt);if(ft){let gt=ft[A.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&L(U),Object.keys(ft).length===0&&p.delete(tt)}i.remove(U)}function L(U){let A=i.get(U);n.deleteTexture(A.__webglTexture);let tt=U.source,ft=p.get(tt);delete ft[A.__cacheKey],a.memory.textures--}function R(U){let A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(A.__webglFramebuffer[ft]))for(let gt=0;gt<A.__webglFramebuffer[ft].length;gt++)n.deleteFramebuffer(A.__webglFramebuffer[ft][gt]);else n.deleteFramebuffer(A.__webglFramebuffer[ft]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ft])}else{if(Array.isArray(A.__webglFramebuffer))for(let ft=0;ft<A.__webglFramebuffer.length;ft++)n.deleteFramebuffer(A.__webglFramebuffer[ft]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ft=0;ft<A.__webglColorRenderbuffer.length;ft++)A.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ft]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let tt=U.textures;for(let ft=0,gt=tt.length;ft<gt;ft++){let dt=i.get(tt[ft]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(tt[ft])}i.remove(U)}let H=0;function st(){H=0}function nt(){let U=H;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),H+=1,U}function at(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function yt(U,A){let tt=i.get(U);if(U.isVideoTexture&&Ct(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){let ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(tt,U,A);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+A)}function rt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){pt(tt,U,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+A)}function At(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){pt(tt,U,A);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+A)}function lt(U,A){let tt=i.get(U);if(U.version>0&&tt.__version!==U.version){It(tt,U,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+A)}let Dt={[Ns]:n.REPEAT,[br]:n.CLAMP_TO_EDGE,[Dc]:n.MIRRORED_REPEAT},$t={[Ki]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[fs]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},Ft={[Tp]:n.NEVER,[Pp]:n.ALWAYS,[Ep]:n.LESS,[sd]:n.LEQUAL,[Ap]:n.EQUAL,[Ip]:n.GEQUAL,[Rp]:n.GREATER,[Cp]:n.NOTEQUAL};function ie(U,A){if(A.type===Ps&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fs||A.magFilter===Bl||A.magFilter===To||A.magFilter===Mr||A.minFilter===fs||A.minFilter===Bl||A.minFilter===To||A.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Dt[A.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Dt[A.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Dt[A.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,$t[A.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,$t[A.minFilter]),A.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ft[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ki||A.minFilter!==To&&A.minFilter!==Mr||A.type===Ps&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(U,A){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",N));let ft=A.source,gt=p.get(ft);gt===void 0&&(gt={},p.set(ft,gt));let dt=at(A);if(dt!==U.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),gt[dt].usedTimes++;let Bt=gt[U.__cacheKey];Bt!==void 0&&(gt[U.__cacheKey].usedTimes--,Bt.usedTimes===0&&L(A)),U.__cacheKey=dt,U.__webglTexture=gt[dt].texture}return tt}function pt(U,A,tt){let ft=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ft=n.TEXTURE_3D);let gt=Ee(U,A),dt=A.source;e.bindTexture(ft,U.__webglTexture,n.TEXTURE0+tt);let Bt=i.get(dt);if(dt.version!==Bt.__version||gt===!0){e.activeTexture(n.TEXTURE0+tt);let Nt=Je.getPrimaries(Je.workingColorSpace),Wt=A.colorSpace===$s?null:Je.getPrimaries(A.colorSpace),Pe=A.colorSpace===$s||Nt===Wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let St=S(A.image,!1,s.maxTextureSize);St=ye(A,St);let Zt=r.convert(A.format,A.colorSpace),de=r.convert(A.type),pe=C(A.internalFormat,Zt,de,A.colorSpace,A.isVideoTexture);ie(ft,A);let Jt,Le=A.mipmaps,Qt=A.isVideoTexture!==!0,Ye=Bt.__version===void 0||gt===!0,Y=dt.dataReady,Xt=q(A,St);if(A.isDepthTexture)pe=M(A.format===ga,A.type),Ye&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,pe,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,pe,St.width,St.height,0,Zt,de,null));else if(A.isDataTexture)if(Le.length>0){Qt&&Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,Le[0].width,Le[0].height);for(let ct=0,Q=Le.length;ct<Q;ct++)Jt=Le[ct],Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Jt.width,Jt.height,Zt,de,Jt.data):e.texImage2D(n.TEXTURE_2D,ct,pe,Jt.width,Jt.height,0,Zt,de,Jt.data);A.generateMipmaps=!1}else Qt?(Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,St.width,St.height),Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St.width,St.height,Zt,de,St.data)):e.texImage2D(n.TEXTURE_2D,0,pe,St.width,St.height,0,Zt,de,St.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&Ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pe,Le[0].width,Le[0].height,St.depth);for(let ct=0,Q=Le.length;ct<Q;ct++)if(Jt=Le[ct],A.format!==Ji)if(Zt!==null)if(Qt){if(Y)if(A.layerUpdates.size>0){let Vt=If(Jt.width,Jt.height,A.format,A.type);for(let Ot of A.layerUpdates){let Ae=Jt.data.subarray(Ot*Vt/Jt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Ot,Jt.width,Jt.height,1,Zt,Ae)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Jt.width,Jt.height,St.depth,Zt,Jt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,pe,Jt.width,Jt.height,St.depth,0,Jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Jt.width,Jt.height,St.depth,Zt,de,Jt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,pe,Jt.width,Jt.height,St.depth,0,Zt,de,Jt.data)}else{Qt&&Ye&&e.texStorage2D(n.TEXTURE_2D,Xt,pe,Le[0].width,Le[0].height);for(let ct=0,Q=Le.length;ct<Q;ct++)Jt=Le[ct],A.format!==Ji?Zt!==null?Qt?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Jt.width,Jt.height,Zt,Jt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,pe,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Jt.width,Jt.height,Zt,de,Jt.data):e.texImage2D(n.TEXTURE_2D,ct,pe,Jt.width,Jt.height,0,Zt,de,Jt.data)}else if(A.isDataArrayTexture)if(Qt){if(Ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pe,St.width,St.height,St.depth),Y)if(A.layerUpdates.size>0){let ct=If(St.width,St.height,A.format,A.type);for(let Q of A.layerUpdates){let Vt=St.data.subarray(Q*ct/St.data.BYTES_PER_ELEMENT,(Q+1)*ct/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,St.width,St.height,1,Zt,de,Vt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Zt,de,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,St.width,St.height,St.depth,0,Zt,de,St.data);else if(A.isData3DTexture)Qt?(Ye&&e.texStorage3D(n.TEXTURE_3D,Xt,pe,St.width,St.height,St.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Zt,de,St.data)):e.texImage3D(n.TEXTURE_3D,0,pe,St.width,St.height,St.depth,0,Zt,de,St.data);else if(A.isFramebufferTexture){if(Ye)if(Qt)e.texStorage2D(n.TEXTURE_2D,Xt,pe,St.width,St.height);else{let ct=St.width,Q=St.height;for(let Vt=0;Vt<Xt;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,pe,ct,Q,0,Zt,de,null),ct>>=1,Q>>=1}}else if(Le.length>0){if(Qt&&Ye){let ct=Yt(Le[0]);e.texStorage2D(n.TEXTURE_2D,Xt,pe,ct.width,ct.height)}for(let ct=0,Q=Le.length;ct<Q;ct++)Jt=Le[ct],Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Zt,de,Jt):e.texImage2D(n.TEXTURE_2D,ct,pe,Zt,de,Jt);A.generateMipmaps=!1}else if(Qt){if(Ye){let ct=Yt(St);e.texStorage2D(n.TEXTURE_2D,Xt,pe,ct.width,ct.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Zt,de,St)}else e.texImage2D(n.TEXTURE_2D,0,pe,Zt,de,St);x(A)&&m(ft),Bt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function It(U,A,tt){if(A.image.length!==6)return;let ft=Ee(U,A),gt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+tt);let dt=i.get(gt);if(gt.version!==dt.__version||ft===!0){e.activeTexture(n.TEXTURE0+tt);let Bt=Je.getPrimaries(Je.workingColorSpace),Nt=A.colorSpace===$s?null:Je.getPrimaries(A.colorSpace),Wt=A.colorSpace===$s||Bt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,St=A.image[0]&&A.image[0].isDataTexture,Zt=[];for(let Q=0;Q<6;Q++)!Pe&&!St?Zt[Q]=S(A.image[Q],!0,s.maxCubemapSize):Zt[Q]=St?A.image[Q].image:A.image[Q],Zt[Q]=ye(A,Zt[Q]);let de=Zt[0],pe=r.convert(A.format,A.colorSpace),Jt=r.convert(A.type),Le=C(A.internalFormat,pe,Jt,A.colorSpace),Qt=A.isVideoTexture!==!0,Ye=dt.__version===void 0||ft===!0,Y=gt.dataReady,Xt=q(A,de);ie(n.TEXTURE_CUBE_MAP,A);let ct;if(Pe){Qt&&Ye&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Le,de.width,de.height);for(let Q=0;Q<6;Q++){ct=Zt[Q].mipmaps;for(let Vt=0;Vt<ct.length;Vt++){let Ot=ct[Vt];A.format!==Ji?pe!==null?Qt?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt,0,0,Ot.width,Ot.height,pe,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt,Le,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt,0,0,Ot.width,Ot.height,pe,Jt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt,Le,Ot.width,Ot.height,0,pe,Jt,Ot.data)}}}else{if(ct=A.mipmaps,Qt&&Ye){ct.length>0&&Xt++;let Q=Yt(Zt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(St){Qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Zt[Q].width,Zt[Q].height,pe,Jt,Zt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,Zt[Q].width,Zt[Q].height,0,pe,Jt,Zt[Q].data);for(let Vt=0;Vt<ct.length;Vt++){let Ae=ct[Vt].image[Q].image;Qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt+1,0,0,Ae.width,Ae.height,pe,Jt,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt+1,Le,Ae.width,Ae.height,0,pe,Jt,Ae.data)}}else{Qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe,Jt,Zt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,pe,Jt,Zt[Q]);for(let Vt=0;Vt<ct.length;Vt++){let Ot=ct[Vt];Qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt+1,0,0,pe,Jt,Ot.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt+1,Le,pe,Jt,Ot.image[Q])}}}x(A)&&m(n.TEXTURE_CUBE_MAP),dt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function se(U,A,tt,ft,gt,dt){let Bt=r.convert(tt.format,tt.colorSpace),Nt=r.convert(tt.type),Wt=C(tt.internalFormat,Bt,Nt,tt.colorSpace),Pe=i.get(A),St=i.get(tt);if(St.__renderTarget=A,!Pe.__hasExternalTextures){let Zt=Math.max(1,A.width>>dt),de=Math.max(1,A.height>>dt);gt===n.TEXTURE_3D||gt===n.TEXTURE_2D_ARRAY?e.texImage3D(gt,dt,Wt,Zt,de,A.depth,0,Bt,Nt,null):e.texImage2D(gt,dt,Wt,Zt,de,0,Bt,Nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Ut(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,gt,St.__webglTexture,0,mt(A)):(gt===n.TEXTURE_2D||gt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,gt,St.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(U,A,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,U),A.depthBuffer){let ft=A.depthTexture,gt=ft&&ft.isDepthTexture?ft.type:null,dt=M(A.stencilBuffer,gt),Bt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=mt(A);Ut(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,dt,A.width,A.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,dt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,dt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,U)}else{let ft=A.textures;for(let gt=0;gt<ft.length;gt++){let dt=ft[gt],Bt=r.convert(dt.format,dt.colorSpace),Nt=r.convert(dt.type),Wt=C(dt.internalFormat,Bt,Nt,dt.colorSpace),Pe=mt(A);tt&&Ut(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Wt,A.width,A.height):Ut(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Wt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Wt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ft=i.get(A.depthTexture);ft.__renderTarget=A,(!ft.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),yt(A.depthTexture,0);let gt=ft.__webglTexture,dt=mt(A);if(A.depthTexture.format===ca)Ut(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,gt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,gt,0);else if(A.depthTexture.format===ga)Ut(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,gt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function le(U){let A=i.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let ft=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ft){let gt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ft.removeEventListener("dispose",gt)};ft.addEventListener("dispose",gt),A.__depthDisposeCallback=gt}A.__boundDepthTexture=ft}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");he(A.__webglFramebuffer,U)}else if(tt){A.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ft]),A.__webglDepthbuffer[ft]===void 0)A.__webglDepthbuffer[ft]=n.createRenderbuffer(),zt(A.__webglDepthbuffer[ft],U,!1);else{let gt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),zt(A.__webglDepthbuffer,U,!1);else{let ft=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,gt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(U,A,tt){let ft=i.get(U);A!==void 0&&se(ft.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&le(U)}function Ue(U){let A=U.texture,tt=i.get(U),ft=i.get(A);U.addEventListener("dispose",V);let gt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Bt=gt.length>1;if(Bt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=A.version,a.memory.textures++),dt){tt.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[Nt]=[];for(let Wt=0;Wt<A.mipmaps.length;Wt++)tt.__webglFramebuffer[Nt][Wt]=n.createFramebuffer()}else tt.__webglFramebuffer[Nt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)tt.__webglFramebuffer[Nt]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let Nt=0,Wt=gt.length;Nt<Wt;Nt++){let Pe=i.get(gt[Nt]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(U.samples>0&&Ut(U)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Nt=0;Nt<gt.length;Nt++){let Wt=gt[Nt];tt.__webglColorRenderbuffer[Nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[Nt]);let Pe=r.convert(Wt.format,Wt.colorSpace),St=r.convert(Wt.type),Zt=C(Wt.internalFormat,Pe,St,Wt.colorSpace,U.isXRRenderTarget===!0),de=mt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Zt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,tt.__webglColorRenderbuffer[Nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),ie(n.TEXTURE_CUBE_MAP,A);for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)se(tt.__webglFramebuffer[Nt][Wt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Wt);else se(tt.__webglFramebuffer[Nt],U,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);x(A)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let Nt=0,Wt=gt.length;Nt<Wt;Nt++){let Pe=gt[Nt],St=i.get(Pe);e.bindTexture(n.TEXTURE_2D,St.__webglTexture),ie(n.TEXTURE_2D,Pe),se(tt.__webglFramebuffer,U,Pe,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,0),x(Pe)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Nt=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,ft.__webglTexture),ie(Nt,A),A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)se(tt.__webglFramebuffer[Wt],U,A,n.COLOR_ATTACHMENT0,Nt,Wt);else se(tt.__webglFramebuffer,U,A,n.COLOR_ATTACHMENT0,Nt,0);x(A)&&m(Nt),e.unbindTexture()}U.depthBuffer&&le(U)}function vt(U){let A=U.textures;for(let tt=0,ft=A.length;tt<ft;tt++){let gt=A[tt];if(x(gt)){let dt=w(U),Bt=i.get(gt).__webglTexture;e.bindTexture(dt,Bt),m(dt),e.unbindTexture()}}}let Lt=[],O=[];function re(U){if(U.samples>0){if(Ut(U)===!1){let A=U.textures,tt=U.width,ft=U.height,gt=n.COLOR_BUFFER_BIT,dt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=i.get(U),Nt=A.length>1;if(Nt)for(let Wt=0;Wt<A.length;Wt++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Wt=0;Wt<A.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(gt|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(gt|=n.STENCIL_BUFFER_BIT)),Nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Wt]);let Pe=i.get(A[Wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,gt,n.NEAREST),l===!0&&(Lt.length=0,O.length=0,Lt.push(n.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Lt.push(dt),O.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Nt)for(let Wt=0;Wt<A.length;Wt++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Wt]);let Pe=i.get(A[Wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,Pe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function mt(U){return Math.min(s.maxSamples,U.samples)}function Ut(U){let A=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(U){let A=a.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function ye(U,A){let tt=U.colorSpace,ft=U.format,gt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ca&&tt!==$s&&(Je.getTransfer(tt)===un?(ft!==Ji||gt!==zs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function Yt(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=yt,this.setTexture2DArray=rt,this.setTexture3D=At,this.setTextureCube=lt,this.rebindTextures=ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ut}function w_(n,t){function e(i,s=$s){let r,a=Je.getTransfer(s);if(i===zs)return n.UNSIGNED_BYTE;if(i===jh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.BYTE;if(i===$f)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===Kh)return n.INT;if(i===wr)return n.UNSIGNED_INT;if(i===Ps)return n.FLOAT;if(i===fo)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===Ji)return n.RGBA;if(i===jf)return n.LUMINANCE;if(i===Qf)return n.LUMINANCE_ALPHA;if(i===ca)return n.DEPTH_COMPONENT;if(i===ga)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===tu)return n.RED_INTEGER;if(i===ed)return n.RG;if(i===eu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===el||i===nl||i===il||i===sl)if(a===un)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uc||i===Nc||i===zc||i===Fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===kc||i===Bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oc||i===kc)return a===un?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vc||i===Hc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Jc||i===Kc||i===jc||i===Qc||i===th)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===eh||i===nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return a===un?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===ih||i===sh||i===rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Mh=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},Ja=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,i),m=this._getHandJoint(h,S);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,v=.005;h.inputState.pinching&&p>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Si,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ms({vertexShader:T_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new Ve(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends tr{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,f=null,p=null,d=null,v=null,S=new wh,x=e.getContextAttributes(),m=null,w=null,C=[],M=[],q=new Et,N=null,V=new kn;V.viewport=new dn;let B=new kn;B.viewport=new dn;let L=[V,B],R=new Mh,H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let It=C[pt];return It===void 0&&(It=new Ja,C[pt]=It),It.getTargetRaySpace()},this.getControllerGrip=function(pt){let It=C[pt];return It===void 0&&(It=new Ja,C[pt]=It),It.getGripSpace()},this.getHand=function(pt){let It=C[pt];return It===void 0&&(It=new Ja,C[pt]=It),It.getHandSpace()};function nt(pt){let It=M.indexOf(pt.inputSource);if(It===-1)return;let se=C[It];se!==void 0&&(se.update(pt.inputSource,pt.frame,h||a),se.dispatchEvent({type:pt.type,data:pt.inputSource}))}function at(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",yt);for(let pt=0;pt<C.length;pt++){let It=M[pt];It!==null&&(M[pt]=null,C[pt].disconnect(It))}H=null,st=null,S.reset(),t.setRenderTarget(m),d=null,p=null,f=null,s=null,w=null,Ee.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(pt){h=pt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",at),s.addEventListener("inputsourceschange",yt),x.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){let It={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new ji(d.framebufferWidth,d.framebufferHeight,{format:Ji,type:zs,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let It=null,se=null,zt=null;x.depth&&(zt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=x.stencil?ga:ca,se=x.stencil?ma:wr);let he={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(he),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new ji(p.textureWidth,p.textureHeight,{format:Ji,type:zs,depthTexture:new gl(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function yt(pt){for(let It=0;It<pt.removed.length;It++){let se=pt.removed[It],zt=M.indexOf(se);zt>=0&&(M[zt]=null,C[zt].disconnect(se))}for(let It=0;It<pt.added.length;It++){let se=pt.added[It],zt=M.indexOf(se);if(zt===-1){for(let le=0;le<C.length;le++)if(le>=M.length){M.push(se),zt=le;break}else if(M[le]===null){M[le]=se,zt=le;break}if(zt===-1)break}let he=C[zt];he&&he.connect(se)}}let rt=new z,At=new z;function lt(pt,It,se){rt.setFromMatrixPosition(It.matrixWorld),At.setFromMatrixPosition(se.matrixWorld);let zt=rt.distanceTo(At),he=It.projectionMatrix.elements,le=se.projectionMatrix.elements,ae=he[14]/(he[10]-1),Ue=he[14]/(he[10]+1),vt=(he[9]+1)/he[5],Lt=(he[9]-1)/he[5],O=(he[8]-1)/he[0],re=(le[8]+1)/le[0],mt=ae*O,Ut=ae*re,Ct=zt/(-O+re),ye=Ct*-O;if(It.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(ye),pt.translateZ(Ct),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),he[10]===-1)pt.projectionMatrix.copy(It.projectionMatrix),pt.projectionMatrixInverse.copy(It.projectionMatrixInverse);else{let Yt=ae+Ct,U=Ue+Ct,A=mt-ye,tt=Ut+(zt-ye),ft=vt*Ue/U*Yt,gt=Lt*Ue/U*Yt;pt.projectionMatrix.makePerspective(A,tt,ft,gt,Yt,U),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Dt(pt,It){It===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(It.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let It=pt.near,se=pt.far;S.texture!==null&&(S.depthNear>0&&(It=S.depthNear),S.depthFar>0&&(se=S.depthFar)),R.near=B.near=V.near=It,R.far=B.far=V.far=se,(H!==R.near||st!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far),V.layers.mask=pt.layers.mask|2,B.layers.mask=pt.layers.mask|4,R.layers.mask=V.layers.mask|B.layers.mask;let zt=pt.parent,he=R.cameras;Dt(R,zt);for(let le=0;le<he.length;le++)Dt(he[le],zt);he.length===2?lt(R,V,B):R.projectionMatrix.copy(V.projectionMatrix),$t(pt,R,zt)};function $t(pt,It,se){se===null?pt.matrix.copy(It.matrixWorld):(pt.matrix.copy(se.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(It.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(It.projectionMatrix),pt.projectionMatrixInverse.copy(It.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=lh*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(pt){l=pt,p!==null&&(p.fixedFoveation=pt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(R)};let Ft=null;function ie(pt,It){if(u=It.getViewerPose(h||a),v=It,u!==null){let se=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let zt=!1;se.length!==R.cameras.length&&(R.cameras.length=0,zt=!0);for(let le=0;le<se.length;le++){let ae=se[le],Ue=null;if(d!==null)Ue=d.getViewport(ae);else{let Lt=f.getViewSubImage(p,ae);Ue=Lt.viewport,le===0&&(t.setRenderTargetTextures(w,Lt.colorTexture,p.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(w))}let vt=L[le];vt===void 0&&(vt=new kn,vt.layers.enable(le),vt.viewport=new dn,L[le]=vt),vt.matrix.fromArray(ae.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ae.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),le===0&&(R.matrix.copy(vt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),zt===!0&&R.cameras.push(vt)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){let le=f.getDepthInformation(se[0]);le&&le.isValid&&le.texture&&S.init(t,le,s.renderState)}}for(let se=0;se<C.length;se++){let zt=M[se],he=C[se];zt!==null&&he!==void 0&&he.update(zt,It,h||a)}Ft&&Ft(pt,It),It.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:It}),v=null}let Ee=new ld;Ee.setAnimationLoop(ie),this.setAnimationLoop=function(pt){Ft=pt},this.dispose=function(){}}},xr=new ps,A_=new gn;function R_(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,od(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,w,C,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),f(x,m)):m.isMeshPhongMaterial?(r(x,m),u(x,m)):m.isMeshStandardMaterial?(r(x,m),p(x,m),m.isMeshPhysicalMaterial&&d(x,m,M)):m.isMeshMatcapMaterial?(r(x,m),v(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),S(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&o(x,m)):m.isPointsMaterial?l(x,m,w,C):m.isSpriteMaterial?h(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Yn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Yn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let w=t.get(m),C=w.envMap,M=w.envMapRotation;C&&(x.envMap.value=C,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),x.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(xr)),x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function o(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,w,C){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*w,x.scale.value=C*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,w){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,m){m.matcap&&(x.matcap.value=m.matcap)}function S(x,m){let w=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C_(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,C){let M=C.program;i.uniformBlockBinding(w,M)}function h(w,C){let M=s[w.id];M===void 0&&(v(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",x));let q=C.program;i.updateUBOMapping(w,q);let N=t.render.frame;r[w.id]!==N&&(p(w),r[w.id]=N)}function u(w){let C=f();w.__bindingPointIndex=C;let M=n.createBuffer(),q=w.__size,N=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,q,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let C=s[w.id],M=w.uniforms,q=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let N=0,V=M.length;N<V;N++){let B=Array.isArray(M[N])?M[N]:[M[N]];for(let L=0,R=B.length;L<R;L++){let H=B[L];if(d(H,N,L,q)===!0){let st=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value],at=0;for(let yt=0;yt<nt.length;yt++){let rt=nt[yt],At=S(rt);typeof rt=="number"||typeof rt=="boolean"?(H.__data[0]=rt,n.bufferSubData(n.UNIFORM_BUFFER,st+at,H.__data)):rt.isMatrix3?(H.__data[0]=rt.elements[0],H.__data[1]=rt.elements[1],H.__data[2]=rt.elements[2],H.__data[3]=0,H.__data[4]=rt.elements[3],H.__data[5]=rt.elements[4],H.__data[6]=rt.elements[5],H.__data[7]=0,H.__data[8]=rt.elements[6],H.__data[9]=rt.elements[7],H.__data[10]=rt.elements[8],H.__data[11]=0):(rt.toArray(H.__data,at),at+=At.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,C,M,q){let N=w.value,V=C+"_"+M;if(q[V]===void 0)return typeof N=="number"||typeof N=="boolean"?q[V]=N:q[V]=N.clone(),!0;{let B=q[V];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return q[V]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function v(w){let C=w.uniforms,M=0,q=16;for(let V=0,B=C.length;V<B;V++){let L=Array.isArray(C[V])?C[V]:[C[V]];for(let R=0,H=L.length;R<H;R++){let st=L[R],nt=Array.isArray(st.value)?st.value:[st.value];for(let at=0,yt=nt.length;at<yt;at++){let rt=nt[at],At=S(rt),lt=M%q,Dt=lt%At.boundary,$t=lt+Dt;M+=Dt,$t!==0&&q-$t<At.storage&&(M+=q-$t),st.__data=new Float32Array(At.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=M,M+=At.storage}}}let N=M%q;return N>0&&(M+=q-N),w.__size=M,w.__cache={},this}function S(w){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),C}function x(w){let C=w.target;C.removeEventListener("dispose",x);let M=a.indexOf(C.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:h,dispose:m}}var ya=class{constructor(t={}){let{canvas:e=Dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let v=new Uint32Array(4),S=new Int32Array(4),x=null,m=null,w=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Ks,this.toneMappingExposure=1;let M=this,q=!1,N=0,V=0,B=null,L=-1,R=null,H=new dn,st=new dn,nt=null,at=new Me(0),yt=0,rt=e.width,At=e.height,lt=1,Dt=null,$t=null,Ft=new dn(0,0,rt,At),ie=new dn(0,0,rt,At),Ee=!1,pt=new io,It=!1,se=!1,zt=new gn,he=new gn,le=new z,ae=new dn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function Lt(){return B===null?lt:1}let O=i;function re(P,k){return e.getContext(P,k)}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),O===null){let k="webgl2";if(O=re(k,P),O===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let mt,Ut,Ct,ye,Yt,U,A,tt,ft,gt,dt,Bt,Nt,Wt,Pe,St,Zt,de,pe,Jt,Le,Qt,Ye,Y;function Xt(){mt=new Xg(O),mt.init(),Qt=new w_(O,mt),Ut=new kg(O,mt,t,Qt),Ct=new v_(O,mt),Ut.reverseDepthBuffer&&p&&Ct.buffers.depth.setReversed(!0),ye=new $g(O),Yt=new o_,U=new M_(O,mt,Ct,Yt,Ut,Qt,ye),A=new Vg(M),tt=new Wg(M),ft=new em(O),Ye=new Fg(O,ft),gt=new qg(O,ft,ye,Ye),dt=new Jg(O,gt,ft,ye),pe=new Zg(O,Ut,U),St=new Bg(Yt),Bt=new a_(M,A,tt,mt,Ut,Ye,St),Nt=new R_(M,Yt),Wt=new c_,Pe=new m_(mt),de=new zg(M,A,tt,Ct,dt,d,l),Zt=new __(M,dt,Ut),Y=new C_(O,ye,Ut,Ct),Jt=new Og(O,mt,ye),Le=new Yg(O,mt,ye),ye.programs=Bt.programs,M.capabilities=Ut,M.extensions=mt,M.properties=Yt,M.renderLists=Wt,M.shadowMap=Zt,M.state=Ct,M.info=ye}Xt();let ct=new Sh(M,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=mt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=mt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(P){P!==void 0&&(lt=P,this.setSize(rt,At,!1))},this.getSize=function(P){return P.set(rt,At)},this.setSize=function(P,k,et=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,At=k,e.width=Math.floor(P*lt),e.height=Math.floor(k*lt),et===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(rt*lt,At*lt).floor()},this.setDrawingBufferSize=function(P,k,et){rt=P,At=k,lt=et,e.width=Math.floor(P*et),e.height=Math.floor(k*et),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(Ft)},this.setViewport=function(P,k,et,it){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,k,et,it),Ct.viewport(H.copy(Ft).multiplyScalar(lt).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,k,et,it){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,k,et,it),Ct.scissor(st.copy(ie).multiplyScalar(lt).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(P){Ct.setScissorTest(Ee=P)},this.setOpaqueSort=function(P){Dt=P},this.setTransparentSort=function(P){$t=P},this.getClearColor=function(P){return P.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(P=!0,k=!0,et=!0){let it=0;if(P){let J=!1;if(B!==null){let W=B.texture.format;J=W===nu||W===eu||W===tu}if(J){let W=B.texture.type,kt=W===zs||W===wr||W===Qa||W===ma||W===jh||W===Qh,jt=de.getClearColor(),Ht=de.getClearAlpha(),ue=jt.r,we=jt.g,Kt=jt.b;kt?(v[0]=ue,v[1]=we,v[2]=Kt,v[3]=Ht,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=ue,S[1]=we,S[2]=Kt,S[3]=Ht,O.clearBufferiv(O.COLOR,0,S))}else it|=O.COLOR_BUFFER_BIT}k&&(it|=O.DEPTH_BUFFER_BIT),et&&(it|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Wt.dispose(),Pe.dispose(),Yt.dispose(),A.dispose(),tt.dispose(),dt.dispose(),Ye.dispose(),Y.dispose(),Bt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Dr),ct.removeEventListener("sessionend",Vs),Wn.stop()};function Q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let P=ye.autoReset,k=Zt.enabled,et=Zt.autoUpdate,it=Zt.needsUpdate,J=Zt.type;Xt(),ye.autoReset=P,Zt.enabled=k,Zt.autoUpdate=et,Zt.needsUpdate=it,Zt.type=J}function Ot(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){let k=P.target;k.removeEventListener("dispose",Ae),Ze(k)}function Ze(P){Mn(P),Yt.remove(P)}function Mn(P){let k=Yt.get(P).programs;k!==void 0&&(k.forEach(function(et){Bt.releaseProgram(et)}),P.isShaderMaterial&&Bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,et,it,J,W){k===null&&(k=Ue);let kt=J.isMesh&&J.matrixWorld.determinant()<0,jt=Di(P,k,et,it,J);Ct.setMaterial(it,kt);let Ht=et.index,ue=1;if(it.wireframe===!0){if(Ht=gt.getWireframeAttribute(et),Ht===void 0)return;ue=2}let we=et.drawRange,Kt=et.attributes.position,Be=we.start*ue,en=(we.start+we.count)*ue;W!==null&&(Be=Math.max(Be,W.start*ue),en=Math.min(en,(W.start+W.count)*ue)),Ht!==null?(Be=Math.max(Be,0),en=Math.min(en,Ht.count)):Kt!=null&&(Be=Math.max(Be,0),en=Math.min(en,Kt.count));let Ke=en-Be;if(Ke<0||Ke===1/0)return;Ye.setup(J,it,jt,et,Ht);let Nn,We=Jt;if(Ht!==null&&(Nn=ft.get(Ht),We=Le,We.setIndex(Nn)),J.isMesh)it.wireframe===!0?(Ct.setLineWidth(it.wireframeLinewidth*Lt()),We.setMode(O.LINES)):We.setMode(O.TRIANGLES);else if(J.isLine){let te=it.linewidth;te===void 0&&(te=1),Ct.setLineWidth(te*Lt()),J.isLineSegments?We.setMode(O.LINES):J.isLineLoop?We.setMode(O.LINE_LOOP):We.setMode(O.LINE_STRIP)}else J.isPoints?We.setMode(O.POINTS):J.isSprite&&We.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)We.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))We.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let te=J._multiDrawStarts,pn=J._multiDrawCounts,He=J._multiDrawCount,zn=Ht?ft.get(Ht).bytesPerElement:1,G=Yt.get(it).currentProgram.getUniforms();for(let nn=0;nn<He;nn++)G.setValue(O,"_gl_DrawID",nn),We.render(te[nn]/zn,pn[nn])}else if(J.isInstancedMesh)We.renderInstances(Be,Ke,J.count);else if(et.isInstancedBufferGeometry){let te=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,pn=Math.min(et.instanceCount,te);We.renderInstances(Be,Ke,pn)}else We.render(Be,Ke)};function _e(P,k,et){P.transparent===!0&&P.side===Rn&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,Jn(P,k,et),P.side=Qs,P.needsUpdate=!0,Jn(P,k,et),P.side=Rn):Jn(P,k,et)}this.compile=function(P,k,et=null){et===null&&(et=P),m=Pe.get(et),m.init(k),C.push(m),et.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),P!==et&&P.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let it=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let W=J.material;if(W)if(Array.isArray(W))for(let kt=0;kt<W.length;kt++){let jt=W[kt];_e(jt,et,J),it.add(jt)}else _e(W,et,J),it.add(W)}),C.pop(),m=null,it},this.compileAsync=function(P,k,et=null){let it=this.compile(P,k,et);return new Promise(J=>{function W(){if(it.forEach(function(kt){Yt.get(kt).currentProgram.isReady()&&it.delete(kt)}),it.size===0){J(P);return}setTimeout(W,10)}mt.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Ln=null;function Tn(P){Ln&&Ln(P)}function Dr(){Wn.stop()}function Vs(){Wn.start()}let Wn=new ld;Wn.setAnimationLoop(Tn),typeof self!="undefined"&&Wn.setContext(self),this.setAnimationLoop=function(P){Ln=P,ct.setAnimationLoop(P),P===null?Wn.stop():Wn.start()},ct.addEventListener("sessionstart",Dr),ct.addEventListener("sessionend",Vs),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,B),m=Pe.get(P,C.length),m.init(k),C.push(m),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),pt.setFromProjectionMatrix(he),se=this.localClippingEnabled,It=St.init(this.clippingPlanes,se),x=Wt.get(P,w.length),x.init(),w.push(x),ct.enabled===!0&&ct.isPresenting===!0){let W=M.xr.getDepthSensingMesh();W!==null&&on(W,k,-1/0,M.sortObjects)}on(P,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Dt,$t),vt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,vt&&de.addToRenderList(x,P),this.info.render.frame++,It===!0&&St.beginShadows();let et=m.state.shadowsArray;Zt.render(et,P,k),It===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=x.opaque,J=x.transmissive;if(m.setupLights(),k.isArrayCamera){let W=k.cameras;if(J.length>0)for(let kt=0,jt=W.length;kt<jt;kt++){let Ht=W[kt];_n(it,J,P,Ht)}vt&&de.render(P);for(let kt=0,jt=W.length;kt<jt;kt++){let Ht=W[kt];Hi(x,P,Ht,Ht.viewport)}}else J.length>0&&_n(it,J,P,k),vt&&de.render(P),Hi(x,P,k);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(M,P,k),Ye.resetDefaultState(),L=-1,R=null,C.pop(),C.length>0?(m=C[C.length-1],It===!0&&St.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function on(P,k,et,it){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)et=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||pt.intersectsSprite(P)){it&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);let kt=dt.update(P),jt=P.material;jt.visible&&x.push(P,kt,jt,et,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||pt.intersectsObject(P))){let kt=dt.update(P),jt=P.material;if(it&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ae.copy(kt.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(jt)){let Ht=kt.groups;for(let ue=0,we=Ht.length;ue<we;ue++){let Kt=Ht[ue],Be=jt[Kt.materialIndex];Be&&Be.visible&&x.push(P,kt,Be,et,ae.z,Kt)}}else jt.visible&&x.push(P,kt,jt,et,ae.z,null)}}let W=P.children;for(let kt=0,jt=W.length;kt<jt;kt++)on(W[kt],k,et,it)}function Hi(P,k,et,it){let J=P.opaque,W=P.transmissive,kt=P.transparent;m.setupLightsView(et),It===!0&&St.setGlobalState(M.clippingPlanes,et),it&&Ct.viewport(H.copy(it)),J.length>0&&Ei(J,k,et),W.length>0&&Ei(W,k,et),kt.length>0&&Ei(kt,k,et),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function _n(P,k,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new ji(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?fo:zs,minFilter:Mr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let W=m.state.transmissionRenderTarget[it.id],kt=it.viewport||H;W.setSize(kt.z,kt.w);let jt=M.getRenderTarget();M.setRenderTarget(W),M.getClearColor(at),yt=M.getClearAlpha(),yt<1&&M.setClearColor(16777215,.5),M.clear(),vt&&de.render(et);let Ht=M.toneMapping;M.toneMapping=Ks;let ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),It===!0&&St.setGlobalState(M.clippingPlanes,it),Ei(P,et,it),U.updateMultisampleRenderTarget(W),U.updateRenderTargetMipmap(W),mt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Kt=0,Be=k.length;Kt<Be;Kt++){let en=k[Kt],Ke=en.object,Nn=en.geometry,We=en.material,te=en.group;if(We.side===Rn&&Ke.layers.test(it.layers)){let pn=We.side;We.side=Yn,We.needsUpdate=!0,Gi(Ke,et,it,Nn,We,te),We.side=pn,We.needsUpdate=!0,we=!0}}we===!0&&(U.updateMultisampleRenderTarget(W),U.updateRenderTargetMipmap(W))}M.setRenderTarget(jt),M.setClearColor(at,yt),ue!==void 0&&(it.viewport=ue),M.toneMapping=Ht}function Ei(P,k,et){let it=k.isScene===!0?k.overrideMaterial:null;for(let J=0,W=P.length;J<W;J++){let kt=P[J],jt=kt.object,Ht=kt.geometry,ue=it===null?kt.material:it,we=kt.group;jt.layers.test(et.layers)&&Gi(jt,k,et,Ht,ue,we)}}function Gi(P,k,et,it,J,W){P.onBeforeRender(M,k,et,it,J,W),P.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(M,k,et,it,P,W),J.transparent===!0&&J.side===Rn&&J.forceSinglePass===!1?(J.side=Yn,J.needsUpdate=!0,M.renderBufferDirect(et,k,it,J,P,W),J.side=Qs,J.needsUpdate=!0,M.renderBufferDirect(et,k,it,J,P,W),J.side=Rn):M.renderBufferDirect(et,k,it,J,P,W),P.onAfterRender(M,k,et,it,J,W)}function Jn(P,k,et){k.isScene!==!0&&(k=Ue);let it=Yt.get(P),J=m.state.lights,W=m.state.shadowsArray,kt=J.state.version,jt=Bt.getParameters(P,J.state,W,k,et),Ht=Bt.getProgramCacheKey(jt),ue=it.programs;it.environment=P.isMeshStandardMaterial?k.environment:null,it.fog=k.fog,it.envMap=(P.isMeshStandardMaterial?tt:A).get(P.envMap||it.environment),it.envMapRotation=it.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,ue===void 0&&(P.addEventListener("dispose",Ae),ue=new Map,it.programs=ue);let we=ue.get(Ht);if(we!==void 0){if(it.currentProgram===we&&it.lightsStateVersion===kt)return Wi(P,jt),we}else jt.uniforms=Bt.getUniforms(P),P.onBeforeCompile(jt,M),we=Bt.acquireProgram(jt,Ht),ue.set(Ht,we),it.uniforms=jt.uniforms;let Kt=it.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Kt.clippingPlanes=St.uniform),Wi(P,jt),it.needsLights=Nr(P),it.lightsStateVersion=kt,it.needsLights&&(Kt.ambientLightColor.value=J.state.ambient,Kt.lightProbe.value=J.state.probe,Kt.directionalLights.value=J.state.directional,Kt.directionalLightShadows.value=J.state.directionalShadow,Kt.spotLights.value=J.state.spot,Kt.spotLightShadows.value=J.state.spotShadow,Kt.rectAreaLights.value=J.state.rectArea,Kt.ltc_1.value=J.state.rectAreaLTC1,Kt.ltc_2.value=J.state.rectAreaLTC2,Kt.pointLights.value=J.state.point,Kt.pointLightShadows.value=J.state.pointShadow,Kt.hemisphereLights.value=J.state.hemi,Kt.directionalShadowMap.value=J.state.directionalShadowMap,Kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Kt.spotShadowMap.value=J.state.spotShadowMap,Kt.spotLightMatrix.value=J.state.spotLightMatrix,Kt.spotLightMap.value=J.state.spotLightMap,Kt.pointShadowMap.value=J.state.pointShadowMap,Kt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=we,it.uniformsList=null,we}function bi(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Wi(P,k){let et=Yt.get(P);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function Di(P,k,et,it,J){k.isScene!==!0&&(k=Ue),U.resetTextureUnits();let W=k.fog,kt=it.isMeshStandardMaterial?k.environment:null,jt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ca,Ht=(it.isMeshStandardMaterial?tt:A).get(it.envMap||kt),ue=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,we=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Kt=!!et.morphAttributes.position,Be=!!et.morphAttributes.normal,en=!!et.morphAttributes.color,Ke=Ks;it.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ke=M.toneMapping);let Nn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,We=Nn!==void 0?Nn.length:0,te=Yt.get(it),pn=m.state.lights;if(It===!0&&(se===!0||P!==R)){let Fn=P===R&&it.id===L;St.setState(it,P,Fn)}let He=!1;it.version===te.__version?(te.needsLights&&te.lightsStateVersion!==pn.state.version||te.outputColorSpace!==jt||J.isBatchedMesh&&te.batching===!1||!J.isBatchedMesh&&te.batching===!0||J.isBatchedMesh&&te.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&te.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&te.instancing===!1||!J.isInstancedMesh&&te.instancing===!0||J.isSkinnedMesh&&te.skinning===!1||!J.isSkinnedMesh&&te.skinning===!0||J.isInstancedMesh&&te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&te.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&te.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&te.instancingMorph===!1&&J.morphTexture!==null||te.envMap!==Ht||it.fog===!0&&te.fog!==W||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==St.numPlanes||te.numIntersection!==St.numIntersection)||te.vertexAlphas!==ue||te.vertexTangents!==we||te.morphTargets!==Kt||te.morphNormals!==Be||te.morphColors!==en||te.toneMapping!==Ke||te.morphTargetsCount!==We)&&(He=!0):(He=!0,te.__version=it.version);let zn=te.currentProgram;He===!0&&(zn=Jn(it,k,J));let G=!1,nn=!1,Ui=!1,Oe=zn.getUniforms(),ri=te.uniforms;if(Ct.useProgram(zn.program)&&(G=!0,nn=!0,Ui=!0),it.id!==L&&(L=it.id,nn=!0),G||R!==P){Ct.buffers.depth.getReversed()?(zt.copy(P.projectionMatrix),Np(zt),zp(zt),Oe.setValue(O,"projectionMatrix",zt)):Oe.setValue(O,"projectionMatrix",P.projectionMatrix),Oe.setValue(O,"viewMatrix",P.matrixWorldInverse);let Dn=Oe.map.cameraPosition;Dn!==void 0&&Dn.setValue(O,le.setFromMatrixPosition(P.matrixWorld)),Ut.logarithmicDepthBuffer&&Oe.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Oe.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,nn=!0,Ui=!0)}if(J.isSkinnedMesh){Oe.setOptional(O,J,"bindMatrix"),Oe.setOptional(O,J,"bindMatrixInverse");let Fn=J.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Oe.setValue(O,"boneTexture",Fn.boneTexture,U))}J.isBatchedMesh&&(Oe.setOptional(O,J,"batchingTexture"),Oe.setValue(O,"batchingTexture",J._matricesTexture,U),Oe.setOptional(O,J,"batchingIdTexture"),Oe.setValue(O,"batchingIdTexture",J._indirectTexture,U),Oe.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Oe.setValue(O,"batchingColorTexture",J._colorsTexture,U));let Ni=et.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&pe.update(J,et,zn),(nn||te.receiveShadow!==J.receiveShadow)&&(te.receiveShadow=J.receiveShadow,Oe.setValue(O,"receiveShadow",J.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ri.envMap.value=Ht,ri.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),nn&&(Oe.setValue(O,"toneMappingExposure",M.toneMappingExposure),te.needsLights&&Ur(ri,Ui),W&&it.fog===!0&&Nt.refreshFogUniforms(ri,W),Nt.refreshMaterialUniforms(ri,it,lt,At,m.state.transmissionRenderTarget[P.id]),ua.upload(O,bi(te),ri,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ua.upload(O,bi(te),ri,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Oe.setValue(O,"center",J.center),Oe.setValue(O,"modelViewMatrix",J.modelViewMatrix),Oe.setValue(O,"normalMatrix",J.normalMatrix),Oe.setValue(O,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Fn=it.uniformsGroups;for(let Dn=0,An=Fn.length;Dn<An;Dn++){let yn=Fn[Dn];Y.update(yn,zn),Y.bind(yn,zn)}}return zn}function Ur(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function Nr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,k,et){Yt.get(P.texture).__webglTexture=k,Yt.get(P.depthTexture).__webglTexture=et;let it=Yt.get(P);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){let et=Yt.get(P);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,et=0){B=P,N=k,V=et;let it=!0,J=null,W=!1,kt=!1;if(P){let Ht=Yt.get(P);if(Ht.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(O.FRAMEBUFFER,null),it=!1;else if(Ht.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Ht.__hasExternalTextures)U.rebindTextures(P,Yt.get(P.texture).__webglTexture,Yt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Kt=P.depthTexture;if(Ht.__boundDepthTexture!==Kt){if(Kt!==null&&Yt.has(Kt)&&(P.width!==Kt.image.width||P.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let ue=P.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(kt=!0);let we=Yt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(we[k])?J=we[k][et]:J=we[k],W=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?J=Yt.get(P).__webglMultisampledFramebuffer:Array.isArray(we)?J=we[et]:J=we,H.copy(P.viewport),st.copy(P.scissor),nt=P.scissorTest}else H.copy(Ft).multiplyScalar(lt).floor(),st.copy(ie).multiplyScalar(lt).floor(),nt=Ee;if(Ct.bindFramebuffer(O.FRAMEBUFFER,J)&&it&&Ct.drawBuffers(P,J),Ct.viewport(H),Ct.scissor(st),Ct.setScissorTest(nt),W){let Ht=Yt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ht.__webglTexture,et)}else if(kt){let Ht=Yt.get(P.texture),ue=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,et||0,ue)}L=-1},this.readRenderTargetPixels=function(P,k,et,it,J,W,kt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Yt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){Ct.bindFramebuffer(O.FRAMEBUFFER,jt);try{let Ht=P.texture,ue=Ht.format,we=Ht.type;if(!Ut.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-it&&et>=0&&et<=P.height-J&&O.readPixels(k,et,it,J,Qt.convert(ue),Qt.convert(we),W)}finally{let Ht=B!==null?Yt.get(B).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,k,et,it,J,W,kt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=Yt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){let Ht=P.texture,ue=Ht.format,we=Ht.type;if(!Ut.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-it&&et>=0&&et<=P.height-J){Ct.bindFramebuffer(O.FRAMEBUFFER,jt);let Kt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.bufferData(O.PIXEL_PACK_BUFFER,W.byteLength,O.STREAM_READ),O.readPixels(k,et,it,J,Qt.convert(ue),Qt.convert(we),0);let Be=B!==null?Yt.get(B).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,Be);let en=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Up(O,en,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,W),O.deleteBuffer(Kt),O.deleteSync(en),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,et=0){P.isTexture!==!0&&($a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);let it=Math.pow(2,-et),J=Math.floor(P.image.width*it),W=Math.floor(P.image.height*it),kt=k!==null?k.x:0,jt=k!==null?k.y:0;U.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,et,0,0,kt,jt,J,W),Ct.unbindTexture()},this.copyTextureToTexture=function(P,k,et=null,it=null,J=0){P.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,P=arguments[1],k=arguments[2],J=arguments[3]||0,et=null);let W,kt,jt,Ht,ue,we,Kt,Be,en,Ke=P.isCompressedTexture?P.mipmaps[J]:P.image;et!==null?(W=et.max.x-et.min.x,kt=et.max.y-et.min.y,jt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,ue=et.min.y,we=et.isBox3?et.min.z:0):(W=Ke.width,kt=Ke.height,jt=Ke.depth||1,Ht=0,ue=0,we=0),it!==null?(Kt=it.x,Be=it.y,en=it.z):(Kt=0,Be=0,en=0);let Nn=Qt.convert(k.format),We=Qt.convert(k.type),te;k.isData3DTexture?(U.setTexture3D(k,0),te=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),te=O.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let pn=O.getParameter(O.UNPACK_ROW_LENGTH),He=O.getParameter(O.UNPACK_IMAGE_HEIGHT),zn=O.getParameter(O.UNPACK_SKIP_PIXELS),G=O.getParameter(O.UNPACK_SKIP_ROWS),nn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,we);let Ui=P.isDataArrayTexture||P.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let ri=Yt.get(P),Ni=Yt.get(k),Fn=Yt.get(ri.__renderTarget),Dn=Yt.get(Ni.__renderTarget);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let An=0;An<jt;An++)Ui&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(P).__webglTexture,J,we+An),P.isDepthTexture?(Oe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,J,en+An),O.blitFramebuffer(Ht,ue,W,kt,Kt,Be,W,kt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Oe?O.copyTexSubImage3D(te,J,Kt,Be,en+An,Ht,ue,W,kt):O.copyTexSubImage2D(te,J,Kt,Be,en+An,Ht,ue,W,kt);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Oe?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(te,J,Kt,Be,en,W,kt,jt,Nn,We,Ke.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(te,J,Kt,Be,en,W,kt,jt,Nn,Ke.data):O.texSubImage3D(te,J,Kt,Be,en,W,kt,jt,Nn,We,Ke):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,J,Kt,Be,W,kt,Nn,We,Ke.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,J,Kt,Be,Ke.width,Ke.height,Nn,Ke.data):O.texSubImage2D(O.TEXTURE_2D,J,Kt,Be,W,kt,Nn,We,Ke);O.pixelStorei(O.UNPACK_ROW_LENGTH,pn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,He),O.pixelStorei(O.UNPACK_SKIP_PIXELS,zn),O.pixelStorei(O.UNPACK_SKIP_ROWS,G),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nn),J===0&&k.generateMipmaps&&O.generateMipmap(te),Ct.unbindTexture()},this.copyTextureToTexture3D=function(P,k,et=null,it=null,J=0){return P.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,P=arguments[2],k=arguments[3],J=arguments[4]||0),$a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,et,it,J)},this.initRenderTarget=function(P){Yt.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ct.unbindTexture()},this.resetState=function(){N=0,V=0,B=null,Ct.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Je._getDrawingBufferColorSpace(t),e.unpackColorSpace=Je._getUnpackColorSpace()}};var va=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Ds()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mi=new z,so=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=us(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=us(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=us(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=us(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$n=class extends Os{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},na,Wa=new z,ia=new z,sa=new z,ra=new Et,Xa=new Et,dd=new gn,qo=new z,qa=new z,Yo=new z,Pf=new Et,gc=new Et,Lf=new Et,ni=class extends ei{constructor(t=new $n){if(super(),this.isSprite=!0,this.type="Sprite",na===void 0){na=new xn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xl(e,5);na.setIndex([0,1,2,0,2,3]),na.setAttribute("position",new so(i,3,0,!1)),na.setAttribute("uv",new so(i,2,3,!1))}this.geometry=na,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ia.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ia.multiplyScalar(-sa.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;$o(qo.set(-.5,-.5,0),sa,a,ia,s,r),$o(qa.set(.5,-.5,0),sa,a,ia,s,r),$o(Yo.set(.5,.5,0),sa,a,ia,s,r),Pf.set(0,0),gc.set(1,0),Lf.set(1,1);let o=t.ray.intersectTriangle(qo,qa,Yo,!1,Wa);if(o===null&&($o(qa.set(-.5,.5,0),sa,a,ia,s,r),gc.set(0,1),o=t.ray.intersectTriangle(qo,Yo,qa,!1,Wa),o===null))return;let l=t.ray.origin.distanceTo(Wa);l<t.near||l>t.far||e.push({distance:l,point:Wa.clone(),uv:Zs.getInterpolation(Wa,qo,qa,Yo,Pf,gc,Lf,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $o(n,t,e,i,s,r){ra.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Xa.x=r*ra.x-s*ra.y,Xa.y=s*ra.x+r*ra.y):Xa.copy(ra),n.copy(t),n.x+=Xa.x,n.y+=Xa.y,n.applyMatrix4(dd)}var ba=class extends Os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Df=new gn,Th=new eo,Zo=new xa,Jo=new z,ro=class extends ei{constructor(t=new xn,e=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Df.copy(s).invert(),Th.copy(t.ray).applyMatrix4(Df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=p,S=d;v<S;v++){let x=h.getX(v);Jo.fromBufferAttribute(f,x),Uf(Jo,x,l,s,t,e,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let v=p,S=d;v<S;v++)Jo.fromBufferAttribute(f,v),Uf(Jo,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uf(n,t,e,i,s,r,a){let o=Th.distanceSqToPoint(n);if(o<e){let l=new z;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ma=class extends Si{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],p=i[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new z,s=[],r=[],a=[],o=new z,l=new gn;for(let d=0;d<=t;d++){let v=d/t;s[d]=this.getTangentAt(v,new z)}r[0]=new z,a[0]=new z;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),f<=h&&(h=f,i.set(0,1,0)),p<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(ti(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ti(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ao=class extends Oi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=h-this.aY;l=p*u-d*f+this.aX,h=p*f+d*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Eh=class extends ao{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,u,f){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ko=new z,xc=new su,_c=new su,yc=new su,Ah=class extends Oi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Ko.subVectors(s[0],s[1]).add(s[0]),h=Ko);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(h.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(u),d);S<1e-4&&(S=1),v<1e-4&&(v=S),x<1e-4&&(x=S),xc.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,v,S,x),_c.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,v,S,x),yc.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,v,S,x)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),_c.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),yc.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return i.set(xc.calc(l),_c.calc(l),yc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nf(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function I_(n,t){let e=1-n;return e*e*t}function P_(n,t){return 2*(1-n)*n*t}function L_(n,t){return n*n*t}function Ka(n,t,e,i){return I_(n,t)+P_(n,e)+L_(n,i)}function D_(n,t){let e=1-n;return e*e*e*t}function U_(n,t){let e=1-n;return 3*e*e*n*t}function N_(n,t){return 3*(1-n)*n*n*t}function z_(n,t){return n*n*n*t}function ja(n,t,e,i,s){return D_(n,t)+U_(n,e)+N_(n,i)+z_(n,s)}var _l=class extends Oi{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ja(t,s.x,r.x,a.x,o.x),ja(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rh=class extends Oi{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ja(t,s.x,r.x,a.x,o.x),ja(t,s.y,r.y,a.y,o.y),ja(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends Oi{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ch=class extends Oi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends Oi{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ih=class extends Oi{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y),Ka(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Nf(o,l.x,h.x,u.x,f.x),Nf(o,l.y,h.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},Ph=Object.freeze({__proto__:null,ArcCurve:Eh,CatmullRomCurve3:Ah,CubicBezierCurve:_l,CubicBezierCurve3:Rh,EllipseCurve:ao,LineCurve:yl,LineCurve3:Ch,QuadraticBezierCurve:vl,QuadraticBezierCurve3:Ih,SplineCurve:bl}),Lh=class extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ph[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ph[s.type]().fromJSON(s))}return this}},Ml=class extends Lh{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new yl(this.currentPoint.clone(),new Et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new vl(this.currentPoint.clone(),new Et(t,e),new Et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new _l(this.currentPoint.clone(),new Et(t,e),new Et(i,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new bl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let h=new ao(t,e,i,s,r,a,o,l);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wl=class n extends xn{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ti(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],u=1/e,f=new z,p=new Et,d=new z,v=new z,S=new z,x=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:x=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-x,d.z=m*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:x=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-x,d.z=m*0,v.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(v)}for(let w=0;w<=e;w++){let C=i+w*u*s,M=Math.sin(C),q=Math.cos(C);for(let N=0;N<=t.length-1;N++){f.x=t[N].x*M,f.y=t[N].y,f.z=t[N].x*q,a.push(f.x,f.y,f.z),p.x=w/e,p.y=N/(t.length-1),o.push(p.x,p.y);let V=l[3*N+0]*M,B=l[3*N+1],L=l[3*N+0]*q;h.push(V,B,L)}}for(let w=0;w<e;w++)for(let C=0;C<t.length-1;C++){let M=C+w*t.length,q=M,N=M+t.length,V=M+t.length+1,B=M+1;r.push(q,N,B),r.push(V,B,N)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Hn=class n extends xn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new z,u=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){let d=i+f/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_i=class n extends xn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],v=0,S=[],x=i/2,m=0;w(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(p,3)),this.setAttribute("uv",new Ie(d,2));function w(){let M=new z,q=new z,N=0,V=(e-t)/i;for(let B=0;B<=r;B++){let L=[],R=B/r,H=R*(e-t)+t;for(let st=0;st<=s;st++){let nt=st/s,at=nt*l+o,yt=Math.sin(at),rt=Math.cos(at);q.x=H*yt,q.y=-R*i+x,q.z=H*rt,f.push(q.x,q.y,q.z),M.set(yt,V,rt).normalize(),p.push(M.x,M.y,M.z),d.push(nt,1-R),L.push(v++)}S.push(L)}for(let B=0;B<s;B++)for(let L=0;L<r;L++){let R=S[L][B],H=S[L+1][B],st=S[L+1][B+1],nt=S[L][B+1];(t>0||L!==0)&&(u.push(R,H,nt),N+=3),(e>0||L!==r-1)&&(u.push(H,st,nt),N+=3)}h.addGroup(m,N,0),m+=N}function C(M){let q=v,N=new Et,V=new z,B=0,L=M===!0?t:e,R=M===!0?1:-1;for(let st=1;st<=s;st++)f.push(0,x*R,0),p.push(0,R,0),d.push(.5,.5),v++;let H=v;for(let st=0;st<=s;st++){let at=st/s*l+o,yt=Math.cos(at),rt=Math.sin(at);V.x=L*rt,V.y=x*R,V.z=L*yt,f.push(V.x,V.y,V.z),p.push(0,R,0),N.x=yt*.5+.5,N.y=rt*.5*R+.5,d.push(N.x,N.y),v++}for(let st=0;st<s;st++){let nt=q+st,at=H+st;M===!0?u.push(at,at+1,nt):u.push(at+1,at,nt),B+=3}h.addGroup(m,B,M===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zn=class n extends _i{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dh=class n extends xn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),h(i),u(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let C=new z,M=new z,q=new z;for(let N=0;N<e.length;N+=3)d(e[N+0],C),d(e[N+1],M),d(e[N+2],q),l(C,M,q,w)}function l(w,C,M,q){let N=q+1,V=[];for(let B=0;B<=N;B++){V[B]=[];let L=w.clone().lerp(M,B/N),R=C.clone().lerp(M,B/N),H=N-B;for(let st=0;st<=H;st++)st===0&&B===N?V[B][st]=L:V[B][st]=L.clone().lerp(R,st/H)}for(let B=0;B<N;B++)for(let L=0;L<2*(N-B)-1;L++){let R=Math.floor(L/2);L%2===0?(p(V[B][R+1]),p(V[B+1][R]),p(V[B][R])):(p(V[B][R+1]),p(V[B+1][R+1]),p(V[B+1][R]))}}function h(w){let C=new z;for(let M=0;M<r.length;M+=3)C.x=r[M+0],C.y=r[M+1],C.z=r[M+2],C.normalize().multiplyScalar(w),r[M+0]=C.x,r[M+1]=C.y,r[M+2]=C.z}function u(){let w=new z;for(let C=0;C<r.length;C+=3){w.x=r[C+0],w.y=r[C+1],w.z=r[C+2];let M=x(w)/2/Math.PI+.5,q=m(w)/Math.PI+.5;a.push(M,1-q)}v(),f()}function f(){for(let w=0;w<a.length;w+=6){let C=a[w+0],M=a[w+2],q=a[w+4],N=Math.max(C,M,q),V=Math.min(C,M,q);N>.9&&V<.1&&(C<.2&&(a[w+0]+=1),M<.2&&(a[w+2]+=1),q<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function d(w,C){let M=w*3;C.x=t[M+0],C.y=t[M+1],C.z=t[M+2]}function v(){let w=new z,C=new z,M=new z,q=new z,N=new Et,V=new Et,B=new Et;for(let L=0,R=0;L<r.length;L+=9,R+=6){w.set(r[L+0],r[L+1],r[L+2]),C.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),N.set(a[R+0],a[R+1]),V.set(a[R+2],a[R+3]),B.set(a[R+4],a[R+5]),q.copy(w).add(C).add(M).divideScalar(3);let H=x(q);S(N,R+0,w,H),S(V,R+2,C,H),S(B,R+4,M,H)}}function S(w,C,M,q){q<0&&w.x===1&&(a[C]=w.x-1),M.x===0&&M.z===0&&(a[C]=q/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var nr=class extends Ml{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ml().fromJSON(s))}return this}},F_={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=pd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,u,f,p,d;if(i&&(r=H_(n,t,r,e)),n.length>80*e){o=h=n[0],l=u=n[1];for(let v=e;v<s;v+=e)f=n[v],p=n[v+1],f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p);d=Math.max(h-o,u-l),d=d!==0?32767/d:0}return oo(r,a,e,o,l,d,0),a}};function pd(n,t,e,i,s){let r,a;if(s===Q_(n,t,e,i)>0)for(r=t;r<e;r+=i)a=zf(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=zf(r,n[r],n[r+1],a);return a&&Pl(a,a.next)&&(co(a),a=a.next),a}function Tr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Pl(e,e.next)||En(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function oo(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Y_(n,i,s,r);let o=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?k_(n,i,s,r):O_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),co(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=B_(Tr(n),t,e),oo(n,t,e,i,s,r,2)):a===2&&V_(n,t,e,i,s,r):oo(Tr(n),t,e,i,s,r,1);break}}}function O_(n){let t=n.prev,e=n,i=n.next;if(En(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<h?o:h:l<h?l:h,p=s>r?s>a?s:a:r>a?r:a,d=o>l?o>h?o:h:l>h?l:h,v=i.next;for(;v!==t;){if(v.x>=u&&v.x<=p&&v.y>=f&&v.y<=d&&oa(s,o,r,l,a,h,v.x,v.y)&&En(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function k_(n,t,e,i){let s=n.prev,r=n,a=n.next;if(En(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,u=s.y,f=r.y,p=a.y,d=o<l?o<h?o:h:l<h?l:h,v=u<f?u<p?u:p:f<p?f:p,S=o>l?o>h?o:h:l>h?l:h,x=u>f?u>p?u:p:f>p?f:p,m=Uh(d,v,t,e,i),w=Uh(S,x,t,e,i),C=n.prevZ,M=n.nextZ;for(;C&&C.z>=m&&M&&M.z<=w;){if(C.x>=d&&C.x<=S&&C.y>=v&&C.y<=x&&C!==s&&C!==a&&oa(o,u,l,f,h,p,C.x,C.y)&&En(C.prev,C,C.next)>=0||(C=C.prevZ,M.x>=d&&M.x<=S&&M.y>=v&&M.y<=x&&M!==s&&M!==a&&oa(o,u,l,f,h,p,M.x,M.y)&&En(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;C&&C.z>=m;){if(C.x>=d&&C.x<=S&&C.y>=v&&C.y<=x&&C!==s&&C!==a&&oa(o,u,l,f,h,p,C.x,C.y)&&En(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=S&&M.y>=v&&M.y<=x&&M!==s&&M!==a&&oa(o,u,l,f,h,p,M.x,M.y)&&En(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function B_(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Pl(s,r)&&md(s,i,i.next,r)&&lo(s,r)&&lo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),co(i),co(i.next),i=n=r),i=i.next}while(i!==n);return Tr(i)}function V_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J_(a,o)){let l=gd(a,o);a=Tr(a,a.next),l=Tr(l,l.next),oo(a,t,e,i,s,r,0),oo(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function H_(n,t,e,i){let s=[],r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,h=pd(n,o,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Z_(h));for(s.sort(G_),r=0;r<s.length;r++)e=W_(s[r],e);return e}function G_(n,t){return n.x-t.x}function W_(n,t){let e=X_(n,t);if(!e)return t;let i=gd(e,n);return Tr(i,i.next),Tr(e,e.next)}function X_(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&oa(a<h?r:i,a,l,h,a<h?i:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),lo(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&q_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function q_(n,t){return En(n.prev,n,t.prev)<0&&En(t.next,n,n.next)<0}function Y_(n,t,e,i){let s=n;do s.z===0&&(s.z=Uh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$_(s)}function $_(n){let t,e,i,s,r,a,o,l,h=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(a>1);return n}function Uh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Z_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function oa(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function J_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!K_(n,t)&&(lo(n,t)&&lo(t,n)&&j_(n,t)&&(En(n.prev,n,t.prev)||En(n,t.prev,t))||Pl(n,t)&&En(n.prev,n,n.next)>0&&En(t.prev,t,t.next)>0)}function En(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Pl(n,t){return n.x===t.x&&n.y===t.y}function md(n,t,e,i){let s=Qo(En(n,t,e)),r=Qo(En(n,t,i)),a=Qo(En(e,i,n)),o=Qo(En(e,i,t));return!!(s!==r&&a!==o||s===0&&jo(n,e,t)||r===0&&jo(n,i,t)||a===0&&jo(e,n,i)||o===0&&jo(e,t,i))}function jo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qo(n){return n>0?1:n<0?-1:0}function K_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&md(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function lo(n,t){return En(n.prev,n,n.next)<0?En(n,t,n.next)>=0&&En(n,n.prev,t)>=0:En(n,t,n.prev)<0||En(n,n.next,t)<0}function j_(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gd(n,t){let e=new Nh(n.i,n.x,n.y),i=new Nh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zf(n,t,e,i){let s=new Nh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var js=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ff(t),Of(i,t);let a=t.length;e.forEach(Ff);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Of(i,e[l]);let o=F_.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ff(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Of(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ho=class n extends xn{constructor(t=new nr([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:ty,C,M=!1,q,N,V,B;m&&(C=m.getSpacedPoints(u),M=!0,p=!1,q=m.computeFrenetFrames(u,!1),N=new z,V=new z,B=new z),p||(x=0,d=0,v=0,S=0);let L=o.extractPoints(h),R=L.shape,H=L.holes;if(!js.isClockWise(R)){R=R.reverse();for(let vt=0,Lt=H.length;vt<Lt;vt++){let O=H[vt];js.isClockWise(O)&&(H[vt]=O.reverse())}}let nt=js.triangulateShape(R,H),at=R;for(let vt=0,Lt=H.length;vt<Lt;vt++){let O=H[vt];R=R.concat(O)}function yt(vt,Lt,O){return Lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(Lt,O)}let rt=R.length,At=nt.length;function lt(vt,Lt,O){let re,mt,Ut,Ct=vt.x-Lt.x,ye=vt.y-Lt.y,Yt=O.x-vt.x,U=O.y-vt.y,A=Ct*Ct+ye*ye,tt=Ct*U-ye*Yt;if(Math.abs(tt)>Number.EPSILON){let ft=Math.sqrt(A),gt=Math.sqrt(Yt*Yt+U*U),dt=Lt.x-ye/ft,Bt=Lt.y+Ct/ft,Nt=O.x-U/gt,Wt=O.y+Yt/gt,Pe=((Nt-dt)*U-(Wt-Bt)*Yt)/(Ct*U-ye*Yt);re=dt+Ct*Pe-vt.x,mt=Bt+ye*Pe-vt.y;let St=re*re+mt*mt;if(St<=2)return new Et(re,mt);Ut=Math.sqrt(St/2)}else{let ft=!1;Ct>Number.EPSILON?Yt>Number.EPSILON&&(ft=!0):Ct<-Number.EPSILON?Yt<-Number.EPSILON&&(ft=!0):Math.sign(ye)===Math.sign(U)&&(ft=!0),ft?(re=-ye,mt=Ct,Ut=Math.sqrt(A)):(re=Ct,mt=ye,Ut=Math.sqrt(A/2))}return new Et(re/Ut,mt/Ut)}let Dt=[];for(let vt=0,Lt=at.length,O=Lt-1,re=vt+1;vt<Lt;vt++,O++,re++)O===Lt&&(O=0),re===Lt&&(re=0),Dt[vt]=lt(at[vt],at[O],at[re]);let $t=[],Ft,ie=Dt.concat();for(let vt=0,Lt=H.length;vt<Lt;vt++){let O=H[vt];Ft=[];for(let re=0,mt=O.length,Ut=mt-1,Ct=re+1;re<mt;re++,Ut++,Ct++)Ut===mt&&(Ut=0),Ct===mt&&(Ct=0),Ft[re]=lt(O[re],O[Ut],O[Ct]);$t.push(Ft),ie=ie.concat(Ft)}for(let vt=0;vt<x;vt++){let Lt=vt/x,O=d*Math.cos(Lt*Math.PI/2),re=v*Math.sin(Lt*Math.PI/2)+S;for(let mt=0,Ut=at.length;mt<Ut;mt++){let Ct=yt(at[mt],Dt[mt],re);zt(Ct.x,Ct.y,-O)}for(let mt=0,Ut=H.length;mt<Ut;mt++){let Ct=H[mt];Ft=$t[mt];for(let ye=0,Yt=Ct.length;ye<Yt;ye++){let U=yt(Ct[ye],Ft[ye],re);zt(U.x,U.y,-O)}}}let Ee=v+S;for(let vt=0;vt<rt;vt++){let Lt=p?yt(R[vt],ie[vt],Ee):R[vt];M?(V.copy(q.normals[0]).multiplyScalar(Lt.x),N.copy(q.binormals[0]).multiplyScalar(Lt.y),B.copy(C[0]).add(V).add(N),zt(B.x,B.y,B.z)):zt(Lt.x,Lt.y,0)}for(let vt=1;vt<=u;vt++)for(let Lt=0;Lt<rt;Lt++){let O=p?yt(R[Lt],ie[Lt],Ee):R[Lt];M?(V.copy(q.normals[vt]).multiplyScalar(O.x),N.copy(q.binormals[vt]).multiplyScalar(O.y),B.copy(C[vt]).add(V).add(N),zt(B.x,B.y,B.z)):zt(O.x,O.y,f/u*vt)}for(let vt=x-1;vt>=0;vt--){let Lt=vt/x,O=d*Math.cos(Lt*Math.PI/2),re=v*Math.sin(Lt*Math.PI/2)+S;for(let mt=0,Ut=at.length;mt<Ut;mt++){let Ct=yt(at[mt],Dt[mt],re);zt(Ct.x,Ct.y,f+O)}for(let mt=0,Ut=H.length;mt<Ut;mt++){let Ct=H[mt];Ft=$t[mt];for(let ye=0,Yt=Ct.length;ye<Yt;ye++){let U=yt(Ct[ye],Ft[ye],re);M?zt(U.x,U.y+C[u-1].y,C[u-1].x+O):zt(U.x,U.y,f+O)}}}pt(),It();function pt(){let vt=s.length/3;if(p){let Lt=0,O=rt*Lt;for(let re=0;re<At;re++){let mt=nt[re];he(mt[2]+O,mt[1]+O,mt[0]+O)}Lt=u+x*2,O=rt*Lt;for(let re=0;re<At;re++){let mt=nt[re];he(mt[0]+O,mt[1]+O,mt[2]+O)}}else{for(let Lt=0;Lt<At;Lt++){let O=nt[Lt];he(O[2],O[1],O[0])}for(let Lt=0;Lt<At;Lt++){let O=nt[Lt];he(O[0]+rt*u,O[1]+rt*u,O[2]+rt*u)}}i.addGroup(vt,s.length/3-vt,0)}function It(){let vt=s.length/3,Lt=0;se(at,Lt),Lt+=at.length;for(let O=0,re=H.length;O<re;O++){let mt=H[O];se(mt,Lt),Lt+=mt.length}i.addGroup(vt,s.length/3-vt,1)}function se(vt,Lt){let O=vt.length;for(;--O>=0;){let re=O,mt=O-1;mt<0&&(mt=vt.length-1);for(let Ut=0,Ct=u+x*2;Ut<Ct;Ut++){let ye=rt*Ut,Yt=rt*(Ut+1),U=Lt+re+ye,A=Lt+mt+ye,tt=Lt+mt+Yt,ft=Lt+re+Yt;le(U,A,tt,ft)}}}function zt(vt,Lt,O){l.push(vt),l.push(Lt),l.push(O)}function he(vt,Lt,O){ae(vt),ae(Lt),ae(O);let re=s.length/3,mt=w.generateTopUV(i,s,re-3,re-2,re-1);Ue(mt[0]),Ue(mt[1]),Ue(mt[2])}function le(vt,Lt,O,re){ae(vt),ae(Lt),ae(re),ae(Lt),ae(O),ae(re);let mt=s.length/3,Ut=w.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);Ue(Ut[0]),Ue(Ut[1]),Ue(Ut[3]),Ue(Ut[1]),Ue(Ut[2]),Ue(Ut[3])}function ae(vt){s.push(l[vt*3+0]),s.push(l[vt*3+1]),s.push(l[vt*3+2])}function Ue(vt){r.push(vt.x),r.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ey(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ph[s.type]().fromJSON(s)),new n(i,t.options)}},ty={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new Et(r,a),new Et(o,l),new Et(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],f=t[i*3+2],p=t[s*3],d=t[s*3+1],v=t[s*3+2],S=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Et(a,1-l),new Et(h,1-f),new Et(p,1-v),new Et(S,1-m)]:[new Et(o,1-l),new Et(u,1-f),new Et(d,1-v),new Et(x,1-m)]}};function ey(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gs=class n extends Dh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Sl=class n extends xn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],u=[],f=t,p=(e-t)/s,d=new z,v=new Et;for(let S=0;S<=s;S++){for(let x=0;x<=i;x++){let m=r+x/i*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,u.push(v.x,v.y)}f+=p}for(let S=0;S<s;S++){let x=S*(i+1);for(let m=0;m<i;m++){let w=m+x,C=w,M=w+i+1,q=w+i+2,N=w+1;o.push(C,M,N),o.push(M,q,N)}}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wa=class n extends xn{constructor(t=new nr([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(a,2));function h(u){let f=s.length/3,p=u.extractPoints(e),d=p.shape,v=p.holes;js.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,m=v.length;x<m;x++){let w=v[x];js.isClockWise(w)===!0&&(v[x]=w.reverse())}let S=js.triangulateShape(d,v);for(let x=0,m=v.length;x<m;x++){let w=v[x];d=d.concat(w)}for(let x=0,m=d.length;x<m;x++){let w=d[x];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let x=0,m=S.length;x<m;x++){let w=S[x],C=w[0]+f,M=w[1]+f,q=w[2]+f;i.push(C,M,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ny(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function ny(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ii=class n extends xn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,u=[],f=new z,p=new z,d=[],v=[],S=[],x=[];for(let m=0;m<=i;m++){let w=[],C=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let q=0;q<=e;q++){let N=q/e;f.x=-t*Math.cos(s+N*r)*Math.sin(a+C*o),f.y=t*Math.cos(a+C*o),f.z=t*Math.sin(s+N*r)*Math.sin(a+C*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),S.push(p.x,p.y,p.z),x.push(N+M,1-C),w.push(h++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let C=u[m][w+1],M=u[m][w],q=u[m+1][w],N=u[m+1][w+1];(m!==0||a>0)&&d.push(C,M,N),(m!==i-1||l<Math.PI)&&d.push(M,q,N)}this.setIndex(d),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(S,3)),this.setAttribute("uv",new Ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class n extends xn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],h=[],u=new z,f=new z,p=new z;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){let S=v/s*r,x=d/i*Math.PI*2;f.x=(t+e*Math.cos(x))*Math.cos(S),f.y=(t+e*Math.cos(x))*Math.sin(S),f.z=e*Math.sin(x),o.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){let S=(s+1)*d+v-1,x=(s+1)*(d-1)+v-1,m=(s+1)*(d-1)+v,w=(s+1)*d+v;a.push(S,x,w),a.push(x,m,w)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qe=class extends Os{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function tl(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function iy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sa=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends Sa{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zu:r=t,o=2*e-i;break;case Fu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zu:a=t,l=2*i-e;break;case Fu:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,v=(i-e)/(s-e),S=v*v,x=S*v,m=-p*x+2*p*S-p*v,w=(1+p)*x+(-1.5-2*p)*S+(-.5+p)*v+1,C=(-1-d)*x+(1.5+d)*S+.5*v,M=d*x-d*S;for(let q=0;q!==o;++q)r[q]=m*a[u+q]+w*a[h+q]+C*a[l+q]+M*a[f+q];return r}},Fh=class extends Sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,u=(i-e)/(s-e),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[l+p]*u;return r}},Oh=class extends Sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tl(e,this.TimeBufferType),this.values=tl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:tl(t.times,Array),values:tl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case al:e=this.InterpolantFactoryMethodDiscrete;break;case ah:e=this.InterpolantFactoryMethodLinear;break;case Vl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return al;case this.InterpolantFactoryMethodLinear:return ah;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&iy(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)l=!0;else{let f=o*i,p=f-i,d=f+i;for(let v=0;v!==i;++v){let S=e[f+v];if(S!==e[p+v]||S!==e[d+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,p=a*i;for(let d=0;d!==i;++d)e[p+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qi.prototype.TimeBufferType=Float32Array;Qi.prototype.ValueBufferType=Float32Array;Qi.prototype.DefaultInterpolation=ah;var Er=class extends Qi{constructor(t,e,i){super(t,e,i)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=al;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var kh=class extends Qi{};kh.prototype.ValueTypeName="color";var Bh=class extends Qi{};Bh.prototype.ValueTypeName="number";var Vh=class extends Sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)er.slerpFlat(r,0,a,h-o,a,h,l);return r}},Tl=class extends Qi{InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}};Tl.prototype.ValueTypeName="quaternion";Tl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ar=class extends Qi{constructor(t,e,i){super(t,e,i)}};Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=al;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends Qi{};Hh.prototype.ValueTypeName="vector";var kf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gh=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let d=h[f],v=h[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}},sy=new Gh,uo=class{constructor(t){this.manager=t!==void 0?t:sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wh=class extends uo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=kf.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=to("img");function l(){u(),kf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Ta=class extends uo{constructor(t){super(t)}load(t,e,i,s){let r=new Si,a=new Wh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Ea=class extends ei{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends Ea{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vc=new gn,Bf=new z,Vf=new z,El=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bf),Vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vf),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hf=new gn,Ya=new z,bc=new z,Xh=class extends El{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new dn(2,1,1,1),new dn(0,1,1,1),new dn(3,1,1,1),new dn(1,1,1,1),new dn(3,0,1,1),new dn(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ya.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ya),bc.copy(i.position),bc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(bc),i.updateMatrixWorld(),s.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Hf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf)}},Aa=class extends Ea{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qh=class extends El{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Al=class extends Ea{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ru="\\[\\]\\.:\\/",ry=new RegExp("["+ru+"]","g"),au="[^"+ru+"]",ay="[^"+ru.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",au),ly=/(WCOD+)?/.source.replace("WCOD",ay),cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),uy=new RegExp("^"+oy+ly+cy+hy+"$"),fy=["material","materials","bones","map"],Yh=class{constructor(t,e,i){let s=i||Sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Sn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(t){let e=uy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Sn.Composite=Yh;Sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Sn.prototype.GetterByBindingType=[Sn.prototype._getValue_direct,Sn.prototype._getValue_array,Sn.prototype._getValue_arrayElement,Sn.prototype._getValue_toArray];Sn.prototype.SetterByBindingTypeAndVersioning=[[Sn.prototype._setValue_direct,Sn.prototype._setValue_direct_setNeedsUpdate,Sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_array,Sn.prototype._setValue_array_setNeedsUpdate,Sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_arrayElement,Sn.prototype._setValue_arrayElement_setNeedsUpdate,Sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_fromArray,Sn.prototype._setValue_fromArray_setNeedsUpdate,Sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var Gf=new gn,Ra=class{constructor(t,e,i=0,s=1/0){this.ray=new eo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gf),this}intersectObject(t,e=!0,i=[]){return $h(t,this,i,e),i.sort(Wf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)$h(t[s],this,i,e);return i.sort(Wf),i}};function Wf(n,t){return n.distance-t.distance}function $h(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)$h(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ir={chat:{tag:"\u{1F4AC} \u9592\u804A",c:"#ffd27a"},mind:{tag:"\u{1F4AD} \u5167\u5FC3\u7368\u767D",c:"#c9bdff"},idea:{tag:"\u{1F4A1} \u60F3\u6CD5",c:"#a8e6c1"}},Pa=[{id:"misaki",spr:"misaki",name:"\u4F50\u85E4 \u7F8E\u54B2",role:"27 \u6B72\u30FB\u5EE3\u544A\u516C\u53F8\u4F01\u5283",h:1.72,sp:1.7,lines:[["chat","\u6B38\uFF0C\u4F60\u662F\u5C45\u9152\u5C4B\u7684\u5E97\u54E1\u5427\uFF1F\u5148\u5E6B\u6211\u7559\u500B\u4F4D\u5B50\uFF0C\u5341\u5206\u9418\u5F8C\u5230\uFF0C\u5148\u7D66\u6211\u51B0\u4E00\u676F\u751F\u7684\uFF01"],["mind","\u7C21\u5831\u6539\u5230\u7B2C\u4E5D\u7248\u4E86\u3002\u7B2C\u4E5D\u7248\u3002\u5BA2\u6236\u8AAA\u300C\u611F\u89BA\u4E0D\u5C0D\u300D\uFF0C\u5230\u5E95\u662F\u4EC0\u9EBC\u611F\u89BA\u554A\u2026\u2026"],["idea","\u6211\u7684\u4EBA\u751F\u54F2\u5B78\uFF1A\u767D\u5929\u505A\u4EBA\uFF0C\u665A\u4E0A\u505A\u81EA\u5DF1\u3002\u751F\u5564\u9152\u5C31\u662F\u4E2D\u9593\u90A3\u9053\u9580\u3002"],["chat","\u84EE\u90A3\u5B69\u5B50\u4ECA\u5929\u53C8\u88AB\u8AB2\u9577\u5FF5\u4E86\u5427\uFF1F\u7B49\u4E00\u4E0B\u6211\u8ACB\u4ED6\u5403\u4E00\u4E32\u8525\u96DE\u8089\u4E32\u3002"],["mind","\u8D70\u5FEB\u4E00\u9EDE\uFF0C\u8D70\u5FEB\u4E00\u9EDE\u3002\u518D\u6162\u5C31\u8981\u88AB\u9019\u689D\u8857\u7684\u9999\u5473\u6293\u8D70\u4E86\u3002"]]},{id:"ren",spr:"ren",name:"\u9AD8\u6A4B \u84EE",role:"24 \u6B72\u30FB\u65B0\u4EBA\u4E0A\u73ED\u65CF",h:1.66,sp:1.6,lines:[["chat","\u90A3\u500B\u2026\u2026\u5982\u679C\u8AB2\u9577\u51FA\u73FE\uFF0C\u4F60\u5C31\u8AAA\u6211\u6C92\u4F86\u904E\u3002\u62DC\u8A17\u3002"],["mind","\u4ECA\u5929\u53EA\u88AB\u5FF5\u4E86\u5169\u6B21\uFF0C\u7B97\u9032\u6B65\u55CE\uFF1F\u7B97\u5427\uFF0C\u7B97\u3002"],["idea","\u6211\u767C\u73FE\u4E0A\u73ED\u6700\u96E3\u7684\u4E0D\u662F\u5DE5\u4F5C\uFF0C\u662F\u628A\u300C\u597D\u7684\uFF0C\u6211\u99AC\u4E0A\u8655\u7406\u300D\u8AAA\u5F97\u50CF\u771F\u7684\u5F88\u60F3\u8655\u7406\u3002"],["mind","\u524D\u9762\u90A3\u500B\u80CC\u5F71\u600E\u9EBC\u90A3\u9EBC\u50CF\u8AB2\u9577\u2026\u2026\u61C9\u8A72\u4E0D\u662F\u2026\u2026\u5982\u679C\u662F\uFF0C\u6211\u5148\u8EB2\u9032\u62C9\u9EB5\u5C4B\u53F0\u3002"],["chat","\u4ECA\u5929\u767C\u85AA\u65E5\uFF01\u6211\u8981\u8C6A\u6C23\u4E00\u6B21\uFF0C\u9EDE\u5169\u4E32\uFF01"]]},{id:"hinata",spr:"hinata",name:"\u5C0F\u6797 \u65E5\u5411",role:"20 \u6B72\u30FB\u5927\u5B78\u751F",h:1.6,sp:2.1,lines:[["chat","\u5E97\u54E1\uFF01\u4ECA\u5929\u6709\u4EC0\u9EBC\u4FBF\u5B9C\u7684\uFF1F\u6BDB\u8C46\u9084\u662F\u5169\u767E\u65E5\u5713\u55CE\uFF1F"],["mind","\u9322\u5305\u88E1 480 \u5713\uFF0C\u6708\u5E95\u9084\u6709\u4E5D\u5929\u3002\u51B7\u975C\uFF0C\u6211\u662F\u6703\u7B97\u6578\u5B78\u7684\u4EBA\u3002"],["idea","\u805E\u5230\u70E4\u4E32\u9999\u5473\u7684\u6642\u5019\uFF0C\u6211\u7684\u809A\u5B50\u6BD4\u6211\u5148\u505A\u6C7A\u5B9A\u3002"],["chat","\u5343\u4EE3\u5976\u5976\u53C8\u585E\u7CD6\u7D66\u6211\u4E86\uFF01\u6211\u90FD\u4E8C\u5341\u6B72\u4E86\u6B38\u2026\u2026\u4E0D\u904E\u6AB8\u6AAC\u53E3\u5473\u610F\u5916\u5730\u597D\u5403\u3002"],["mind","\u6253\u5DE5\u7AD9\u4E86\u516D\u500B\u5C0F\u6642\uFF0C\u817F\u5DF2\u7D93\u4E0D\u662F\u6211\u7684\u4E86\u3002\u4F46\u60F3\u5230\u7B49\u4E00\u4E0B\u7684\u6BDB\u8C46\uFF0C\u53C8\u6709\u529B\u6C23\u4E86\u3002"]]},{id:"taizo",spr:"taizo",name:"\u6E90 \u5927\u9020",role:"70 \u6B72\u30FB\u9000\u4F11\u6728\u5320",h:1.5,sp:1,lines:[["chat","\u8001\u6A23\u5B50\u3002\u2026\u2026\u4F60\u77E5\u9053\u6211\u8981\u4EC0\u9EBC\u5427\uFF1F\u55EF\uFF0C\u5C31\u662F\u90A3\u500B\u3002"],["mind","\u9019\u689D\u8857\u7684\u6728\u62DB\u724C\uFF0C\u6709\u5E7E\u584A\u662F\u6211\u5E74\u8F15\u6642\u5019\u91D8\u7684\u3002\u6C92\u4EBA\u77E5\u9053\uFF0C\u4E5F\u4E0D\u7528\u77E5\u9053\u3002"],["idea","\u597D\u5E97\u7684\u9580\u8EF8\u6703\u6709\u4E00\u9EDE\u9EDE\u8072\u97F3\u3002\u90A3\u8072\u97F3\uFF0C\u662F\u5E97\u5728\u8DDF\u5BA2\u4EBA\u6253\u62DB\u547C\u3002"],["chat","\u5343\u4EE3\u90A3\u500B\u8001\u592A\u5A46\u53C8\u5ACC\u6211\u8D70\u592A\u6162\u3002\u6211\u8D70\u9019\u9EBC\u6162\u662F\u5728\u6B23\u8CDE\u8857\u666F\u597D\u55CE\u3002"]]},{id:"nakamura",spr:"nakamura",name:"\u4E2D\u6751 \u8AB2\u9577",role:"52 \u6B72\u30FB\u84EE\u7684\u8AB2\u9577",h:1.7,sp:1.5,lines:[["chat","\u2026\u2026\u4F60\u525B\u525B\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u6C92\u770B\u5230\u4F60\u3002\u5C31\u9019\u6A23\u3002"],["mind","\u84EE\u4ECA\u5929\u4EA4\u7684\u5831\u544A\u5176\u5BE6\u4E0D\u932F\uFF0C\u683C\u5F0F\u4E5F\u6F02\u4EAE\u3002\u53EF\u662F\u6211\u660E\u5929\u5927\u6982\u9084\u662F\u6703\u5FF5\u4ED6\u2026\u2026\u9019\u662F\u6211\u7684\u8077\u8CAC\uFF0C\u6211\u662F\u9019\u9EBC\u544A\u8A34\u81EA\u5DF1\u7684\u3002"],["idea","\u4E00\u500B\u4EBA\u559D\u60B6\u9152\u6709\u4E00\u500B\u597D\u8655\uFF1A\u4E0D\u7528\u5047\u88DD\u5F88\u6709\u5A01\u56B4\u3002"],["mind","\u90A3\u500B\u7A7F\u897F\u88DD\u7684\u80CC\u5F71\u2026\u2026\u662F\u84EE\u55CE\uFF1F\u4E0D\u662F\u5427\uFF1F\u662F\u5427\uFF1F\u6211\u7E5E\u8DEF\u3002"]]},{id:"chiyo",spr:"chiyo",name:"\u5C71\u672C \u5343\u4EE3",role:"76 \u6B72\u30FB\u5DF7\u53E3\u7684\u8001\u5976\u5976",h:1.42,sp:1,lines:[["chat","\u5E74\u8F15\u4EBA\uFF0C\u4F86\uFF0C\u5976\u5976\u9019\u88E1\u6709\u7CD6\u3002\u4E0D\u7528\u5BA2\u6C23\uFF0C\u53E3\u888B\u6EFF\u7684\uFF0C\u53CD\u6B63\u6211\u5403\u4E0D\u5B8C\u3002"],["mind","\u6211\u4EE5\u524D\u7684\u751C\u54C1\u5E97\u5C31\u958B\u5728\u9019\u689D\u8857\u8F49\u89D2\uFF0C\u73FE\u5728\u8B8A\u6210\u4FBF\u5229\u5546\u5E97\u4E86\u3002\u62DB\u724C\u63DB\u4E86\uFF0C\u5473\u9053\u9084\u5728\u6211\u8166\u5B50\u88E1\u3002"],["idea","\u5403\u6771\u897F\u8981\u6162\uFF0C\u8A71\u8981\u5C11\uFF0C\u7CD6\u8981\u591A\u3002\u9019\u662F\u6211\u6D3B\u4E86\u4E03\u5341\u516D\u5E74\u5F97\u5230\u7684\u4E09\u689D\u771F\u7406\u3002"],["chat","\u65E5\u5411\u90A3\u5B69\u5B50\u592A\u7626\u4E86\uFF0C\u6211\u591A\u585E\u4ED6\u5169\u9846\u7CD6\uFF0C\u4E0D\u8A31\u544A\u8A34\u4ED6\u6211\u6545\u610F\u7684\u3002"]]},{id:"soichiro",spr:"soichiro",name:"\u897F\u5712\u5BFA \u5B97\u4E00\u90CE",role:"74 \u6B72\u30FB\u9000\u4F11\u5927\u5B78\u6559\u6388",h:1.62,sp:1,lines:[["chat","\u4F60\u77E5\u9053\u5C45\u9152\u5C4B\u7684\u300C\u5C45\u300D\u662F\u4EC0\u9EBC\u610F\u601D\u55CE\uFF1F\u662F\u300C\u5750\u4E0B\u4F86\u300D\u3002\u9152\u92EA\u88E1\u80FD\u5C31\u5730\u5750\u8457\u559D\uFF0C\u624D\u53EB\u5C45\u9152\u3002\u2026\u2026\u554A\uFF0C\u4E0D\u7528\u8A18\uFF0C\u807D\u904E\u5C31\u597D\u3002"],["mind","\u9E97\u5B50\u5C0F\u59D0\u4ECA\u5929\u7684\u9999\u6C34\u662F\u9234\u862D\u2026\u2026\u4E0D\u5C0D\uFF0C\u6211\u70BA\u4EC0\u9EBC\u6703\u8A18\u5F97\u9019\u7A2E\u4E8B\u3002"],["idea","\u5B78\u554F\u548C\u4E0B\u9152\u83DC\u6709\u4E00\u500B\u5171\u901A\u9EDE\uFF1A\u90FD\u8A72\u6162\u6162\u54C1\uFF0C\u6025\u4E0D\u5F97\u3002"],["chat","\u5976\u6CB9\u6247\u8C9D\u554A\uFF0C\u9019\u9053\u83DC\u53EF\u662F\u6709\u4F86\u6B77\u7684\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u6211\u53C8\u958B\u59CB\u4E86\u3002"]]},{id:"reiko",spr:"reiko",name:"\u767D\u9CE5 \u9E97\u5B50",role:"71 \u6B72\u30FB\u9000\u4F11\u7235\u58EB\u6B4C\u624B",h:1.66,sp:1,lines:[["chat","\u89AA\u611B\u7684\uFF0C\u4ECA\u665A\u6708\u8272\u4E0D\u932F\uFF0C\u9069\u5408\u4E00\u676F\u5A01\u58EB\u5FCC\u8607\u6253\uFF0C\u4E5F\u9069\u5408\u4F60\u966A\u6211\u8D70\u4E00\u6BB5\u3002"],["mind","\u90A3\u4F4D\u8001\u6559\u6388\u53C8\u5728\u5077\u770B\u6211\u4E86\u3002\u4ED6\u4EE5\u70BA\u6211\u6C92\u767C\u73FE\u3002\u53EF\u611B\u3002"],["idea","\u5E74\u7D00\u5927\u4E86\u624D\u77E5\u9053\uFF0C\u6642\u9AE6\u4E0D\u662F\u7A7F\u4EC0\u9EBC\uFF0C\u662F\u8D70\u8DEF\u6642\u89BA\u5F97\u81EA\u5DF1\u503C\u5F97\u88AB\u770B\u898B\u3002"],["mind","\u9280\u5EA7\u7684\u71C8\u548C\u9019\u88E1\u7684\u71C8\u4E0D\u4E00\u6A23\u3002\u9019\u88E1\u7684\uFF0C\u6BD4\u8F03\u6696\u3002"]]},{id:"riko",spr:"riko",name:"\u6843\u4E95 \u8389\u5B50",role:"23 \u6B72\u30FB\u7F8E\u98DF\u7DB2\u7D05",h:1.66,sp:2,lines:[["chat","\u7B49\u7B49\u7B49\u7B49\uFF0C\u5148\u5225\u8D70\uFF01\u9019\u500B\u71C8\u7C60\u7684\u89D2\u5EA6\u592A\u7F8E\u4E86\uFF0C\u6211\u62CD\u4E00\u5F35\uFF01\u4F60\u53EF\u4EE5\u7576\u8DEF\u4EBA\u5165\u93E1\u55CE\uFF1F"],["mind","\u76F4\u64AD\u4EBA\u6578 37\u2026\u202638\uFF01\u51B7\u975C\uFF0C\u7B11\uFF0C\u4FDD\u6301\u7B11\u3002\u8981\u81EA\u7136\u3002\u8981\u81EA\u7136\u5730\u5403\u3002"],["idea","\u597D\u5403\u7684\u5E97\u6709\u4E00\u7A2E\u5149\uFF0C\u4E0D\u662F\u71C8\u7684\u5149\uFF0C\u662F\u5927\u5BB6\u4F4E\u982D\u5403\u6771\u897F\u6642\u81C9\u4E0A\u7684\u90A3\u7A2E\u5149\u3002"],["chat","\u9019\u689D\u8857\u6BCF\u4E00\u5BB6\u6211\u90FD\u958B\u904E\u76F4\u64AD\u3002\u6700\u4E0A\u76F8\u7684\u662F\u6708\u5F71\u9152\u5427\uFF0C\u5149\u7DDA\u8D85\u597D\u3002"]]},{id:"emily",spr:"emily",name:"\u827E\u871C\u8389",role:"22 \u6B72\u30FB\u5916\u570B\u80CC\u5305\u5BA2",h:1.74,sp:1.9,lines:[["chat","Excuse me\uFF01\u62DB\u724C\u4E0A\u7684\u5B57\u6211\u4E00\u500B\u4E5F\u770B\u4E0D\u61C2\uFF0C\u4F46\u6BCF\u4E00\u5BB6\u90FD\u597D\u9999\uFF01\u4F60\u63A8\u85A6\u54EA\u4E00\u5BB6\uFF1F"],["mind","\u5730\u5716\u8AAA\u6211\u5DF2\u7D93\u5230\u4E86\u76EE\u7684\u5730\uFF0C\u53EF\u662F\u6211\u5B8C\u5168\u4E0D\u77E5\u9053\u76EE\u7684\u5730\u662F\u54EA\u4E00\u68DF\u3002\u7B97\u4E86\uFF0C\u8DDF\u8457\u9999\u5473\u8D70\u3002"],["idea","\u9019\u88E1\u5927\u5BB6\u908A\u5403\u908A\u8AAA\u300C\u597D\u5403\u300D\uFF0C\u6211\u4E5F\u5B78\u6703\u4E86\u4E00\u53E5\uFF1A\u304A\u3044\u3057\u3044\uFF01"],["chat","\u525B\u525B\u90A3\u4F4D\u5927\u53D4\u624B\u4E0A\u62FF\u8457\u82B1\uFF0C\u770B\u8D77\u4F86\u597D\u5147\uFF0C\u53EF\u662F\u4ED6\u7B11\u8D77\u4F86\u8D85\u6EAB\u67D4\uFF0C\u6211\u5077\u5077\u62CD\u5230\u4E86\uFF01"]]},{id:"kuroda",spr:"kuroda",name:"\u9ED1\u7530 \u93E1",role:"48 \u6B72\u30FB\u7F8E\u98DF\u8A55\u8AD6\u5BB6",h:1.78,sp:1.4,lines:[["chat","\u5225\u64CB\u8DEF\u3002\u2026\u2026\u958B\u73A9\u7B11\u7684\u3002\u4F60\u5011\u9019\u689D\u8857\u7684\u71C8\u5149\uFF0C\u5012\u662F\u6BD4\u6211\u4E0A\u9031\u8A55\u7684\u90A3\u9593\u7C73\u5176\u6797\u9084\u6709\u8AA0\u610F\u3002"],["mind","\u5BEB\u4EC0\u9EBC\u597D\u5462\u2026\u2026\u300C\u6EAB\u6696\u300D\u592A\u4FD7\uFF0C\u300C\u6709\u8AA0\u610F\u300D\u592A\u786C\u3002\u4ECA\u665A\u518D\u5BEB\u4E0D\u51FA\u4F86\uFF0C\u5C31\u53EA\u80FD\u5BEB\u300C\u597D\u5403\u300D\u5169\u500B\u5B57\u4E86\u3002"],["idea","\u8A55\u8AD6\u5BB6\u53EA\u6709\u4E00\u689D\u5B88\u5247\uFF1A\u5403\u7684\u6642\u5019\u50CF\u500B\u5B69\u5B50\uFF0C\u5BEB\u7684\u6642\u5019\u50CF\u500B\u5927\u4EBA\u3002"],["mind","\u9019\u5BB6\u7684\u5510\u63DA\u70B8\u5F97\u5F88\u5C0D\u3002\u2026\u2026\u6211\u4E0D\u6703\u544A\u8A34\u4ED6\u5011\u7684\uFF0C\u6703\u9A55\u50B2\u3002"]]},{id:"sachiko",spr:"sachiko",name:"\u6D5C\u7530 \u5E78\u5B50",role:"47 \u6B72\u30FB\u9B5A\u5E02\u5834\u9B5A\u8CA9",h:1.6,sp:1.8,lines:[["chat","\u5582\uFF0C\u90A3\u908A\u7684\uFF01\u6D77\u98A8\u58FD\u53F8\u7684\u9BAA\u9B5A\uFF0C\u662F\u6211\u65E9\u4E0A\u9001\u53BB\u7684\u5427\uFF1F\u653E\u5FC3\uFF0C\u7D55\u5C0D\u65B0\u9BAE\uFF0C\u4E0D\u65B0\u9BAE\u6211\u81EA\u5DF1\u5403\u6389\uFF01"],["mind","\u51CC\u6668\u4E09\u9EDE\u7684\u5E02\u5834\uFF0C\u51B0\u584A\u8072\u3001\u53EB\u8CE3\u8072\u3001\u6D77\u7684\u5473\u9053\u3002\u6BD4\u4EFB\u4F55\u9152\u90FD\u9192\u8166\u3002"],["idea","\u9B5A\u4E0D\u6703\u9A19\u4EBA\u3002\u770B\u773C\u775B\u3001\u805E\u9C13\u3001\u6309\u809A\u5B50\uFF0C\u4E09\u79D2\u5C31\u77E5\u9053\u503C\u4E0D\u503C\u9322\u3002"],["chat","\u4ECA\u5929\u7D2F\u7FFB\u4E86\uFF0C\u7B49\u4E00\u4E0B\u53BB\u559D\u4E00\u676F\uFF0C\u70E4\u9B77\u9B5A\u914D\u5564\u9152\uFF0C\u9019\u662F\u6211\u7D66\u81EA\u5DF1\u7684\u734E\u52F5\uFF01"]]},{id:"ryuji",spr:"ryuji",name:"\u9B3C\u585A \u9F8D\u4E8C",role:"44 \u6B72\u30FB\u82B1\u5E97\u8001\u95C6",h:1.78,sp:1.4,lines:[["chat","\u2026\u2026\u9019\u82B1\uFF0C\u9001\u4F60\u3002\uFF08\u905E\u51FA\u4E00\u5C0F\u675F\u96DB\u83CA\uFF09\u5225\u6015\uFF0C\u6211\u770B\u8D77\u4F86\u5147\uFF0C\u82B1\u4E0D\u6703\u3002"],["mind","\u53C8\u6709\u5C0F\u5B69\u770B\u5230\u6211\u5C31\u8EB2\u958B\u4E86\u3002\u6C92\u95DC\u4FC2\uFF0C\u6211\u4ECA\u5929\u628A\u82B1\u675F\u7D81\u5F97\u7279\u5225\u6F02\u4EAE\u3002"],["idea","\u82B1\u5E97\u7684\u4EBA\u90FD\u77E5\u9053\uFF0C\u82B1\u6703\u66FF\u4EBA\u8AAA\u4E0D\u597D\u610F\u601D\u958B\u53E3\u7684\u8A71\u3002"],["chat","\u624B\u81C2\u9019\u500B\uFF1F\u4E00\u6735\u5C0F\u82B1\u800C\u5DF2\u3002\u5E74\u8F15\u6642\u60F3\u523B\u500B\u72E0\u4E00\u9EDE\u7684\uFF0C\u5E2B\u5085\u770B\u4E86\u6211\u4E00\u773C\uFF0C\u8AAA\u4F60\u9069\u5408\u82B1\u3002"]]},{id:"kazuo",spr:"kazuo",name:"\u68EE \u548C\u592B",role:"72 \u6B72\u30FB\u9000\u4F11\u9418\u9336\u5E2B\u5085",h:1.58,sp:1.1,lines:[["chat","\u73FE\u5728\u5E7E\u9EDE\uFF1F\u4F60\u5011\u7684\u5E97\u6709\u6E96\u6642\u958B\u9580\u55CE\uFF1F\u2026\u2026\u597D\uFF0C\u5DEE\u4E94\u79D2\u3002\u6211\u7FD2\u6163\u4E86\u3002"],["mind","\u6EF4\u7B54\u3001\u6EF4\u7B54\u3002\u8D70\u8DEF\u4E5F\u662F\u4E00\u7A2E\u9418\u64FA\uFF0C\u4E00\u6B65\u5927\u6982\u5169\u767E\u6BEB\u79D2\u2026\u2026\u9000\u4F11\u4E86\u9084\u5728\u91CF\u3002"],["idea","\u6642\u9593\u4E0D\u662F\u7528\u4F86\u5B88\u7684\uFF0C\u662F\u7528\u4F86\u966A\u7684\u3002\u53EF\u662F\u6211\u9084\u662F\u6703\u5B88\uFF0C\u9019\u662F\u8077\u696D\u75C5\u3002"],["chat","\u6211\u7684\u83DC\u665A\u4E86\u4E09\u5206\u9418\uFF01\u2026\u2026\u5662\uFF0C\u6211\u9084\u6C92\u9EDE\u3002\u62B1\u6B49\uFF0C\u5148\u8D70\u4E86\u3002"]]},{id:"mob0",spr:"mob0",name:"\u9234\u6728 \u7D50\u8863",role:"26 \u6B72\u30FB\u4E0B\u73ED\u7684 OL",h:1.7,sp:1.6,lines:[["chat","\u8ACB\u554F\uFF0C\u9019\u9644\u8FD1\u6709\u53EF\u4EE5\u4E00\u500B\u4EBA\u5B89\u975C\u5403\u7684\u5E97\u55CE\uFF1F\u55EF\u2026\u2026\u6700\u597D\u662F\u4E0D\u6703\u9047\u5230\u516C\u53F8\u7684\u4EBA\u7684\u90A3\u7A2E\u3002"],["mind","Excel \u7684\u516C\u5F0F\u9084\u5728\u8166\u5B50\u88E1\u8F49\u3002VLOOKUP\u2026\u2026\u4E0D\u5C0D\uFF0C\u4ECA\u665A\u7684\u665A\u9910\u5230\u5E95\u5728\u54EA\u88E1\u3002"],["idea","\u4E0B\u73ED\u771F\u6B63\u958B\u59CB\u7684\u6642\u523B\uFF0C\u662F\u628A\u9AD8\u8DDF\u978B\u63DB\u6210\u5E73\u5E95\u978B\u7684\u90A3\u4E00\u6B65\u3002"]]},{id:"mob1",spr:"mob1",name:"\u963F\u60A0",role:"17 \u6B72\u30FB\u88DC\u7FD2\u73ED\u4E0B\u8AB2\u7684\u9AD8\u4E2D\u751F",h:1.64,sp:1.9,lines:[["chat","\u4ECA\u5929\u7684\u8003\u5377\u767C\u4E0B\u4F86\u4E86\u2026\u2026\u4F60\u6C92\u770B\u5230\u6211\u3002\u6211\u4E5F\u4E0D\u60F3\u63D0\u3002"],["mind","\u82F1\u6587\u55AE\u5B57\u80CC\u4E86\u4E00\u767E\u500B\uFF0C\u8D70\u51FA\u88DC\u7FD2\u73ED\u5168\u5FD8\u5149\u4E86\u3002\u5927\u8166\u662F\u4E0D\u662F\u6709\u500B\u6F0F\u6C34\u7684\u6D1E\u3002"],["idea","\u4EBA\u751F\u6700\u516C\u5E73\u7684\u4E8B\uFF0C\u662F\u5927\u5BB6\u90FD\u53EA\u6709\u4E8C\u5341\u56DB\u5C0F\u6642\u3002\u6700\u4E0D\u516C\u5E73\u7684\u662F\uFF0C\u6709\u4EBA\u9084\u80FD\u7761\u6EFF\u516B\u5C0F\u6642\u3002"],["chat","\u9019\u689D\u8857\u7684\u9999\u5473\u5C0D\u88DC\u7FD2\u73ED\u5B78\u751F\u662F\u72AF\u898F\u7684\u3002\u6211\u6BCF\u5929\u8D70\u904E\u90FD\u5728\u8DDF\u81EA\u5DF1\u7684\u80C3\u8AC7\u5224\u3002"]]},{id:"mob2",spr:"mob2",name:"\u6728\u6751 \u5C0F\u59D0",role:"35 \u6B72\u30FB\u5716\u66F8\u9928\u54E1",h:1.64,sp:1.4,lines:[["chat","\u5653\u2014\u2014\u2026\u2026\u554A\uFF0C\u62B1\u6B49\uFF0C\u8077\u696D\u75C5\u3002\u9019\u88E1\u662F\u8857\u4E0A\uFF0C\u53EF\u4EE5\u5927\u8072\u8AAA\u8A71\u3002"],["mind","\u4ECA\u5929\u6709\u4EBA\u9084\u4E86\u903E\u671F\u5341\u4E00\u5E74\u7684\u66F8\u3002\u6211\u6C7A\u5B9A\u539F\u8AD2\u4ED6\uFF0C\u56E0\u70BA\u7B2C\u4E00\u9801\u593E\u4E86\u4E00\u5F35\u5F88\u6EAB\u67D4\u7684\u66F8\u7C64\u3002"],["idea","\u597D\u66F8\u548C\u597D\u5E97\u5F88\u50CF\uFF1A\u5C01\u9762\u4E0D\u91CD\u8981\uFF0C\u7FFB\u958B\u3001\u63A8\u958B\u4E4B\u5F8C\u7684\u90A3\u5341\u5206\u9418\u624D\u91CD\u8981\u3002"]]},{id:"mob3",spr:"mob3",name:"\u677E\u672C \u5E2B\u5085",role:"55 \u6B72\u30FB\u8A08\u7A0B\u8ECA\u53F8\u6A5F",h:1.62,sp:1.3,lines:[["chat","\u6211\u958B\u4E86\u4E8C\u5341\u5E74\u7684\u8ECA\uFF0C\u9019\u689D\u8857\u7684\u5BA2\u4EBA\u6211\u591A\u534A\u8F09\u904E\u3002\u54EA\u4E00\u6524\u7684\u5BA2\u4EBA\u6700\u5BB9\u6613\u559D\u591A\uFF1F\u6211\u4E0D\u8AAA\uFF0C\u4F46\u6211\u77E5\u9053\u3002"],["mind","\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u518D\u4E00\u55AE\u5C31\u6536\u5DE5\u3002\u2026\u2026\u5DF2\u7D93\u8AAA\u7B2C\u56DB\u6B21\u4E86\u3002"],["idea","\u8F09\u5BA2\u4EBA\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\uFF1A\u807D\u5B8C\u4E0D\u8A55\u8AD6\u3002\u6211\u7684\u8033\u6735\u662F\u52A0\u5BC6\u7684\u3002"]]},{id:"mob4",spr:"mob4",name:"\u7FD4\u592A",role:"8 \u6B72\u30FB\u5C0F\u5B78\u751F",h:1.22,sp:2.4,lines:[["chat","\u6211\u9577\u5927\u4EE5\u5F8C\u8981\u958B\u4E00\u9593\u8CE3\u5E03\u4E01\u7684\u5C45\u9152\u5C4B\uFF01\u53EF\u4EE5\u55CE\uFF1F\u5BA2\u4EBA\u8981\u5148\u5403\u5E03\u4E01\u624D\u80FD\u559D\u9152\u3002"],["mind","\u5ABD\u5ABD\u8AAA\u53EA\u80FD\u8CB7\u4E00\u500B\u3002\u53EF\u662F\u9019\u500B\u548C\u90A3\u500B\u90FD\u60F3\u8981\u3002\u6211\u8981\u600E\u9EBC\u7528\u773C\u775B\u8AAA\u670D\u5979\u2026\u2026"],["idea","\u5927\u4EBA\u7684\u5E97\u90FD\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u9580\u7C3E\uFF0C\u6211\u89BA\u5F97\u90A3\u662F\u8B8A\u6210\u5927\u4EBA\u7684\u5165\u53E3\u3002"],["chat","\u6211\u7238\u7238\u559D\u5B8C\u9152\u56DE\u5BB6\u90FD\u6703\u5531\u6B4C\uFF0C\u5F88\u96E3\u807D\u3002\u53EF\u662F\u6211\u5ABD\u5ABD\u6BCF\u6B21\u90FD\u7B11\u3002"]]},{id:"mob5",spr:"mob5",name:"\u963F\u52C7",role:"38 \u6B72\u30FB\u6C34\u96FB\u884C\u5E2B\u5085",h:1.68,sp:1.7,lines:[["chat","\u5C0F\u5FC3\u982D\u4E0A\uFF01\u525B\u4FEE\u5B8C\u62DB\u724C\uFF0C\u90A3\u9846\u71C8\u7C60\u6211\u9396\u7DCA\u4E86\uFF0C\u4E0D\u6703\u6389\u5566\uFF0C\u5927\u6982\u3002"],["mind","\u4ECA\u5929\u4FEE\u4E86\u4E03\u500B\u5730\u65B9\uFF0C\u6BCF\u4E00\u500B\u90FD\u8AAA\u300C\u99AC\u4E0A\u5C31\u597D\u300D\u3002\u4EBA\u751F\u6700\u9577\u7684\u8A5E\u5C31\u662F\u300C\u99AC\u4E0A\u300D\u3002"],["idea","\u9019\u689D\u8857\u7684\u6BCF\u4E00\u689D\u96FB\u7DDA\u6211\u90FD\u8A8D\u5F97\u3002\u54EA\u4E00\u5BB6\u7684\u71C8\u5728\u9583\uFF0C\u6211\u4E00\u807D\u8072\u97F3\u5C31\u77E5\u9053\u3002"]]},{id:"mob6",spr:"mob6",name:"\u5409\u7530 \u592A\u592A",role:"49 \u6B72\u30FB\u4F4F\u5728\u6A13\u4E0A\u7684\u9130\u5C45",h:1.6,sp:1.3,lines:[["chat","\u665A\u5B89\u5440\u3002\u6211\u5C31\u4F4F\u5728\u9019\u689D\u8857\u7684\u6A13\u4E0A\uFF0C\u6BCF\u5929\u88AB\u70E4\u4E32\u7684\u9999\u5473\u53EB\u9192\uFF0C\u4E5F\u88AB\u5B83\u53EB\u53BB\u716E\u6CE1\u9EB5\uFF0C\u592A\u6B98\u5FCD\u4E86\u3002"],["mind","\u8981\u8CB7\u8525\u3001\u8C46\u8150\uFF0C\u9084\u6709\u2026\u2026\u6211\u8981\u8CB7\u4EC0\u9EBC\u4F86\u8457\uFF1F\u7B97\u4E86\uFF0C\u5148\u53BB\u770B\u770B\u90A3\u5BB6\u7684\u5510\u63DA\u3002"],["idea","\u4F4F\u5728\u5C45\u9152\u5C4B\u6A13\u4E0A\u552F\u4E00\u7684\u7F3A\u9EDE\uFF0C\u5C31\u662F\u6E1B\u80A5\u6C38\u9060\u662F\u300C\u660E\u5929\u958B\u59CB\u300D\u3002"]]},{id:"mob7",spr:"mob7",name:"\u4F50\u4F50\u6728 \u723A\u723A",role:"78 \u6B72\u30FB\u6563\u6B65\u7684\u8001\u5148\u751F",h:1.5,sp:1,lines:[["chat","\u6211\u5E74\u8F15\u7684\u6642\u5019\uFF0C\u9019\u689D\u8857\u53EA\u6709\u5169\u76DE\u71C8\u3002\u73FE\u5728\u9019\u9EBC\u4EAE\uFF0C\u6211\u53CD\u800C\u4E0D\u592A\u6703\u8D70\u8DEF\u4E86\u3002"],["mind","\u6563\u6B65\u7B2C\u4E09\u5708\u4E86\u3002\u5BB6\u88E1\u96FB\u8996\u5728\u64AD\u4E00\u500B\u6211\u4E0D\u600E\u9EBC\u559C\u6B61\u7684\u7BC0\u76EE\uFF0C\u5916\u9762\u7684\u71C8\u7C60\u6BD4\u8F03\u597D\u770B\u3002"],["idea","\u4EBA\u8001\u4E86\u624D\u767C\u73FE\uFF0C\u6700\u597D\u7684\u904B\u52D5\u662F\u300C\u8D70\u53BB\u5403\u98EF\u300D\u3002\u76EE\u7684\u5730\u5F88\u91CD\u8981\u3002"]]},{id:"thief",spr:"robot",name:"\u8DEF\u904E\u7684\u53EF\u7591\u4EBA\u58EB",role:"\u8EAB\u5206\u4E0D\u660E",h:1.6,sp:3.4,lines:[["chat","\u5653\uFF01\u6211\u4E0D\u662F\u5C0F\u5077\uFF0C\u6211\u662F\u2026\u2026\u591C\u8DD1\u3002\u5C0D\uFF0C\u591C\u8DD1\u3002\uFF08\u62CE\u8457\u9F13\u9F13\u7684\u888B\u5B50\uFF09"],["mind","\u9019\u888B\u88E1\u9762\u662F\u2026\u2026\u6211\u7684\u63DB\u6D17\u8863\u7269\u3002\u771F\u7684\u3002\u4E0D\u8981\u554F\u6211\u70BA\u4EC0\u9EBC\u63DB\u6D17\u8863\u7269\u9019\u9EBC\u91CD\u3002"],["idea","\u6211\u89BA\u5F97\u9019\u689D\u8857\u7684\u6CBB\u5B89\u5F88\u597D\uFF0C\u6240\u4EE5\u6211\u624D\u80FD\u9019\u9EBC\u2026\u2026\u6211\u662F\u8AAA\uFF0C\u9019\u9EBC\u5B89\u5FC3\u5730\u591C\u8DD1\u3002"],["chat","\u4F60\u6709\u770B\u5230\u5F8C\u9762\u6709\u4EBA\u5728\u8FFD\u55CE\uFF1F\u2026\u2026\u6C92\u6709\uFF1F\u90A3\u6211\u7E7C\u7E8C\u8DD1\u4E86\uFF01"]]}];function _d(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new xn,h=0;for(let u=0;u<n.length;++u){let f=n[u],p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,u),h+=d}}if(e){let u=0,f=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let v=0;v<d.count;++v)f.push(d.getX(v)+u);u+=n[p].attributes.position.count}l.setIndex(f)}for(let u in r){let f=xd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][p]);let v=xd(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function xd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new xi(a,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let f=l/e;for(let p=0,d=u.count;p<d;p++)for(let v=0;v<e;v++){let S=u.getComponent(p,v);o.setComponent(p+f,v,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Cn="'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif",yd={},Gt=(n,t)=>t?new Qe(Object.assign({color:n},t)):yd[n]||(yd[n]=new Qe({color:n})),tn=(n,t)=>new ke(Object.assign({color:n},t)),vd={},dy=n=>vd[n]||(vd[n]=new Qe({color:n,flatShading:!0}));function ge(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Ma(i);return s.colorSpace=On,s.anisotropy=4,s}function ir(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Lr=ge(128,128,n=>{let t=n.createRadialGradient(64,64,2,64,64,64);t.addColorStop(0,"rgba(255,214,140,1)"),t.addColorStop(.4,"rgba(255,170,90,.35)"),t.addColorStop(1,"rgba(255,150,80,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)});function ot(n,t,e,i,s,r,a,o,l){let h=new ht(new an(t,e,i),typeof s=="string"?Gt(s):s);return h.position.set(r,a,o),l&&(h.rotation.y=l),n.add(h),h}function ne(n,t,e,i,s,r,a,o,l){let h=new ht(new _i(t,e,i,l||16),typeof s=="string"?Gt(s):s);return h.position.set(r,a,o),n.add(h),h}function Se(n,t,e,i,s,r,a,o,l,h){let u=new ht(new ii(t,h||16,h?h*.7|0:12),typeof e=="string"?Gt(e):e);return u.position.set(i,s,r),u.scale.set(a||1,o||1,l||1),n.add(u),u}function ki(n,t,e,i,s,r,a){let o=new ht(new gs(t,1),dy(e));return o.position.set(i,s,r),a&&o.scale.set(a[0],a[1],a[2]),n.add(o),o}function sr(n,t,e,i,s,r,a){let o=new ni(new $n({map:Lr,blending:ds,transparent:!0,depthWrite:!1,opacity:r}));return a&&o.material.color.set(a),o.scale.set(s,s,1),o.position.set(t,e,i),n.add(o),n.userData.glows=(n.userData.glows||[]).concat(o),o}function La(n,t,e,i,s,r,a,o,l){let h=new ht(new Ve(t,e),new ke({map:i,transparent:!0,side:l?Rn:void 0,alphaTest:.05}));return h.position.set(s,r,a),o&&(h.rotation.y=o),n.add(h),h}function po(n,t,e,i,s,r,a){let o=new ht(new wl(t.map(l=>new Et(l[0],l[1])),a||20),typeof e=="string"?Gt(e):e);return o.position.set(i,s,r),n.add(o),o}var Bs="#a8703f",ui="#6b3f1f",Da="#d4a56a",si="#3a2214",py="#d23a28",my="#f3e2bd",bd={};function lu(n,t,e,i,s,r){let a=n+t+e+i+s;return bd[a]||(bd[a]=ge(i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";let l=[...n];o.font=`900 ${r}px ${Cn}`,s>i?l.forEach((h,u)=>o.fillText(h,i/2,s/(l.length+1)*(u+1))):o.fillText(n,i/2,s/2+2,i-10)}))}var wd=[["tbl","\u{1FA91} \u684C\u6905"],["lit","\u{1F3EE} \u71C8\u98FE"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u{1F376} \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]],mo=[{k:"table",n:"\u6728\u982D\u56DB\u4EBA\u684C",cat:"tbl",p:6e3,w:2,d:1,sf:.78,c:3},{k:"chabu",n:"\u5713\u77EE\u684C",cat:"tbl",p:4e3,w:1,d:1,sf:.36,c:3},{k:"counter",n:"\u5427\u53F0",cat:"tbl",p:9e3,w:2,d:1,sf:1.05,c:4},{k:"chair",n:"\u6728\u6905",cat:"tbl",p:1500,w:1,d:1,seat:1,c:1},{k:"stool",n:"\u9AD8\u8173\u6905",cat:"tbl",p:1800,w:1,d:1,seat:1,c:1},{k:"zabu",n:"\u5EA7\u5E03\u5718",cat:"tbl",p:800,w:1,d:1,seat:1,c:1,solid:0},{k:"bench",n:"\u9577\u677F\u51F3",cat:"tbl",p:3500,w:2,d:1,seat:1,c:2},{k:"register",n:"\u6536\u9280\u53F0",cat:"tbl",p:0,w:1,d:1,sf:1,c:2,fixed:1},{k:"lantern",n:"\u7D05\u71C8\u7C60\u7ACB\u67B6",cat:"lit",p:5e3,w:1,d:1,c:4,lit:1},{k:"andon",n:"\u884C\u71C8",cat:"lit",p:6e3,w:1,d:1,c:5,lit:1},{k:"stonel",n:"\u77F3\u71C8\u7C60",cat:"lit",p:12e3,w:1,d:1,c:5,lit:1},{k:"chochin",n:"\u71C8\u7C60\u4E32",cat:"lit",p:7e3,w:2,d:1,L:"wall",c:5,lit:1},{k:"tanuki",n:"\u72F8\u8C93\u64FA\u98FE",cat:"dec",p:15e3,w:1,d:1,c:6},{k:"barrel",n:"\u9152\u6A3D",cat:"dec",p:8e3,w:1,d:1,c:3,sf:.95},{k:"crates",n:"\u5564\u9152\u7BB1",cat:"dec",p:3e3,w:1,d:1,c:2,sf:.9},{k:"byobu",n:"\u5C4F\u98A8",cat:"dec",p:18e3,w:2,d:1,c:6},{k:"shelf",n:"\u6E05\u9152\u6AC3",cat:"dec",p:2e4,w:2,d:1,c:6},{k:"hibachi",n:"\u706B\u9262",cat:"dec",p:14e3,w:1,d:1,c:6,lit:1},{k:"tank",n:"\u91D1\u9B5A\u7F38",cat:"dec",p:22e3,w:1,d:1,c:7,sf:0},{k:"jukebox",n:"\u8001\u5531\u7247\u6A5F",cat:"dec",p:3e4,w:1,d:1,c:7},{k:"pine",n:"\u677E\u6A39\u76C6\u683D",cat:"pla",p:9e3,w:1,d:1,L:"top",c:4},{k:"bamboo",n:"\u7AF9\u5B50\u76C6",cat:"pla",p:7e3,w:1,d:1,c:4},{k:"sakura",n:"\u6AFB\u82B1\u6A39\u76C6",cat:"pla",p:25e3,w:1,d:1,c:8},{k:"ajisai",n:"\u7D2B\u967D\u82B1\u76C6",cat:"pla",p:6e3,w:1,d:1,c:4},{k:"scroll",n:"\u639B\u8EF8",cat:"wal",p:8e3,w:1,d:1,L:"wall",c:4},{k:"menu",n:"\u6728\u724C\u83DC\u55AE",cat:"wal",p:5e3,w:2,d:1,L:"wall",c:3},{k:"clock",n:"\u639B\u9418",cat:"wal",p:6e3,w:1,d:1,L:"wall",c:3},{k:"mado",n:"\u5713\u7A97",cat:"wal",p:16e3,w:2,d:1,L:"wall",c:6},{k:"fuji",n:"\u5BCC\u58EB\u5C71\u756B",cat:"wal",p:12e3,w:2,d:1,L:"wall",c:5},{k:"maneki",n:"\u62DB\u8CA1\u8C93",cat:"sml",p:6e3,w:1,d:1,L:"top",c:4},{k:"daruma",n:"\u9054\u6469",cat:"sml",p:4e3,w:1,d:1,L:"top",c:3},{k:"beer",n:"\u751F\u5564\u9152",cat:"sml",p:600,w:1,d:1,L:"top",c:1},{k:"sake",n:"\u6E05\u9152\u7D44",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"yakitori",n:"\u4E32\u71D2\u62FC\u76E4",cat:"sml",p:1500,w:1,d:1,L:"top",c:2},{k:"sushi",n:"\u58FD\u53F8\u76E4",cat:"sml",p:2500,w:1,d:1,L:"top",c:2},{k:"ramen",n:"\u62C9\u9EB5",cat:"sml",p:1200,w:1,d:1,L:"top",c:2},{k:"edamame",n:"\u6BDB\u8C46",cat:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"vase",n:"\u4E00\u8F2A\u63D2",cat:"sml",p:2e3,w:1,d:1,L:"top",c:2},{k:"tatami",n:"\u69BB\u69BB\u7C73",cat:"rug",p:5e3,w:2,d:2,L:"rug",c:3},{k:"rug",n:"\u85CD\u67D3\u5730\u6BEF",cat:"rug",p:6e3,w:2,d:2,L:"rug",c:3},{k:"step",n:"\u8E0F\u77F3",cat:"rug",p:1500,w:1,d:1,L:"rug",c:1}],Sd=[["liv","\u{1F6CB} \u5BA2\u5EF3"],["bed","\u{1F6CF} \u81E5\u5BA4"],["kit","\u{1F373} \u5EDA\u623F"],["dec","\u{1F38E} \u64FA\u98FE"],["pla","\u{1F33F} \u690D\u7269"],["wal","\u{1F5BC} \u7246\u9762"],["sml","\u2615 \u5C0F\u7269"],["rug","\u{1F7EB} \u5730\u588A"]];mo.push({k:"sofa",n:"\u5E03\u6C99\u767C",cat:"x",hc:"liv",p:12e3,w:2,d:1,seat:1,c:5},{k:"armchair",n:"\u55AE\u4EBA\u6C99\u767C",cat:"x",hc:"liv",p:7e3,w:1,d:1,seat:1,c:3},{k:"ctable",n:"\u8336\u51E0",cat:"x",hc:"liv",p:5e3,w:2,d:1,sf:.42,c:3},{k:"tv",n:"\u96FB\u8996\u6AC3",cat:"x",hc:"liv",p:18e3,w:2,d:1,c:5},{k:"books",n:"\u66F8\u6AC3",cat:"x",hc:"liv",p:14e3,w:2,d:1,c:5},{k:"flamp",n:"\u7ACB\u71C8",cat:"x",hc:"liv",p:6e3,w:1,d:1,c:4,lit:1},{k:"piano",n:"\u76F4\u7ACB\u92FC\u7434",cat:"x",hc:"liv",p:4e4,w:2,d:1,c:8},{k:"bed",n:"\u96D9\u4EBA\u5E8A",cat:"x",hc:"bed",p:2e4,w:2,d:2,c:6},{k:"wardrobe",n:"\u8863\u6AC3",cat:"x",hc:"bed",p:15e3,w:2,d:1,c:4},{k:"nstand",n:"\u5E8A\u982D\u6AC3",cat:"x",hc:"bed",p:3e3,w:1,d:1,sf:.55,c:2},{k:"desk",n:"\u66F8\u684C",cat:"x",hc:"bed",p:8e3,w:2,d:1,sf:.76,c:3},{k:"kcounter",n:"\u6D41\u7406\u53F0",cat:"x",hc:"kit",p:16e3,w:2,d:1,sf:.92,c:4},{k:"stove",n:"\u74E6\u65AF\u7210",cat:"x",hc:"kit",p:9e3,w:1,d:1,sf:.92,c:3},{k:"fridge",n:"\u51B0\u7BB1",cat:"x",hc:"kit",p:14e3,w:1,d:1,c:3},{k:"catbed",n:"\u8C93\u7AA9",cat:"x",hc:"dec",p:4e3,w:1,d:1,c:4,solid:0},{k:"monstera",n:"\u9F9C\u80CC\u828B",cat:"x",hc:"pla",p:6e3,w:1,d:1,c:4},{k:"cactus",n:"\u4ED9\u4EBA\u638C",cat:"x",hc:"pla",p:1500,w:1,d:1,L:"top",c:2},{k:"wwin",n:"\u7A97\u7C3E\u7A97\u6236",cat:"x",hc:"wal",p:8e3,w:2,d:1,L:"wall",c:5},{k:"photos",n:"\u76F8\u6846\u7246",cat:"x",hc:"wal",p:5e3,w:2,d:1,L:"wall",c:4},{k:"shelfw",n:"\u7246\u4E0A\u5C64\u67B6",cat:"x",hc:"wal",p:4e3,w:2,d:1,L:"wall",c:3},{k:"book",n:"\u4E00\u758A\u66F8",cat:"x",hc:"sml",p:800,w:1,d:1,L:"top",c:1},{k:"mug",n:"\u99AC\u514B\u676F",cat:"x",hc:"sml",p:500,w:1,d:1,L:"top",c:1},{k:"cake",n:"\u8349\u8393\u86CB\u7CD5",cat:"x",hc:"sml",p:1800,w:1,d:1,L:"top",c:2},{k:"laptop",n:"\u7B46\u96FB",cat:"x",hc:"sml",p:9e3,w:1,d:1,L:"top",c:2},{k:"dlamp",n:"\u684C\u71C8",cat:"x",hc:"sml",p:2500,w:1,d:1,L:"top",c:2,lit:1},{k:"teddy",n:"\u5C0F\u718A\u73A9\u5076",cat:"x",hc:"sml",p:3e3,w:1,d:1,L:"top",c:3},{k:"carpet",n:"\u6BDB\u6BDB\u5730\u6BEF",cat:"x",hc:"rug",p:6e3,w:2,d:2,L:"rug",c:3});var Md={chair:"kit",table:"kit",chabu:"liv",zabu:"liv",andon:"liv",jukebox:"liv",tank:"dec",tanuki:"dec",byobu:"bed",hibachi:"dec",pine:"pla",bamboo:"pla",sakura:"pla",ajisai:"pla",scroll:"wal",clock:"wal",mado:"wal",fuji:"wal",maneki:"sml",daruma:"sml",vase:"sml",beer:"sml",ramen:"sml",sushi:"sml",edamame:"sml",tatami:"rug",rug:"rug"};mo.forEach(n=>{!n.hc&&Md[n.k]&&(n.hc=Md[n.k])});var Te={};mo.forEach(n=>{n.L=n.L||"main",n.solid===void 0&&(n.solid=n.L==="main"?1:0),Te[n.k]=n});var cu=[["wood","\u539F\u6728\u5730\u677F",0],["light","\u6DFA\u8272\u6728\u5730\u677F",8e3],["carpetf","\u7C73\u8272\u5730\u6BEF",1e4],["dark","\u6DF1\u8272\u6728\u5730\u677F",12e3],["tatami","\u69BB\u69BB\u7C73\u5730",2e4],["stone","\u77F3\u677F\u5730",16e3],["check","\u5E02\u677E\u683C\u7D0B",24e3]],hu=[["tsuchi","\u7C73\u8272\u571F\u7246",0],["cream","\u5976\u6CB9\u58C1\u7D19",6e3],["stripe","\u689D\u7D0B\u58C1\u7D19",9e3],["flower","\u788E\u82B1\u58C1\u7D19",12e3],["mint","\u8584\u8377\u6F06\u7246",9e3],["plank","\u6728\u677F\u7246",1e4],["red","\u6731\u7D05\u6F06\u7246",18e3],["ai","\u85CD\u67D3\u5E03\u7246",18e3],["sakura","\u6AFB\u82B1\u7D19\u7246",24e3]],ee={};ee.table=n=>{ot(n,1.9,.08,.9,Bs,0,.74,0),ot(n,1.84,.03,.84,Da,0,.79,0);for(let t of[-.82,.82])for(let e of[-.36,.36])ot(n,.08,.72,.08,ui,t,.36,e);ot(n,1.6,.06,.04,ui,0,.55,-.36),ot(n,1.6,.06,.04,ui,0,.55,.36)};ee.chabu=n=>{ne(n,.46,.46,.06,Bs,0,.34,0,28),ne(n,.44,.44,.02,Da,0,.375,0,28);for(let t=0;t<4;t++){let e=t*Math.PI/2+Math.PI/4;ot(n,.07,.32,.07,ui,Math.cos(e)*.3,.16,Math.sin(e)*.3)}};ee.counter=n=>{ot(n,1.96,1,.8,ui,0,.5,0),ot(n,2.04,.08,.96,Da,0,1.03,.04),ot(n,1.9,.12,.04,Bs,0,.14,.41);for(let t=-2;t<=2;t++)ot(n,.04,.8,.02,"#5a3216",t*.38,.52,.405)};ee.chair=n=>{ot(n,.48,.06,.48,Bs,0,.46,.02);for(let t of[-.2,.2])for(let e of[-.18,.22])ot(n,.05,.46,.05,ui,t,.23,e);ot(n,.48,.5,.05,Bs,0,.74,-.2),ot(n,.4,.06,.03,Da,0,.86,-.18)};ee.stool=n=>{ne(n,.22,.2,.07,"#c23a2a",0,.76,0,18),ne(n,.03,.03,.72,"#3a3a40",0,.38,0,8),ne(n,.2,.22,.04,"#3a3a40",0,.02,0,18);let t=new ht(new Ti(.13,.015,6,18),Gt("#3a3a40"));t.rotation.x=Math.PI/2,t.position.y=.3,n.add(t)};ee.zabu=n=>{let t=ot(n,.62,.1,.62,"#7a2e4a",0,.06,0);t.geometry=new an(.62,.1,.62,2,1,2),Se(n,.05,"#e9c34a",0,.12,0)};ee.bench=n=>{ot(n,1.9,.07,.42,Bs,0,.44,0);for(let t of[-.8,.8])ot(n,.07,.42,.36,ui,t,.21,0);ot(n,1.6,.05,.04,ui,0,.2,0)};ee.register=n=>{ot(n,.9,.95,.7,ui,0,.475,0),ot(n,.96,.06,.78,Da,0,.98,0),ot(n,.5,.22,.36,"#2b2b33",0,1.12,-.05),ot(n,.42,.1,.3,"#3c3c46",0,1.26,-.12),ot(n,.36,.14,.03,"#9fe0b6",0,1.3,-.28,0).material=tn("#9fe0b6"),Se(n,.07,"#e9b830",.3,1.06,.2),Se(n,.05,"#e9b830",.22,1.04,.26)};ee.lantern=n=>{ne(n,.025,.025,1.7,si,0,.85,0,6),ot(n,.5,.04,.04,si,.2,1.68,0),ne(n,.18,.2,.06,"#2a2a2a",0,.03,0,12);let t=new ve;t.position.set(.38,1.3,0),n.add(t);let e=Se(t,.22,tn("#e2452f"),0,0,0,1,1.3,1,18);e.userData.lit=1,ne(t,.14,.14,.06,si,0,.3,0,12),ne(t,.14,.14,.06,si,0,-.3,0,12),La(t,.2,.34,lu("\u9152","rgba(0,0,0,0)","#2a1408",64,110,64),0,0,.225),ne(t,.01,.01,.2,si,0,.42,0,4),sr(t,0,0,.1,1.8,.55),n.userData.swing=t};ee.andon=n=>{for(let e of[-.17,.17])for(let i of[-.17,.17])ot(n,.04,.9,.04,si,e,.45,i);let t=ot(n,.32,.5,.32,tn("#fff1c8"),0,.55,0);t.userData.lit=1,ot(n,.4,.04,.4,si,0,.82,0),ot(n,.4,.04,.4,si,0,.29,0);for(let e of[-.06,.06])ot(n,.005,.48,.33,si,e,.55,0);sr(n,0,.55,0,2.2,.6)};ee.stonel=n=>{let t="#9a9590";ot(n,.5,.12,.5,t,0,.06,0),ne(n,.1,.13,.5,t,0,.37,0,8),ot(n,.42,.1,.42,t,0,.66,0);let e=ot(n,.3,.28,.3,tn("#ffd98a"),0,.85,0);e.userData.lit=1;for(let s of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])ot(n,.06,.3,.06,t,s[0],.85,s[1]);let i=new ht(new Zn(.45,.3,4),Gt(t));i.rotation.y=Math.PI/4,i.position.y=1.14,n.add(i),Se(n,.07,t,0,1.33,0),sr(n,0,.85,0,1.6,.55)};ee.chochin=n=>{let t=["#e2452f","#f2b630","#e2452f","#fff1c8","#e2452f"];for(let i=0;i<5;i++){let s=-.8+i*.4,r=2.25-Math.sin(i/4*Math.PI)*.25,a=Se(n,.12,tn(t[i]),s,r,.18,1,1.25,1,12);a.userData.lit=1,sr(n,s,r,.26,.8,.35)}let e=[];for(let i=0;i<=8;i++){let s=i/8;e.push([-.95+s*1.9,2.42-Math.sin(s*Math.PI)*.25])}for(let i=0;i<8;i++){let[s,r]=e[i],[a,o]=e[i+1],l=ot(n,Math.hypot(a-s,o-r),.015,.015,si,(s+a)/2,(r+o)/2,.18);l.rotation.z=Math.atan2(o-r,a-s)}};ee.tanuki=n=>{let t="#8a6a4a",e="#e8d8b8";Se(n,.3,t,0,.38,0,1,1.05,.95),Se(n,.2,e,0,.36,.16,1,1.1,.5),Se(n,.22,t,0,.82,.02);for(let r of[-.13,.13])Se(n,.06,t,r,1,0),Se(n,.055,si,r*.7,.85,.19,1,.8,.5),Se(n,.02,"#fff",r*.7+.01,.86,.21);Se(n,.045,si,0,.78,.22),ot(n,.34,.06,.3,"#5a4a3a",0,1.03,0),ne(n,.16,.2,.04,"#5a4a3a",0,1,0,14);let i=ne(n,.07,.09,.28,"#d8c8a8",.26,.32,.12,10);i.rotation.z=-.3;let s=ot(n,.45,.03,.02,"#c43a2a",0,.5,.3);s.visible=!1,Se(n,.15,t,-.2,.12,.12,1,.6,1),Se(n,.15,t,.2,.12,.12,1,.6,1),Se(n,.12,t,.1,.25,-.3,1,.7,1.4)};ee.barrel=n=>{po(n,[[0,0],[.3,0],[.36,.2],[.38,.45],[.36,.7],[.3,.9],[0,.9]],"#e8dcc0",0,0,0,22);for(let t of[.12,.78]){let e=new ht(new Ti(.34,.025,6,22),Gt("#5a3a1a"));e.rotation.x=Math.PI/2,e.position.y=t,n.add(e)}La(n,.36,.36,lu("\u795D","#c4302a","#f8eed8",96,96,70),0,.45,.375),ne(n,.3,.3,.02,Da,0,.91,0,22)};ee.crates=n=>{let t=(e,i,s)=>{let r=new ve;r.position.y=e,r.rotation.y=i,n.add(r),ot(r,.6,.32,.44,s,0,.16,0);for(let a=0;a<3;a++)for(let o=0;o<2;o++)ne(r,.06,.06,.36,"#7a4a1a",-.18+a*.18,.3,-.1+o*.2,8),ne(r,.025,.03,.1,"#f2e6c8",-.18+a*.18,.52,-.1+o*.2,6)};t(0,0,"#c8352a"),t(.32,.15,"#e0a32a")};ee.byobu=n=>{let t=ge(256,128,(e,i,s)=>{e.fillStyle="#e6c770",e.fillRect(0,0,i,s),e.fillStyle="#d9b450";for(let r=0;r<40;r++)e.fillRect(Math.random()*i,Math.random()*s,12,12);e.strokeStyle="#7a5530",e.lineWidth=4,e.beginPath(),e.moveTo(30,110),e.quadraticCurveTo(60,40,120,70),e.quadraticCurveTo(170,95,230,30),e.stroke(),e.fillStyle="#e48aa4";for(let r=0;r<18;r++)e.beginPath(),e.arc(40+Math.random()*190,25+Math.random()*70,5,0,7),e.fill();e.fillStyle="#4a6a8a",e.beginPath(),e.ellipse(70,116,60,10,0,0,7),e.fill()});for(let e=0;e<4;e++){let i=new ve;i.position.set(-.72+e*.48,0,e%2?.08:-.08),i.rotation.y=e%2?.3:-.3,n.add(i),ot(i,.48,1.5,.03,"#3a1e0c",0,.8,-.01);let s=new ht(new Ve(.42,1.4),new ke({map:t}));s.material.map=t.clone(),s.material.map.needsUpdate=!0,s.material.map.repeat.set(.25,1),s.material.map.offset.set(e*.25,0),s.position.set(0,.8,.01),i.add(s);let r=s.clone();r.rotation.y=Math.PI,r.position.z=-.025,i.add(r)}};ee.shelf=n=>{ot(n,1.9,1.8,.42,ui,0,.9,-.1),ot(n,1.8,1.7,.02,"#2a1408",0,.9,.09);for(let i of[.35,.8,1.25,1.65])ot(n,1.8,.04,.4,Bs,0,i,-.08);let t=["#2f6a3a","#7a3a1a","#e8e0d0","#2a3a6a","#5a2a4a","#c8a040"],e=0;for(let i of[.37,.82,1.27])for(let s=0;s<6;s++){let r=t[e++*7%6],a=.26+e%3*.04;ne(n,.055,.065,a,r,-.72+s*.29,i+a/2,-.06,10),ne(n,.02,.03,.09,r,-.72+s*.29,i+a+.04,-.06,6),e%2&&ot(n,.1,.08,.01,my,-.72+s*.29,i+a*.5,0)}};ee.hibachi=n=>{po(n,[[0,0],[.28,0],[.34,.08],[.36,.4],[.3,.46],[0,.46]],"#3a4a5a",0,0,0,24),ne(n,.28,.28,.02,"#cfc6b8",0,.44,0,24);for(let e=0;e<5;e++){let i=ki(n,.06,"#ff7a2a",Math.cos(e*1.3)*.12,.48,Math.sin(e*1.3)*.12);i.material=tn("#ff7a2a"),i.userData.lit=1}ne(n,.14,.16,.14,"#2a2a2a",0,.58,0,12);let t=ne(n,.03,.03,.1,"#2a2a2a",.16,.62,0,6);t.rotation.z=-.9,sr(n,0,.55,0,1.4,.6,"#ff8a3a")};ee.tank=n=>{ot(n,.7,.55,.5,ui,0,.275,0);let t=ot(n,.68,.5,.48,Gt("#9fd8ef",{transparent:!0,opacity:.35}),0,.82,0);t.renderOrder=2,ot(n,.62,.4,.42,tn("#3a9ac8",{transparent:!0,opacity:.45}),0,.78,0).renderOrder=1,ot(n,.6,.06,.4,"#d8c8a0",0,.6,0);for(let e=0;e<3;e++){let i=new ve;i.position.set(-.15+e*.15,.78+e%2*.08,-.05+e*.05),n.add(i),Se(i,.05,e===1?"#f8f0e8":"#ff6a2a",0,0,0,1.5,1,.6);let s=new ht(new Zn(.04,.07,6),Gt("#ff8a4a"));s.rotation.z=Math.PI/2,s.position.x=-.09,i.add(s),n.userData.fish=(n.userData.fish||[]).concat(i)}ki(n,.06,"#3a8a4a",.2,.7,.1,[.6,2.4,.6]),ki(n,.05,"#4a9a5a",.24,.68,-.1,[.6,2,.6])};ee.jukebox=n=>{ot(n,.7,.7,.5,ui,0,.35,0),ot(n,.74,.05,.54,Bs,0,.72,0),ne(n,.24,.24,.02,"#141414",-.05,.76,.02,28),ne(n,.06,.06,.025,"#d8452f",-.05,.765,.02,12);let t=ot(n,.02,.02,.26,"#c0c0c8",.2,.79,-.02);t.rotation.y=.5;let e=new ht(new Zn(.22,.4,18,1,!0),Gt("#d8a83a",{side:Rn}));e.rotation.x=-1.1,e.position.set(.18,1.05,-.15),n.add(e),ne(n,.02,.02,.3,"#d8a83a",.2,.85,-.08,6),ot(n,.5,.3,.02,"#2a1408",0,.35,.26),n.userData.spin=n.children[2]};ee.pine=n=>{ne(n,.2,.16,.14,"#3a5a8a",0,.07,0,6),ne(n,.2,.2,.02,"#5a3a2a",0,.14,0,6);let t=ne(n,.03,.04,.3,"#5a3a24",0,.28,0,6);t.rotation.z=.3,ki(n,.14,"#2f5a32",-.06,.44,0,[1.4,.55,1.1]),ki(n,.1,"#3a6a3a",.12,.38,.04,[1.4,.5,1]),ki(n,.09,"#2f5a32",-.1,.3,-.04,[1.3,.45,1])};ee.bamboo=n=>{ne(n,.22,.18,.32,"#e8e0d0",0,.16,0,18),ne(n,.2,.2,.02,"#4a3a2a",0,.32,0,18);for(let t=0;t<5;t++){let e=Math.cos(t*2.4)*.1,i=Math.sin(t*2.4)*.1,s=1.3+t%3*.3;ne(n,.025,.025,s,"#6a9a3a",e,.3+s/2,i,8);for(let r=1;r<4;r++)ne(n,.03,.03,.02,"#4a7a2a",e,.3+r*s/4,i,8);for(let r=0;r<3;r++){let a=new ht(new Ve(.32,.06),new Qe({color:"#5a9a3a",side:Rn}));a.position.set(e+.12*Math.cos(r*2+t),.3+s*(.55+r*.15),i+.12*Math.sin(r*2+t)),a.rotation.set(-.3,r*2+t,-.4),n.add(a)}}};ee.sakura=n=>{ne(n,.26,.22,.36,"#2a3a5a",0,.18,0,8),ne(n,.24,.24,.02,"#4a3a2a",0,.36,0,8);let t=ne(n,.05,.08,1.1,"#5a3a2a",0,.9,0,7);t.rotation.z=.12;let e=ne(n,.03,.04,.6,"#5a3a2a",.2,1.3,0,6);e.rotation.z=-.8;let i=["#f4b8c8","#f8d0dc","#e898b0"];[[0,1.65,0,.55],[.4,1.55,.1,.4],[-.32,1.5,-.05,.4],[.1,1.45,.3,.35],[-.1,1.85,-.1,.38]].forEach(([s,r,a,o],l)=>ki(n,o,i[l%3],s,r,a,[1,.75,1])),n.userData.petals=1};ee.ajisai=n=>{ne(n,.2,.16,.28,"#8a5a3a",0,.14,0,14);for(let e=0;e<6;e++)ki(n,.13,"#3a6a3a",Math.cos(e)*.14,.38,Math.sin(e)*.14,[1.2,.6,1.2]);let t=["#8a7ad8","#6a8ae8","#b08ae0","#7aa0f0"];for(let e=0;e<5;e++){let i=e*1.25;ki(n,.12,t[e%4],Math.cos(i)*.12,.5+e%2*.08,Math.sin(i)*.12)}};ee.scroll=n=>{let t=ge(96,256,(e,i,s)=>{e.fillStyle="#f4ecd8",e.fillRect(0,0,i,s),e.fillStyle="#c8b890",e.fillRect(0,0,i,30),e.fillRect(0,s-30,i,30),e.fillStyle="#1a1a1a",e.textAlign="center",e.font=`900 46px ${Cn}`,["\u4E00","\u671F","\u4E00","\u6703"].forEach((r,a)=>e.fillText(r,i/2,76+a*46)),e.fillStyle="#c4302a",e.fillRect(58,214,14,14)});ot(n,.5,.04,.04,si,0,2.25,.04),ot(n,.5,.04,.04,si,0,1.02,.04),La(n,.42,1.2,t,0,1.63,.03)};ee.menu=n=>{let t=["\u751F\u30D3\u30FC\u30EB","\u713C\u304D\u9CE5","\u679D\u8C46","\u5510\u63DA\u3052","\u51B7\u5974","\u71B1\u71D7"];for(let e=0;e<6;e++){let i=lu(t[e],"#e9d3a4","#2a1408",64,256,36);ot(n,.22,.82,.03,ui,-.7+e*.28,1.75,.015),La(n,.18,.76,i,-.7+e*.28,1.75,.035)}ot(n,1.8,.06,.05,si,0,2.2,.03)};ee.clock=n=>{let t=ge(128,128,a=>{a.fillStyle="#f8f0dc",a.beginPath(),a.arc(64,64,60,0,7),a.fill(),a.fillStyle="#2a1408",a.font=`700 18px ${Cn}`,a.textAlign="center",a.textBaseline="middle";for(let o=1;o<=12;o++){let l=o/12*Math.PI*2-Math.PI/2;a.fillText(String(o),64+Math.cos(l)*46,64+Math.sin(l)*46)}});ot(n,.5,.7,.1,ui,0,1.95,.05),ne(n,.2,.2,.02,"#d8b040",0,1.5,.08,18).rotation.x=Math.PI/2;let e=La(n,.4,.4,t,0,2.05,.105),i=ot(n,.015,.13,.01,"#1a1a1a",0,2.1,.11),s=ot(n,.01,.17,.01,"#1a1a1a",0,2.1,.115);n.userData.hands=[i,s],n.userData.handY=2.05;let r=new ve;r.position.set(0,1.75,.07),n.add(r),ot(r,.01,.2,.01,"#c8a040",0,-.1,0),n.userData.swing=r};ee.mado=n=>{let t=ge(256,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1a1a40"),o.addColorStop(1,"#5a3a6a"),s.fillStyle=o,s.fillRect(0,0,r,a),s.fillStyle="#fdf2c8",s.beginPath(),s.arc(170,80,34,0,7),s.fill(),s.fillStyle="#fff8";for(let l=0;l<30;l++)s.fillRect(Math.random()*r,Math.random()*a*.6,2,2);s.strokeStyle="#2a1a1a",s.lineWidth=6,s.beginPath(),s.moveTo(0,200),s.quadraticCurveTo(80,150,130,190),s.stroke(),s.fillStyle="#f4b8c8";for(let l=0;l<14;l++)s.beginPath(),s.arc(10+Math.random()*120,150+Math.random()*50,7,0,7),s.fill()}),e=new ht(new Hn(.62,32),new ke({map:t}));e.position.set(0,1.6,.03),n.add(e);let i=new ht(new Ti(.64,.06,8,32),Gt(ui));i.position.set(0,1.6,.04),n.add(i);for(let s of[-.2,.2])ot(n,.02,1.2,.02,si,s,1.6,.05);ot(n,1.2,.02,.02,si,0,1.6,.05),sr(n,0,1.6,.15,1.6,.25,"#b8c8ff")};ee.fuji=n=>{let t=ge(256,160,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#f8d8a0"),r.addColorStop(1,"#f0b090"),e.fillStyle=r,e.fillRect(0,0,i,s),e.fillStyle="#e2452f",e.beginPath(),e.arc(200,40,18,0,7),e.fill(),e.fillStyle="#4a6a9a",e.beginPath(),e.moveTo(20,150),e.lineTo(128,40),e.lineTo(236,150),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(108,60),e.lineTo(128,40),e.lineTo(148,60),e.lineTo(138,66),e.lineTo(128,58),e.lineTo(118,68),e.fill(),e.fillStyle="#2a4a6a",e.fillRect(0,140,i,20)});ot(n,1.6,1,.05,"#2a1408",0,1.7,.025),La(n,1.5,.9,t,0,1.7,.055)};ee.maneki=n=>{let t="#f8f4ec";Se(n,.12,t,0,.13,0,1,1.1,.9),Se(n,.1,t,0,.32,.01);for(let i of[-.06,.06]){let s=new ht(new Zn(.035,.06,4),Gt(t));s.position.set(i,.42,0),n.add(s),Se(n,.012,"#1a1a1a",i*.6,.34,.09)}Se(n,.02,"#f08a9a",0,.31,.1),ot(n,.16,.025,.05,py,0,.23,.06),Se(n,.02,"#e9b830",0,.21,.1);let e=new ve;e.position.set(.09,.3,.02),n.add(e),Se(e,.035,t,0,.07,0,1,1.6,1),n.userData.wave=e,Se(n,.05,"#e9b830",-.05,.15,.1,1,.7,.3)};ee.daruma=n=>{Se(n,.14,"#d23a28",0,.15,0,1,1.1,1),Se(n,.085,"#f8eed8",0,.19,.08,1,.9,.5);for(let t of[-.03,.03])Se(n,.016,"#1a1a1a",t,.2,.125);ot(n,.08,.012,.01,"#1a1a1a",0,.155,.13)};ee.beer=n=>{ne(n,.07,.065,.2,Gt("#f0a830",{transparent:!0,opacity:.85}),0,.1,0,14),ne(n,.072,.072,.05,"#fff8ec",0,.22,0,14);let t=new ht(new Ti(.05,.012,6,12,Math.PI),Gt("#d8e8f0",{transparent:!0,opacity:.7}));t.position.set(.09,.1,0),t.rotation.z=-Math.PI/2,n.add(t)};ee.sake=n=>{ot(n,.34,.02,.2,ui,0,.01,0),po(n,[[0,0],[.05,0],[.06,.08],[.05,.14],[.02,.19],[.022,.22],[0,.22]],"#f0ece0",-.08,.02,0,14);for(let t of[.06,.13])ne(n,.03,.025,.04,"#f0ece0",t,.04,0,10)};ee.yakitori=n=>{ne(n,.16,.14,.02,"#f0ece0",0,.01,0,20);for(let t=0;t<3;t++){let e=new ve;e.position.set(0,.035,-.05+t*.05),e.rotation.y=.2,n.add(e),ot(e,.26,.006,.006,"#d8c8a0",0,0,0);for(let i=0;i<4;i++)ki(e,.025,t===1?"#5a8a3a":"#9a4a1a",-.07+i*.05,.005,0,[1.1,.9,1])}};ee.sushi=n=>{ot(n,.34,.03,.16,Bs,0,.03,0);for(let t=0;t<4;t++)ot(n,.06,.035,.035,"#f8f6f0",-.11+t*.075,.065,0),ot(n,.065,.015,.04,["#e2452f","#f08a4a","#f8f0e0","#e2452f"][t],-.11+t*.075,.088,0)};ee.ramen=n=>{po(n,[[0,0],[.06,0],[.11,.04],[.13,.1],[.125,.1],[0,.1]],"#c8352a",0,0,0,20),ne(n,.12,.12,.01,"#d89a4a",0,.09,0,20),Se(n,.025,"#f8e8a0",-.04,.1,.02,1,.5,1),ot(n,.05,.01,.04,"#8a4a2a",.04,.1,-.02),ot(n,.03,.01,.05,"#2a3a2a",.02,.1,.05);for(let t of[0,.015]){let e=ot(n,.005,.005,.2,"#c8a070",.07+t,.13,0);e.rotation.x=.3}};ee.edamame=n=>{ne(n,.09,.06,.04,"#f0ece0",0,.02,0,14);for(let t=0;t<6;t++)ki(n,.022,"#6aa83a",Math.cos(t)*.04,.05,Math.sin(t)*.04,[1.8,.8,1])};ee.vase=n=>{po(n,[[0,0],[.05,0],[.07,.08],[.05,.18],[.025,.24],[.03,.26],[0,.26]],"#3a5a8a",0,0,0,16),ne(n,.006,.006,.25,"#4a7a3a",0,.36,0,4),Se(n,.035,"#f0e0e8",0,.5,0),Se(n,.03,"#e898b0",.02,.48,.02)};ee.tatami=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#c8c47a",i.fillRect(0,0,s,r);for(let a=0;a<r;a+=3)i.fillStyle=a%6?"#bcb86e":"#d2ce86",i.fillRect(0,a,s,1);i.fillStyle="#2a3a2a",i.fillRect(0,0,s,10),i.fillRect(0,r-10,s,10),i.fillRect(0,124,s,8)}),e=new ht(new an(1.96,.04,1.96),[Gt("#2a3a2a"),Gt("#2a3a2a"),new Qe({map:t}),Gt("#2a3a2a"),Gt("#2a3a2a"),Gt("#2a3a2a")]);e.position.y=.02,n.add(e)};ee.rug=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#23315c",i.fillRect(0,0,s,r),i.strokeStyle="#e8e0d0",i.lineWidth=3;for(let a=0;a<5;a++)for(let o=0;o<5;o++){let l=26+a*51,h=26+o*51;i.beginPath();for(let u=0;u<3;u++)i.arc(l,h,8+u*7,Math.PI,0);i.stroke()}i.strokeStyle="#c8a040",i.lineWidth=6,i.strokeRect(6,6,s-12,r-12)}),e=new ht(new Hn(.96,40),new Qe({map:t}));e.rotation.x=-Math.PI/2,e.position.y=.015,n.add(e)};ee.step=n=>{ki(n,.32,"#8a8680",0,.02,0,[1.1,.12,.9])};function gy(n){let t=new Set,e=n.userData;for(let s of["swing","wave","spin"])e[s]&&e[s].traverse(r=>t.add(r));e.fish&&e.fish.forEach(s=>s.traverse(r=>t.add(r))),e.hands&&e.hands.forEach(s=>t.add(s)),n.updateMatrixWorld(!0);let i=new Map;n.traverse(s=>{if(!s.isMesh||t.has(s)||Array.isArray(s.material)||s.material.transparent||s.material.map)return;let r=s.material.uuid;i.has(r)||i.set(r,[]),i.get(r).push(s)});for(let s of i.values())if(!(s.length<2))try{let r=s.map(l=>{let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(h.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&h.deleteAttribute(u);return h.attributes.uv?(h.applyMatrix4(l.matrixWorld),h):null});if(r.some(l=>!l))continue;let a=_d(r,!1);if(!a)continue;let o=new ht(a,s[0].material);n.add(o),s.forEach(l=>{l.parent.remove(l),l.geometry.dispose()}),r.forEach(l=>l.dispose())}catch{}}var xy="#6fa8d6",ou="#4f86b8",ks="#f6f2ea",Pr="#d9b07a";ee.sofa=n=>{ot(n,1.9,.42,.82,ou,0,.21,0);for(let t of[-.46,.46])ot(n,.9,.16,.7,xy,t,.5,.06);ot(n,1.9,.55,.2,ou,0,.72,-.32);for(let t of[-.88,.88])ot(n,.18,.58,.82,ou,t,.45,0);Se(n,.16,"#f2c94c",-.6,.7,-.12,1,1,.5),Se(n,.16,"#f29ab8",.6,.7,-.12,1,1,.5)};ee.armchair=n=>{ot(n,.8,.4,.78,"#e07a5f",0,.2,0),ot(n,.62,.14,.64,"#ee9a7a",0,.48,.05),ot(n,.8,.55,.18,"#e07a5f",0,.7,-.3);for(let t of[-.36,.36])ot(n,.14,.52,.78,"#e07a5f",t,.45,0)};ee.ctable=n=>{ot(n,1.6,.06,.7,Pr,0,.4,0);for(let t of[-.7,.7])for(let e of[-.28,.28])ne(n,.03,.03,.38,"#8a6a4a",t,.19,e,8);ot(n,1.5,.03,.6,"#c89a62",0,.15,0)};ee.tv=n=>{ot(n,1.8,.5,.48,ks,0,.25,-.1);for(let e of[-.45,.45])ot(n,.8,.38,.02,"#e8e0d0",e,.25,.15);ot(n,1.3,.78,.06,"#1a1a1e",0,.98,-.12);let t=ot(n,1.2,.68,.02,tn("#4a8ad8"),0,.98,-.085);t.userData.lit=1,n.userData.tvs=t,ot(n,.3,.08,.2,"#2a2a2e",0,.54,-.12)};ee.books=n=>{ot(n,1.9,1.9,.4,Pr,0,.95,-.1),ot(n,1.8,1.8,.02,"#a07850",0,.95,.09);for(let i of[.05,.5,.95,1.4])ot(n,1.8,.04,.38,"#c8a070",0,i+.02,-.08);let t=["#d8452f","#2f6bb8","#3f8f4f","#f2b630","#9a6ad6","#e8e0d0","#5a3a2a"],e=0;for(let i of[.07,.52,.97]){let s=-.84;for(;s<.8;){let r=.06+e%3*.02,a=.3+e*7%5*.025;ot(n,r,a,.26,t[e%7],s+r/2,i+a/2,-.06),s+=r+.01,e++}}Se(n,.12,"#3f8f4f",.6,1.6,-.05)};ee.flamp=n=>{ne(n,.2,.22,.04,"#3a3a3e",0,.02,0,18),ne(n,.02,.02,1.5,"#3a3a3e",0,.77,0,6);let t=ne(n,.16,.26,.32,tn("#fff0c8"),0,1.6,0,18);t.userData.lit=1,sr(n,0,1.55,0,2.4,.55)};ee.piano=n=>{ot(n,1.6,1.25,.55,"#1e1a1a",0,.63,-.15),ot(n,1.6,.06,.7,"#1e1a1a",0,.72,.05),ot(n,1.45,.04,.2,"#f6f2ea",0,.76,.2);for(let t=0;t<10;t++)ot(n,.05,.03,.12,"#111",-.63+t*.14,.785,.17);for(let t of[-.7,.7])ot(n,.1,.7,.1,"#1e1a1a",t,.35,.3);ot(n,.5,.05,.3,"#1e1a1a",0,.45,.6),ot(n,.5,.04,.3,"#8a3a2a",0,.48,.6)};ee.bed=n=>{ot(n,1.9,.3,1.95,Pr,0,.25,0),ot(n,1.9,.9,.1,Pr,0,.55,-.95),ot(n,1.8,.2,1.85,ks,0,.5,.02),ot(n,1.82,.14,1.2,"#f29ab8",0,.62,.33);for(let t of[-.45,.45])Se(n,.3,"#ffffff",t,.66,-.62,1.2,.4,.7);for(let t of[-.9,.9])for(let e of[-.9,.9])ot(n,.08,.12,.08,"#8a6a4a",t,.06,e)};ee.wardrobe=n=>{ot(n,1.8,2,.6,ks,0,1,-.15),ot(n,.02,1.9,.02,"#c8c0b0",0,1,.16);for(let t of[-.08,.08])ne(n,.02,.02,.3,"#c8a040",t,1.05,.18,6);ot(n,1.84,.06,.64,"#e0d8c8",0,2.02,-.15)};ee.nstand=n=>{ot(n,.5,.5,.45,Pr,0,.27,0),ot(n,.46,.02,.02,"#8a6a4a",0,.35,.23),Se(n,.025,"#c8a040",0,.25,.24)};ee.desk=n=>{ot(n,1.6,.05,.65,Pr,0,.74,0);for(let t of[-.74,.74])ot(n,.06,.72,.6,"#e8e0d0",t,.36,0);ot(n,.45,.3,.55,"#e8e0d0",.45,.55,0)};ee.kcounter=n=>{ot(n,1.9,.86,.62,ks,0,.43,-.1),ot(n,1.96,.06,.7,"#9aa0a8",0,.89,-.08),ot(n,.6,.04,.4,"#6a7078",-.4,.91,-.08),ne(n,.02,.02,.3,"#c0c4cc",-.4,1.05,-.3,6);for(let e of[-.5,.1,.6])ot(n,.5,.6,.02,"#ece6da",e,.43,.22);let t=ne(n,.12,.1,.14,"#d8452f",.55,.99,-.1,12)};ee.stove=n=>{ot(n,.8,.86,.62,"#e8e4dc",0,.43,-.1),ot(n,.84,.06,.66,"#2a2a2e",0,.89,-.08);for(let t of[-.2,.2]){let e=new ht(new Ti(.1,.02,6,16),Gt("#555"));e.rotation.x=Math.PI/2,e.position.set(t,.93,-.08),n.add(e)}ot(n,.7,.4,.02,"#2a2a2e",0,.45,.22),ne(n,.14,.14,.14,"#3a6ab8",.2,1,-.08,14)};ee.fridge=n=>{ot(n,.78,1.85,.7,"#eaf2f8",0,.93,-.08),ot(n,.78,.02,.02,"#c8d0d8",0,1.2,.28);for(let t of[.8,1.55])ot(n,.03,.25,.04,"#a8b0b8",.3,t,.3);ot(n,.18,.14,.01,"#f29ab8",-.15,1.5,.28)};ee.catbed=n=>{let t=new ht(new Ti(.32,.12,8,20),Gt("#c8935a"));t.rotation.x=Math.PI/2,t.position.y=.12,n.add(t),ne(n,.3,.3,.08,"#f2d8b0",0,.05,0,18),Se(n,.18,"#e8a050",.02,.2,0,1.4,.7,1),Se(n,.11,"#e8a050",.2,.25,.04);for(let e of[-.04,.07]){let i=new ht(new Zn(.04,.07,4),Gt("#e8a050"));i.position.set(.22,.36,e),n.add(i)}};ee.monstera=n=>{ne(n,.24,.18,.4,"#f2efe6",0,.2,0,14),ne(n,.22,.22,.02,"#5a3a2a",0,.4,0,14);for(let t=0;t<7;t++){let e=t/7*Math.PI*2,i=new ht(new Hn(.28,10),new Qe({color:t%2?"#2f7a3a":"#3f8f4a",side:Rn}));i.position.set(Math.cos(e)*.25,.9+t%3*.18,Math.sin(e)*.25),i.rotation.set(-1+Math.random()*.4,e,0),n.add(i),ne(n,.012,.012,.6,"#3f6a2a",Math.cos(e)*.12,.65,Math.sin(e)*.12,4)}};ee.cactus=n=>{ne(n,.09,.07,.12,"#c8704a",0,.06,0,12),ne(n,.06,.06,.22,"#4a9a4a",0,.22,0,10),Se(n,.06,"#4a9a4a",0,.33,0);let t=ne(n,.03,.03,.1,"#4a9a4a",.07,.24,0,8);t.rotation.z=-1,Se(n,.025,"#f29ab8",0,.39,0)};ee.wwin=n=>{let t=ot(n,1.5,1.1,.03,tn("#bfe6ff"),0,1.65,.02);n.userData.pane=t,ot(n,1.62,.08,.08,ks,0,2.24,.04),ot(n,1.62,.08,.08,ks,0,1.06,.04),ot(n,.06,1.15,.06,ks,0,1.65,.05),ot(n,1.62,.1,.2,ks,0,1.03,.1),ot(n,1.9,.04,.04,"#8a6a4a",0,2.38,.1);for(let e of[-1,1]){let i=ot(n,.38,1.4,.05,"#f29ab8",e*.82,1.68,.12);i.geometry=new an(.38,1.4,.05,4,1,1)}};ee.photos=n=>{let t=["#e8d4ae","#bfe6ff","#f8d0dc","#d8f0e0"];[[-.6,1.8,.45,.55],[0,1.95,.5,.4],[.55,1.75,.4,.5],[-.05,1.5,.35,.3]].forEach(([e,i,s,r],a)=>{ot(n,s+.08,r+.08,.03,a%2?"#3a2a1a":ks,e,i,.015),ot(n,s,r,.01,tn(t[a]),e,i,.035),Se(n,.06,["#f2b630","#3f8f4f","#d8452f","#6a8ae8"][a],e-s*.15,i-r*.1,.04,1,1,.2)})};ee.shelfw=n=>{ot(n,1.7,.05,.25,Pr,0,1.6,.12);for(let t of[-.7,.7])ot(n,.04,.15,.2,"#8a6a4a",t,1.52,.1);ne(n,.06,.06,.16,"#f2efe6",-.5,1.71,.12,10),Se(n,.09,"#4a9a4a",-.5,1.82,.12),ot(n,.3,.22,.16,"#2f6bb8",0,1.74,.12),Se(n,.08,"#f2b630",.45,1.7,.12)};ee.book=n=>{let t=["#d8452f","#2f6bb8","#f2b630"];for(let e=0;e<3;e++){let i=ot(n,.22,.045,.16,t[e],0,.025+e*.047,0);i.rotation.y=e*.25}};ee.mug=n=>{ne(n,.05,.045,.1,"#f6f2ea",0,.05,0,14),ne(n,.045,.045,.01,"#6a4020",0,.095,0,14);let t=new ht(new Ti(.03,.01,6,10),Gt("#f6f2ea"));t.position.set(.06,.05,0),n.add(t)};ee.cake=n=>{ne(n,.14,.14,.02,"#f6f2ea",0,.01,0,20),ne(n,.1,.1,.1,"#fff8f0",0,.07,0,20),ne(n,.1,.1,.015,"#f29ab8",0,.12,0,20);for(let t=0;t<5;t++)Se(n,.022,"#d8302a",Math.cos(t*1.26)*.065,.14,Math.sin(t*1.26)*.065)};ee.laptop=n=>{ot(n,.32,.015,.22,"#c0c4cc",0,.01,0);let t=new ve;t.position.set(0,.015,-.11),t.rotation.x=-.35,n.add(t),ot(t,.32,.2,.012,"#c0c4cc",0,.1,0);let e=ot(t,.29,.17,.002,tn("#8ac0f0"),0,.1,.007);e.userData.lit=1};ee.dlamp=n=>{ne(n,.07,.08,.02,"#2f6bb8",0,.01,0,12);let t=ne(n,.01,.01,.3,"#2f6bb8",0,.16,0,6),e=ne(n,.04,.09,.1,tn("#fff0c8"),0,.33,0,12);e.userData.lit=1,sr(n,0,.3,0,1.2,.5)};ee.teddy=n=>{let t="#b8814a";Se(n,.1,t,0,.1,0,1,1.1,.9),Se(n,.08,t,0,.24,0);for(let e of[-.06,.06])Se(n,.03,t,e,.31,0),Se(n,.012,"#1a1a1a",e*.5,.26,.07),Se(n,.035,t,e*1.3,.1,.06);Se(n,.03,"#e8d0b0",0,.225,.07)};ee.carpet=n=>{let t=ge(256,256,(i,s,r)=>{i.fillStyle="#f2e6d0",i.fillRect(0,0,s,r);let a=_y(3);for(let o=0;o<1600;o++)i.fillStyle=a()<.5?"rgba(220,200,170,.5)":"rgba(255,250,240,.6)",i.fillRect(a()*s,a()*r,3,3);i.strokeStyle="#e8a0b0",i.lineWidth=10,i.strokeRect(14,14,s-28,r-28)}),e=new ht(new an(1.9,.04,1.9),[Gt("#e8d8c0"),Gt("#e8d8c0"),new Qe({map:t}),Gt("#e8d8c0"),Gt("#e8d8c0"),Gt("#e8d8c0")]);e.position.y=.02,n.add(e)};var _y=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function uu(n){let t=new ve,e=ee[n];return e?e(t):ot(t,.8,.8,.8,"#f0f",0,.4,0),gy(t),t.traverse(i=>{i.isMesh&&(i.userData.item=t)}),t}var rr=(n,t)=>n+Math.random()*(t-n),Bi=(n,t,e)=>Math.max(t,Math.min(e,n)),fu=(n,t,e)=>n+(t-n)*e,ar=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),or=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Vi={wall:[["#e8553f","\u756A\u8304\u7D05"],["#f29a38","\u6A58\u5B50"],["#f6cf4a","\u6AB8\u6AAC\u9EC3"],["#7cc06a","\u8349\u7DA0"],["#6fd1c0","\u8584\u8377"],["#6fb6ea","\u5929\u7A7A\u85CD"],["#4a72c8","\u6D77\u85CD"],["#9a6ad6","\u8461\u8404\u7D2B"],["#f29ab8","\u6AFB\u82B1\u7C89"],["#f4efe2","\u5976\u6CB9\u767D"],["#8a6a4a","\u539F\u6728"]],roof:[["gable","\u4E09\u89D2\u5C4B\u9802"],["flat","\u5E73\u9802"],["round","\u5713\u62F1"],["hip","\u56DB\u89D2\u5C4B\u9802"]],roofC:[["#d8452f","\u7D05"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#5a4a6a","\u6DF1\u7D2B"],["#3a3a44","\u9ED1\u74E6"],["#f2b630","\u9EC3"],["#f4efe2","\u767D"],["#8a5a34","\u6728"]],door:[["round","\u5713\u7A97\u9580"],["grid","\u683C\u5B50\u9580"],["arch","\u62F1\u9580"]],doorC:[["#e8553f","\u7D05"],["#f4efe2","\u767D"],["#2f6bb8","\u85CD"],["#3f8f4f","\u7DA0"],["#f2b630","\u9EC3"],["#6b3f1f","\u6728\u982D"],["#5a4a6a","\u7D2B"]],win:[["square","\u65B9\u7A97"],["round","\u5713\u7A97"],["arch","\u62F1\u7A97"],["shoji","\u548C\u98A8\u683C\u7A97"]],porch:[[1,"\u6728\u5E73\u53F0"],[0,"\u4E0D\u8981"]],fence:[["none","\u4E0D\u8981"],["white","\u767D\u7C6C\u7B06"],["hedge","\u77EE\u6A39\u53E2"],["wood","\u7AF9\u7C6C"]],garden:[["flower","\u82B1\u5703"],["pots","\u76C6\u683D"],["tree","\u5C0F\u6A39"],["none","\u4E0D\u8981"]]},yy={wall:"\u7246\u58C1",roof:"\u5C4B\u9802",roofC:"\u5C4B\u9802\u984F\u8272",door:"\u9580",doorC:"\u9580\u7684\u984F\u8272",win:"\u7A97\u6236",porch:"\u9580\u524D\u5E73\u53F0",fence:"\u570D\u7C6C",garden:"\u5EAD\u9662"},pu=()=>({wall:"#f29ab8",roof:"gable",roofC:"#d8452f",door:"round",doorC:"#f4efe2",win:"square",porch:1,fence:"white",garden:"flower"}),ts=46,Li=34,xs=7,vy=[[-36,0,36,0],[0,-28,0,16],[-36,-18,36,-18],[-36,16,36,16],[-36,-18,-36,16],[36,-18,36,16]],go=2,du=8.5,by=[{x:-15,z:-7.6,f:0,own:1},{x:-26,z:-7.6,f:0,npc:"chiyo"},{x:15,z:-7.6,f:0,npc:"hinata"},{x:26,z:-7.6,f:0,npc:"taizo"},{x:-15,z:7.6,f:2,npc:"misaki"},{x:-26,z:7.6,f:2,npc:"kazuo"},{x:15,z:7.6,f:2,npc:"riko"},{x:26,z:7.6,f:2,npc:"ren"}],xo=[{x:-22,z:-24,k:"izakaya",n:"\u5C45\u9152\u5C4B"},{x:-8,z:-24,k:"ramen",n:"\u62C9\u9EB5\u5C4B\u53F0"},{x:10,z:-24,k:"sushi",n:"\u6D77\u98A8\u58FD\u53F8"},{x:24,z:-24,k:"bar",n:"\u6708\u5F71\u9152\u5427"}],My=`
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
`;function Td(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.data||{};if(r.ex=Object.assign(pu(),r.ex||{}),!document.getElementById("i3css")){let _=document.createElement("style");_.id="i3css",_.textContent=My,document.head.appendChild(_)}if(!document.getElementById("h3css")&&n.css){let _=document.createElement("style");_.id="h3css",_.textContent=n.css,document.head.appendChild(_)}let a=Math.min(screen.width,screen.height)<600,o=new ya({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});o.shadowMap.enabled=!0,o.shadowMap.type=Zh;let l=new Sr,h=new va(12576511,60,170);l.fog=h;let u=new kn(38,2,.3,600),f=new Ta,p=(_,T)=>f.load(_,E=>{E.colorSpace=On,T&&T(E)}),d={},v=(_,T)=>T?new Qe(Object.assign({color:_},T)):d[_]||(d[_]=new Qe({color:_})),S=(_,T)=>new ke(Object.assign({color:_},T||{})),x=(_,T,E)=>{let F=_.clone();return F.wrapS=F.wrapT=Ns,F.repeat.set(T,E),F.needsUpdate=!0,F},m=[];function w(_,T,E,F,K,ut,wt,bt,Pt){let _t=new ht(new an(_,T,E),typeof F=="string"?v(F):F);return _t.position.set(K,ut,wt),(bt||l).add(_t),Pt!==!1&&(_t.castShadow=!0),_t.receiveShadow=!0,_t}function C(_,T,E,F,K,ut,wt,bt,Pt){let _t=new ht(new _i(_,T,E,Pt||14),typeof F=="string"?v(F):F);return _t.position.set(K,ut,wt),(bt||l).add(_t),_t.castShadow=!0,_t.receiveShadow=!0,_t}function M(_,T,E,F,K,ut,wt,bt,Pt,_t){let Re=new ht(_t?new gs(_,1):new ii(_,16,12),typeof T=="string"?_t?v(T,{flatShading:!0}):v(T):T);return Re.position.set(E,F,K),wt&&Re.scale.set(wt,bt,Pt),(ut||l).add(Re),Re.castShadow=!0,Re}let q=[];function N(_,T,E,F,K,ut){let wt=new ni(new $n({map:Lr,blending:ds,transparent:!0,depthWrite:!1,opacity:0}));return ut&&wt.material.color.set(ut),wt.scale.set(F,F,1),wt.position.set(_,T,E),(K||l).add(wt),q.push(wt),wt}let V=[];function B(_,T){let E=new ke({color:_});return E.userData.day=new Me(_),E.userData.night=new Me(T||"#ffd98a"),V.push(E),E}let L=new ii(300,24,16),R=new Float32Array(L.attributes.position.count*3);L.setAttribute("color",new Ie(R,3));let H=new ht(L,new ke({vertexColors:!0,side:Yn,fog:!1,depthWrite:!1}));H.renderOrder=-10,l.add(H);let st=new xn;{let _=[],T=or(9);for(let E=0;E<400;E++){let F=T()*Math.PI*2,K=.15+T()*1.3;_.push(Math.cos(F)*Math.cos(K)*280,Math.sin(K)*280,Math.sin(F)*Math.cos(K)*280)}st.setAttribute("position",new Ie(_,3))}let nt=ge(128,128,_=>{let T=_.createRadialGradient(64,64,10,64,64,64);T.addColorStop(0,"rgba(255,255,240,1)"),T.addColorStop(.35,"rgba(255,240,200,.9)"),T.addColorStop(.4,"rgba(255,230,180,.3)"),T.addColorStop(1,"rgba(255,230,180,0)"),_.fillStyle=T,_.fillRect(0,0,128,128)}),at=new ni(new $n({map:nt,fog:!1,depthWrite:!1,transparent:!0}));at.scale.set(50,50,1),H.add(at);let yt=ge(128,128,_=>{let T=_.createRadialGradient(64,64,18,64,64,64);T.addColorStop(0,"rgba(255,248,220,1)"),T.addColorStop(.42,"rgba(255,244,210,1)"),T.addColorStop(.46,"rgba(255,240,200,.25)"),T.addColorStop(1,"rgba(255,240,200,0)"),_.fillStyle=T,_.fillRect(0,0,128,128)}),rt=new ni(new $n({map:yt,fog:!1,depthWrite:!1,transparent:!0}));rt.scale.set(36,36,1),H.add(rt);let At=new ve;H.add(At);{let _=ge(16,16,F=>{F.fillStyle="#fff8e0",F.beginPath(),F.arc(8,8,3,0,7),F.fill()}),T=st.attributes.position,E=new $n({map:_,fog:!1,depthWrite:!1,transparent:!0,opacity:0});for(let F=0;F<T.count;F+=2){let K=new ni(E);K.position.set(T.getX(F),T.getY(F),T.getZ(F)),K.scale.set(1.4,1.4,1),At.add(K)}At.userData.m=E}let lt=new ve;l.add(lt);{let _=or(4);for(let T=0;T<14;T++){let E=new ve,F=3+(_()*3|0);for(let wt=0;wt<F;wt++){let bt=new ht(new gs(3+_()*3,1),new Qe({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95,fog:!1}));bt.position.set(wt*4-F*2,_()*1.5,_()*2),bt.scale.y=.6,E.add(bt)}let K=_()*Math.PI*2,ut=110+_()*60;E.position.set(Math.cos(K)*ut,40+_()*25,Math.sin(K)*ut),E.userData.a=K,E.userData.R=ut,lt.add(E)}}let Dt=new Rr(14676735,8036442,1.4);l.add(Dt);let $t=new Al(16777215,.25);l.add($t);let Ft=new Cr(16773852,2.2);Ft.castShadow=!0;let ie=a?1024:2048;Ft.shadow.mapSize.set(ie,ie),Object.assign(Ft.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160}),Ft.shadow.bias=-8e-4,Ft.shadow.normalBias=.03,l.add(Ft),l.add(Ft.target);let Ee=ge(256,256,(_,T,E)=>{_.fillStyle="#3fb7d8",_.fillRect(0,0,T,E);let F=or(2);for(let K=0;K<90;K++){_.strokeStyle=`rgba(255,255,255,${.12+F()*.25})`,_.lineWidth=2+F()*2;let ut=F()*T,wt=F()*E,bt=10+F()*24;_.beginPath(),_.moveTo(ut,wt),_.quadraticCurveTo(ut+bt/2,wt-4,ut+bt,wt),_.stroke()}});Ee.wrapS=Ee.wrapT=Ns,Ee.repeat.set(40,40);let pt=new Qe({map:Ee,color:"#ffffff"}),It=new ht(new Ve(900,900),pt);It.rotation.x=-Math.PI/2,It.position.y=-.45,It.receiveShadow=!0,l.add(It);function se(_,T,E){let F=new nr;return F.moveTo(-_+E,-T),F.lineTo(_-E,-T),F.quadraticCurveTo(_,-T,_,-T+E),F.lineTo(_,T-E),F.quadraticCurveTo(_,T,_-E,T),F.lineTo(-_+E,T),F.quadraticCurveTo(-_,T,-_,T-E),F.lineTo(-_,-T+E),F.quadraticCurveTo(-_,-T,-_+E,-T),F}let zt=ge(128,128,(_,T,E)=>{_.fillStyle="#f3dfa8",_.fillRect(0,0,T,E);let F=or(7);for(let K=0;K<300;K++)_.fillStyle=F()<.5?"rgba(200,170,110,.35)":"rgba(255,250,230,.5)",_.fillRect(F()*T,F()*E,2,2)});{let _=new ho(se(ts+xs,Li+xs,16),{depth:1,bevelEnabled:!0,bevelSize:2.5,bevelThickness:.8,bevelSegments:2,curveSegments:10});_.rotateX(Math.PI/2);let T=new ht(_,new Qe({map:x(zt,.4,.4)}));T.position.y=-.83,T.receiveShadow=!0,l.add(T);let E=new ht(new wa(se(ts+xs+3.4,Li+xs+3.4,18),12),new ke({color:"#bdf0f6",transparent:!0,opacity:.55,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=-.38,l.add(E)}let he=ge(256,256,(_,T,E)=>{_.fillStyle="#7ccb5a",_.fillRect(0,0,T,E);let F=or(5);for(let K=0;K<900;K++){_.fillStyle=F()<.5?"rgba(60,140,40,.28)":"rgba(180,230,120,.3)";let ut=F()*T,wt=F()*E;_.fillRect(ut,wt,2,5)}});{let _=new wa(se(ts,27,12),10);_.rotateX(-Math.PI/2),_.translate(0,0,-7);let T=_.attributes.uv;for(let F=0;F<T.count;F++)T.setXY(F,T.getX(F)/8,T.getY(F)/8);let E=new ht(_,new Qe({map:x(he,1,1)}));E.position.y=.02,E.receiveShadow=!0,l.add(E)}let le=ge(128,128,(_,T,E)=>{_.fillStyle="#d9d4cc",_.fillRect(0,0,T,E);let F=or(8);for(let K=0;K<4;K++)for(let ut=0;ut<4;ut++){let wt=(F()*14|0)-7;_.fillStyle=`rgb(${206+wt},${200+wt},${190+wt})`,_.fillRect(ut*32+1,K*32+1,30,30)}}),ae=v("#f4f1ea");for(let[_,T,E,F]of vy){let K=Math.hypot(E-_,F-T)+go*2,ut=(_+E)/2,wt=(T+F)/2,bt=T===F,Pt=new ht(new Ve(bt?K:go*2,bt?go*2:K),new Qe({map:x(le,(bt?K:4)/2,(bt?4:K)/2)}));Pt.rotation.x=-Math.PI/2,Pt.position.set(ut,.04,wt),Pt.receiveShadow=!0,l.add(Pt);for(let _t of[-1,1]){let Re=new ht(new an(bt?K:.25,.12,bt?.25:K),ae);Re.position.set(ut+(bt?0:_t*(go+.1)),.06,wt+(bt?_t*(go+.1):0)),Re.receiveShadow=!0,l.add(Re)}}let Ue=ge(512,512,(_,T,E)=>{_.fillStyle="#e9b98a",_.fillRect(0,0,T,E),_.translate(256,256);for(let F=250;F>40;F-=26)_.strokeStyle=F%52?"#f4d2a6":"#d99a6a",_.lineWidth=10,_.beginPath(),_.arc(0,0,F,0,7),_.stroke();for(let F=0;F<16;F++)_.rotate(Math.PI/8),_.strokeStyle="#f7e2c0",_.lineWidth=4,_.beginPath(),_.moveTo(50,0),_.lineTo(250,0),_.stroke()});{let _=new ht(new Hn(du,48),new Qe({map:Ue}));_.rotation.x=-Math.PI/2,_.position.y=.06,_.receiveShadow=!0,l.add(_);let T=new ht(new Sl(du,du+.35,48),ae);T.rotation.x=-Math.PI/2,T.position.y=.08,l.add(T)}let vt=[];{let _=new ve;l.add(_);let T=v("#f4f1ea");C(3.4,3.6,.7,T,0,.35,0,_,32);let E=ge(128,128,(wt,bt,Pt)=>{wt.fillStyle="#5ec8e8",wt.fillRect(0,0,bt,Pt),wt.strokeStyle="rgba(255,255,255,.5)",wt.lineWidth=3;for(let _t=0;_t<8;_t++)wt.beginPath(),wt.arc(64,64,8+_t*8,0,7),wt.stroke()}),F=new ht(new Hn(3.05,32),new ke({map:E}));F.rotation.x=-Math.PI/2,F.position.y=.72,_.add(F),vt.push(F),C(.5,.7,1.4,T,0,1.3,0,_,16),C(1.4,1.2,.25,T,0,2.05,0,_,24),C(.25,.35,.9,T,0,2.6,0,_,12),C(.7,.6,.18,T,0,3.1,0,_,20);let K=new ke({color:"#c8f0ff",transparent:!0,opacity:.75}),ut=new ht(new _i(.12,.2,1.2,10,1,!0),K);ut.position.y=3.7,_.add(ut),vt.push(ut);for(let wt=0;wt<8;wt++){let bt=wt/8*Math.PI*2,Pt=new ht(new Ti(.9,.06,6,12,Math.PI*.6),K);Pt.position.set(Math.cos(bt)*.9,2.2,Math.sin(bt)*.9),Pt.rotation.set(0,-bt,Math.PI*.2),_.add(Pt)}for(let wt=0;wt<6;wt++){let bt=wt/6*Math.PI*2+.26;Lt(Math.cos(bt)*6.6,Math.sin(bt)*6.6,bt)}}function Lt(_,T,E){let F=new ve;F.position.set(_,0,T),F.rotation.y=-E,l.add(F),w(1.6,.45,1,"#c8704a",0,.22,0,F),w(1.45,.1,.85,"#5a3a24",0,.45,0,F,!1);let K=["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"];for(let ut=0;ut<8;ut++)M(.13,K[ut%5],-.55+ut%4*.36,.62,-.2+Math.floor(ut/4)*.4,F),M(.1,"#4a9a3a",-.55+ut%4*.36,.52,-.2+Math.floor(ut/4)*.4,F)}function O(_){return ge(128,128,(T,E,F)=>{T.fillStyle=_,T.fillRect(0,0,E,F);for(let K=0;K<F;K+=16)T.fillStyle="rgba(0,0,0,.08)",T.fillRect(0,K,E,2),T.fillStyle="rgba(255,255,255,.08)",T.fillRect(0,K+2,E,2)})}function re(_){return ge(512,128,(T,E,F)=>{T.fillStyle="#fff8ea",T.strokeStyle="#3a2a1a",T.lineWidth=10,ir(T,6,6,E-12,F-12,24),T.fill(),T.stroke(),T.fillStyle="#3a2a1a",T.textAlign="center",T.textBaseline="middle";let K=64;for(T.font=`900 ${K}px ${Cn}`;T.measureText(_).width>E-60&&K>20;)K-=2,T.font=`900 ${K}px ${Cn}`;T.fillText(_,E/2,F/2+3)})}let mt=5.4,Ut=4.2,Ct=3;function ye(_,T){let E=new ve,F=_.wall,K=new Qe({map:O(F)}),ut=-.6;w(mt+.3,.35,Ut+.3,"#e8e2d4",0,.17,ut,E);let wt=w(mt,Ct,Ut,K,0,.35+Ct/2,ut,E);for(let Mt of[-1,1])w(.22,Ct,.22,"#f4efe2",Mt*mt/2,.35+Ct/2,ut+Ut/2,E);w(mt+.1,.18,.18,"#f4efe2",0,.35+Ct,ut+Ut/2+.02,E);let bt=v(_.roofC),Pt=.35+Ct;if(_.roof==="flat")w(mt+.6,.35,Ut+.6,bt,0,Pt+.17,ut,E),w(mt+.2,.3,Ut+.2,"#f4efe2",0,Pt+.5,ut,E),w(1,.7,1,"#9a9a9a",1.4,Pt+.9,ut-.6,E);else if(_.roof==="round"){let Mt=new ht(new _i(Ut/2+.45,Ut/2+.45,mt+.5,24,1,!1,-Math.PI/2,Math.PI),bt);Mt.rotation.set(0,0,Math.PI/2),Mt.position.set(0,Pt,ut),Mt.castShadow=!0,E.add(Mt);for(let be of[-1,1]){let fe=new ht(new Hn(Ut/2+.45,24,0,Math.PI),K);fe.rotation.y=be*Math.PI/2,fe.position.set(be*(mt/2+.26),Pt,ut),E.add(fe)}}else if(_.roof==="hip"){let Mt=new ht(new Zn((mt+.9)/Math.SQRT2*1,1.9,4),bt);Mt.rotation.y=Math.PI/4,Mt.scale.set(1,1,(Ut+.9)/(mt+.9)),Mt.position.set(0,Pt+.95,ut),Mt.castShadow=!0,E.add(Mt)}else{let Mt=new nr,be=Ut/2+.5;Mt.moveTo(-be,0),Mt.lineTo(0,1.9),Mt.lineTo(be,0),Mt.lineTo(-be,0);let fe=new ho(Mt,{depth:mt+.6,bevelEnabled:!1});fe.translate(0,0,-(mt+.6)/2);let Ne=new ht(fe,[bt,bt]);Ne.rotation.y=Math.PI/2,Ne.position.set(0,Pt-.05,ut),Ne.castShadow=!0,E.add(Ne);let mn=new nr;mn.moveTo(-Ut/2,0),mn.lineTo(0,1.55),mn.lineTo(Ut/2,0);let In=new ht(new wa(mn),K);In.rotation.y=Math.PI/2;for(let Ge of[-1,1]){let vn=In.clone();vn.rotation.y=Ge*Math.PI/2,vn.position.set(Ge*(mt/2+.001),Pt,ut),E.add(vn)}let hn=new ht(new Hn(.35,20),B("#bfe6ff"));hn.position.set(0,Pt+.5,ut+Ut/2+.02),E.add(hn)}let _t=ut+Ut/2+.02,Re=v(_.doorC);if(w(1.35,2.25,.12,"#f4efe2",0,.35+1.12,_t,E),_.door==="arch"){w(1.1,1.75,.14,Re,0,.35+.88,_t+.02,E);let Mt=new ht(new Hn(.55,20,0,Math.PI),Re);Mt.position.set(0,.35+1.75,_t+.1),E.add(Mt)}else w(1.1,2.05,.14,Re,0,.35+1.02,_t+.02,E);if(_.door==="round"){let Mt=new ht(new Hn(.26,20),B("#bfe6ff"));Mt.position.set(0,.35+1.5,_t+.1),E.add(Mt);let be=new ht(new Ti(.28,.05,8,20),v("#c8c8d0"));be.position.set(0,.35+1.5,_t+.1),E.add(be)}else if(_.door==="grid")for(let Mt=0;Mt<3;Mt++)for(let be=0;be<2;be++){let fe=new ht(new Ve(.38,.4),B("#e8f4ff","#ffe0a0"));fe.position.set(-.21+be*.42,.35+1.15+Mt*.45,_t+.1),E.add(fe)}M(.06,"#e9c34a",.4,.35+1,_t+.12,E);let ai=M(.16,S("#fff4d0"),.95,.35+2.3,_t+.2,E);N(.95,.35+2.3,_t+.3,2.2,E);for(let Mt of[-1.75,1.75]){if(_.win==="round"){let fe=new ht(new Hn(.5,24),B("#bfe6ff"));fe.position.set(Mt,2.05,_t+.01),E.add(fe);let Ne=new ht(new Ti(.52,.08,8,24),v("#f4efe2"));Ne.position.set(Mt,2.05,_t+.02),E.add(Ne)}else if(_.win==="arch"){let fe=new ht(new Ve(.9,.8),B("#bfe6ff"));fe.position.set(Mt,2.05-.15,_t+.01),E.add(fe);let Ne=new ht(new Hn(.45,16,0,Math.PI),B("#bfe6ff"));Ne.position.set(Mt,2.05+.25,_t+.01),E.add(Ne),w(1.05,.1,.14,"#f4efe2",Mt,2.05-.58,_t+.05,E)}else if(_.win==="shoji"){let fe=new ht(new Ve(1.1,1),B("#fff4dc","#ffcf7a"));fe.position.set(Mt,2.05,_t+.01),E.add(fe);for(let Ne=-1;Ne<=1;Ne++)w(.04,1,.04,"#6b3f1f",Mt+Ne*.36,2.05,_t+.04,E,!1),w(1.1,.04,.04,"#6b3f1f",Mt,2.05+Ne*.33,_t+.04,E,!1)}else{let fe=new ht(new Ve(1.05,.95),B("#bfe6ff"));fe.position.set(Mt,2.05,_t+.01),E.add(fe),w(1.2,.1,.1,"#f4efe2",Mt,2.05+.5,_t+.04,E,!1),w(1.2,.1,.1,"#f4efe2",Mt,2.05-.5,_t+.04,E,!1),w(.1,1.05,.1,"#f4efe2",Mt-.55,2.05,_t+.04,E,!1),w(.1,1.05,.1,"#f4efe2",Mt+.55,2.05,_t+.04,E,!1),w(.06,1,.06,"#f4efe2",Mt,2.05,_t+.04,E,!1),w(1.3,.14,.32,"#f4efe2",Mt,2.05-.6,_t+.14,E)}if(_.garden!=="none"){w(1,.2,.25,"#8a5a34",Mt,2.05-.78,_t+.2,E);for(let fe=0;fe<4;fe++)M(.09,["#ff5a7a","#ffd34a","#ffffff","#ff8a3a"][fe],Mt-.36+fe*.24,2.05-.62,_t+.2,E)}}if(+_.porch){w(mt+.6,.3,1.7,"#c8935a",0,.15,_t+.85,E);for(let Mt=0;Mt<9;Mt++)w(.02,.02,1.7,"#9a6a3a",-mt/2-.1+Mt*.7,.31,_t+.85,E,!1);w(1.6,.15,.5,"#c8935a",0,.075,_t+1.95,E);for(let Mt of[-1,1])w(.12,.9,.12,"#f4efe2",Mt*(mt/2+.15),.75,_t+1.62,E),w(.12,.9,.12,"#f4efe2",Mt*1,.75,_t+1.62,E),w(mt/2-.8,.08,.08,"#f4efe2",Mt*(mt/4+.58),1.1,_t+1.62,E)}{let Mt=new ve;Mt.position.set(mt/2+.2,0,_t+2.4),E.add(Mt),w(.1,1,.1,"#6b3f1f",0,.5,0,Mt),w(.4,.32,.55,_.doorC==="#f4efe2"?"#e8553f":_.doorC,0,1.12,0,Mt),w(.05,.25,.05,"#e8553f",.22,1.3,.1,Mt)}let Xn=_t+2.9,Rt=mt/2+1.1;if(_.fence==="white"||_.fence==="wood"){let Mt=_.fence==="white"?"#ffffff":"#c8b070";for(let be of[-1,1]){for(let fe=0;fe<6;fe++){let Ne=be*(1.3+fe*.55);if(w(.12,.8,.06,Mt,Ne,.4,Xn,E),_.fence==="white"){let mn=new ht(new Zn(.09,.16,4),v(Mt));mn.position.set(Ne,.88,Xn),mn.rotation.y=Math.PI/4,E.add(mn)}}w(2.9,.08,.05,Mt,be*2.65,.55,Xn-.04,E,!1),w(2.9,.08,.05,Mt,be*2.65,.25,Xn-.04,E,!1)}}else if(_.fence==="hedge")for(let Mt of[-1,1]){let be=w(2.8,.7,.6,v("#3f9a3f"),Mt*2.6,.35,Xn,E);be.geometry=new an(2.8,.7,.6,3,1,1);for(let fe=0;fe<4;fe++)M(.38,"#4aa84a",Mt*(1.5+fe*.72),.7,Xn,E,1,.8,1,!0)}if(_.garden==="flower")for(let Mt of[-1,1])for(let be=0;be<5;be++)M(.14,["#ff5a7a","#ffd34a","#ffffff","#a07af0","#ff8a3a"][(be+(Mt>0?2:0))%5],Mt*(2.1+be%3*.5),.28,_t+2+Math.floor(be/3)*.4,E),M(.12,"#3f8a2f",Mt*(2.1+be%3*.5),.14,_t+2+Math.floor(be/3)*.4,E);else if(_.garden==="pots")for(let Mt of[-1,1])C(.28,.22,.45,"#c8704a",Mt*2.3,.22,_t+2.1,E),M(.38,"#4a9a3a",Mt*2.3,.7,_t+2.1,E,1,1,1,!0);else _.garden==="tree"&&(C(.12,.16,1.5,"#7a5034",-mt/2-.6,.75,_t+1.6,E),M(.95,"#4aa84a",-mt/2-.6,2,_t+1.6,E,1,1,1,!0),M(.6,"#5ab85a",-mt/2-.2,2.4,_t+1.9,E,1,1,1,!0));if(T){let Mt=new ht(new Ve(1.8,.45),new ke({map:re(T),transparent:!0}));Mt.position.set(0,.35+2.5,_t+.09),E.add(Mt)}return E.traverse(Mt=>{Mt.isMesh&&(Mt.castShadow=Mt.castShadow||!1,Mt.receiveShadow=!0)}),E.userData.door=new z(0,0,_t+2.4),E}let Yt=[],U=or(31),A=_=>{let T=Pa.find(E=>E.id===_||E.spr===_);return T?T.name.split(" ")[0]:_};function tt(_){let T=E=>E[Math.floor(_()*E.length)][0];return{wall:T(Vi.wall),roof:T(Vi.roof),roofC:T(Vi.roofC),door:T(Vi.door),doorC:T(Vi.doorC),win:T(Vi.win),porch:_()<.75?1:0,fence:T(Vi.fence),garden:T(Vi.garden)}}function ft(_){_.g&&(l.remove(_.g),_.g.traverse(K=>{K.geometry&&K.geometry.dispose()}));let T=_.own?r.ex:_.ex,E=_.own?n.houseName||"\u6211\u7684\u5BB6":_.label;_.g=ye(T,E),_.g.position.set(_.x,0,_.z),_.g.rotation.y=_.f===2?Math.PI:0,l.add(_.g),_.g.traverse(K=>{K.isMesh&&(K.userData.house=_)});let F=_.g.userData.door.clone();_.f===2&&(F.x=-F.x,F.z=-F.z),_.door={x:_.x+F.x,z:_.z+F.z}}by.forEach(_=>{let T=Object.assign({},_);if(!T.own){T.ex=tt(U);let E=Pa.find(F=>F.spr===_.npc||F.id===_.npc);T.label=(E?E.name.split(" ").pop():"\u9130\u5C45")+"\u7684\u5BB6"}Yt.push(T),ft(T)});let gt=Yt.find(_=>_.own);function dt(_){let T=new ve;T.position.set(_.x,0,_.z),l.add(T);let E={izakaya:["#7a4a2a","#2c3044","#e2452f","\u5C45\u9152\u5C4B"],ramen:["#c8352a","#3a3a3a","#f2b630","\u30E9\u30FC\u30E1\u30F3"],sushi:["#f4efe2","#2f4a7a","#2f6bb8","\u5BFF\u53F8"],bar:["#3a2f5a","#1c1f2a","#9a6ad6","BAR"]}[_.k];w(7,.3,5.6,"#e8e2d4",0,.15,0,T),w(6.6,3.4,5,E[0],0,2,-.2,T),w(7.4,.4,6,E[1],0,3.9,-.2,T),w(7.6,.3,1.6,E[1],0,3.1,2.6,T).rotation.x=.35;let F=new ht(new Ve(4.2,.9),new ke({map:re(_.k==="izakaya"&&r.name?r.name:E[3])}));F.position.set(0,4.55,2.85),T.add(F),w(4.4,1,.1,"#3a2a1a",0,4.55,2.78,T);let K=new ht(new Ve(2.2,1.4),B("#cfe8f4"));K.position.set(-1.9,1.7,2.31),T.add(K);let ut=K.clone();ut.position.x=1.9,T.add(ut),w(1.4,2.3,.1,"#3a2a1a",0,1.45,2.31,T);let wt=ge(256,100,(Pt,_t,Re)=>{for(let ai=0;ai<3;ai++)Pt.fillStyle=E[2],Pt.fillRect(4+ai*84,0,80,Re-4);Pt.fillStyle="#fff",Pt.textAlign="center",Pt.textBaseline="middle",Pt.font=`900 40px ${Cn}`,[..._.k==="bar"?"\u6708\u5F71":_.n.slice(0,3)].slice(0,3).forEach((ai,Xn)=>Pt.fillText(ai,44+Xn*84,44))}),bt=new ht(new Ve(1.5,.65),new ke({map:wt,transparent:!0,side:Rn}));bt.position.set(0,2.25,2.42),T.add(bt);for(let Pt of[-1,1]){let _t=M(.3,S(_.k==="sushi"?"#ffffff":"#e2452f"),Pt*1.15,2.3,2.5,T,1,1.3,1);N(Pt*1.15,2.3,2.6,2.6,T)}if(_.k==="ramen")for(let Pt=0;Pt<3;Pt++)C(.25,.25,.7,"#c8352a",-1.2+Pt*1.2,.35,3.5,T,12);if(_.k==="sushi"){let Pt=new ht(new Zn(.4,1.2,4),v("#2f6bb8"));Pt.position.set(3.1,3.2,2.6),Pt.rotation.z=-1.3,T.add(Pt)}return T.traverse(Pt=>{Pt.isMesh&&(Pt.userData.shop=_)}),_.door={x:_.x,z:_.z+3.6},T}xo.forEach(dt);let Bt=[];Yt.forEach(_=>{Bt.push([_.x-mt/2-.2,_.z-(_.f===2?-.6:.6)-Ut/2-.2,_.x+mt/2+.2,_.z-(_.f===2?-.6:.6)+Ut/2+.2])}),xo.forEach(_=>Bt.push([_.x-3.5,_.z-3,_.x+3.5,_.z+2.4])),Bt.push([-3.6,-3.6,3.6,3.6]);function Nt(_,T,E,F){let K=new ve;if(K.position.set(_,0,T),K.scale.setScalar(E),l.add(K),F==="palm"){let ut=0,wt=0;for(let bt=0;bt<6;bt++){let Pt=C(.22-bt*.02,.26-bt*.02,.8,"#a07850",ut,wt+.4,0,K,8);Pt.rotation.z=-.08*bt,ut+=.06*bt,wt+=.78}for(let bt=0;bt<7;bt++){let Pt=bt/7*Math.PI*2,_t=new ht(new Zn(.32,2.6,4),v("#3fa04a",{flatShading:!0}));_t.scale.z=.25,_t.position.set(ut+Math.cos(Pt)*1.1,wt+.1,Math.sin(Pt)*1.1),_t.rotation.set(Math.sin(Pt)*1.6,0,-Math.cos(Pt)*1.6),_t.castShadow=!0,K.add(_t)}M(.18,"#6a4a2a",ut,wt-.1,.1,K)}else C(.22,.3,1.8,"#8a5a3a",0,.9,0,K,8),M(1.5,F==="pink"?"#f4a8c0":"#58b84a",0,2.8,0,K,1,.9,1,!0),M(1,F==="pink"?"#f8c0d0":"#6ac85a",.8,2.4,.4,K,1,1,1,!0),M(.9,F==="pink"?"#f094b0":"#4aa83c",-.7,2.3,-.3,K,1,1,1,!0);Bt.push([_-.5*E,T-.5*E,_+.5*E,T+.5*E])}let Wt=or(77);for(let _=0;_<34;_++){let T=_/34*Math.PI*2+Wt()*.1,E=Math.cos(T)*(ts-1.5+Wt()*2),F=Math.sin(T)*(Li-1.5+Wt()*2);if(F>18){Wt()<.5&&Nt(Bi(E*1.05,-ts-3,ts+3),Bi(F,22,Li+4),.9,"palm");continue}Nt(Bi(E,-ts+2,ts-2),Bi(F,-Li+2,Li-2),.9+Wt()*.3,"palm")}[[-30,-11.5],[-20,-12.5],[-9,-12.5],[9,-12.5],[20,-12.5],[30,-11.5],[-30,11.5],[-20,12.5],[20,12.5],[30,11.5]].forEach(([_,T],E)=>Nt(_,T,.8+E%3*.1,E%4===0?"pink":"round")),[[8,12.2],[-8,12.2]].forEach(([_,T])=>Nt(_,T,.8,"pink"));function Pe(_,T){let E=new ve;E.position.set(_,0,T),l.add(E),C(.09,.12,3.6,"#3a3a44",0,1.8,0,E,8);let F=M(.28,S("#fff4d0"),0,3.7,0,E);C(.3,.2,.12,"#3a3a44",0,3.98,0,E,10),N(0,3.7,0,5,E);let K=new ht(new Hn(3,20),new ke({map:Lr,transparent:!0,blending:ds,depthWrite:!1,opacity:0}));K.rotation.x=-Math.PI/2,K.position.y=.08,E.add(K),q.push(K),K.userData.k=.35,Bt.push([_-.2,T-.2,_+.2,T+.2])}for(let[_,T]of[[-6.2,6.2],[6.2,6.2],[-6.2,-6.2],[6.2,-6.2],[-20,2.6],[20,2.6],[-20,-2.6],[20,-2.6],[-31,2.6],[31,-2.6],[-12,-15.4],[12,-15.4],[-12,18.6],[12,18.6],[2.6,-12],[-2.6,11]])Pe(_,T);function St(_,T,E){let F=new ve;F.position.set(_,0,T),F.rotation.y=E,l.add(F),w(2,.12,.55,"#b8824a",0,.5,0,F),w(2,.5,.1,"#b8824a",0,.85,-.25,F);for(let K of[-.85,.85])w(.1,.5,.5,"#3a3a44",K,.25,0,F);return Bt.push([_-1,T-.4,_+1,T+.4]),F}St(0,6.9,Math.PI),St(0,-6.9,0),St(-6.9,0,Math.PI/2),St(6.9,0,-Math.PI/2);let Zt=new ve;Zt.position.set(4.6,0,-4.6),Zt.rotation.y=-Math.PI/4,l.add(Zt);{w(.12,1.8,.12,"#6b3f1f",-.8,.9,0,Zt),w(.12,1.8,.12,"#6b3f1f",.8,.9,0,Zt);let _=ge(256,160,(E,F,K)=>{E.fillStyle="#c8935a",E.fillRect(0,0,F,K),E.strokeStyle="#6b3f1f",E.lineWidth=10,E.strokeRect(0,0,F,K),E.fillStyle="#fff8ea",E.fillRect(20,30,100,70),E.fillStyle="#ffe0ea",E.fillRect(135,22,100,80),E.fillStyle="#3a2a1a",E.font=`900 26px ${Cn}`,E.textAlign="center",E.fillText("\u5CF6\u306E\u63B2\u793A\u677F",F/2,K-18)}),T=new ht(new an(1.8,1.1,.1),[v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),v("#6b3f1f"),new ke({map:_}),v("#6b3f1f")]);T.position.y=1.4,T.castShadow=!0,Zt.add(T),Bt.push([3.8,-5.4,5.4,-3.8])}function de(_,T,E){let F=new ve;F.position.set(_,0,T),l.add(F),C(.05,.05,2.4,"#f4efe2",0,1.2,0,F,6);let K=new ht(new Zn(1.5,.7,12),v(E,{flatShading:!0}));K.position.y=2.5,K.castShadow=!0,F.add(K);let ut=new ht(new Zn(1.52,.7,12,1,!0,0,Math.PI/6),v("#ffffff",{side:Rn}));for(let wt=0;wt<6;wt++){let bt=ut.clone();bt.rotation.y=wt*Math.PI/3,bt.position.y=2.5,F.add(bt)}}function pe(_,T,E){let F=new ve;F.position.set(_,0,T),l.add(F),w(.7,.12,1.8,E,0,.35,0,F);let K=w(.7,.1,.8,E,0,.6,-.85,F);K.rotation.x=.6;for(let ut of[-.3,.3])for(let wt of[-.7,.7])w(.05,.3,.05,"#f4efe2",ut,.15,wt,F)}de(-18,28,"#2f6bb8"),pe(-16.2,28.4,"#6fd1c0"),pe(-19.6,28.8,"#f29ab8"),de(-4,30,"#e8553f"),pe(-2.2,30.2,"#f6cf4a"),de(22,29,"#3f8f4f"),pe(23.8,29.3,"#f29ab8"),de(-30,27,"#f6cf4a");{let _=new ve;_.position.set(10,0,Li+6),l.add(_),w(3,.3,16,"#b8824a",0,.15,6,_);for(let F=0;F<6;F++)for(let K of[-1.4,1.4])C(.15,.15,1.6,"#8a5a34",K,-.5,-1+F*3,_,8);for(let F=0;F<16;F++)w(3,.02,.05,"#8a5a34",0,.31,-1.8+F,_,!1);let T=new ve;T.position.set(14,-.2,Li+17),l.add(T),w(1.8,.6,4,"#f4efe2",0,.3,0,T),w(1.9,.15,4.1,"#e8553f",0,.65,0,T),C(.06,.06,3,"#8a5a34",0,2,0,T,6);let E=new ht(new Ve(1.6,2.2),v("#ffffff",{side:Rn}));E.position.set(0,2.2,.6),E.rotation.y=Math.PI/2,T.add(E),lt.userData.boat=T}let Jt=[8.5,Li+4,11.5,Li+19],Le=[],Qt=1.5,Ye=ge(64,64,_=>{let T=_.createRadialGradient(32,32,2,32,32,32);T.addColorStop(0,"rgba(0,0,0,.55)"),T.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=T,_.fillRect(0,0,64,64)});function Y(_,T){return ge(512,112,(E,F,K)=>{E.textAlign="center",E.textBaseline="middle";let ut=52;E.font=`900 ${ut}px ${Cn}`;let wt=String(_||"").slice(0,16);for(;E.measureText(wt).width>F-80&&ut>22;)ut-=2,E.font=`900 ${ut}px ${Cn}`;let bt=Math.min(F-12,E.measureText(wt).width+56);E.fillStyle=T==="me"?"#ffffffee":"#2a2a48e0",E.strokeStyle=T==="me"?"#3a2a1a":"#c8c0ff",E.lineWidth=7,ir(E,(F-bt)/2,14,bt,K-28,(K-28)/2),E.fill(),E.stroke(),E.fillStyle=T==="me"?"#3a2a1a":"#fff3d6",E.fillText(wt,F/2,K/2+2)})}let Xt=ge(128,112,_=>{_.strokeStyle="#2a1810",_.lineWidth=6,_.lineJoin="round",_.fillStyle="#ffffff",ir(_,12,8,104,66,24),_.fill(),_.stroke(),_.beginPath(),_.moveTo(44,72),_.lineTo(34,100),_.lineTo(66,74),_.closePath(),_.fill(),_.stroke(),_.fillRect(46,68,18,8),_.fillStyle="#2a1810";for(let T=0;T<3;T++)_.beginPath(),_.arc(40+T*24,42,6,0,7),_.fill()});function ct(_,T,E){E=E||{};let F=new ve;l.add(F);let K=new Ve(1,1);K.translate(0,.5,0);let ut=new ke({transparent:!0,alphaTest:.04,color:16777215}),wt=new ht(K,ut);F.add(wt);let bt={grp:F,m:wt,mat:ut,h0:T,h:T*Qt,ar:.8,w:T*Qt*.8,x:0,z:0,y:0,face:1,ph:Math.random()*7,moving:!1};p(_,_t=>{ut.map=_t,ut.needsUpdate=!0,bt.ar=_t.image.width/_t.image.height,bt.w=bt.h*bt.ar});let Pt=new ht(new Hn(.5,16),new ke({map:Ye,transparent:!0,depthWrite:!1}));if(Pt.rotation.x=-Math.PI/2,l.add(Pt),bt.sh=Pt,E.name){let _t=new ni(new $n({map:Y(E.name,E.nk),transparent:!0,depthTest:!1}));_t.renderOrder=30,_t.scale.set(2.2,.48,1),l.add(_t),bt.tag=_t}if(E.bubble){let _t=new ni(new $n({map:Xt,transparent:!0,depthWrite:!1}));_t.scale.set(.85,.74,1),l.add(_t),bt.bub=_t}return Le.push(bt),bt}let Q=ct(n.me.src,1.5,{name:n.me.name||"\u6211",nk:"me"});n.spawn==="door"&&gt?(Q.x=gt.door.x,Q.z=gt.door.z+.4):n.spawn==="shop"?(Q.x=xo[0].x,Q.z=xo[0].z+4.4):(Q.x=0,Q.z=11.5);function Vt(_,T){let E=Math.abs(_),F=Math.abs(T),K=ts+xs-1,ut=Li+xs-1,wt=14;return _>=Jt[0]&&_<=Jt[2]&&T>=Jt[1]&&T<=Jt[3]?!0:E>K||F>ut?!1:E>K-wt&&F>ut-wt?Math.hypot(E-(K-wt),F-(ut-wt))<wt:!0}function Ot(_,T,E){if(!Vt(_,T))return!0;for(let F of Bt)if(_>F[0]-E&&_<F[2]+E&&T>F[1]-E&&T<F[3]+E)return!0;return!1}let Ae=1,Ze=-ts-xs,Mn=-Li-xs,_e=Math.ceil((ts+xs)*2),Ln=Math.ceil((Li+xs)*2+16),Tn=null;function Dr(){Tn=new Uint8Array(_e*Ln);for(let _=0;_<Ln;_++)for(let T=0;T<_e;T++)Tn[_*_e+T]=Ot(Ze+T+.5,Mn+_+.5,.35)?1:0}Dr();function Vs(_,T,E,F){let K=Ge=>Math.floor(Ge-Ze),ut=Ge=>Math.floor(Ge-Mn),wt=K(_),bt=ut(T),Pt=K(E),_t=ut(F);if(Pt<0||_t<0||Pt>=_e||_t>=Ln)return null;if(Tn[_t*_e+Pt]){let Ge=null,vn=1e9;for(let Pn=-3;Pn<=3;Pn++)for(let zi=-3;zi<=3;zi++){let os=Pt+zi,oi=_t+Pn;if(os<0||oi<0||os>=_e||oi>=Ln||Tn[oi*_e+os])continue;let ls=zi*zi+Pn*Pn;ls<vn&&(vn=ls,Ge=[os,oi])}if(!Ge)return null;[Pt,_t]=Ge}let Re=new Int32Array(_e*Ln).fill(-1),ai=bt*_e+wt,Xn=_t*_e+Pt;Re[ai]=ai;let Rt=[ai],Mt=0;for(;Mt<Rt.length;){let Ge=Rt[Mt++];if(Ge===Xn)break;let vn=Ge%_e,Pn=Ge/_e|0;for(let[zi,os]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let oi=vn+zi,ls=Pn+os;if(oi<0||ls<0||oi>=_e||ls>=Ln)continue;let Br=ls*_e+oi;Re[Br]>=0||Tn[Br]||zi&&os&&(Tn[Pn*_e+oi]||Tn[ls*_e+vn])||(Re[Br]=Ge,Rt.push(Br))}}if(Re[Xn]<0)return null;let be=[],fe=Xn;for(;fe!==ai;)be.push([Ze+fe%_e+.5,Mn+(fe/_e|0)+.5]),fe=Re[fe];be.reverse();let Ne=[],mn=_,In=T,hn=0;for(;hn<be.length;){let Ge=hn;for(let vn=be.length-1;vn>hn;vn--)if(Wn(mn,In,be[vn][0],be[vn][1])){Ge=vn;break}Ne.push(be[Ge]),mn=be[Ge][0],In=be[Ge][1],hn=Ge+1}return Ne}function Wn(_,T,E,F){let K=Math.hypot(E-_,F-T),ut=Math.ceil(K/.4);for(let wt=1;wt<=ut;wt++){let bt=wt/ut;if(Ot(_+(E-_)*bt,T+(F-T)*bt,.3))return!1}return!0}let on=[],Hi={};function _n(_,T){let E=_+","+T;return Hi[E]!==void 0?Hi[E]:(Hi[E]=on.length,on.push({x:_,z:T,n:[]}),on.length-1)}{let _=[-36,-26,-15,0,15,26,36],T=[-18,0,16];for(let bt of T)for(let Pt=0;Pt<_.length-1;Pt++){let _t=_n(_[Pt],bt),Re=_n(_[Pt+1],bt);on[_t].n.push(Re),on[Re].n.push(_t)}for(let bt of[-36,36])for(let Pt=0;Pt<T.length-1;Pt++){let _t=_n(bt,T[Pt]),Re=_n(bt,T[Pt+1]);on[_t].n.push(Re),on[Re].n.push(_t)}let E=_n(0,-28),F=_n(0,-18);on[E].n.push(F),on[F].n.push(E);let K=_n(0,-9.5),ut=_n(0,9.5);for(let[bt,Pt]of[[F,K],[ut,_n(0,16)],[K,_n(-9.5,0)],[K,_n(9.5,0)],[ut,_n(-9.5,0)],[ut,_n(9.5,0)],[_n(-9.5,0),_n(-15,0)],[_n(9.5,0),_n(15,0)]])on[bt].n.push(Pt),on[Pt].n.push(bt);let wt=Hi["0,0"];wt!==void 0&&on[wt].n.forEach(bt=>{on[bt].n=on[bt].n.filter(Pt=>Pt!==wt)}),wt!==void 0&&(on[wt].n=[])}let Ei=[];Pa.filter(_=>n.walk&&n.walk[_.spr]&&_.spr!=="robot").sort(()=>Math.random()-.5).slice(0,a?7:10).forEach(_=>{let T=ct(n.walk[_.spr],_.h,{bubble:1});T.d=_,T.sp=_.sp*.9;let E;do E=Math.floor(Math.random()*on.length);while(!on[E].n.length);T.x=on[E].x+rr(-1,1),T.z=on[E].z+rr(-1,1),T.node=E,T.state="idle",T.t=rr(0,3),Ei.push(T)});function Jn(_){let T=on[_.node];if(!T.n.length)return;let E=T.n[Math.floor(Math.random()*T.n.length)];_.node=E;let F=on[E];_.tx=F.x+rr(-1.2,1.2),_.tz=F.z+rr(-1.2,1.2),_.state="walk"}let bi=(_,T,E,F)=>{let K=document.createElement(_);return T&&(K.className=T),E!=null&&(K.innerHTML=E),(F||e).appendChild(K),K},Wi=[],Di=_=>(Wi.push(_),_),Ur=Di(bi("div","i3info")),Nr=Di(bi("div","i3hud")),P=Di(bi("div","h3hint")),k=Di(bi("div","h3toast")),et=Di(bi("div","h3card")),it=Di(bi("div","i3pan"));function J(_){k.textContent=_,k.classList.add("on"),clearTimeout(J.t),J.t=setTimeout(()=>k.classList.remove("on"),2400)}let W={dead:!1,mode:"walk",yaw:.35,yawT:.35,pitch:.72,pitchT:.72,dist:17,distT:17,tgt:null,keys:{},t:0,talk:null,last:performance.now(),hourOff:0,cam:new z(Q.x,1,Q.z)},kt=[[null,"\u73FE\u5728"],[8,"\u65E9\u4E0A"],[13,"\u4E2D\u5348"],[17.6,"\u508D\u665A"],[21,"\u591C\u665A"]],jt=0;function Ht(){if(kt[jt][0]!==null)return kt[jt][0];let _=new Date;return _.getHours()+_.getMinutes()/60}function ue(){if(W.mode==="edit"){Nr.innerHTML='<button class="h3b hot" type="button" data-i3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Nr.innerHTML=(s?'<button class="h3b hot" type="button" data-i3="edit"><i>\u{1F3A8}</i>\u5916\u89C0</button>':"")+`<button class="h3b" type="button" data-i3="home"><i>\u{1F3E0}</i>${s?"\u56DE\u5BB6":"\u4ED6\u5BB6"}</button><button class="h3b" type="button" data-i3="shopin"><i>\u{1F3EE}</i>${s?"\u6211\u7684\u5E97":"\u4ED6\u7684\u5E97"}</button><button class="h3b" type="button" data-i3="time"><i>\u{1F550}</i>${kt[jt][1]}</button>`}function we(){let _=Ht(),T=Math.floor(_),E=Math.floor((_-T)*60);Ur.innerHTML=`<b>\u{1F3DD}\uFE0F ${ar(s?r.name?r.name.replace(/的(小店|家)$/,"")+"\u7684\u5CF6":"\u6211\u7684\u5CF6":(n.owner&&n.owner.name||"\u597D\u53CB")+"\u7684\u5CF6")}</b>${String(T).padStart(2,"0")}:${String(E).padStart(2,"0")}\u30FB${_<5||_>=19.5?"\u591C\u665A \u{1F319}":_<7?"\u6E05\u6668 \u{1F305}":_<16.5?"\u767D\u5929 \u2600\uFE0F":"\u508D\u665A \u{1F307}"}`}ue(),we();let Kt="wall";function Be(){let _=Object.keys(Vi).map(E=>`<button class="h3tab ${Kt===E?"on":""}" type="button" data-i3="tab" data-k="${E}">${yy[E]}</button>`).join(""),T=Vi[Kt].map(([E,F])=>{let K=typeof E=="string"&&E[0]==="#";return`<button class="i3opt ${String(r.ex[Kt])===String(E)?"on":""}" type="button" data-i3="opt" data-v="${E}">${K?`<i style="background:${E}"></i>`:""}${ar(F)}</button>`}).join("");it.innerHTML=`<div class="h3tabs">${_}</div><div class="i3row">${T}</div>`}function en(_){W.mode=_,pn(),W.tgt=null,it.classList.toggle("on",_==="edit"),ue(),Ur.style.display=_==="edit"?"none":"",_==="edit"?(Be(),W.distT=14,W.pitchT=.5,W.yawT=gt.f===2?Math.PI:0):(W.distT=17,W.pitchT=.72,Nn())}let Ke=0;function Nn(){s&&(clearTimeout(Ke),Ke=setTimeout(()=>{try{i.save&&i.save(r)}catch{}},500))}function We(_){pn(),W.talk=_,_.state="talk",(!_.deck||!_.deck.length)&&(_.deck=_.d.lines.map(F=>({kind:F[0],text:F[1]})).sort(()=>Math.random()-.5));let T=_.deck.pop(),E=Ir[T.kind]||Ir.chat;et.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${n.walk[_.d.spr]}')"></div><div class="h3nm"><b>${ar(_.d.name)}</b><small>${ar(_.d.role||"")}</small></div><span class="h3k" style="background:${E.c}">${E.tag}</span><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t${T.kind==="mind"?" mind":""}">${T.kind==="mind"?"\uFF08"+ar(T.text)+"\uFF09":"\u300C"+ar(T.text)+"\u300D"}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">\u518D\u807D\u4E00\u53E5 \u203A</button></div>`,et.classList.toggle("r",Dn(new z(_.x,1,_.z)).x<nn().left+nn().width/2),et.classList.add("on")}function te(_,T,E,F){pn(),et.innerHTML=`<div class="h3h"><div class="h3nm"><b>${ar(_)}</b><small>${ar(T||"")}</small></div><button class="h3x" type="button" data-i3="close">\xD7</button></div><p class="h3t">${E}</p>${F?`<div class="h3bt">${F}</div>`:""}`,et.classList.remove("r"),et.classList.add("on")}function pn(){et.classList.remove("on");let _=W.talk;W.talk=null,_&&_.state==="talk"&&(_.state="idle",_.t=rr(1,2))}let He=_=>{let T=_.target.closest("[data-i3]");if(!T||!e.contains(T))return;let E=T.dataset.i3;if(E==="close")pn();else if(E==="more"&&W.talk)We(W.talk);else if(E==="edit")W.mode==="walk"&&en("edit");else if(E==="done")en("walk");else if(E==="tab")Kt=T.dataset.k,Be();else if(E==="opt"){let F=T.dataset.v;r.ex[Kt]=/^\d$/.test(F)?+F:F,ft(gt),Be(),Nn()}else if(E==="home"){let F=gt;pn(),G(F.door.x,F.door.z,()=>zn("home"))}else if(E==="enter")pn(),zn("home");else if(E==="shopin"){pn();let F=xo[0];G(F.door.x,F.door.z,()=>zn("shop"))}else E==="time"&&(jt=(jt+1)%kt.length,ue(),we(),J(jt?`\u9810\u89BD\uFF1A${kt[jt][1]}\uFF08\u518D\u6309\u56DE\u5230\u73FE\u5728\u6642\u9593\uFF09`:"\u56DE\u5230\u73FE\u5728\u6642\u9593"))};e.addEventListener("click",He);function zn(_){if(!W.entering){W.entering=!0;try{i.enter&&i.enter(_||"home")}catch{W.entering=!1}}}function G(_,T,E){let F=Vs(Q.x,Q.z,_,T);if(!F){J("\u8D70\u4E0D\u904E\u53BB");return}W.tgt={path:F,fn:E}}let nn=()=>t.getBoundingClientRect(),Ui=new Ra,Oe=new Et,ri=new Pi(new z(0,1,0),0),Ni=new z,Fn=(_,T)=>{let E=nn();return Oe.set((_-E.left)/E.width*2-1,-((T-E.top)/E.height*2-1)),Oe},Dn=_=>{let T=_.clone().project(u),E=nn();return{x:(T.x+1)/2*E.width+E.left,y:(1-T.y)/2*E.height+E.top}},An=new Map,yn=null,Kn=null;t.addEventListener("contextmenu",_=>_.preventDefault()),t.addEventListener("pointerdown",_=>{_.preventDefault();try{t.setPointerCapture(_.pointerId)}catch{}if(An.set(_.pointerId,{x:_.clientX,y:_.clientY}),An.size===2){let[T,E]=[...An.values()];Kn={d:Math.hypot(T.x-E.x,T.y-E.y),dist:W.distT,ang:Math.atan2(E.y-T.y,E.x-T.x),yaw:W.yawT},yn=null;return}yn={id:_.pointerId,x:_.clientX,y:_.clientY,moved:0,yaw0:W.yawT,pit0:W.pitchT}}),t.addEventListener("pointermove",_=>{if(An.has(_.pointerId)&&An.set(_.pointerId,{x:_.clientX,y:_.clientY}),Kn&&An.size>=2){let[F,K]=[...An.values()];W.distT=Bi(Kn.dist*Kn.d/Math.max(20,Math.hypot(F.x-K.x,F.y-K.y)),7,40),W.yawT=Kn.yaw-(Math.atan2(K.y-F.y,K.x-F.x)-Kn.ang);return}if(!yn||yn.id!==_.pointerId)return;let T=_.clientX-yn.x,E=_.clientY-yn.y;!yn.moved&&Math.hypot(T,E)>8&&(yn.moved=1),yn.moved&&(W.yawT=yn.yaw0-T*.007,W.pitchT=Bi(yn.pit0+E*.005,.22,1.3))});let ss=_=>{An.delete(_.pointerId),An.size<2&&(Kn=null),!(!yn||yn.id!==_.pointerId)&&(yn.moved||jn(_.clientX,_.clientY),yn=null)};t.addEventListener("pointerup",ss),t.addEventListener("pointercancel",ss),t.addEventListener("wheel",_=>{_.preventDefault(),W.distT=Bi(W.distT+Math.sign(_.deltaY)*1.6,7,40)},{passive:!1});let vs=_=>{if(!document.contains(t)||/input|textarea/i.test(_.target&&_.target.tagName||""))return;let T=_.key.toLowerCase();/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(T)&&(W.keys[T]=1,/^[qe]$/.test(T)||(W.tgt=null),_.preventDefault())},Ua=_=>{delete W.keys[_.key.toLowerCase()]};document.addEventListener("keydown",vs),document.addEventListener("keyup",Ua);function cn(_,T){let E=null,F=1e9;for(let K of Ei){let ut=Dn(new z(K.x,0,K.z)),wt=Dn(new z(K.x,K.h+.2,K.z)),bt=ut.y-wt.y;if(bt<6)continue;let Pt=Math.max(bt*.38,26),_t=Math.abs(_-ut.x);if(_t<Pt&&T>wt.y-10&&T<ut.y+10){let Re=_t;Re<F&&(F=Re,E=K)}}return E}function jn(_,T){if(W.mode==="edit")return;let E=cn(_,T);if(E){let K=Math.hypot(E.x-Q.x,E.z-Q.z);We(E),K>3&&G(E.x+(Q.x-E.x)/K*1.4,E.z+(Q.z-E.z)/K*1.4);return}Ui.setFromCamera(Fn(_,T),u);let F=Ui.intersectObjects(l.children,!0).filter(K=>K.object.isMesh&&(K.object.userData.house||K.object.userData.shop));if(F.length){let K=F[0].object.userData;if(K.house){let ut=K.house;ut.own?(te(s?"\u6211\u7684\u5BB6":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5BB6`,r.name||"",s?"\u8981\u9032\u5C4B\u55CE\uFF1F\u88E1\u9762\u53EF\u4EE5\u5E03\u7F6E\u5BB6\u5177\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3002":"\u5E97\u9577\u5728\u5BB6\u88E1\u6253\u76F9\uFF0C\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="enter">\u{1F6AA} \u9032\u5C4B</button>'),G(ut.door.x,ut.door.z)):(te(ut.label,"\u5CF6\u4E0A\u7684\u5C45\u6C11","\u9580\u95DC\u8457\uFF0C\u4E3B\u4EBA\u597D\u50CF\u51FA\u53BB\u6563\u6B65\u4E86\uFF5E"),G(ut.door.x,ut.door.z));return}if(K.shop){let ut=K.shop;if(ut.k==="izakaya"){te(r.name||"\u5C45\u9152\u5C4B",s?"\u4F60\u7684\u5E97":`${n.owner&&n.owner.name||"\u597D\u53CB"}\u7684\u5E97`,s?"\u4F60\u7684\u5C45\u9152\u5C4B\uFF1A\u9032\u53BB\u53EF\u4EE5\u5E03\u7F6E\u3001\u6536\u6536\u9280\u53F0\u7684\u9322\u3001\u770B\u5BA2\u4EBA\u3002":"\u9032\u53BB\u901B\u901B\u5427\uFF01",'<button class="h3n" type="button" data-i3="shopin">\u{1F3EE} \u9032\u5E97</button>'),G(ut.door.x,ut.door.z);return}te(ut.n,"\u5E97\u92EA\uFF08\u9020\u666F\uFF09","\u73FE\u5728\u662F\u9020\u666F\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5F9E\u9019\u88E1\u76F4\u63A5\u958B\u5E97\u71DF\u696D\u3002"),G(ut.door.x,ut.door.z);return}}if(pn(),Ui.ray.intersectPlane(ri,Ni)){let K=Vs(Q.x,Q.z,Ni.x,Ni.z);K&&(W.tgt={path:K})}}let cr=[[0,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1],[4.5,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[6,"#5a6ab8","#ffb38a","#ffb070",.9,.9,"#e8b8a0",.5],[7.5,"#6ec0f4","#d8f0ff","#fff0d0",2.1,1.3,"#c8e8ff",0],[16,"#5ab4f0","#d0ecff","#fff2dc",2.2,1.4,"#c4e6ff",0],[17.6,"#7a8ad8","#ffb070","#ff9a50",1.4,1,"#f0b890",.25],[18.8,"#3a3a88","#d07a8a","#ff7a60",.6,.75,"#7a5a8a",.7],[20,"#141a46","#3a3466","#8090ff",.25,.6,"#22244a",1],[24,"#0e1236","#2a2a5a","#8090ff",.25,.55,"#1a1d40",1]],yo=new Me,zr=new Me,Qn=new Me;function vo(_){let T=0;for(;T<cr.length-2&&_>=cr[T+1][0];)T++;let E=cr[T],F=cr[T+1],K=Bi((_-E[0])/(F[0]-E[0]),0,1),ut=wt=>yo.set(E[wt]).clone().lerp(zr.set(F[wt]),K);return{zen:ut(1),hor:ut(2),sunC:ut(3),sunI:fu(E[4],F[4],K),hemiI:fu(E[5],F[5],K),fog:ut(6),night:fu(E[7],F[7],K)}}let Na=-1;function bo(_){let T=vo(_),E=L.attributes.position;for(let bt=0;bt<E.count;bt++){let Pt=E.getY(bt)/300;Qn.copy(T.hor).lerp(T.zen,Bi((Pt+.05)/.55,0,1));let _t=L.attributes.color.array;_t[bt*3]=Qn.r,_t[bt*3+1]=Qn.g,_t[bt*3+2]=Qn.b}L.attributes.color.needsUpdate=!0,h.color.copy(T.fog),o.setClearColor(T.fog),Ft.color.copy(T.sunC),Ft.intensity=T.sunI,Dt.intensity=T.hemiI,$t.intensity=.2+T.night*.15,Dt.color.set(T.night>.5?"#8a9aff":"#dff2ff");let F=(_-6)/12*Math.PI,K=Math.sin(F);at.position.set(Math.cos(F)*260,Math.max(-40,K*220),-60),at.material.opacity=Bi(K*3,0,1);let ut=((_+6)%24-6)/12*Math.PI;rt.position.set(-Math.cos(F)*240,Math.max(30,Math.abs(Math.sin(ut))*200),-80),rt.material.opacity=T.night,At.userData.m.opacity=T.night*.9;let wt=T.night;q.forEach(bt=>{bt.material.opacity=wt*(bt.userData.k||.75)}),V.forEach(bt=>bt.color.copy(bt.userData.day).lerp(bt.userData.night,wt)),pt.color.set("#ffffff").lerp(Qn.set("#3a4a8a"),wt*.6),lt.children.forEach(bt=>bt.children.forEach(Pt=>Pt.material.color.set("#ffffff").lerp(Qn.set("#4a4a7a"),wt*.8))),W.night=wt}let hr={get dead(){return W.dead},set dead(_){_&&Fr()},dispose:Fr,kind:"island",probe(){let _=T=>{let E=Dn(T);return{x:Math.round(E.x),y:Math.round(E.y)}};return{mode:W.mode,me:{x:+Q.x.toFixed(2),z:+Q.z.toFixed(2)},calls:o.info.render.calls,tris:o.info.render.triangles,yaw:+W.yaw.toFixed(2),pitch:+W.pitch.toFixed(2),ex:Object.assign({},r.ex),night:+(W.night||0).toFixed(2),card:et.classList.contains("on")?et.textContent:"",myDoor:_(new z(gt.door.x,1.2,gt.door.z-2.8*(gt.f===2?-1:1))),myHouse:_(new z(gt.x,2,gt.z)),npcs:Ei.map(T=>Object.assign({id:T.d.id,state:T.state},_(new z(T.x,T.h*.5,T.z))))}},px(_,T,E){let F=Dn(new z(_,T,E));return{x:Math.round(F.x),y:Math.round(F.y)}},teleport(_,T){Q.x=_,Q.z=T,W.cam.set(_,1,T)},setYaw(_){W.yaw=W.yawT=_},setPitch(_){W.pitch=W.pitchT=_},setDist(_){W.dist=W.distT=_},setHour(_){kt[0][0]=_,Na=-1}};function Fr(){if(!W.dead){if(W.dead=!0,cancelAnimationFrame(W.raf),clearTimeout(Ke),s)try{i.save&&i.save(r,!0)}catch{}document.removeEventListener("keydown",vs),document.removeEventListener("keyup",Ua),e.removeEventListener("click",He),Wi.forEach(_=>_.remove()),l.traverse(_=>{_.geometry&&_.geometry.dispose(),(_.material?Array.isArray(_.material)?_.material:[_.material]:[]).forEach(E=>{E.map&&E.map.dispose(),E.dispose()})});try{o.dispose(),o.forceContextLoss()}catch{}}}let rs=0,ur=0,Or=0,as=1,kr=0,za=0,bs=new z,Mi=new z,Ms=new z;function Xi(){let _=t.getBoundingClientRect(),T=Math.max(1,t.clientWidth),E=Math.max(1,t.clientHeight),F=Math.min(2,window.devicePixelRatio||1),K=Math.round(Bi(1.75-((_.height||E)-380)/440*.6,1.15,1.75)*20)/20;K!==Qt&&(Qt=K,Le.forEach(ut=>{ut.h=ut.h0*Qt,ut.w=ut.h*ut.ar})),!(T===rs&&E===ur&&F===Or)&&(rs=T,ur=E,Or=F,as=Bi(_.width*F/T,.5,2),as=Math.min(as,Math.sqrt(16e5/(T*E))),o.setPixelRatio(as),o.setSize(T,E,!1),u.aspect=T/E,u.updateProjectionMatrix())}function je(_){if(W.dead)return;if(!document.contains(t)){Fr();return}W.raf=requestAnimationFrame(je);let T=Math.min(.1,(_-W.last)/1e3);W.last=_,W.t+=T;let E=W.t;Xi(),kr+=T,za++,kr>1.5&&(kr/za>.03&&as>.6&&(as=Math.max(.6,as*.85),o.setPixelRatio(as),o.setSize(rs,ur,!1)),kr=0,za=0);let F=Ht();Math.abs(F-Na)>.02&&(bo(F),Na=F,we());let K=W.keys;K.q&&(W.yawT+=T*1.8),K.e&&(W.yawT-=T*1.8),W.yaw+=(W.yawT-W.yaw)*Math.min(1,T*9),W.pitch+=(W.pitchT-W.pitch)*Math.min(1,T*9),W.dist+=(W.distT-W.dist)*Math.min(1,T*6);let ut=Math.sin(W.yaw),wt=Math.cos(W.yaw);if(bs.set(-ut,0,-wt),Mi.set(wt,0,-ut),Q.moving=!1,W.mode==="walk"){let Rt=0,Mt=0,be=1e9,fe=(K.arrowright||K.d?1:0)-(K.arrowleft||K.a?1:0),Ne=(K.arrowup||K.w?1:0)-(K.arrowdown||K.s?1:0);if(fe||Ne)Rt=Mi.x*fe+bs.x*Ne,Mt=Mi.z*fe+bs.z*Ne;else if(W.tgt){let In=W.tgt.path[0];if(In){let hn=In[0]-Q.x,Ge=In[1]-Q.z,vn=Math.hypot(hn,Ge);vn<.1?W.tgt.path.shift():(Rt=hn,Mt=Ge,be=vn)}else{let hn=W.tgt.fn;W.tgt=null,hn&&hn()}}let mn=Math.hypot(Rt,Mt);if(mn>.01){let In=Math.min(5*T,be),hn=Rt/mn*In,Ge=Mt/mn*In,vn=!1;if(Ot(Q.x+hn,Q.z+Ge,.3)?Ot(Q.x+hn,Q.z,.3)?Ot(Q.x,Q.z+Ge,.3)||(Q.z+=Ge,vn=!0):(Q.x+=hn,vn=!0):(Q.x+=hn,Q.z+=Ge,vn=!0),vn){Q.moving=!0,Q.ph+=T*10;let Pn=Rt/mn*Mi.x+Mt/mn*Mi.z;Math.abs(Pn)>.2&&(Q.face=Pn>0?1:-1)}else if(W.tgt&&(W.tgt.stuck=(W.tgt.stuck||0)+T,W.tgt.stuck>.5)){let Pn=W.tgt.fn;W.tgt=null,Pn&&Pn()}W.talk&&Math.hypot(W.talk.x-Q.x,W.talk.z-Q.z)>9&&pn()}}Q.y=0;for(let Rt of Yt)if(+(Rt.own?r.ex:Rt.ex).porch&&Math.abs(Q.x-Rt.x)<mt/2+.3){let Mt=(Q.z-Rt.z)*(Rt.f===2?-1:1);Mt>1.42&&Mt<3.15&&(Q.y=.3)}for(let Rt of Ei){if(Rt.moving=!1,Rt.state==="talk"){Rt.face=(Q.x-Rt.x)*Mi.x+(Q.z-Rt.z)*Mi.z>0?1:-1;continue}if(Rt.state==="idle"){Rt.t-=T,Rt.t<=0&&Jn(Rt);continue}let Mt=Rt.tx-Rt.x,be=Rt.tz-Rt.z,fe=Math.hypot(Mt,be);if(fe<.1){Rt.state="idle",Rt.t=Math.random()<.3?rr(3,8):rr(.2,1);continue}let Ne=Math.min(fe,Rt.sp*T);Rt.x+=Mt/fe*Ne,Rt.z+=be/fe*Ne,Rt.moving=!0,Rt.ph+=T*(4+Rt.sp*3);let mn=Mt*Mi.x+be*Mi.z;Math.abs(mn)>.05&&(Rt.face=mn>0?1:-1)}let bt=Q.x,Pt=Q.z;W.mode==="edit"&&(bt=gt.x,Pt=gt.z+(gt.f===2?-1:1)*3.2),W.cam.x+=(bt-W.cam.x)*Math.min(1,T*8),W.cam.z+=(Pt-W.cam.z)*Math.min(1,T*8),W.cam.y+=((W.mode==="edit"?1.8:1.1)-W.cam.y)*Math.min(1,T*4);let _t=rs/ur,Re=W.dist*(_t<1.4?1.4/_t:1);Ms.set(W.cam.x+ut*Math.cos(W.pitch)*Re,W.cam.y+Math.sin(W.pitch)*Re,W.cam.z+wt*Math.cos(W.pitch)*Re),Ms.y<.8&&(Ms.y=.8),u.position.copy(Ms),u.lookAt(W.cam.x,W.cam.y+.4,W.cam.z),H.position.copy(Ms),Ft.position.set(W.cam.x+30,60,W.cam.z+22),Ft.target.position.set(W.cam.x,0,W.cam.z),W.night>.6&&Ft.position.set(W.cam.x-25,50,W.cam.z+30);let ai=Math.atan2(Ms.x-W.cam.x,Ms.z-W.cam.z);for(let Rt of Le){let Mt=Rt.w,be=Rt.h,fe=Rt.moving,Ne=Math.sin(Rt.ph),mn=fe?Math.abs(Ne)*.06:0,In=fe?Ne*.06:Math.sin(E*1.6+Rt.ph)*.01,hn=fe?1+Math.cos(Rt.ph*2)*.025:1+Math.sin(E*1.6+Rt.ph)*.008;Rt.grp.position.set(Rt.x,(Rt.y||0)+mn,Rt.z),Rt.m.rotation.set(0,ai,In*Rt.face),Rt.m.scale.set(Mt*Rt.face*(2-hn),be*hn,1),Rt.sh.position.set(Rt.x,(Rt.y||0)+.07,Rt.z),Rt.sh.scale.set(Mt*.7,Mt*.4,1),Rt.tag&&Rt.tag.position.set(Rt.x,(Rt.y||0)+be+.35,Rt.z),Rt.bub&&(Rt.bub.visible=Rt!==W.talk,Rt.bub.position.set(Rt.x,be+.5+Math.sin(E*2.3+Rt.ph)*.06,Rt.z))}Ee.offset.set(E*.004,E*.006),vt.forEach((Rt,Mt)=>{Mt===0?Rt.rotation.z=E*.3:Rt.scale.y=1+Math.sin(E*6)*.08}),lt.children.forEach(Rt=>{Rt.userData.a+=T*.004,Rt.position.x=Math.cos(Rt.userData.a)*Rt.userData.R,Rt.position.z=Math.sin(Rt.userData.a)*Rt.userData.R,Rt.lookAt(0,Rt.position.y,0)});let Xn=lt.userData.boat;Xn&&(Xn.position.y=-.2+Math.sin(E*1.2)*.08,Xn.rotation.z=Math.sin(E*.9)*.04),o.render(l,u)}return W.raf=requestAnimationFrame(je),hr}var fi=(n,t)=>n+Math.random()*(t-n),es=(n,t,e)=>Math.max(t,Math.min(e,n));var ns=n=>()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},ln=n=>String(n==null?"":n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),mu=new Uint8Array(256).map((n,t)=>{let e=t/255;return Math.round(255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055))}),lr=n=>"\xA5"+Math.round(n).toLocaleString("en-US"),xe=10,xt=8,Gn=3.1,yi=4,vi=6,is=(yi+vi)/2,_s=-10,ys=xe+10,Ed=xt+9,Ad=-4,Rd=xe+4,wy=xt+1,xu=xt+4,di={x:7.3,z:xt+1.4},Ll=new Set;for(let n=xt;n<xu+1;n++)for(let t=yi;t<vi;t++)Ll.add(t+","+n);Ll.add("7,"+(xt+1));var vu=[[0,"\u51B7\u6E05\u5C0F\u5E97"],[15,"\u6EAB\u6696\u5C0F\u9928"],[35,"\u719F\u5BA2\u611B\u5E97"],[65,"\u8857\u574A\u540D\u5E97"],[100,"\u4EBA\u6C23\u540D\u5E97"],[150,"\u50B3\u8AAA\u540D\u5E97"]];function _o(n){let t=0,e={};for(let[i]of n.it||[]){let s=Te[i];s&&(e[i]=(e[i]||0)+1,t+=e[i]<=2?s.c:s.c*.4)}return n.fl&&n.fl!=="wood"&&(t+=6),n.wa&&n.wa!=="tsuchi"&&(t+=6),t+=Object.keys(e).length*1.5,Math.round(t)}function _u(n){let t=0;return vu.forEach((e,i)=>{n>=e[0]&&(t=i)}),t}var yu=n=>Math.min(8e4,3e3+n*400);function Cd(n){return{v:1,name:n||"\u6211\u7684\u5C0F\u5E97",fl:"wood",wa:"tsuchi",fo:{wood:1},wo:{tsuchi:1},cl:0,gc:{},it:[["register",7,1,0],["counter",4,1,0],["stool",4,2,0],["stool",5,2,0],["table",1,4,0],["chair",1,3,0],["chair",2,5,2],["lantern",8,5,0],["menu",3,0,0],["beer",1,4,0],["edamame",2,4,0],["pine",7,1,0]],inv:{chair:2,maneki:1,ajisai:1,zabu:2}}}function Sy(){return{v:1,fl:"light",wa:"cream",fo:{wood:1,light:1},wo:{tsuchi:1,cream:1},gc:{},it:[["tv",1,0,0],["carpet",1,1,0],["ctable",1,1,0],["sofa",1,3,2],["flamp",0,3,0],["mug",1,1,0],["kcounter",4,0,0],["fridge",6,0,0],["bed",7,0,0],["nstand",9,0,0],["dlamp",9,0,0],["table",4,3,0],["chair",4,2,0],["chair",5,4,2],["cake",4,3,0],["monstera",0,7,0],["wwin",4,0,0],["photos",0,2,1],["clock",9,3,3],["catbed",9,6,0]],inv:{armchair:1,books:1,cactus:1,teddy:1}}}function Ty(){return{v:1,name:"\u5343\u4EE3\u7684\u751C\u54C1\u5C4B",fl:"tatami",wa:"sakura",it:[["register",8,1,0],["counter",6,1,0],["stool",6,2,0],["stool",7,2,0],["shelf",4,0,0],["scroll",1,0,0],["mado",6,0,0],["clock",9,2,3],["tatami",0,4,0],["chabu",1,5,0],["zabu",0,5,0],["zabu",1,6,0],["sushi",1,5,0],["tank",9,6,0],["sakura",0,1,0],["andon",0,3,0],["table",5,5,0],["chair",5,4,0],["chair",6,6,2],["ramen",5,5,0],["beer",6,5,0],["byobu",3,6,1],["hibachi",8,4,0],["maneki",8,1,0],["chochin",2,0,0],["ajisai",9,4,0],["tanuki",9,10,0],["stonel",2,9,0],["bamboo",9,9,0],["step",6,10,0],["barrel",1,9,0],["jukebox",9,0,0]]}}var gu={tank:"\u91D1\u9B5A\u6E38\u4F86\u6E38\u53BB\uFF0C\u770B\u8457\u770B\u8457\u5C31\u653E\u9B06\u4E86\uFF5E",sakura:"\u5E97\u88E1\u5C45\u7136\u6709\u6AFB\u82B1\uFF01\u597D\u50CF\u4E00\u5E74\u5230\u982D\u90FD\u662F\u6625\u5929\u3002",tanuki:"\u9019\u96BB\u72F8\u8C93\u7684\u809A\u5B50\u2026\u2026\u6211\u53EF\u4EE5\u6478\u4E00\u4E0B\u55CE\uFF1F",jukebox:"\u5531\u7247\u6A5F\u7684\u8072\u97F3\u6C99\u6C99\u7684\uFF0C\u597D\u6709\u5473\u9053\u3002",hibachi:"\u706B\u9262\u6696\u6696\u7684\uFF0C\u624B\u4F38\u904E\u53BB\u70E4\u4E00\u4E0B\u597D\u8212\u670D\u3002",byobu:"\u5C4F\u98A8\u5F8C\u9762\u7684\u4F4D\u5B50\uFF0C\u9069\u5408\u8B1B\u6084\u6084\u8A71\u3002",shelf:"\u9019\u4E00\u6574\u6AC3\u6E05\u9152\u2026\u2026\u8001\u95C6\u4E00\u5B9A\u5F88\u61C2\u9152\u3002",stonel:"\u9580\u53E3\u7684\u77F3\u71C8\u7C60\u597D\u6709\u6C23\u6C1B\uFF0C\u50CF\u5728\u4EAC\u90FD\u3002",mado:"\u5713\u7A97\u5916\u9762\u7684\u6708\u4EAE\u597D\u5713\u3002",fuji:"\u7246\u4E0A\u90A3\u5E45\u5BCC\u58EB\u5C71\uFF0C\u770B\u4E86\u5FC3\u60C5\u5C31\u958B\u95CA\u3002",maneki:"\u62DB\u8CA1\u8C93\u5728\u8DDF\u6211\u62DB\u624B\uFF01\u4ECA\u5929\u4E00\u5B9A\u6709\u597D\u4E8B\u3002",scroll:"\u300C\u4E00\u671F\u4E00\u6703\u300D\u2026\u2026\u9019\u53E5\u8A71\u771F\u597D\u3002",andon:"\u884C\u71C8\u7684\u5149\u8EDF\u8EDF\u7684\uFF0C\u773C\u775B\u597D\u8212\u670D\u3002",chochin:"\u71C8\u7C60\u4E32\u4E00\u4EAE\uFF0C\u5C31\u50CF\u5728\u904E\u796D\u5178\u3002",tatami:"\u69BB\u69BB\u7C73\u7684\u5473\u9053\uFF0C\u597D\u50CF\u56DE\u5230\u5916\u5A46\u5BB6\u3002",bamboo:"\u7AF9\u5B50\u6C99\u6C99\u7684\uFF0C\u807D\u8D77\u4F86\u597D\u6DBC\u3002",ajisai:"\u7D2B\u967D\u82B1\u958B\u5F97\u597D\u6F02\u4EAE\u3002",clock:"\u9019\u500B\u639B\u9418\u6EF4\u7B54\u6EF4\u7B54\u7684\uFF0C\u6642\u9593\u90FD\u6162\u4E0B\u4F86\u4E86\u3002",ramen:"\u684C\u4E0A\u90A3\u7897\u62C9\u9EB5\u597D\u9999\u2026\u2026\u53EF\u4EE5\u9EDE\u4E00\u6A23\u7684\u55CE\uFF1F",yakitori:"\u4E32\u71D2\u7684\u5473\u9053\u628A\u6211\u62C9\u9032\u4F86\u7684\uFF01",sushi:"\u9019\u76E4\u58FD\u53F8\u597D\u6F02\u4EAE\uFF0C\u6368\u4E0D\u5F97\u5403\u3002",barrel:"\u9152\u6A3D\u4E0A\u5BEB\u8457\u300C\u795D\u300D\uFF0C\u4ECA\u5929\u662F\u4EC0\u9EBC\u597D\u65E5\u5B50\u55CE\uFF1F"},Ey=["daruma","maneki","beer","vase","pine","sake"],Id=`
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
`,Ay=Id;function Ry(n){let t=n.cv,e=n.root,i=n.cb||{},s=!!n.own,r=n.kind==="home",a=!!n.island,o=n.data||Cd();if(o.it=(o.it||[]).filter(c=>Te[c[0]]),o.inv=o.inv||{},o.fo=o.fo||{wood:1},o.wo=o.wo||{tsuchi:1},o.gc=o.gc||{},!document.getElementById("h3css")){let c=document.createElement("style");c.id="h3css",c.textContent=Id,document.head.appendChild(c)}let l=new ya({canvas:t,antialias:(window.devicePixelRatio||1)<2,powerPreference:"high-performance",preserveDrawingBuffer:!!n.test});l.setClearColor(1709366,1);let h=new Sr;h.fog=new va(3811400,26,80);let u=new kn(40,2,.2,500),f=new Ta,p=(c,g)=>f.load(c,b=>{b.colorSpace=On,b.anisotropy=4,g&&g(b)}),d=new ii(250,24,16);{let c=[],g=d.attributes.position,b=new Me("#121032"),y=new Me("#7a4058"),I=new Me("#3a2350"),D=new Me;for(let X=0;X<g.count;X++){let Z=g.getY(X)/250;Z>.25?D.copy(I).lerp(b,es((Z-.25)/.55,0,1)):D.copy(y).lerp(I,es((Z+.05)/.3,0,1)),c.push(D.r,D.g,D.b)}d.setAttribute("color",new Ie(c,3))}let v=new ht(d,new ke({vertexColors:!0,side:Yn,fog:!1,depthWrite:!1}));v.renderOrder=-10,h.add(v);{let c=[],g=ns(11);for(let y=0;y<300;y++){let I=g()*Math.PI*2,D=.2+g()*1.2,X=230;c.push(Math.cos(I)*Math.cos(D)*X,Math.sin(D)*X,Math.sin(I)*Math.cos(D)*X)}let b=new xn;b.setAttribute("position",new Ie(c,3)),v.add(new ro(b,new ba({color:16774096,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})))}{let c=ge(128,128,b=>{let y=b.createRadialGradient(64,64,20,64,64,64);y.addColorStop(0,"rgba(255,246,214,1)"),y.addColorStop(.5,"rgba(255,240,200,1)"),y.addColorStop(.52,"rgba(255,230,180,.25)"),y.addColorStop(1,"rgba(255,230,180,0)"),b.fillStyle=y,b.fillRect(0,0,128,128)}),g=new ni(new $n({map:c,fog:!1,depthWrite:!1}));g.scale.set(40,40,1),g.position.set(-90,120,-170),v.add(g)}let S=new Rr(12103408,5914696,1.15);h.add(S);let x=(()=>{let c=new Date;return n.hour!=null?n.hour:c.getHours()+c.getMinutes()/60})(),m=x<5||x>=19.5?1:x<6.5?(6.5-x)/1.5:x>17.5?(x-17.5)/2:0,w=new Cr(16769208,.7);w.position.set(-6,12,10),h.add(w);let C=new Aa(16756832,14,13,1.3);C.position.set(xe*.3,2.7,xt*.45),h.add(C);let M=new Aa(16756832,14,13,1.3);M.position.set(xe*.72,2.7,xt*.55),h.add(M);let q=new Aa(16752720,10,9,1.4);q.position.set(is,2.4,xt+1.4),h.add(q);let N=ge(64,64,c=>{let g=c.createRadialGradient(32,32,2,32,32,32);g.addColorStop(0,"rgba(0,0,0,.7)"),g.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=g,c.fillRect(0,0,64,64)}),V=(c,g,b)=>{let y=c.clone();return y.wrapS=y.wrapT=Ns,y.repeat.set(g,b),y.needsUpdate=!0,y};function B(c,g,b,y,I,D,X,Z){let j=new ht(new an(c,g,b),y);return j.position.set(I,D,X),(Z||h).add(j),j}function L(c,g,b,y,I,D,X){let Z=new ni(new $n({map:Lr,blending:ds,transparent:!0,depthWrite:!1,opacity:I}));return X&&Z.material.color.set(X),Z.scale.set(y,y,1),Z.position.set(c,g,b),(D||h).add(Z),Z}let R={wood:()=>ge(256,256,(c,g,b)=>{let y=ns(4);for(let I=0;I<8;I++){let D=y();c.fillStyle=`hsl(28,${42+D*10}%,${44+D*8}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(60,30,10,.35)",c.fillRect(0,I*32,g,2),c.fillRect(y()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(90,50,20,.12)",c.fillRect(y()*g,I*32+6+y()*20,40+y()*60,2)}}),dark:()=>ge(256,256,(c,g,b)=>{let y=ns(8);for(let I=0;I<8;I++){let D=y();c.fillStyle=`hsl(20,${30+D*10}%,${22+D*7}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(0,0,0,.4)",c.fillRect(0,I*32,g,2),c.fillRect(y()*256|0,I*32,2,32);for(let X=0;X<5;X++)c.fillStyle="rgba(255,220,180,.05)",c.fillRect(y()*g,I*32+6+y()*20,40+y()*60,2)}}),tatami:()=>ge(256,256,(c,g,b)=>{for(let y=0;y<2;y++){let I=y*128;c.fillStyle="#c4c078",c.fillRect(I,0,128,b);for(let D=0;D<b;D+=3)c.fillStyle=D%6?"#b8b46c":"#cfcb84",c.fillRect(I,D,128,1);c.fillStyle="#2a3a2a",c.fillRect(I,0,6,b),c.fillRect(I+122,0,6,b)}}),stone:()=>ge(256,256,(c,g,b)=>{c.fillStyle="#5a5250",c.fillRect(0,0,g,b);let y=ns(6);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=y()*18|0;c.fillStyle=`rgb(${120+X},${112+X},${104+X})`,c.fillRect(D*64+3+I%2*8,I*64+3,58,58)}}),light:()=>ge(256,256,(c,g,b)=>{let y=ns(12);for(let I=0;I<8;I++){let D=y();c.fillStyle=`hsl(34,${48+D*10}%,${70+D*6}%)`,c.fillRect(0,I*32,g,32),c.fillStyle="rgba(120,80,40,.25)",c.fillRect(0,I*32,g,2),c.fillRect(y()*256|0,I*32,2,32);for(let X=0;X<6;X++)c.fillStyle="rgba(160,110,60,.1)",c.fillRect(y()*g,I*32+6+y()*20,40+y()*60,2)}}),carpetf:()=>ge(256,256,(c,g,b)=>{c.fillStyle="#e8dcc4",c.fillRect(0,0,g,b);let y=ns(14);for(let I=0;I<3e3;I++)c.fillStyle=y()<.5?"rgba(200,180,150,.35)":"rgba(255,250,240,.4)",c.fillRect(y()*g,y()*b,2,2)}),check:()=>ge(256,256,(c,g,b)=>{for(let y=0;y<4;y++)for(let I=0;I<4;I++)c.fillStyle=(I+y)%2?"#2a3a36":"#d8c8a0",c.fillRect(I*64,y*64,64,64);c.strokeStyle="rgba(0,0,0,.2)",c.lineWidth=2;for(let y=0;y<=4;y++)c.beginPath(),c.moveTo(y*64,0),c.lineTo(y*64,b),c.moveTo(0,y*64),c.lineTo(g,y*64),c.stroke()})};function H(c,g){let y=Math.round(g*64),I=Math.round(Gn*64);return ge(y,I,D=>{let X=ns(g*7|0);if(c==="plank")for(let j=0;j<y;j+=22){let Tt=X();D.fillStyle=`hsl(28,${36+Tt*8}%,${40+Tt*8}%)`,D.fillRect(j,0,22,I),D.fillStyle="rgba(40,20,10,.4)",D.fillRect(j,0,2,I)}else if(c==="red"){D.fillStyle="#b8402e",D.fillRect(0,0,y,I);for(let j=0;j<300;j++)D.fillStyle=X()<.5?"rgba(255,200,160,.05)":"rgba(60,10,0,.06)",D.fillRect(X()*y,X()*I,8,8);D.fillStyle="#5a2a14";for(let j=0;j<y;j+=128)D.fillRect(j,0,8,I)}else if(c==="ai"){D.fillStyle="#26365e",D.fillRect(0,0,y,I),D.strokeStyle="rgba(230,224,208,.5)",D.lineWidth=2;for(let j=0;j<I;j+=24)for(let Tt=j/24%2*12;Tt<y;Tt+=24)D.beginPath(),D.arc(Tt,j,9,Math.PI,0),D.stroke()}else if(c==="sakura"){D.fillStyle="#f6e6e4",D.fillRect(0,0,y,I);for(let j=0;j<y*I/900;j++){let Tt=X()*y,ze=X()*I;D.fillStyle=["#f0b8c8","#e898b0","#f8d0dc"][j%3];for(let me=0;me<5;me++){let oe=me/5*Math.PI*2;D.beginPath(),D.ellipse(Tt+Math.cos(oe)*4,ze+Math.sin(oe)*4,3.5,2,oe,0,7),D.fill()}}}else if(c==="cream"){D.fillStyle="#fbf3e2",D.fillRect(0,0,y,I);for(let j=0;j<y*I/80;j++)D.fillStyle="rgba(230,210,180,.18)",D.fillRect(X()*y,X()*I,2,2)}else if(c==="stripe")for(let j=0;j<y;j+=24)D.fillStyle=j/24%2?"#f6ecd8":"#cfe6e0",D.fillRect(j,0,24,I);else if(c==="flower"){D.fillStyle="#fff6ea",D.fillRect(0,0,y,I);for(let j=12;j<I;j+=30)for(let Tt=j/30%2*16;Tt<y;Tt+=32){D.fillStyle=["#f29ab8","#f6cf4a","#8ac8e8"][(Tt+j)%3];for(let ze=0;ze<5;ze++){let me=ze/5*Math.PI*2;D.beginPath(),D.arc(Tt+Math.cos(me)*4,j+Math.sin(me)*4,3,0,7),D.fill()}D.fillStyle="#fff",D.beginPath(),D.arc(Tt,j,2,0,7),D.fill()}}else if(c==="mint"){D.fillStyle="#bfe6d8",D.fillRect(0,0,y,I);for(let j=0;j<y*I/70;j++)D.fillStyle=X()<.5?"rgba(255,255,255,.12)":"rgba(60,120,100,.06)",D.fillRect(X()*y,X()*I,3,3)}else{D.fillStyle="#e8d4ae",D.fillRect(0,0,y,I);for(let j=0;j<y*I/60;j++)D.fillStyle=X()<.5?"rgba(160,120,70,.08)":"rgba(255,255,240,.1)",D.fillRect(X()*y,X()*I,3,3);D.fillStyle="#6b3f1f";for(let j=0;j<y;j+=64*2.5)D.fillRect(j,0,10,I)}let Z=I-.9*64;D.fillStyle=r?"#f4efe2":"#5a3218",D.fillRect(0,Z,y,.9*64),D.fillStyle=r?"rgba(0,0,0,.08)":"rgba(0,0,0,.25)";for(let j=0;j<y;j+=28)D.fillRect(j,Z,2,.9*64);D.fillStyle=r?"#d8c8a8":"#3a1e0c",D.fillRect(0,Z-6,y,8),D.fillRect(0,0,y,10)})}let st=h.children.length,nt=ge(256,256,(c,g,b)=>{c.fillStyle="#4a4246",c.fillRect(0,0,g,b);let y=ns(3);for(let I=0;I<4;I++)for(let D=0;D<4;D++){let X=(y()*16|0)-8;c.fillStyle=`rgb(${96+X},${86+X},${84+X})`,c.fillRect(D*64+2,I*64+2,60,60)}}),at=ge(256,256,(c,g,b)=>{c.fillStyle="#2c2830",c.fillRect(0,0,g,b);let y=ns(5);for(let I=0;I<700;I++){let D=34+(y()*22|0);c.fillStyle=`rgb(${D},${D-3},${D+4})`,c.fillRect(y()*g,y()*b,2,2)}});{let c=new ht(new Ve(600,600),Gt("#1c1826"));c.rotation.x=-Math.PI/2,c.position.y=-.04,h.add(c)}{let c=ys-_s+30,g=(_s+ys)/2,b=new ht(new Ve(c,6.2),Gt("#ffffff",{map:V(nt,c/3,6.2/3)}));b.rotation.x=-Math.PI/2,b.position.set(g,.005,xt+3.1),h.add(b);let y=new ht(new Ve(c,6),Gt("#ffffff",{map:V(at,c/6,1)}));y.rotation.x=-Math.PI/2,y.position.set(g,0,xt+9.2),h.add(y);for(let D=_s-14;D<ys+14;D+=3.4)B(1.7,.02,.14,tn("#cfc8b4"),D,.02,xt+9.2);B(c,.16,.2,Gt("#7a6e66"),g,.08,xt+6.15);let I=new ht(new Ve(c,5),Gt("#ffffff",{map:V(nt,c/3,5/3)}));I.rotation.x=-Math.PI/2,I.position.set(g,.005,xt+14.7),h.add(I)}let yt=h.children.length,rt=new Qe({color:"#ffffff"}),At=new ht(new Ve(xe,xt),rt);At.rotation.x=-Math.PI/2,At.position.set(xe/2,.02,xt/2),h.add(At);function lt(c){rt.map&&rt.map.dispose();let g=(R[c]||R.wood)();g.wrapS=g.wrapT=Ns,g.repeat.set(xe/2,xt/2),rt.map=g,rt.needsUpdate=!0}B(xe+.4,.12,xt+.4,Gt("#2a1810"),xe/2,-.075,xt/2);let Dt={back:new Qe,left:new Qe,right:new Qe,front:new Qe},$t=ge(256,200,(c,g,b)=>{c.fillStyle="#5a3a24",c.fillRect(0,0,g,b);for(let y=0;y<g;y+=16)c.fillStyle=y%32?"#4a2e1c":"#6a4630",c.fillRect(y,0,14,b);c.fillStyle="#2a1810",c.fillRect(0,b-40,g,40)}),Ft=new Qe({map:V($t,3,1)}),ie=Gt("#3a2214"),Ee={};function pt(c,g,b,y,I,D){let X=new ve;X.position.set(y,0,I),h.add(X);let Z=new ht(new an(g,Gn,b),D);return Z.position.y=Gn/2,X.add(Z),Ee[c]=Ee[c]||[],Ee[c].push(X),X}pt("back",xe+.4,.2,xe/2,-.1,[ie,ie,ie,ie,Dt.back,Ft]),pt("left",.2,xt,-.1,xt/2,[Dt.left,Ft,ie,ie,ie,ie]),pt("right",.2,xt,xe+.1,xt/2,[Ft,Dt.right,ie,ie,ie,ie]);let It=ge(640,200,(c,g,b)=>{c.fillStyle="#6a4228",c.fillRect(0,0,g,b);for(let I=0;I<g;I+=14)c.fillStyle=I%28?"#5a3620":"#74482c",c.fillRect(I,0,12,b);let y=I=>{c.fillStyle="#ffd98a",c.fillRect(I,56,128,70),c.strokeStyle="#2a1408",c.lineWidth=6,c.strokeRect(I,56,128,70),c.lineWidth=3;for(let D=1;D<4;D++)c.beginPath(),c.moveTo(I+D*32,56),c.lineTo(I+D*32,126),c.stroke();c.beginPath(),c.moveTo(I,91),c.lineTo(I+128,91),c.stroke()};y(64),y(448),c.fillStyle="#2a1810",c.fillRect(0,b-40,g,40)}),se=new ke({map:It}),zt=(c,g)=>{let b=new ke({map:It.clone()});return b.map.needsUpdate=!0,b.map.repeat.set(g-c,1),b.map.offset.set(c,0),b};pt("front",yi+.2,.2,(yi-.2)/2,xt+.1,[ie,ie,ie,ie,zt(0,(yi+.2)/(xe+.4)),Dt.front]),pt("front",xe-vi+.2,.2,(vi+xe+.2)/2,xt+.1,[ie,ie,ie,ie,zt((vi+.2)/(xe+.4),1),Dt.front]);{let c=new ve;c.position.set(is,0,xt+.1),h.add(c),B(vi-yi,Gn-2.35,.2,Gt("#4a2a14"),0,2.35+(Gn-2.35)/2,0,c),Ee.front.push(c)}function he(c){let g={back:xe+.4,left:xt,right:xt,front:xe+.4};for(let b in Dt){let y=Dt[b];y.map&&y.map.dispose(),y.map=H(c,g[b]),y.needsUpdate=!0}}let le=new ve;h.add(le),Ee.front.push(le);let ae=Gt("#3a2214");B(.22,2.45,.34,ae,yi+.05,1.22,xt+.14,le),B(.22,2.45,.34,ae,vi-.05,1.22,xt+.14,le),B(vi-yi+.4,.24,.38,ae,is,2.42,xt+.14,le);let Ue=new ve;Ue.position.set(is,2.32,xt+.3),le.add(Ue);let vt=ge(256,140,(c,g,b)=>{for(let y=0;y<3;y++){let I=4+y*84;c.fillStyle="#23315c",c.fillRect(I,0,80,b-6),c.fillStyle="rgba(0,0,0,.22)",c.fillRect(I,b-16,80,10)}c.fillStyle="#f3e6c8",c.textAlign="center",c.textBaseline="middle",c.font=`900 50px ${Cn}`,["\u55B6","\u696D","\u4E2D"].forEach((y,I)=>c.fillText(y,44+I*84,56))}),Lt=new ht(new Ve(1.95,1.05),new ke({map:vt,transparent:!0,side:Rn,alphaTest:.05}));Lt.position.y=-.52,Ue.add(Lt);let O=document.createElement("canvas");O.width=640,O.height=140;let re=new Ma(O);re.colorSpace=On,re.anisotropy=4;function mt(){let c=O.getContext("2d"),g=640,b=140;c.clearRect(0,0,g,b),c.fillStyle="#f3e2bd",c.strokeStyle="#2a1810",c.lineWidth=10,ir(c,6,6,g-12,b-12,16),c.fill(),c.stroke(),c.fillStyle="#3a1e0c",c.textAlign="center",c.textBaseline="middle";let y=72,I=o.name||"";for(c.font=`900 ${y}px ${Cn}`;c.measureText(I).width>g-60&&y>24;)y-=2,c.font=`900 ${y}px ${Cn}`;c.fillText(I,g/2,b/2+4),re.needsUpdate=!0}mt();{let c=new ht(new an(3.6,.76,.12),[ae,ae,ae,ae,new ke({map:re}),ae]);c.position.set(is,2.86,xt+.34),le.add(c)}let Ut=[];for(let c of[yi-.45,vi+.45]){let g=new ve;g.position.set(c,1.95,xt+.45),le.add(g);let b=new ht(new ii(.28,16,12),tn("#e2452f"));b.scale.y=1.3,g.add(b),B(.26,.06,.26,tn("#2a1810"),0,.38,0,g),B(.26,.06,.26,tn("#2a1810"),0,-.38,0,g),Ut.push(L(0,0,.12,2.3,.55,g))}let Ct=new ve;h.add(Ct);{let c=ge(128,128,(D,X,Z)=>{D.fillStyle="#2c3044",D.fillRect(0,0,X,Z);for(let j=0;j<Z;j+=16){D.fillStyle="#3a4058",D.fillRect(0,j,X,3);for(let Tt=j/16%2*16;Tt<X;Tt+=32)D.fillStyle="#20242f",D.fillRect(Tt,j,2,16)}}),g=new Qe({map:V(c,6,3)}),b=Math.hypot(xt/2+.9,1.6);for(let D of[-1,1]){let X=new ht(new an(xe+1.6,.14,b),g);X.position.set(xe/2,Gn+1.5,xt/2+D*(xt/4+.45)),X.rotation.x=D*Math.atan2(1.6,xt/2+.9),Ct.add(X)}let y=new ht(new an(xe+1.7,.2,.3),Gt("#1c1f2a"));y.position.set(xe/2,Gn+2.32,xt/2),Ct.add(y);for(let D of[-.2,xe+.2]){let X=new xn;X.setAttribute("position",new Ie([D,Gn,-.2,D,Gn,xt+.2,D,Gn+2.32,xt/2,D,Gn,-.2,D,Gn+.7,-.9,D,Gn+2.32,xt/2,D,Gn,xt+.2,D,Gn+.7,xt+.9,D,Gn+2.32,xt/2],3)),X.computeVertexNormals(),Ct.add(new ht(X,new Qe({color:"#4a2e1c",side:Rn})))}for(let D of[-.1,xt+.1]){let X=new ht(new an(xe+.4,1,.2),Ft);X.position.set(xe/2,Gn+.5,D),Ct.add(X)}let I=new ht(new an(xe+1.4,.18,1.3),Gt("#2c3044"));I.position.set(xe/2,Gn+.72,xt+.75),I.rotation.x=.25,Ct.add(I)}let ye=h.children.length,Yt=[21,33].map(c=>ge(128,256,(g,b,y)=>{let I=ns(c);g.fillStyle="#1b1636",g.fillRect(0,0,b,y);for(let D=0;D<16;D++)for(let X=0;X<8;X++)g.fillStyle=I()<.33?I()<.5?"#ffd98a":"#ffbe68":"#272043",g.fillRect(X*16+3,D*16+3,10,10)})),U=[];function A(c,g,b,y,I,D){let X=g-c,Z=(c+g)/2,j=new ve;j.position.set(Z,0,0),h.add(j),U.push(j),B(X-.2,b,xt+1,Gt(y),0,b/2,xt/2-.4,j);let Tt=ge(Math.round(X*40),Math.round(b*40),(oe,$e,wn)=>{oe.fillStyle=y,oe.fillRect(0,0,$e,wn);for(let pi=0;pi<$e;pi+=12)oe.fillStyle="rgba(0,0,0,.12)",oe.fillRect(pi,0,2,wn);oe.fillStyle="#ffcf7a",oe.fillRect($e*.18,wn-2.2*40,$e*.64,1.6*40),oe.strokeStyle="#2a1408",oe.lineWidth=4,oe.strokeRect($e*.18,wn-2.2*40,$e*.64,1.6*40);for(let pi=1;pi<4;pi++)oe.beginPath(),oe.moveTo($e*.18+$e*.16*pi,wn-2.2*40),oe.lineTo($e*.18+$e*.16*pi,wn-.6*40),oe.stroke();b>4&&(oe.fillStyle="#ffd98a",oe.fillRect($e*.25,20,$e*.2,40),oe.fillRect($e*.55,20,$e*.2,40))}),ze=new ht(new Ve(X-.2,b),new ke({map:Tt}));ze.position.set(0,b/2,xt+.11),j.add(ze);let me=new ht(new an(X+.2,.2,1.4),Gt("#2c3044"));if(me.position.set(0,Math.min(b,3.1),xt+.7),me.rotation.x=.25,j.add(me),I){let oe=ge(256,120,(wn,pi,Ol)=>{for(let $=0;$<3;$++)wn.fillStyle=D,wn.fillRect(4+$*84,0,80,Ol-6);wn.fillStyle="#f8ecd8",wn.textAlign="center",wn.textBaseline="middle",wn.font=`900 46px ${Cn}`,[...I].forEach(($,ce)=>wn.fillText($,44+ce*84,52))}),$e=new ht(new Ve(1.8,.85),new ke({map:oe,transparent:!0,side:Rn}));$e.position.set(0,2.1,xt+.5),j.add($e)}L(0,1.2,xt+.6,3.5,.35,j)}A(-6.4,-.3,4.6,"#4a3a5a","\u7518\u5473","#8a2a3a"),A(-13,-6.6,3.4,"#3a4a4a","",""),A(xe+.3,xe+6.2,3.6,"#5a4030","\u854E\u9EA6","#2a3a2a"),A(xe+6.4,xe+13,5.4,"#3a3a5a","","");{let c=ns(17);for(let g=-40;g<60;g+=7+c()*5){let b=8+c()*18,y=6+c()*5,I=new ht(new an(y,b,6),[tn("#1c1736"),tn("#1c1736"),tn("#18132e"),tn("#18132e"),tn("#ffffff",{map:V(Yt[c()*2|0],y/5,b/6)}),tn("#1c1736")]);I.position.set(g,b/2,-12-c()*6),h.add(I)}for(let g=-40;g<60;g+=7+c()*6){let b=5+c()*10,y=5+c()*5,I=new ht(new an(y,b,6),[tn("#1c1736"),tn("#1c1736"),tn("#18132e"),tn("#18132e"),tn("#ffffff",{map:V(Yt[c()*2|0],y/5,b/6)}),tn("#1c1736")]);I.position.set(g,b/2,xt+22+c()*4),I.rotation.y=Math.PI,h.add(I)}}let tt=[];function ft(c,g){let b=new ve;b.position.set(c,0,g),h.add(b),B(.3,.14,.3,Gt("#3a3030"),0,.07,0,b),B(.11,4,.11,Gt("#2b2422"),0,2,0,b),B(.7,.09,.09,Gt("#2b2422"),0,4,0,b);let y=B(.44,.44,.44,tn("#ffe2a6"),0,3.78,0,b);tt.push(L(0,3.78,0,4.5,.55,b));let I=new ht(new Ve(6,6),new ke({map:Lr,blending:ds,transparent:!0,depthWrite:!1,opacity:.28}));I.rotation.x=-Math.PI/2,I.position.y=.03,b.add(I)}ft(-3.2,xt+5.7),ft(xe+3.2,xt+5.7),ft(-12,xt+5.7),ft(xe+12,xt+5.7);let gt=[];function dt(c,g,b){let y=new ve;y.position.set(c,0,g),y.scale.setScalar(b),h.add(y);let I=new ht(new _i(.16,.26,2.6,7),Gt("#4a3024"));I.position.y=1.3,y.add(I);let D=["#f4b8c8","#f8d0dc","#e898b0"];[[0,3.1,0,1.4],[1,2.7,.3,1],[-1,2.8,-.2,1.1],[.3,3.6,-.4,1],[-.4,3.4,.5,.9]].forEach(([X,Z,j,Tt],ze)=>{let me=new ht(new gs(Tt,1),new Qe({color:D[ze%3],flatShading:!0}));me.position.set(X,Z,j),y.add(me)}),gt.push({x:c,z:g,y:3.2*b,r:2*b})}dt(-6,xt+16.5,1.1),dt(3,xt+17,1),dt(13,xt+16.6,1.15),dt(-14,xt+3.5,.95),dt(xe+15,xt+3.4,1);{let c=ge(64,128,(y,I,D)=>{y.fillStyle="#c23a2a",y.fillRect(0,0,I,D),y.fillStyle="#fff3d6",y.fillRect(6,8,52,50);let X=["#2b4a8a","#f2b630","#4aa86a","#e2452f"];for(let Z=0;Z<8;Z++)y.fillStyle=X[Z%4],y.fillRect(10+Z%4*12,14+Math.floor(Z/4)*20,9,14);y.fillStyle="#111",y.fillRect(10,90,44,12)}),g=new ve;g.position.set(-1.4,0,xt+.6),h.add(g);let b=new ht(new an(.95,1.9,.75),[Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),Gt("#c23a2a"),tn("#ffffff",{map:c}),Gt("#c23a2a")]);b.position.y=.95,g.add(b),L(0,1.2,.7,2.2,.35,g)}{let c=new ve;c.position.set(xe+1.8,0,xt+5.2),h.add(c),B(1.6,.1,.5,Gt("#8a5a30"),0,.5,0,c),B(1.6,.5,.08,Gt("#8a5a30"),0,.8,.22,c),B(.1,.5,.4,Gt("#2b2422"),-.7,.25,0,c),B(.1,.5,.4,Gt("#2b2422"),.7,.25,0,c)}let Bt=new ve;Bt.position.set(xe+1.5,.55,xt+5.2),h.add(Bt);{let c="#e8a050",g=new ht(new ii(.22,14,10),Gt(c));g.scale.set(1.4,.7,1),Bt.add(g);let b=new ht(new ii(.13,12,10),Gt(c));b.position.set(.3,.05,0),Bt.add(b);for(let I of[-.06,.06]){let D=new ht(new Zn(.05,.09,4),Gt(c));D.position.set(.32,.17,I),Bt.add(D)}let y=new ht(new _i(.035,.03,.4,6),Gt(c));y.rotation.z=1.2,y.position.set(-.34,.02,.08),Bt.add(y)}let Nt=new ve;Nt.position.set(di.x,0,di.z),h.add(Nt);{B(.1,1.5,.1,Gt("#4a2a14"),-.55,.75,0,Nt),B(.1,1.5,.1,Gt("#4a2a14"),.55,.75,0,Nt);let c=ge(256,160,(y,I,D)=>{y.fillStyle="#b8864a",y.fillRect(0,0,I,D),y.strokeStyle="#4a2a14",y.lineWidth=10,y.strokeRect(0,0,I,D);let X=["#fff6d0","#f8d8e0","#d8f0e0","#fff"];for(let Z=0;Z<5;Z++){y.save(),y.translate(40+Z%3*80,44+Math.floor(Z/3)*70),y.rotate((Z%2?-1:1)*.12),y.fillStyle=X[Z%4],y.fillRect(-28,-22,56,44),y.fillStyle="#e2452f",y.beginPath(),y.arc(0,-18,4,0,7),y.fill(),y.fillStyle="#8a7a6a";for(let j=0;j<3;j++)y.fillRect(-20,-6+j*9,40-j*8,3);y.restore()}y.fillStyle="#3a1e0c",y.font=`900 26px ${Cn}`,y.textAlign="right",y.fillText("\u7559\u8A00\u677F",I-14,D-14)}),g=new ht(new an(1.3,.85,.08),[ae,ae,ae,ae,new ke({map:c}),ae]);g.position.y=1.15,Nt.add(g);let b=new ht(new an(1.5,.08,.35),Gt("#2c3044"));b.position.y=1.62,b.rotation.x=.2,Nt.add(b),Nt.traverse(y=>{y.isMesh&&(y.userData.board=1)})}let Wt=[];if(Nt.traverse(c=>{c.isMesh&&Wt.push(c)}),a){let c=h.children.length;h.children.slice(ye,c).concat(h.children.slice(st,yt)).forEach(j=>h.remove(j)),Wt.length=0,gt.length=0;let g=new Me("#8fd3f6"),b=new Me("#16204a"),y=new Me("#f0a890"),I=g.clone().lerp(x>15&&x<20?y:b,x>15&&x<20&&m<.5?Math.min(1,m*2):m).lerp(b,m>.5?(m-.5)*2:0);h.fog.color.copy(I),h.fog.near=30,h.fog.far=90,l.setClearColor(I,1),v.visible=!1,S.color.set(m>.5?"#9aa8ff":"#e8f4ff"),S.groundColor.set("#6a8a4a"),S.intensity=1.25+(1-m)*.6,w.intensity=.4+(1-m)*1,w.color.set(m>.5?"#a0b0ff":"#fff2dc");let D=new ht(new Ve(220,220),Gt(m>.5?"#3a5a3a":"#7ccb5a"));D.rotation.x=-Math.PI/2,D.position.y=-.03,h.add(D);let X=new ht(new Ve(2.2,6),Gt("#d9d4cc"));X.rotation.x=-Math.PI/2,X.position.set(is,-.01,xt+3.2),h.add(X);let Z=m>.5?"#2f5a3a":"#58b84a";[[-4,2],[-5,7],[xe+4,1],[xe+5,6],[-3,xt+5],[xe+3,xt+6],[2,-4],[8,-5]].forEach(([j,Tt],ze)=>{let me=new ve;me.position.set(j,0,Tt),h.add(me);let oe=new ht(new _i(.2,.28,1.8,7),Gt("#8a5a3a"));oe.position.y=.9,me.add(oe);let $e=new ht(new gs(1.4,1),new Qe({color:ze%3?Z:m>.5?"#6a4a6a":"#f4a8c0",flatShading:!0}));$e.position.y=2.6,me.add($e)})}let Pe=140,St=new Float32Array(Pe*3),Zt=[],de=ge(32,32,c=>{c.fillStyle="#f8c8d8",c.beginPath(),c.ellipse(16,16,12,7,.5,0,7),c.fill()}),pe=new ro(new xn,new ba({map:de,size:.16,transparent:!0,depthWrite:!1,alphaTest:.1}));pe.geometry.setAttribute("position",new Ie(St,3)),h.add(pe);function Jt(c,g){let b=gt.concat(Le)[Math.floor(Math.random()*(gt.length+Le.length))]||gt[0]||{x:-999,z:-999,y:0,r:.1};St[c*3]=b.x+fi(-b.r,b.r),St[c*3+1]=g?fi(0,b.y):b.y+fi(-.3,.3),St[c*3+2]=b.z+fi(-b.r,b.r),Zt[c]={vx:fi(-.2,.4),vy:fi(-.5,-.25),ph:Math.random()*7,fl:b.y}}let Le=[],Qt=[],Ye=[],Y=(c,g)=>c>=0&&c<xe&&g>=0&&g<xt,Xt=(c,g)=>!a&&c>=Ad&&c<Rd&&g>=wy&&g<xu,ct=(c,g)=>g%2?[c.d,c.w]:[c.w,c.d];function Q(c){let g=Te[c.k];if(g.L==="wall")return Vt(c);let[b,y]=ct(g,c.r),I=[];for(let D=0;D<b;D++)for(let X=0;X<y;X++)I.push([c.x+D,c.z+X]);return I}function Vt(c){let g=Te[c.k],b=[];for(let y=0;y<g.w;y++)c.r===0?b.push(["b",c.x+y]):c.r===2?b.push(["f",c.x+y]):c.r===1?b.push(["l",c.z+y]):b.push(["r",c.z+y]);return b}function Ot(c){return c===0?"back":c===2?"front":c===1?"left":"right"}function Ae(c,g){let b=Te[c.k];for(let[y,I]of Vt(c)){let D=y==="b"||y==="f"?xe:xt;if(I<0||I>=D||y==="f"&&I>=yi-0&&I<vi)return!1;y==="f"&&I>=yi-1&&I<vi+1&&b.w>1}for(let y of Qt){if(y===g||Te[y.k].L!=="wall")continue;let I=Vt(y);for(let D of Vt(c))if(I.some(X=>X[0]===D[0]&&X[1]===D[1]))return!1}return!0}function Ze(c,g,b,y){for(let I of Qt)if(!(I===y||Te[I.k].L!==b)&&Q(I).some(D=>D[0]===c&&D[1]===g))return I;return null}function Mn(c,g,b){let y=Ze(c,g,"main",b);return y&&Te[y.k].sf?y:null}function _e(c,g){let b=Te[c.k];if(b.L==="wall")return Ae(c,g);let y=Q(c),I=null;for(let[D,X]of y){let Z=Y(D,X),j=Xt(D,X);if(!Z&&!j)return!1;if(I===null)I=Z;else if(I!==Z)return!1;if(Ll.has(D+","+X))return!1;if(b.L==="top"){if(Ze(D,X,"top",g))return!1;let Tt=Ze(D,X,"main",g);if(Tt&&!Te[Tt.k].sf||Tt&&Tt.k==="tank")return!1}else if(Ze(D,X,b.L,g))return!1;if(b.L==="main"&&b.solid&&Z&&X===xt-1&&D>=yi&&D<vi)return!1}return b.L==="main"&&b.solid,!0}function Ln(c){if(Te[c.k].L!=="top")return 0;let b=0;for(let[y,I]of Q(c)){let D=Mn(y,I);D&&(b=Math.max(b,Te[D.k].sf))}return b}function Tn(c){let g=Te[c.k];if(g.L==="wall"){let[I,D]=Vt(c)[0],X=D+g.w/2;return I==="b"?[X,0,.02]:I==="f"?[X,0,xt-.02]:I==="l"?[.02,0,X]:[xe-.02,0,X]}let[b,y]=ct(g,c.r);return[c.x+b/2,Ln(c),c.z+y/2]}let Dr=new ke({map:N,transparent:!0,depthWrite:!1,opacity:.55});function Vs(c,g){let b=Te[c.k];if(c.I=b,c.g=uu(c.k),h.add(c.g),c.g.userData.e=c,b.L!=="wall"&&b.L!=="rug"&&b.L!=="top"){let[y,I]=ct(b,0),D=new ht(new Ve(y*.95,I*.95),Dr);D.rotation.x=-Math.PI/2,D.position.y=.012,c.g.add(D),D.raycast=()=>{}}return c.g.traverse(y=>{y.isMesh&&(y.userData.e=c,Ye.push(y))}),Qt.push(c),Wn(c),g||Jn(),c}function Wn(c){let[g,b,y]=Tn(c);c.g.position.set(g,b,y),c.g.rotation.y=c.r*Math.PI/2}function on(c){let g=Qt.indexOf(c);g>=0&&Qt.splice(g,1),h.remove(c.g);for(let b=Ye.length-1;b>=0;b--)Ye[b].userData.e===c&&Ye.splice(b,1);c.g.traverse(b=>{b.geometry&&b.geometry.dispose()})}function Hi(c){let g=Q(c);return Qt.filter(b=>Te[b.k].L==="top"&&Q(b).some(y=>g.some(I=>I[0]===y[0]&&I[1]===y[1])))}if(o.it.forEach(([c,g,b,y])=>{let I={k:c,x:g,z:b,r:y||0};_e(I)?Vs(I,!0):s&&(o.inv[c]=(o.inv[c]||0)+1)}),Qt.filter(c=>Te[c.k].L==="top").forEach(Wn),lt(o.fl),he(o.wa),r){let c=n.ex||{},g=c.wall||"#f29ab8",b=ge(640,200,(y,I,D)=>{y.fillStyle=g,y.fillRect(0,0,I,D);for(let Z=0;Z<D;Z+=14)y.fillStyle="rgba(0,0,0,.08)",y.fillRect(0,Z,I,2);let X=Z=>{y.fillStyle=m>.5?"#ffd98a":"#bfe6ff",y.fillRect(Z,60,110,70),y.strokeStyle="#f4efe2",y.lineWidth=8,y.strokeRect(Z,60,110,70),y.beginPath(),y.moveTo(Z+55,60),y.lineTo(Z+55,130),y.stroke()};X(70),X(460),y.fillStyle="#e8e2d4",y.fillRect(0,D-26,I,26)});Ee.front.forEach(y=>y.traverse(I=>{if(I.isMesh&&Array.isArray(I.material)&&I.material[4]&&I.material[4].map){let D=I.material[4].map.offset.x,X=I.material[4].map.repeat.x,Z=b.clone();Z.needsUpdate=!0,Z.offset.set(D,0),Z.repeat.set(X,1),I.material[4]=new ke({map:Z})}})),Ft.map=null,Ft.color.set(g),Ft.needsUpdate=!0,le.children.slice().forEach(y=>{y!==le.children[0]&&y!==le.children[1]&&y!==le.children[2]&&(y.visible=!1)}),Ut.forEach(y=>{y.visible=!1}),Ct.traverse(y=>{y.isMesh&&y.material&&y.material.map&&(y.material.map=null,y.material.color.set(c.roofC||"#d8452f"),y.material.needsUpdate=!0)})}function _n(){Le=Qt.filter(c=>c.k==="sakura").map(c=>({x:c.g.position.x,z:c.g.position.z,y:2,r:.5}))}_n();for(let c=0;c<Pe;c++)Jt(c,1);let Ei=0;function Gi(){return o.it=Qt.map(c=>[c.k,c.x,c.z,c.r]),o}function Jn(){s&&(Gi(),clearTimeout(Ei),Ei=setTimeout(()=>{try{i.save&&i.save(o)}catch{}},700),yo())}let bi=[],Wi=1.5,Di={};function Ur(c){return Di[c]?Di[c]:Di[c]=ge(128,112,g=>{if(g.strokeStyle="#2a1810",g.lineWidth=6,g.lineJoin="round",c==="mind"||c==="zzz"){g.fillStyle=c==="zzz"?"#e8f0ff":"#efe9ff";let b=[[40,40,26],[66,30,28],[92,42,25],[64,52,30]];b.forEach(([y,I,D])=>{g.beginPath(),g.arc(y,I,D,0,7),g.stroke()}),b.forEach(([y,I,D])=>{g.beginPath(),g.arc(y,I,D,0,7),g.fill()}),g.beginPath(),g.arc(44,90,7,0,7),g.fill(),g.stroke(),g.beginPath(),g.arc(30,104,4,0,7),g.fill(),g.stroke()}else g.fillStyle=c==="idea"?"#fff0a8":c==="msg"?"#ffe0ea":"#ffffff",ir(g,12,8,104,66,24),g.fill(),g.stroke(),g.beginPath(),g.moveTo(44,72),g.lineTo(34,100),g.lineTo(66,74),g.closePath(),g.fill(),g.stroke(),g.fillRect(46,68,18,8);if(g.fillStyle="#2a1810",g.textAlign="center",g.textBaseline="middle",c==="idea")g.font=`900 44px ${Cn}`,g.fillText("!",64,42);else if(c==="zzz")g.font=`900 30px ${Cn}`,g.fillText("z z Z",64,42);else if(c==="msg")g.font=`900 40px ${Cn}`,g.fillText("\u2709",64,42);else for(let b=0;b<3;b++)g.beginPath(),g.arc(40+b*24,42,6,0,7),g.fill()})}function Nr(c,g){return ge(512,112,I=>{I.textAlign="center",I.textBaseline="middle";let D=52;I.font=`900 ${D}px ${Cn}`;let X=String(c||"").slice(0,16);for(;I.measureText(X).width>432&&D>22;)D-=2,I.font=`900 ${D}px ${Cn}`;let Z=Math.min(500,I.measureText(X).width+56);I.fillStyle=g==="me"?"#2a1810e6":g==="owner"?"#7a3a14e6":"#2a2a48e0",I.strokeStyle=g==="me"?"#ffd27a":g==="owner"?"#ffb36b":"#c8c0ff",I.lineWidth=6,ir(I,(512-Z)/2,14,Z,84,84/2),I.fill(),I.stroke(),I.fillStyle="#fff3d6",I.fillText(X,512/2,112/2+2)})}function P(c,g,b){b=b||{};let y=new ve;h.add(y);let I=new Ve(1,1);I.translate(0,.5,0);let D=new ke({transparent:!0,alphaTest:.04,color:b.tint||16051952}),X=new ht(I,D);y.add(X);let Z={grp:y,m:X,mat:D,h0:g,h:g*Wi,ar:.8,w:g*Wi*.8,x:0,z:0,face:1,ph:Math.random()*7,alpha:1,moving:!1,path:null,state:"idle",t:0,isMe:!!b.me};p(c,Tt=>{D.map=Tt,D.needsUpdate=!0,Z.ar=Tt.image.width/Tt.image.height,Z.w=Z.h*Z.ar});let j=new ht(new Hn(.5,16),new ke({map:N,transparent:!0,depthWrite:!1,opacity:.8}));if(j.rotation.x=-Math.PI/2,h.add(j),Z.sh=j,b.name){let Tt=new ni(new $n({map:Nr(b.name,b.nk),transparent:!0,depthTest:!1}));Tt.renderOrder=30,Tt.scale.set(2,.44,1),h.add(Tt),Z.tag=Tt,Z.name=b.name}if(b.bubble){let Tt=new ni(new $n({map:Ur(b.bubble),transparent:!0,depthWrite:!1}));Tt.scale.set(.8,.7,1),h.add(Tt),Z.bub=Tt,Z.kind=b.bubble}return bi.push(Z),Z}let k=P(n.me.src,1.5,{me:1,name:n.me.name||"\u6211",nk:"me"});k.x=is,k.z=xt+2.6,(s&&n.startInside!==!1||n.island)&&(k.x=is,k.z=xt-1.6);let et=_s,it=ys,J=Ed;function W(c,g){if(c<et||c>=it||g<0||g>=J||g<xt&&(c<0||c>=xe)||g>=xt&&Ll.has(c+","+g)&&c===7&&g===xt+1)return!0;let b=Ze(c,g,"main");return!!(b&&Te[b.k].solid)}let kt=(c,g,b,y)=>W(b,y)?!1:g===xt-1&&y===xt||g===xt&&y===xt-1?c>=yi&&c<vi&&b===c:!0;function jt(c,g,b,y){c=Math.floor(c),g=Math.floor(g);let I=(Z,j)=>(Z-et)*100+j,D=new Map;D.set(I(c,g),null);let X=[[c,g]];for(;X.length;){let[Z,j]=X.shift();if(Z===b&&j===y){let Tt=[],ze=I(Z,j),me=Z,oe=j;for(;ze!==null;){Tt.push([me+.5,oe+.5]);let $e=D.get(ze);if($e===null)break;me=$e[0],oe=$e[1],ze=I(me,oe)}return Tt.reverse()}for(let[Tt,ze]of[[1,0],[-1,0],[0,1],[0,-1]]){let me=Z+Tt,oe=j+ze,$e=I(me,oe);D.has($e)||!kt(Z,j,me,oe)||(D.set($e,[Z,j]),X.push([me,oe]))}}return null}let Ht=.28;function ue(c,g,b){let y=c>=yi+Ht&&c<=vi-Ht;if(b<xt){if(g<xt&&(c<Ht||c>xe-Ht||g<Ht)||g>=xt-Ht&&!y)return!1}else if(g<xt+Ht&&!y||g<xt&&!y)return!1;if(c<_s+.4||c>ys-.4||g>Ed-.4||g<xt&&(c<0||c>xe))return!1;for(let[I,D]of[[-Ht,-Ht],[Ht,-Ht],[-Ht,Ht],[Ht,Ht],[0,0]]){let X=Math.floor(c+I*.8),Z=Math.floor(g+D*.8),j=Ze(X,Z,"main");if(j&&Te[j.k].solid||X===7&&Z===xt+1&&Math.hypot(c-di.x,g-di.z)<.7)return!1}return!0}function we(c){let g=[];if(c)for(let b=0;b<xt;b++)for(let y=0;y<xe;y++)W(y,b)||g.push([y,b]);else for(let b=xt+1;b<xt+6;b++)for(let y=-6;y<xe+6;y++)W(y,b)||g.push([y,b]);return g}let Kt=[],Be=()=>_u(_o(Gi())),en=Ke(Pa.filter(c=>n.walk&&n.walk[c.spr]&&c.spr!=="robot"));function Ke(c){for(let g=c.length-1;g>0;g--){let b=Math.floor(Math.random()*(g+1));[c[g],c[b]]=[c[b],c[g]]}return c}let Nn=r?0:es(2+Be(),2,7);en.slice(0,Nn).forEach((c,g)=>{let b=P(n.walk[c.spr],c.h,{bubble:"chat"});b.d=c,b.sp=c.sp*.8,b.kind2="npc",b.state="out",b.t=g*2.2+fi(0,1.5),b.x=_s+1,b.z=xt+4,b.hidden=!0,Kt.push(b)});function We(c){let g=P(n.me.src,1.5,{name:c.name,nk:"vis",bubble:"msg",tint:16771312});g.d={id:"v"+c.id,name:c.name,role:"\u4F86\u904E\u7684\u5BA2\u4EBA"},g.v=c,g.sp=1.3,g.kind2="vis",g.state="out",g.t=fi(1,6),g.x=ys-1,g.z=xt+4,g.hidden=!0,Kt.push(g)}let te=null,pn=null;if(r){let c=new ve;h.add(c);let g="#e8a050",b="#fff3e0",y=new ht(new ii(.2,14,10),Gt(g));y.scale.set(1.5,.8,.9),y.position.y=.2,c.add(y);let I=new ht(new ii(.14,14,10),Gt(g));I.position.set(.3,.34,0),c.add(I);let D=new ht(new ii(.07,10,8),Gt(b));D.position.set(.41,.3,0),D.scale.set(.7,.7,1),c.add(D);for(let Tt of[-.07,.07]){let ze=new ht(new Zn(.05,.1,4),Gt(g));ze.position.set(.3,.5,Tt),c.add(ze);let me=new ht(new ii(.018,6,6),Gt("#1a1a1a"));me.position.set(.43,.38,Tt*.7),c.add(me)}let X=[];for(let[Tt,ze]of[[.18,.1],[.18,-.1],[-.18,.1],[-.18,-.1]]){let me=new ht(new _i(.04,.04,.16,6),Gt(g));me.position.set(Tt,.08,ze),c.add(me),X.push(me)}let Z=new ht(new _i(.03,.025,.4,6),Gt(g));Z.position.set(-.38,.36,0),Z.rotation.z=.8,c.add(Z),c.traverse(Tt=>{Tt.isMesh&&(Tt.userData.pet=1)});let j=Qt.find(Tt=>Tt.k==="catbed");pn={g:c,legs:X,tail:Z,x:j?j.g.position.x:2.5,z:j?j.g.position.z:5.5,path:null,t:2,ph:0,sleep:!!j}}if(!s){let c=Qt.find(y=>y.k==="register"),g=is,b=2;if(c){let y=[[c.x,c.z-1],[c.x+1,c.z],[c.x-1,c.z],[c.x,c.z+1]].find(([I,D])=>Y(I,D)&&!W(I,D));y&&(g=y[0]+.5,b=y[1]+.5)}te=P(n.owner&&n.owner.src||n.me.src,1.5,{name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),nk:"owner",bubble:"zzz",tint:16773344}),te.x=g,te.z=b,te.kind2="owner",te.state="sleep",te.d={name:"\u5E97\u9577 "+(n.owner&&n.owner.name||""),role:o.name},Kt.push(te)}function He(c){let g=c.kind2==="vis"?Math.random()<.6:Math.random()<.82,b=[];Qt.forEach(X=>{X.k==="register"&&b.push(...Q(X))}),b.push([7,xt+1]);let y=we(g).filter(([X,Z])=>!b.some(j=>Math.abs(j[0]-X)<=1&&Math.abs(j[1]-Z)<=1)&&!bi.some(j=>j!==c&&!j.hidden&&Math.floor(j.x)===X&&Math.floor(j.z)===Z));if(!y.length)return null;let I=y.filter(([X,Z])=>Qt.some(j=>Te[j.k].L!=="rug"&&Q(j).some(Tt=>Math.abs(Tt[0]-X)+Math.abs(Tt[1]-Z)===1))),D=I.length&&Math.random()<.75?I:y;return D[Math.floor(Math.random()*D.length)]}function zn(c,g,b){let y=jt(c.x,c.z,g,b);return y&&y.length?(c.path=y,c.state="walk",!0):!1}let G={dead:!1,mode:"walk",yaw:0,yawT:0,dist:11,distT:11,camV:0,tgt:null,joy:null,keys:{},t:0,talk:null,sel:null,drag:null,last:performance.now(),inside:k.z<xt,cam:new z(k.x,1,k.z),low:{},pitch:.7,pitchT:.7},nn=(c,g,b,y)=>{let I=document.createElement(c);return g&&(I.className=g),b!=null&&(I.innerHTML=b),(y||e).appendChild(I),I},Ui=[],Oe=c=>(Ui.push(c),c),ri=Oe(nn("div","h3info")),Ni=Oe(nn("div","h3hud")),Fn=nn("div","h3cam",'<button type="button" aria-label="\u5411\u5DE6\u8F49" data-h3="camL">\u27F2</button><button type="button" aria-label="\u5411\u53F3\u8F49" data-h3="camR">\u27F3</button>'),Dn=Oe(nn("div","h3hint")),An=Oe(nn("div","h3toast")),yn=Oe(nn("div","h3j","<i></i>")),Kn=Oe(nn("div","h3card")),ss=Oe(nn("div","h3bp")),vs=Oe(nn("div","h3sel")),Ua=Oe(nn("div","h3top")),cn=Oe(nn("div","h3pan"));function jn(c){An.textContent=c,An.classList.add("on"),clearTimeout(jn.t),jn.t=setTimeout(()=>An.classList.remove("on"),2200)}function cr(){if(G.mode==="build"){Ni.innerHTML='<button class="h3b hot" type="button" data-h3="done"><i>\u2713</i>\u5B8C\u6210</button>';return}Ni.innerHTML=s&&r?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button><button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':s?(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="build"><i>\u{1F528}</i>\u5E03\u7F6E</button><button class="h3b" type="button" data-h3="rename"><i>\u{1FAA7}</i>\u5E97\u540D</button><button class="h3b" type="button" data-h3="board"><i>\u{1F4DC}</i>\u7559\u8A00\u677F</button>':(n.island?'<button class="h3b" type="button" data-h3="exit"><i>\u{1F6AA}</i>\u51FA\u9580</button>':"")+'<button class="h3b hot" type="button" data-h3="board"><i>\u2709\uFE0F</i>\u7559\u8A00</button>'}function yo(){let c=_o(Gi()),g=_u(c);if(r){ri.innerHTML=`<b>\u{1F3E0} ${ln(n.title||"\u6211\u7684\u5BB6")}</b><span class="h3st">${"\u2605".repeat(g)}${"\u2606".repeat(5-g)}</span> \u6EAB\u99A8\u5EA6 ${c}<br><small>${s?"\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u64FA\u5BB6\u5177\u3001\u63DB\u5730\u677F\u7246\u58C1":`${ln(n.owner&&n.owner.name||"")} \u7684\u5BB6`}</small>`;return}ri.innerHTML=`<b>\u{1F3EE} ${ln(o.name)}</b><span class="h3st">${"\u2605".repeat(g)}${"\u2606".repeat(5-g)}</span> ${ln(vu[g][1])}<br><small>\u6EAB\u99A8\u5EA6 ${c}${s?`\u30FB\u6BCF\u5929\u6536\u5165 ${lr(yu(c))}`:`\u30FB\u5E97\u9577 ${ln(n.owner&&n.owner.name||"")}`}</small>`}cr(),yo(),Fn.style.display="none",Fn.querySelectorAll("button").forEach((c,g)=>{let b=g?-1:1;c.addEventListener("pointerdown",I=>{I.preventDefault(),G.camV=b;try{c.setPointerCapture(I.pointerId)}catch{}});let y=()=>{G.camV=0};c.addEventListener("pointerup",y),c.addEventListener("pointercancel",y),c.addEventListener("click",()=>{G.camV||(G.yawT+=b*.5)})});let zr=()=>t.getBoundingClientRect(),Qn=new Ra,vo=new Et,Na=new Pi(new z(0,1,0),0),bo=new z,hr=(c,g)=>{let b=zr();return vo.set((c-b.left)/b.width*2-1,-((g-b.top)/b.height*2-1)),vo},Fr=(c,g)=>{let b=zr();return{x:(c-b.left)*(t.clientWidth/b.width),y:(g-b.top)*(t.clientHeight/b.height)}},rs=c=>{let g=c.clone().project(u),b=zr();return{x:(g.x+1)/2*b.width+b.left,y:(1-g.y)/2*b.height+b.top,z:g.z}};function ur(c,g){return Qn.setFromCamera(hr(c,g),u),Qn.ray.intersectPlane(Na,bo)?bo.clone():null}function Or(c,g){Qn.setFromCamera(hr(c,g),u);let b=Qn.intersectObjects(Ye.filter(y=>y.visible&&y.parent&&as(y)),!1);return b.length?b[0].object.userData.e:null}function as(c){let g=c;for(;g;){if(!g.visible)return!1;g=g.parent}return!0}function kr(c,g){let b=null,y=1e9;for(let I of Kt){if(I.hidden)continue;let D=rs(new z(I.x,0,I.z)),X=rs(new z(I.x,I.h+.3,I.z)),Z=D.y-X.y;if(Z<6)continue;let j=Math.max(Z*.36,30),Tt=Math.abs(c-D.x);if(Tt<j&&g>X.y-14&&g<D.y+12){let ze=Tt+Math.abs(g-(D.y+X.y)/2)*.3;ze<y&&(y=ze,b=I)}}return b}function za(c,g){return Qn.setFromCamera(hr(c,g),u),Qn.intersectObjects(Wt,!1).length>0}let bs=[],Mi=[];function Ms(c,g){return Qn.setFromCamera(hr(c,g),u),Qn.intersectObjects(Mi,!1).length>0}let Xi=new Map,je=null,_=null;t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("pointerdown",c=>{c.preventDefault();try{t.setPointerCapture(c.pointerId)}catch{}let g=Fr(c.clientX,c.clientY);if(Xi.set(c.pointerId,{x:c.clientX,y:c.clientY}),Xi.size===2){let[b,y]=[...Xi.values()];_={d:Math.hypot(b.x-y.x,b.y-y.y),dist:G.distT,ang:Math.atan2(y.y-b.y,y.x-b.x),yaw:G.yawT},je=null,G.joy=null,yn.style.display="none",bu();return}if(je={id:c.pointerId,sx:g.x,sy:g.y,cx:c.clientX,cy:c.clientY,moved:0,btn:c.button,yaw0:G.yawT,pit0:G.pitchT},G.mode==="build"){let b=Or(c.clientX,c.clientY);b&&b===G.sel&&!b.I.fixed2?je.dragItem=b:b&&(je.pickItem=b)}}),t.addEventListener("pointermove",c=>{if(Xi.has(c.pointerId)&&Xi.set(c.pointerId,{x:c.clientX,y:c.clientY}),_&&Xi.size>=2){let[D,X]=[...Xi.values()],Z=Math.hypot(D.x-X.x,D.y-X.y);G.distT=es(_.dist*_.d/Math.max(20,Z),6,20),G.yawT=_.yaw-(Math.atan2(X.y-D.y,X.x-D.x)-_.ang);return}if(!je||je.id!==c.pointerId)return;let g=Fr(c.clientX,c.clientY),b=g.x-je.sx,y=g.y-je.sy,I=Math.hypot(b,y);if(!je.moved&&I>10&&(je.moved=1,je.pickItem&&G.mode==="build"&&(oi(je.pickItem),je.dragItem=je.pickItem)),!!je.moved){if(je.btn===2||G.mode==="walk"||G.mode==="build"&&!je.dragItem){G.yawT=je.yaw0-b*.008,G.pitchT=es(je.pit0+y*.005,.3,1.25);return}if(G.mode==="build"&&je.dragItem){Pd(je.dragItem,c.clientX,c.clientY);return}if(G.mode==="walk"){let X=Math.min(1,I/55)/Math.max(I,1e-6);G.joy={x:b*X,y:y*X},G.tgt=null,yn.style.display="block",yn.style.left=je.sx+"px",yn.style.top=je.sy+"px",yn.firstChild.style.transform=`translate(${G.joy.x*55}px,${G.joy.y*55}px)`}}});let T=c=>{Xi.delete(c.pointerId),Xi.size<2&&(_=null),!(!je||je.id!==c.pointerId)&&(je.moved||K(c.clientX,c.clientY,je),je.dragItem&&bu(),je=null,G.joy=null,yn.style.display="none")};t.addEventListener("pointerup",T),t.addEventListener("pointercancel",T),t.addEventListener("wheel",c=>{c.preventDefault(),G.distT=es(G.distT+Math.sign(c.deltaY)*1.2,6,20)},{passive:!1});let E=c=>{if(!document.contains(t)||/input|textarea/i.test(c.target&&c.target.tagName||""))return;let g=c.key.toLowerCase();if(/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(g)){if(g==="r"&&G.sel){Mu(),c.preventDefault();return}G.keys[g]=1,/^(arrow|w|a|s|d)/.test(g)&&(G.tgt=null),c.preventDefault()}},F=c=>{delete G.keys[c.key.toLowerCase()]};document.addEventListener("keydown",E),document.addEventListener("keyup",F);function K(c,g){if(cn.classList.contains("on"))return;if(G.mode==="build"){let D=Or(c,g);oi(D||null);return}let b=kr(c,g);if(b){bt(b);return}if(pn){Qn.setFromCamera(hr(c,g),u);let D=[];if(pn.g.traverse(X=>{X.isMesh&&D.push(X)}),Qn.intersectObjects(D,!1).length){jn(["\u55B5\uFF5E","\u55B5\u55DA\uFF1F","\u547C\u5695\u547C\u5695\u2026\u2026","\uFF08\u4F38\u61F6\u8170\uFF09"][Math.floor(Math.random()*4)]),pn.t=2,pn.path=null;return}}if(Mi.length&&Ms(c,g)){wt(di.x-1,di.z+.9,Eu);return}if(za(c,g)){wt(di.x,di.z+1,Nl);return}let y=Or(c,g);if(y&&Te[y.k].L==="top"){let D=Q(y).map(X=>Mn(X[0],X[1])).find(Boolean);D&&D.k==="register"&&(y=D)}if(y&&y.k==="register"){wt(y.g.position.x,y.g.position.z+1.2,()=>Xn(y));return}if(y&&Te[y.k].L!=="rug"){let D=y.g.position;Re(),_t(y),G.tgt=ut(D.x,D.z);return}Re();let I=ur(c,g);I&&(G.tgt={x:I.x,z:I.z})}function ut(c,g){let b=null,y=1e9;for(let[I,D]of[[0,1.1],[1.1,0],[-1.1,0],[0,-1.1],[.8,.8],[-.8,.8]]){let X=c+I,Z=g+D;if(ue(X,Z,Z<xt?0:xt+1)){let j=Math.hypot(X-k.x,Z-k.z);j<y&&(y=j,b={x:X,z:Z})}}return b}function wt(c,g,b){Re();let y=ut(c,g-1)||{x:c,z:g};G.tgt={x:y.x,z:y.z,fn:b},Math.hypot(k.x-y.x,k.z-y.z)<1.6&&(G.tgt=null,b())}function bt(c){Re(!0),G.talk=c,c.kind2==="npc"&&(c.state="talk",c.t=0);let g=ln(c.d.name),b=ln(c.d.role||""),y="",I=Ir.chat,D="";if(c.kind2==="owner")I={tag:"\u{1F4A4} \u6253\u76F9\u4E2D",c:"#c8d8ff"},y=r?`<p class="h3t mind">\uFF08${ln(n.owner&&n.owner.name||"")} \u7AA9\u5728\u5BB6\u88E1\u6253\u76F9\u2026\u2026\uFF09</p>`:`<p class="h3t mind">\uFF08\u5E97\u9577 ${ln(n.owner&&n.owner.name||"")} \u8DB4\u5728\u6536\u9280\u53F0\u65C1\u908A\u7761\u8457\u4E86\u2026\u2026\uFF09</p>`,y+='<p class="h3t">\u8981\u4E0D\u8981\u5728\u9580\u53E3\u7684\u7559\u8A00\u677F\u7559\u8A00\u7D66\u4ED6\uFF1F</p>',D='<button class="h3n" type="button" data-h3="board">\u2709\uFE0F \u53BB\u7559\u8A00</button>';else if(c.kind2==="vis")I={tag:"\u2709\uFE0F \u7559\u8A00",c:"#ffc8d8"},y=`<p class="h3t">\u300C${ln(c.v.msg||"\u2026\u2026")}\u300D</p>${c.v.gift&&Te[c.v.gift]?`<p class="h3t" style="font-size:14px">\u{1F381} \u9084\u5E36\u4E86\u4E00\u4EFD\u300C${ln(Te[c.v.gift].n)}\u300D</p>`:""}`;else{let Tt=Pt(c);I=Ir[Tt.kind]||Ir.chat,y=`<p class="h3t${Tt.kind==="mind"?" mind":""}">${Tt.kind==="mind"?"\uFF08"+ln(Tt.text)+"\uFF09":"\u300C"+ln(Tt.text)+"\u300D"}</p>`,D='<button class="h3n" type="button" data-h3="more">\u518D\u807D\u4E00\u53E5 \u203A</button>'}let X=c.kind2==="npc"?n.walk[c.d.spr]:c.kind2==="owner"&&n.owner&&n.owner.src||n.me.src;Kn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:url('${X}')"></div><div class="h3nm"><b>${g}</b><small>${b}</small></div><span class="h3k" style="background:${I.c}">${I.tag}</span><button class="h3x" type="button" data-h3="close">\xD7</button></div>${y}<div class="h3bt">${D}</div>`;let Z=zr(),j=rs(new z(c.x,c.h*.5,c.z));Kn.classList.toggle("r",j.x-Z.left<Z.width/2),Kn.classList.add("on"),c.bub&&(c.bub.visible=!1)}function Pt(c){let g=Qt.filter(b=>gu[b.k]&&Math.hypot(b.g.position.x-c.x,b.g.position.z-c.z)<3.2);if(g.length&&Math.random()<.5){let b=g[Math.floor(Math.random()*g.length)];return{kind:"chat",text:gu[b.k]}}return(!c.deck||!c.deck.length)&&(c.deck=Ke(c.d.lines.map(b=>({kind:b[0],text:b[1]})))),c.deck.pop()}function _t(c){let g=Te[c.k];G.talk=null,Kn.innerHTML=`<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${g.lit?"\u{1F3EE}":"\u2728"}</div><div class="h3nm"><b>${ln(g.n)}</b><small>\u6EAB\u99A8\u5EA6 +${g.c}</small></div><button class="h3x" type="button" data-h3="close">\xD7</button></div><p class="h3t">${ln(gu[c.k]||"\u64FA\u5728\u9019\u88E1\u525B\u525B\u597D\u3002")}</p>`,Kn.classList.remove("r"),Kn.classList.add("on")}function Re(c){Kn.classList.remove("on");let g=G.talk;G.talk=null,g&&g.kind2==="npc"&&g.state==="talk"&&(g.state="idle",g.t=fi(1,2.5))}function ai(){if(!s||r)return 0;let c=i.today?i.today():Math.floor(Date.now()/864e5);return(o.cl?es(c-o.cl,0,3):1)*yu(_o(Gi()))}function Xn(c){if(!s){jn("\u6536\u9280\u53F0\u9396\u8457\uFF0C\u5E97\u9577\u5728\u6253\u76F9\uFF5E");return}let g=ai();if(g<=0){jn("\u4ECA\u5929\u7684\u6536\u5165\u5DF2\u7D93\u6536\u904E\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01");return}let b=!1;try{b=i.collect?i.collect(g):!1}catch{}if(!b){jn("\u5148\u958B\u59CB\u904A\u6232\uFF08\u6709\u5B58\u6A94\uFF09\u624D\u80FD\u6536\u9322\u5594");return}o.cl=i.today?i.today():Math.floor(Date.now()/864e5),Jn(),be(c),jn(`\u6536\u5230 ${lr(g)}\uFF01\u9322\u5DF2\u7D93\u653E\u9032\u904A\u6232\u7684\u9322\u5305`)}let Rt=new ni(new $n({map:ge(128,128,c=>{c.fillStyle="#f2c230",c.strokeStyle="#8a5a10",c.lineWidth=8,c.beginPath(),c.arc(64,64,52,0,7),c.fill(),c.stroke(),c.fillStyle="#8a5a10",c.font=`900 64px ${Cn}`,c.textAlign="center",c.textBaseline="middle",c.fillText("\xA5",64,68)}),transparent:!0,depthTest:!1}));Rt.renderOrder=25,Rt.scale.set(.55,.55,1),h.add(Rt);let Mt=[];function be(c){for(let g=0;g<8;g++){let b=Rt.clone();b.material=Rt.material.clone(),b.position.copy(c.g.position).add(new z(0,1.4,0)),b.userData.v=new z(fi(-1.2,1.2),fi(2.5,4),fi(-1.2,1.2)),b.userData.t=0,h.add(b),Mt.push(b)}}function fe(c){if(G.mode=c,oi(null),Re(),G.tgt=null,cr(),ss.classList.toggle("on",c==="build"),Ua.classList.toggle("on",c==="build"),c!=="build"&&(Fn.style.bottom=""),ri.style.display=c==="build"?"none":"",c==="build")Ua.textContent="\u{1F528} \u62D6\u66F3\u5BB6\u5177\u79FB\u52D5\u30FB\u62D6\u7A7A\u767D\u8655\u8F49\u93E1\u982D",Pn(),G.distT=13.5;else{if(G.distT=G.inside?10.5:13,!ue(k.x,k.z,k.z)){let g=we(k.z<xt).sort((b,y)=>Math.hypot(b[0]+.5-k.x,b[1]+.5-k.z)-Math.hypot(y[0]+.5-k.x,y[1]+.5-k.z)).find(b=>ue(b[0]+.5,b[1]+.5,b[1]));g&&(k.x=g[0]+.5,k.z=g[1]+.5)}Jn()}}let Ne=r?"liv":"tbl",mn={},In=null,hn=null,Ge=null;function vn(c){if(mn[c])return mn[c];try{if(!In){In=new ji(128,128),hn=new Sr,hn.add(new Rr(16774368,8413264,2.2));let oe=new Cr(16777215,1.4);oe.position.set(2,4,3),hn.add(oe),Ge=new kn(30,1,.05,50)}let g=uu(c);hn.add(g);let b=Te[c],y=new Fs().setFromObject(g),I=y.getCenter(new z),D=y.getSize(new z),Z=(Math.max(D.x,D.y,D.z)*.5+.05)/Math.sin(15*Math.PI/180)*1.05;Ge.position.set(I.x+Z*.55,I.y+Z*.45,I.z+Z*.7),Ge.lookAt(I),b.L==="wall"&&(Ge.position.set(I.x+Z*.25,I.y+Z*.1,I.z+Z*.96),Ge.lookAt(I)),l.setRenderTarget(In),l.setClearColor(0,0),l.clear(),l.render(hn,Ge),l.setRenderTarget(null),l.setClearColor(1709366,1);let j=new Uint8Array(16384*4);l.readRenderTargetPixels(In,0,0,128,128,j);let Tt=document.createElement("canvas");Tt.width=Tt.height=128;let ze=Tt.getContext("2d"),me=ze.createImageData(128,128);for(let oe=0;oe<128;oe++)me.data.set(j.subarray((127-oe)*512,(128-oe)*512),oe*512);for(let oe=0;oe<me.data.length;oe+=4)me.data[oe]=mu[me.data[oe]],me.data[oe+1]=mu[me.data[oe+1]],me.data[oe+2]=mu[me.data[oe+2]];return ze.putImageData(me,0,0),hn.remove(g),g.traverse(oe=>{oe.geometry&&oe.geometry.dispose()}),mn[c]=Tt.toDataURL()}catch{return mn[c]=""}}function Pn(){let c=i.coins?i.coins():0,g=(r?Sd:wd).map(([Z,j])=>`<button class="h3tab ${Ne===Z?"on":""}" type="button" data-h3="cat" data-k="${Z}">${j}</button>`).join("")+`<button class="h3tab ${Ne==="reno"?"on":""}" type="button" data-h3="cat" data-k="reno">\u{1F3E0} \u6539\u88DD</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">\u{1F4B0} ${lr(c)}</span>`,b="";Ne==="reno"?b=cu.map(([Z,j,Tt])=>{let ze=o.fo[Z],me=o.fl===Z;return`<button class="h3it ${me?"cur":""}" type="button" data-h3="floor" data-k="${Z}"><span class="ph" style="background:url(${os("f",Z)}) center/cover"></span>${ln(j)}${me?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ze?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${lr(Tt)}</span>`}</button>`}).join("")+hu.map(([Z,j,Tt])=>{let ze=o.wo[Z],me=o.wa===Z;return`<button class="h3it ${me?"cur":""}" type="button" data-h3="wall" data-k="${Z}"><span class="ph" style="background:url(${os("w",Z)}) center/cover"></span>${ln(j)}${me?'<span class="pr">\u4F7F\u7528\u4E2D</span>':ze?'<span class="pr">\u5DF2\u64C1\u6709</span>':`<span class="pr">${lr(Tt)}</span>`}</button>`}).join(""):b=mo.filter(Z=>(r?Z.hc===Ne:Z.cat===Ne)&&!Z.fixed).map(Z=>{let j=o.inv[Z.k]||0,Tt=vn(Z.k);return`<button class="h3it ${!j&&c<Z.p?"no":""}" type="button" data-h3="item" data-k="${Z.k}">${j?`<span class="ow">\xD7${j}</span>`:""}${Tt?`<img src="${Tt}" alt="">`:'<span class="ph"></span>'}${ln(Z.n)}<span class="pr">${j?"\u62FF\u51FA\u4F86\u64FA":lr(Z.p)}</span></button>`}).join("");let y=ss.querySelector(".h3row"),I=y?y.scrollLeft:0,D=ss.dataset.cat===Ne;ss.innerHTML=`<div class="h3tabs">${g}</div><div class="h3row">${b}</div>`,ss.dataset.cat=Ne,D&&(ss.querySelector(".h3row").scrollLeft=I);let X=ss.offsetHeight||150;Fn.style.bottom=X+8+"px",vs.style.bottom=X+8+"px"}let zi={};function os(c,g){let b=c+g;if(zi[b])return zi[b];let y;return c==="f"?y=(R[g]||R.wood)().image:y=H(g,2).image,zi[b]=y.toDataURL()}function oi(c){if(G.sel&&G.sel!==c&&(G.sel.ok||ls(G.sel)),G.sel=c,li.visible=!!c,vs.classList.toggle("on",!!c),c){c.last={x:c.x,z:c.z,r:c.r},c.ok=!0;let g=Te[c.k];vs.innerHTML=`<button class="h3b" type="button" data-h3="rot" ${g.L==="wall"?"disabled":""}><i>\u27F3</i>\u65CB\u8F49</button><button class="h3b" type="button" data-h3="store" ${g.fixed?"disabled":""}><i>\u{1F4E6}</i>\u6536\u8D77\u4F86</button><button class="h3b hot" type="button" data-h3="ok"><i>\u2713</i>\u653E\u597D</button>`,Vr()}}function ls(c){if(!c.last)return;let g=c.last.x-c.x,b=c.last.z-c.z,y=Te[c.k].sf?Hi(c):[];c.x=c.last.x,c.z=c.last.z,c.r=c.last.r,Wn(c),y.forEach(I=>{I.x+=g,I.z+=b,Wn(I)}),c.ok=!0,Vr()}let Br=ge(64,64,c=>{c.strokeStyle="#fff",c.lineWidth=6,c.strokeRect(3,3,58,58)}),li=new ht(new Ve(1,1),new ke({map:Br,transparent:!0,depthWrite:!1,color:"#6aff8a"}));li.rotation.x=-Math.PI/2,li.visible=!1,li.renderOrder=5,h.add(li);let Fa=new ht(new Ve(1,1),new ke({transparent:!0,opacity:.22,depthWrite:!1,color:"#6aff8a"}));Fa.rotation.x=-Math.PI/2,li.add(Fa),Fa.rotation.x=0,Fa.position.z=-.001;function Vr(){let c=G.sel;if(!c)return;let g=Te[c.k],b=_e(c,c);c.ok=b;let y=b?"#6aff8a":"#ff5a4a";if(li.material.color.set(y),Fa.material.color.set(y),g.L==="wall"){let[D,,X]=Tn(c),Z=Ot(c.r);li.scale.set(g.w,.6,1),li.position.set(D+(Z==="left"?.35:Z==="right"?-.35:0),.03,X+(Z==="back"?.35:Z==="front"?-.35:0)),li.rotation.z=Z==="left"||Z==="right"?Math.PI/2:0}else{let[D,X]=ct(g,c.r),[Z,j,Tt]=Tn(c);li.scale.set(D,X,1),li.rotation.z=0,li.position.set(Z,j+.03,Tt)}let I=vs.querySelector('[data-h3="ok"]');I&&(I.disabled=!b)}function Pd(c,g,b){let y=ur(g,b);if(!y)return;let I=Te[c.k],D=c.x,X=c.z;if(I.L==="wall"){let Z=[[y.z,0],[y.x,1],[xe-y.x,3],[xt-y.z,2]].filter(j=>!G.low[Ot(j[1])]).sort((j,Tt)=>j[0]-Tt[0]);if(!Z.length)return;c.r=Z[0][1],c.r===0||c.r===2?(c.x=es(Math.round(y.x-I.w/2),0,xe-I.w),c.z=c.r===0?0:xt-1):(c.z=es(Math.round(y.z-I.w/2),0,xt-I.w),c.x=c.r===1?0:xe-1)}else{let[Z,j]=ct(I,c.r);c.x=Math.round(y.x-Z/2),c.z=Math.round(y.z-j/2)}(c.x!==D||c.z!==X||I.L==="wall")&&(I.sf&&Ld(c,D,X),Wn(c),Vr())}function Ld(c,g,b){let y={x:g,z:b,r:c.r,k:c.k},I=Q(y);Qt.filter(D=>Te[D.k].L==="top"&&Q(D).some(X=>I.some(Z=>Z[0]===X[0]&&Z[1]===X[1]))).forEach(D=>{D.x+=c.x-g,D.z+=c.z-b,Wn(D)})}function bu(){G.sel&&(Vr(),Qt.filter(c=>Te[c.k].L==="top").forEach(Wn))}function Mu(){let c=G.sel;if(!c||Te[c.k].L==="wall")return;let g=Te[c.k].sf?Hi(c):[];g.length&&(g.forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),jn("\u684C\u4E0A\u7684\u6771\u897F\u5148\u6536\u56DE\u80CC\u5305\u4E86")),c.r=(c.r+1)%4,Wn(c),Vr()}function Dd(){let c=G.sel;if(!c||Te[c.k].fixed)return;(Te[c.k].sf?Hi(c):[]).forEach(b=>{on(b),o.inv[b.k]=(o.inv[b.k]||0)+1}),G.sel=null,on(c),o.inv[c.k]=(o.inv[c.k]||0)+1,li.visible=!1,vs.classList.remove("on"),_n(),Jn(),Pn()}function Ud(){let c=G.sel;if(c){if(!_e(c,c)){jn("\u9019\u88E1\u653E\u4E0D\u4E0B\uFF08\u7D05\u8272\uFF09\uFF0C\u63DB\u500B\u4F4D\u7F6E\u5427");return}c.last=null,G.sel=null,li.visible=!1,vs.classList.remove("on"),_n(),Jn()}}function wu(c){let g=Te[c],b={k:c,x:0,z:0,r:0},y=G.cam.x,I=G.cam.z,D=null,X=1e9;if(g.L==="wall")for(let Z of[0,1,3,2].filter(j=>!G.low[Ot(j)]))for(let j=0;j<10;j++){let Tt={k:c,r:Z,x:Z===0||Z===2?j:Z===1?0:xe-1,z:Z===1||Z===3?j:Z===0?0:xt-1};if(Ae(Tt)){let[ze,,me]=Tn(Tt),oe=Math.hypot(ze-y,me-I);oe<X&&(X=oe,D=Tt)}}else for(let Z=0;Z<xu;Z++)for(let j=Ad;j<Rd;j++){let Tt={k:c,x:j,z:Z,r:0};if(!_e(Tt))continue;let[ze,,me]=Tn(Tt),oe=Y(j,Z),$e=Math.hypot(ze-y,me-I)+(oe===G.inside?0:6)+(g.L==="top"&&!Mn(j,Z)?1.5:0);$e<X&&(X=$e,D=Tt)}D?Object.assign(b,D):(b.x=1,b.z=1),Vs(b,!0),o.inv[c]--,o.inv[c]||delete o.inv[c],oi(b),D||Vr(),_n(),Jn(),Pn()}function Dl(c,g,b,y,I){let D=i.coins?i.coins():0;cn.innerHTML=`<h3>\u8CB7\u4E0B\u300C${ln(b)}\u300D\uFF1F</h3><p>\u50F9\u9322 <b>${lr(y)}</b>\u3000\u4F60\u73FE\u5728\u6709 <b>${lr(D)}</b></p>${D<y?'<p style="color:#c0301a">\u9322\u4E0D\u5920\u5594\uFF0C\u56DE\u53BB\u591A\u71DF\u696D\u5E7E\u5929\u5427\uFF01</p>':""}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="buyok" ${D<y?"disabled":""}>\u8CB7\u4E0B</button></div>`,cn.classList.add("on"),cn._buy=()=>{let X=!1;try{X=i.buy?i.buy(y,b):!1}catch{}if(!X){jn("\u8CB7\u4E0D\u4E86\uFF08\u9322\u4E0D\u5920\u6216\u9084\u6C92\u6709\u5B58\u6A94\uFF09");return}cn.classList.remove("on"),I()}}let Ai=null,Ul=!1;function Su(c){return Ai&&!c?Promise.resolve(Ai):i.msgs?Promise.resolve(i.msgs()).then(g=>(Ai=(g||[]).slice().sort((b,y)=>(y.t||0)-(b.t||0)),Ul=!1,Ai),()=>(Ul=!0,Ai=[],Ai)):(Ai=[],Promise.resolve(Ai))}let Oa="";function Nl(){Re(),cn.innerHTML=`<h3>\u{1F4DC} ${ln(o.name)} \u7684\u7559\u8A00\u677F</h3><p>\u8F09\u5165\u4E2D\u2026</p>`,cn.classList.add("on"),Su(!0).then(c=>{if(!cn.classList.contains("on"))return;let g=c.slice(0,30).map(y=>`<div class="msg"><b>${ln(y.name||"\u73A9\u5BB6")}</b><small>${y.t?new Date(y.t).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}</small>${y.gift&&Te[y.gift]?` <small>\u{1F381} ${ln(Te[y.gift].n)}</small>`:""}<br>${ln(y.msg||"")}</div>`).join("")||`<p style="opacity:.7">${Ul?"\u7559\u8A00\u677F\u66AB\u6642\u6253\u4E0D\u958B\uFF08\u96F2\u7AEF\u9084\u6C92\u958B\u901A\u6216\u6C92\u6709\u7DB2\u8DEF\uFF09":"\u9084\u6C92\u6709\u4EBA\u7559\u8A00\uFF5E"}</p>`,b="";if(s){let y=r?0:c.filter(I=>I.gift&&Te[I.gift]&&!o.gc[I.id]).length;b=`<div class="h3bt">${y?`<button class="h3n" type="button" data-h3="claim">\u{1F381} \u9818\u53D6 ${y} \u4EFD\u79AE\u7269</button>`:""}<button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button></div>`}else{let y=i.giftSent?i.giftSent():!1;b=`<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>\u7559\u8A00\u7D66\u5E97\u9577</b>\uFF08\u6700\u591A 60 \u5B57\uFF09</p>${n.demo?'<p style="margin:2px 0;color:#8a3a14;font-size:14px">\uFF08\u793A\u7BC4\u5E97\uFF1A\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF09</p>':""}<textarea id="h3msg" maxlength="60" rows="2" placeholder="\u4F8B\u5982\uFF1A\u4F60\u7684\u5E97\u597D\u6EAB\u99A8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF5E"></textarea>
          <p style="margin:8px 0 0">\u9644\u4E0A\u4E00\u4EFD\u5C0F\u79AE\u7269\uFF08\u6BCF\u5929\u4E00\u4EFD\uFF0C\u514D\u8CBB\uFF09\uFF1A</p><div class="gifts">${y?'<span style="opacity:.7">\u4ECA\u5929\u5DF2\u7D93\u9001\u904E\u79AE\u7269\u4E86</span>':["",...Ey].map(I=>`<button type="button" data-h3="gpick" data-k="${I}" class="${Oa===I?"on":""}">${I?ln(Te[I].n):"\u4E0D\u9644\u79AE\u7269"}</button>`).join("")}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u95DC\u9589</button><button class="h3n" type="button" data-h3="post">\u9001\u51FA\u7559\u8A00</button></div>`}cn.innerHTML=`<h3>\u{1F4DC} ${ln(o.name)} \u7684\u7559\u8A00\u677F</h3>${g}${b}`})}function Nd(){if(n.demo){jn("\u793A\u7BC4\u5E97\u7684\u7559\u8A00\u4E0D\u6703\u771F\u7684\u9001\u51FA\uFF5E"),cn.classList.remove("on");return}let c=cn.querySelector("#h3msg"),g=(c&&c.value||"").trim().slice(0,60);if(g.length<1){jn("\u5BEB\u4E00\u53E5\u8A71\u518D\u9001\u51FA\u5427");return}let b=i.giftSent&&i.giftSent()?"":Oa,y=cn.querySelector('[data-h3="post"]');y&&(y.disabled=!0),Promise.resolve(i.post?i.post({msg:g,gift:b}):null).then(()=>{jn(b?"\u7559\u8A00\u548C\u79AE\u7269\u9001\u51FA\u4E86\uFF01":"\u7559\u8A00\u9001\u51FA\u4E86\uFF01"),Oa="",Ai=null,cn.classList.remove("on")},()=>{jn("\u9001\u4E0D\u51FA\u53BB\uFF0C\u53EF\u80FD\u96F2\u7AEF\u9084\u6C92\u958B\u901A\uFF0C\u7A0D\u5F8C\u518D\u8A66"),y&&(y.disabled=!1)})}function Tu(){if(bs.forEach(g=>h.remove(g)),bs.length=0,Mi.length=0,!s||!Ai)return;let c=Ai.filter(g=>g.gift&&Te[g.gift]&&!o.gc[g.id]);c.slice(0,5).forEach((g,b)=>{let y=new ve;y.position.set(di.x-1.1-b%3*.55,0,di.z+.4+Math.floor(b/3)*.5),h.add(y);let I=["#e2452f","#3a7ad0","#f2b630","#4aa86a","#c84a9a"][b%5],D=B(.42,.36,.42,Gt(I),0,.18,0,y);B(.44,.38,.08,Gt("#fff3d6"),0,.18,0,y),B(.08,.38,.44,Gt("#fff3d6"),0,.18,0,y);let X=B(.46,.08,.46,Gt(I),0,.4,0,y),Z=new ht(new ii(.08,10,8),Gt("#fff3d6"));Z.position.y=.48,Z.scale.set(1.6,.8,1),y.add(Z),y.traverse(j=>{j.isMesh&&Mi.push(j)}),bs.push(y),y.userData.ph=b}),c.length&&jn(n.island?`\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF0C\u6309\u300C\u{1F4DC} \u7559\u8A00\u677F\u300D\u9818\u53D6\uFF01`:`\u9580\u53E3\u6709 ${c.length} \u4EFD\u79AE\u7269\uFF01`)}function Eu(){if(!s||!Ai)return;let c=Ai.filter(g=>g.gift&&Te[g.gift]&&!o.gc[g.id]);c.length&&(c.forEach(g=>{o.inv[g.gift]=(o.inv[g.gift]||0)+1,o.gc[g.id]=1}),Jn(),Tu(),cn.innerHTML=`<h3>\u{1F381} \u6536\u5230\u79AE\u7269\u4E86\uFF01</h3>${c.map(g=>`<div class="msg"><b>${ln(g.name||"\u73A9\u5BB6")}</b> \u9001\u4F60\u300C${ln(Te[g.gift].n)}\u300D<br>${ln(g.msg||"")}</div>`).join("")}<p>\u90FD\u653E\u9032\u80CC\u5305\u4E86\uFF0C\u6309\u300C\u{1F528} \u5E03\u7F6E\u300D\u5C31\u80FD\u64FA\u51FA\u4F86\u3002</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">\u597D</button></div>`,cn.classList.add("on"))}function zd(){Re(),cn.innerHTML=`<h3>\u{1FAA7} \u5E6B\u5E97\u53D6\u540D\u5B57</h3><p>\u6703\u5BEB\u5728\u5CF6\u4E0A\u5C45\u9152\u5C4B\u7684\u62DB\u724C\u4E0A\uFF0C\u597D\u53CB\u4F86\u73A9\u7684\u6642\u5019\u4E5F\u770B\u5F97\u5230\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002</p><input id="h3name" maxlength="12" value="${ln(o.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">\u53D6\u6D88</button><button class="h3n" type="button" data-h3="nameok">\u6C7A\u5B9A</button></div>`,cn.classList.add("on")}let Au=c=>{let g=c.target.closest("[data-h3]");if(!g||!e.contains(g)||g.disabled)return;let b=g.dataset.h3,y=g.dataset.k;if(b==="close")Re();else if(b==="more"&&G.talk)bt(G.talk);else if(b==="build")fe("build");else if(b==="done")fe("walk");else if(b==="rename")zd();else if(b==="nameok"){let I=(cn.querySelector("#h3name").value||"").trim().slice(0,12);I&&(o.name=I,mt(),Jn()),cn.classList.remove("on")}else if(b==="board"){if(G.mode!=="walk")return;n.island?Nl():wt(di.x,di.z+1,Nl)}else if(b==="claim")Eu();else if(b==="exit"){if(n.island){G.exited=!0;try{i.exit&&i.exit()}catch{}}}else if(b==="pclose")cn.classList.remove("on");else if(b==="post")Nd();else if(b==="gpick")Oa=y||"",cn.querySelectorAll('[data-h3="gpick"]').forEach(I=>I.classList.toggle("on",(I.dataset.k||"")===Oa));else if(b==="buyok"&&cn._buy)cn._buy();else if(b==="cat")Ne=y,Pn();else if(b==="item"){let I=Te[y];G.sel&&!G.sel.ok&&ls(G.sel),oi(null),o.inv[y]?wu(y):Dl("item",y,I.n,I.p,()=>{o.inv[y]=(o.inv[y]||0)+1,wu(y)})}else if(b==="floor"){let I=cu.find(X=>X[0]===y),D=()=>{o.fo[y]=1,o.fl=y,lt(y),Jn(),Pn()};o.fo[y]?D():Dl("floor",y,I[1],I[2],D)}else if(b==="wall"){let I=hu.find(X=>X[0]===y),D=()=>{o.wo[y]=1,o.wa=y,he(y),Jn(),Pn()};o.wo[y]?D():Dl("wall",y,I[1],I[2],D)}else b==="rot"?Mu():b==="store"?Dd():b==="ok"&&Ud()};e.addEventListener("click",Au),Su().then(c=>{if(!G.dead&&s&&!r){Tu();let g={};c.filter(b=>b.name&&!g[b.from||b.name]&&(g[b.from||b.name]=1)).slice(0,3).forEach(We)}});let Fd={get dead(){return G.dead},set dead(c){c&&zl()},cv:t,dispose:zl,data:()=>JSON.parse(JSON.stringify(Gi())),probe(){let c=g=>{let b=rs(g);return{x:Math.round(b.x),y:Math.round(b.y)}};return{mode:G.mode,inside:G.inside,calls:l.info.render.calls,tris:l.info.render.triangles,me:{x:+k.x.toFixed(2),z:+k.z.toFixed(2)},yaw:+G.yaw.toFixed(2),sel:G.sel?{k:G.sel.k,x:G.sel.x,z:G.sel.z,r:G.sel.r,ok:G.sel.ok}:null,items:Qt.map(g=>Object.assign({k:g.k,x:g.x,z:g.z,r:g.r},c(new z(g.g.position.x,g.g.position.y+.4,g.g.position.z)))),npcs:Kt.filter(g=>!g.hidden).map(g=>Object.assign({id:g.d.id||g.kind2,kind:g.kind2,state:g.state},c(new z(g.x,g.h*.5,g.z)))),board:c(new z(di.x,1.15,di.z)),gifts:bs.length,card:Kn.classList.contains("on")?Kn.textContent:"",pan:cn.classList.contains("on")?cn.textContent:"",cozy:_o(Gi()),inv:Object.assign({},o.inv),name:o.name,fl:o.fl,wa:o.wa,tag:k.tag?k.tag.visible:!1,cellPx:(g,b)=>c(new z(g,0,b))}},px(c,g,b){let y=rs(new z(c,g,b));return{x:Math.round(y.x),y:Math.round(y.y)}},teleport(c,g){k.x=c,k.z=g,G.inside=g<xt},setYaw(c){G.yaw=G.yawT=c},setDist(c){G.dist=G.distT=c}};function zl(){if(!G.dead){if(G.dead=!0,cancelAnimationFrame(G.raf),clearTimeout(Ei),s)try{Gi(),i.save&&i.save(o,!0)}catch{}document.removeEventListener("keydown",E),document.removeEventListener("keyup",F),e.removeEventListener("click",Au),Ui.forEach(c=>c.remove()),h.traverse(c=>{c.geometry&&c.geometry.dispose(),(c.material?Array.isArray(c.material)?c.material:[c.material]:[]).forEach(b=>{b.map&&b.map.dispose(),b.dispose()})}),In&&In.dispose();try{l.dispose(),l.forceContextLoss()}catch{}}}let Mo=0,wo=0,Ru=0,ws=1,So=0,Fl=0,Cu=9,ka=new z,qi=new z,Ss=new z;function Od(c){return Math.round(es(1.75-(c-380)/440*.6,1.15,1.75)*20)/20}function kd(){let c=t.getBoundingClientRect(),g=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),y=Math.min(2,window.devicePixelRatio||1),I=Od(c.height||b);I!==Wi&&(Wi=I,bi.forEach(D=>{D.h=D.h0*Wi,D.w=D.h*D.ar})),!(g===Mo&&b===wo&&y===Ru)&&(Mo=g,wo=b,Ru=y,ws=es(c.width*y/g,.5,2.2),ws=Math.min(ws,Cu,Math.sqrt(14e5/(g*b))),l.setPixelRatio(ws),l.setSize(g,b,!1),u.aspect=g/b,u.updateProjectionMatrix())}function Iu(c,g){if(!c.path||!c.path.length)return!0;let[b,y]=c.path[0],I=b-c.x,D=y-c.z,X=Math.hypot(I,D),Z=c.sp;if(X<.06)return c.path.shift(),!c.path.length;let j=Math.min(X,Z*g);c.x+=I/X*j,c.z+=D/X*j,c.moving=!0,c.ph+=g*(4+Z*3.2);let Tt=I*qi.x+D*qi.z;return Math.abs(Tt)>.05&&(c.face=Tt>0?1:-1),!1}function Pu(c){if(G.dead)return;if(!document.contains(t)){zl();return}G.raf=requestAnimationFrame(Pu);let g=Math.min(.1,(c-G.last)/1e3);G.last=c,G.t+=g;let b=G.t;kd(),So+=g,Fl++,So>1.2&&(So/Fl>.028&&ws>.55&&(ws=Math.max(.55,ws*.85),Cu=ws,l.setPixelRatio(ws),l.setSize(Mo,wo,!1)),So=0,Fl=0);let y=G.keys;y.q&&(G.yawT+=g*1.8),y.e&&(G.yawT-=g*1.8),G.camV&&(G.yawT+=G.camV*g*1.8),G.yaw+=(G.yawT-G.yaw)*Math.min(1,g*8),G.pitch+=(G.pitchT-G.pitch)*Math.min(1,g*8),G.dist+=(G.distT-G.dist)*Math.min(1,g*5);let I=Math.sin(G.yaw),D=Math.cos(G.yaw);if(ka.set(-I,0,-D),qi.set(D,0,-I),k.moving=!1,G.mode==="walk"&&!cn.classList.contains("on")){let $=0,ce=0,Ce=0,Xe=1e9;if(G.joy)$=qi.x*G.joy.x+ka.x*-G.joy.y,ce=qi.z*G.joy.x+ka.z*-G.joy.y,Ce=Math.hypot(G.joy.x,G.joy.y);else{let sn=(y.arrowright||y.d?1:0)-(y.arrowleft||y.a?1:0),qe=(y.arrowup||y.w?1:0)-(y.arrowdown||y.s?1:0);if(sn||qe){let rn=Math.hypot(sn,qe);$=(qi.x*sn+ka.x*qe)/rn,ce=(qi.z*sn+ka.z*qe)/rn,Ce=1}else if(G.tgt){if(!G.tgt.path){let bn=jt(k.x,k.z,Math.floor(G.tgt.x),Math.floor(G.tgt.z));G.tgt.path=bn?bn.slice(1):[],bn?G.tgt.path.length?G.tgt.path[G.tgt.path.length-1]=[G.tgt.x,G.tgt.z]:G.tgt.path=[[G.tgt.x,G.tgt.z]]:G.tgt.path=[[G.tgt.x,G.tgt.z]]}let rn=G.tgt.path[0];if(rn){let bn=rn[0]-k.x,wi=rn[1]-k.z,Ri=Math.hypot(bn,wi);if(Ri<.12){if(G.tgt.path.shift(),!G.tgt.path.length){let cs=G.tgt.fn;G.tgt=null,cs&&cs()}}else $=bn/Ri,ce=wi/Ri,Ce=1,Xe=Ri}else{let bn=G.tgt.fn;G.tgt=null,bn&&bn()}}}if(Ce>.05){let sn=Math.hypot($,ce)||1,qe=4*Math.min(1,Ce),rn=Math.min(qe*g,Xe),bn=$/sn*rn,wi=ce/sn*rn,Ri=!1;if(ue(k.x+bn,k.z+wi,k.z)?(k.x+=bn,k.z+=wi,Ri=!0):ue(k.x+bn,k.z,k.z)?(k.x+=bn,Ri=!0):ue(k.x,k.z+wi,k.z)&&(k.z+=wi,Ri=!0),!Ri&&G.tgt&&(G.tgt.stuck=(G.tgt.stuck||0)+g,G.tgt.stuck>.6)){let cs=G.tgt.fn;G.tgt=null,cs&&Math.hypot(k.x-di.x,k.z-di.z)<3&&cs()}if(Ri){k.moving=!0,k.ph+=g*9*Math.min(1,Ce);let cs=$/sn*qi.x+ce/sn*qi.z;Math.abs(cs)>.2&&(k.face=cs>0?1:-1)}G.talk&&Math.hypot(G.talk.x-k.x,G.talk.z-k.z)>6&&Re()}}if(n.island&&!G.exited&&k.z>xt+.5&&G.mode==="walk"){G.exited=!0;try{i.exit&&i.exit()}catch{}return}let X=G.inside;G.inside=k.z<xt-.05,X!==G.inside&&G.mode==="walk"&&(G.distT=G.inside?10.5:13,Dn.textContent=G.inside?`\u6B61\u8FCE\u5149\u81E8\u300C${o.name}\u300D`:"\u5E97\u5916",Dn.classList.add("on"),clearTimeout(Dn.t),Dn.t=setTimeout(()=>Dn.classList.remove("on"),1800));for(let $ of Kt){if($.moving=!1,$.kind2==="owner")continue;if($.state==="talk"){$.face=(k.x-$.x)*qi.x+(k.z-$.z)*qi.z>0?1:-1;continue}if($.state==="out"){if($.t-=g,$.t<=0){let qe=Math.random()<.5;$.x=qe?_s+4:ys-4,$.z=xt+fi(3.5,5.5),$.hidden=!1,$.alpha=0,$.stops=2+Math.floor(Math.random()*3);let rn=He($);(!rn||!zn($,rn[0],rn[1]))&&($.hidden=!0,$.t=3)}continue}if($.alpha=Math.min(1,($.alpha||0)+g*2),$.state==="walk")Iu($,g)&&($.state="idle",$.t=fi(3,7));else if($.state==="idle"){if($.t-=g,$.t<=0)if($.stops--,$.stops<=0){let qe=Math.random()<.5?_s+1:ys-2;zn($,qe,xt+4)?$.state="leave":$.t=2}else{let qe=He($);(!qe||!zn($,qe[0],qe[1]))&&($.t=2)}}else $.state==="leave"&&(Iu($,g)?($.hidden=!0,$.state="out",$.t=fi(4,12)):($.x<_s+3||$.x>ys-3)&&($.alpha=Math.max(0,Math.min($.alpha,Math.min($.x-_s,ys-$.x)/3))));let ce=$.x-k.x,Ce=$.z-k.z,Xe=Math.hypot(ce,Ce),sn=.55;if(Xe<sn&&Xe>.001&&$.state!=="walk"&&$.state!=="leave"){let qe=$.x+ce/Xe*(sn-Xe),rn=$.z+Ce/Xe*(sn-Xe);ue(qe,rn,$.z)&&($.x=qe,$.z=rn)}}if(pn){let $=pn;$.t-=g;let ce=!1;if($.path&&$.path.length){let[Xe,sn]=$.path[0],qe=Xe-$.x,rn=sn-$.z,bn=Math.hypot(qe,rn);if(bn<.05)$.path.shift();else{let wi=Math.min(bn,1.1*g);$.x+=qe/bn*wi,$.z+=rn/bn*wi,$.g.rotation.y=Math.atan2(-rn,qe),ce=!0}$.path.length||($.t=fi(3,8))}else if($.t<=0){let Xe=we(!0),sn=Xe[Math.floor(Math.random()*Xe.length)],qe=Qt.find(wi=>wi.k==="catbed"),rn=qe&&Math.random()<.35?[qe.x,qe.z]:sn,bn=rn&&jt($.x,$.z,rn[0],rn[1]);bn&&bn.length?($.path=bn,$.sleep=!1):$.t=3,qe&&rn&&rn[0]===qe.x&&rn[1]===qe.z&&($.sleep=!0)}$.ph+=g*(ce?12:0),$.legs.forEach((Xe,sn)=>{Xe.rotation.z=ce?Math.sin($.ph+sn*Math.PI)*.5:0}),$.tail.rotation.z=.8+Math.sin(b*2)*.25;let Ce=!ce&&$.sleep&&Qt.some(Xe=>Xe.k==="catbed"&&Math.hypot(Xe.g.position.x-$.x,Xe.g.position.z-$.z)<.4);$.g.position.set($.x,Ce?.1:0,$.z),$.g.scale.y=Ce?.75+Math.sin(b*1.5)*.03:1}let Z=k.x,j=k.z,Tt=1.1;G.mode==="build"&&(G.inside?(Z=xe/2+I*2.2,j=xt/2+D*2.2):(Z=is+I*2,j=xt+2.5+D*2),Tt=.4),G.cam.x+=(Z-G.cam.x)*Math.min(1,g*(G.mode==="build"?4:12)),G.cam.z+=(j-G.cam.z)*Math.min(1,g*(G.mode==="build"?4:12)),G.cam.y+=(Tt-G.cam.y)*Math.min(1,g*4);let ze=Mo/wo,me=ze<1.45?1.45/ze:1,oe=G.dist*me,$e=G.mode==="build"?Math.max(.75,G.pitch):G.pitch;Ss.set(G.cam.x+I*Math.cos($e)*oe,G.cam.y+Math.sin($e)*oe,G.cam.z+D*Math.cos($e)*oe),u.position.copy(Ss),u.lookAt(G.cam.x,G.cam.y+.5,G.cam.z),v.position.copy(Ss);let wn=G.inside||G.mode==="build"&&G.inside;Ct.visible=!wn;let pi=G.low={back:wn&&Ss.z<0,front:wn&&Ss.z>xt,left:wn&&Ss.x<0,right:wn&&Ss.x>xe};for(let $ in Ee){let ce=pi[$];for(let Ce of Ee[$]){let Xe=ce?.14:1;Ce.scale.y+=(Xe-Ce.scale.y)*Math.min(1,g*10)}}for(let $ of Qt)if(Te[$.k].L==="wall"){let ce=Ot($.r);$.g.visible=!pi[ce]||!wn}le.visible=!pi.front;for(let $ of U)$.visible=!(wn&&(pi.left&&$.position.x<0||pi.right&&$.position.x>xe));C.intensity=M.intensity=wn?14:6;let Ol=Math.atan2(Ss.x-G.cam.x,Ss.z-G.cam.z);for(let $ of bi){let ce=!$.hidden,Ce=!wn&&$.z<xt;if($.grp.visible=ce,$.sh.visible=ce,$.tag&&($.tag.visible=ce&&!Ce),$.bub&&($.bub.visible=ce&&!Ce&&$!==G.talk&&$.state!=="leave"),!ce)continue;let Xe=$.w,sn=$.h,qe=$.moving?1:0,rn=Math.sin($.ph),bn=qe?Math.abs(rn)*.06:0,wi=qe?rn*.06:Math.sin(b*1.6+$.ph)*.01,Ri=qe?1+Math.cos($.ph*2)*.025:1+Math.sin(b*1.6+$.ph)*.008,cs=$.state==="sleep"?Math.sin(b*1.2)*.015:0;$.grp.position.set($.x,bn,$.z),$.m.rotation.set(0,Ol,wi*$.face+cs),$.m.scale.set(Xe*$.face*(2-Ri),sn*Ri,1),$.mat.opacity=$.alpha==null?1:$.alpha,$.sh.position.set($.x,.025,$.z),$.sh.scale.set(Xe*.7,Xe*.4,1),$.tag&&($.tag.position.set($.x,sn+.3,$.z),$.tag.material.opacity=$.alpha==null?1:$.alpha),$.bub&&$.bub.position.set($.x,sn+($.tag?.82:.45)+Math.sin(b*2.3+$.ph)*.06,$.z)}Ue.rotation.x=Math.sin(b*1.7)*.05;for(let $ of Ut)$.material.opacity=.45+.12*Math.sin(b*6);for(let $ of tt)$.material.opacity=.5+.05*Math.sin(b*3+$.parent.position.x);for(let $ of Qt){let ce=$.g.userData;if(ce.glows)for(let Ce of ce.glows)Ce.material.opacity=(Ce.userData.o0||(Ce.userData.o0=Ce.material.opacity))*(.85+.15*Math.sin(b*5+$.x*1.7));if(ce.swing&&(ce.swing.rotation.z=Math.sin(b*1.5+$.x)*.06),ce.wave&&(ce.wave.rotation.x=-.6+Math.sin(b*4)*.5),ce.fish&&ce.fish.forEach((Ce,Xe)=>{let sn=b*(.6+Xe*.2)+Xe*2;Ce.position.x=Math.cos(sn)*.2,Ce.position.z=Math.sin(sn)*.12,Ce.rotation.y=-sn+Math.PI/2*(Xe%2?1:-1)}),ce.spin&&(ce.spin.rotation.y=b*3),ce.hands){let Ce=new Date;ce.hands[0].rotation.z=-(Ce.getHours()%12+Ce.getMinutes()/60)/12*Math.PI*2,ce.hands[1].rotation.z=-Ce.getMinutes()/60*Math.PI*2,ce.hands.forEach(Xe=>{let sn=Xe.rotation.z,qe=Xe.geometry.parameters.height/2;Xe.position.x=-Math.sin(sn)*qe,Xe.position.y=ce.handY+Math.cos(sn)*qe})}}for(let $ of bs)$.position.y=Math.abs(Math.sin(b*3+$.userData.ph))*.12;{let $=pe.geometry.attributes.position.array;for(let ce=0;ce<Pe;ce++){let Ce=Zt[ce];$[ce*3]+=(Ce.vx+Math.sin(b*1.5+Ce.ph)*.3)*g,$[ce*3+1]+=Ce.vy*g,$[ce*3+2]+=Math.cos(b*1.2+Ce.ph)*.2*g,$[ce*3+1]<.02&&Jt(ce)}pe.geometry.attributes.position.needsUpdate=!0}Bt.children[1].rotation.z=Math.sin(b*.8)*.08,Bt.children[4].rotation.y=Math.sin(b*2)*.4;{let $=s?Qt.find(Ce=>Ce.k==="register"):null,ce=$?ai():0;Rt.visible=!!($&&ce>0&&G.mode==="walk"&&G.inside),Rt.visible&&(Rt.position.set($.g.position.x,1.75+Math.sin(b*3)*.1,$.g.position.z),Rt.material.rotation=0,Rt.scale.set(.55*Math.abs(Math.cos(b*2))+.05,.55,1))}for(let $=Mt.length-1;$>=0;$--){let ce=Mt[$],Ce=ce.userData;Ce.t+=g,Ce.v.y-=9*g,ce.position.addScaledVector(Ce.v,g),ce.material.opacity=Math.max(0,1-Ce.t/1.1),Ce.t>1.1&&(h.remove(ce),ce.material.dispose(),Mt.splice($,1))}G.sel&&(li.material.opacity=.7+.3*Math.sin(b*6)),l.render(h,u)}return G.raf=requestAnimationFrame(Pu),Fd}return Xd(Cy);})();
