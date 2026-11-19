var rm=0,ud=1,om=2;var Df=1,Ch=2,ri=3,Wn=0,qt=1,wt=2,Ni=0,Os=1,ca=2,dd=3,fd=4,am=5,Qi=100,cm=101,lm=102,hm=103,um=104,dm=200,fm=201,pm=202,mm=203,al=204,cl=205,gm=206,xm=207,_m=208,ym=209,vm=210,Mm=211,Sm=212,bm=213,Em=214,ll=0,hl=1,ul=2,zs=3,dl=4,fl=5,pl=6,ml=7,Uf=0,wm=1,Tm=2,Fi=0,Am=1,Rm=2,Cm=3,Ih=4,Im=5,Pm=6,Lm=7,pd="attached",Dm="detached",Nf=300,Vs=301,Gs=302,gl=303,xl=304,za=306,mn=1e3,rn=1001,Gr=1002,Yt=1003,Ph=1004;var Ls=1005;var Tt=1006,Fr=1007;var zt=1008;var Zt=1009,Ff=1010,Of=1011,Wr=1012,Lh=1013,ts=1014,Fn=1015,ro=1016,Dh=1017,Uh=1018,Ws=1020,Bf=35902,kf=1021,Hf=1022,Lt=1023,zf=1024,Vf=1025,Bs=1026,Xs=1027,Nh=1028,Fh=1029,Gf=1030,Oh=1031;var Bh=1033,ia=33776,sa=33777,ra=33778,oa=33779,_l=35840,yl=35841,vl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Il=37813,Pl=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,aa=36492,kl=36494,Hl=36495,Wf=36283,zl=36284,Vl=36285,Gl=36286,Um=2200,Nm=2201,Fm=2202,qs=2300,Ys=2301,wc=2302,Ds=2400,Us=2401,la=2402,kh=2500,Om=2501,Xf=0,Va=1,oo=2,Bm=3200,km=3201;var qf=0,Hm=1,Un="",nt="srgb",Kt="srgb-linear",Ga="linear",ft="srgb";var fs=7680;var md=519,zm=512,Vm=513,Gm=514,Yf=515,Wm=516,Xm=517,qm=518,Ym=519,Wl=35044,On=35048;var gd="300 es",ai=2e3,ha=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=1234567,Or=Math.PI/180,Zs=180/Math.PI;function Sn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function Hh(s,e){return(s%e+e)%e}function Zm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Km(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function $m(s,e,t,n){return Br(s,e,1-Math.exp(-t*n))}function Jm(s,e=1){return e-Math.abs(Hh(s,e*2)-e)}function jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function e0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function t0(s,e){return s+Math.random()*(e-s)}function n0(s){return s*(.5-Math.random())}function i0(s){s!==void 0&&(xd=s);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(s){return s*Or}function r0(s){return s*Zs}function o0(s){return(s&s-1)===0&&s!==0}function a0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function c0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function l0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Zn={DEG2RAD:Or,RAD2DEG:Zs,generateUUID:Sn,clamp:It,euclideanModulo:Hh,mapLinear:Zm,inverseLerp:Km,lerp:Br,damp:$m,pingpong:Jm,smoothstep:jm,smootherstep:Qm,randInt:e0,randFloat:t0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:o0,ceilPowerOfTwo:a0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:l0,normalize:dt,denormalize:Nn},se=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],y=i[4],_=i[7],L=i[2],T=i[5],R=i[8];return r[0]=o*x+a*M+c*L,r[3]=o*g+a*y+c*T,r[6]=o*p+a*_+c*R,r[1]=l*x+h*M+u*L,r[4]=l*g+h*y+u*T,r[7]=l*p+h*_+u*R,r[2]=d*x+f*M+m*L,r[5]=d*g+f*y+m*T,r[8]=d*p+f*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new Ye;function Zf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h0(){let s=Xr("canvas");return s.style.display="block",s}var _d={};function Ur(s){s in _d||(_d[s]=!0,console.warn(s))}function u0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function d0(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function f0(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var yd=[.64,.33,.3,.6,.15,.06],vd=[.2126,.7152,.0722],Md=[.3127,.329],Sd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Kt]:{primaries:yd,whitePoint:Md,transfer:Ga,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:vd,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:yd,whitePoint:Md,transfer:ft,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:vd,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}});var ps,Xl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Xr("canvas")),ps.width=e.width,ps.height=e.height;let n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},p0=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ac(i[o].image)):r.push(Ac(i[o]))}else r=Ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var m0=0,kt=class s extends li{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=rn,i=rn,r=Tt,o=zt,a=Lt,c=Zt,l=s.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Sn(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Nf;kt.DEFAULT_ANISOTROPY=1;var it=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,L=(p+1)/2,T=(h+d)/4,R=(u+x)/4,C=(m+g)/4;return y>_&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=C/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=R/r,i=C/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ks=class extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),T=Math.atan2(L,p*M);g=Math.sin(g*T)/L,a=Math.sin(a*T)/L}let _=a*M;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rc=new w,Ed=new Ge,bn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),wo.subVectors(this.max,br),ms.subVectors(e.a,br),gs.subVectors(e.b,br),xs.subVectors(e.c,br),Ai.subVectors(gs,ms),Ri.subVectors(xs,gs),qi.subVectors(ms,xs);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-qi.z,qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,qi.z,0,-qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-qi.y,qi.x,0];return!Cc(t,ms,gs,xs,wo)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,ms,gs,xs,wo))?!1:(To.crossVectors(Ai,Ri),t=[To.x,To.y,To.z],Cc(t,ms,gs,xs,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qn=[new w,new w,new w,new w,new w,new w,new w,new w],Pn=new w,Eo=new bn,ms=new w,gs=new w,xs=new w,Ai=new w,Ri=new w,qi=new w,br=new w,wo=new w,To=new w,Yi=new w;function Cc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yi.fromArray(s,r);let a=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var g0=new bn,Er=new w,Ic=new w,gn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Ic)),this.expandByPoint(Er.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new w,Pc=new w,Ao=new w,Ci=new w,Lc=new w,Ro=new w,Dc=new w,$s=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Pc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=Ci.dot(this.direction),c=-Ci.dot(Ao),l=Ci.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pc).addScaledVector(Ao,d),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){Lc.subVectors(t,e),Ro.subVectors(n,e),Dc.crossVectors(Lc,Ro);let o=this.direction.dot(Dc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let c=a*this.direction.dot(Ro.crossVectors(Ci,Ro));if(c<0)return null;let l=a*this.direction.dot(Lc.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(Dc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,m,x,g)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,_0)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(n,fn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(n,fn)),Ii.normalize(),Co.crossVectors(fn,Ii),i[0]=Ii.x,i[4]=Co.x,i[8]=fn.x,i[1]=Ii.y,i[5]=Co.y,i[9]=fn.y,i[2]=Ii.z,i[6]=Co.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],y=n[7],_=n[11],L=n[15],T=i[0],R=i[4],C=i[8],b=i[12],v=i[1],P=i[5],k=i[9],F=i[13],U=i[2],V=i[6],B=i[10],Z=i[14],H=i[3],te=i[7],le=i[11],xe=i[15];return r[0]=o*T+a*v+c*U+l*H,r[4]=o*R+a*P+c*V+l*te,r[8]=o*C+a*k+c*B+l*le,r[12]=o*b+a*F+c*Z+l*xe,r[1]=h*T+u*v+d*U+f*H,r[5]=h*R+u*P+d*V+f*te,r[9]=h*C+u*k+d*B+f*le,r[13]=h*b+u*F+d*Z+f*xe,r[2]=m*T+x*v+g*U+p*H,r[6]=m*R+x*P+g*V+p*te,r[10]=m*C+x*k+g*B+p*le,r[14]=m*b+x*F+g*Z+p*xe,r[3]=M*T+y*v+_*U+L*H,r[7]=M*R+y*P+_*V+L*te,r[11]=M*C+y*k+_*B+L*le,r[15]=M*b+y*F+_*Z+L*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,L=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,T=t*M+n*y+i*_+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=y*R,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=_*R,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=L*R,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*g+t*u*g)*R,e[14]=(m*a*i-o*x*i-m*n*c+t*x*c+o*n*g-t*a*g)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=c*l,y=c*h,_=c*u,L=n.x,T=n.y,R=n.z;return i[0]=(1-(x+p))*L,i[1]=(f+_)*L,i[2]=(m-y)*L,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(m+y)*R,i[9]=(g-M)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=_s.set(i[0],i[1],i[2]).length(),o=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);let l=1/r,h=1/o,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ai){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,m;if(a===ai)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ha)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ai){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h,m,x;if(a===ai)m=(o+r)*u,x=-2*u;else if(a===ha)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new w,Ln=new Fe,x0=new w(0,0,0),_0=new w(1,1,1),Ii=new w,Co=new w,fn=new w,wd=new Fe,Td=new Ge,Dt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dt.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y0=0,Ad=new w,ys=new Ge,ti=new Fe,Io=new w,wr=new w,v0=new w,M0=new Ge,Rd=new w(1,0,0),Cd=new w(0,1,0),Id=new w(0,0,1),Pd={type:"added"},S0={type:"removed"},vs={type:"childadded",child:null},Uc={type:"childremoved",child:null},bt=class s extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new Dt,n=new Ge,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ye}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(wr,Io,this.up):ti.lookAt(Io,wr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(ti),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};bt.DEFAULT_UP=new w(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new w,ni=new w,Nc=new w,ii=new w,Ms=new w,Ss=new w,Ld=new w,Fc=new w,Oc=new w,Bc=new w,kc=new it,Hc=new it,zc=new it,Di=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),ni.subVectors(n,t),Nc.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ni),c=Dn.dot(Nc),l=ni.dot(ni),h=ni.dot(Nc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return kc.setScalar(0),Hc.setScalar(0),zc.setScalar(0),kc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(kc,r.x),o.addScaledVector(Hc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),ni.subVectors(e,t),Dn.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ms.subVectors(i,n),Ss.subVectors(r,n),Fc.subVectors(e,n);let c=Ms.dot(Fc),l=Ss.dot(Fc);if(c<=0&&l<=0)return t.copy(n);Oc.subVectors(e,i);let h=Ms.dot(Oc),u=Ss.dot(Oc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ms,o);Bc.subVectors(e,r);let f=Ms.dot(Bc),m=Ss.dot(Bc);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ss,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ld.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Ld,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Vc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Hh(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vc(o,r,e+1/3),this.g=Vc(o,r,e),this.b=Vc(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return je.fromWorkingColorSpace(Xt.copy(this),e),Math.round(It(Xt.r*255,0,255))*65536+Math.round(It(Xt.g*255,0,255))*256+Math.round(It(Xt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=nt){je.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,i=Xt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Po);let n=Br(Pi.h,Po.h,t),i=Br(Pi.s,Po.s,t),r=Br(Pi.l,Po.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new De;De.NAMES=Kf;var b0=0,on=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Sn(),this.name="",this.blending=Os,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},En=class extends on{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new w,Lo=new se,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}};var fa=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},E0=0,Mn=new Fe,Gc=new bt,bs=new w,pn=new bn,Tr=new bn,Bt=new w,rt=class s extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(pn.min,Tr.min),pn.expandByPoint(Bt),Bt.addVectors(pn.max,Tr.max),pn.expandByPoint(Bt)):(pn.expandByPoint(Tr.min),pn.expandByPoint(Tr.max))}pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(e,l),Bt.add(bs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,u=new w,d=new se,f=new se,m=new se,x=new w,g=new w;function p(C,b,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(x),a[b].add(x),a[v].add(x),c[C].add(g),c[b].add(g),c[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,b=M.length;C<b;++C){let v=M[C],P=v.start,k=v.count;for(let F=P,U=P+k;F<U;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new w,_=new w,L=new w,T=new w;function R(C){L.fromBufferAttribute(i,C),T.copy(L);let b=a[C];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(T,b);let P=_.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,b=M.length;C<b;++C){let v=M[C],P=v.start,k=v.count;for(let F=P,U=P+k;F<U;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dd=new Fe,Zi=new $s,Do=new gn,Ud=new w,Uo=new w,No=new w,Fo=new w,Wc=new w,Oo=new w,Nd=new w,Bo=new w,He=class extends bt{constructor(e=new rt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Wc.fromBufferAttribute(u,e),o?Oo.addScaledVector(Wc,h):Oo.addScaledVector(Wc.sub(t),h))}t.add(Oo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Do.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Do,Ud)===null||Zi.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,L=y;_<L;_+=3){let T=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);i=ko(this,p,e,n,l,h,u,T,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=ko(this,o,e,n,l,h,u,M,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,L=y;_<L;_+=3){let T=_,R=_+1,C=_+2;i=ko(this,p,e,n,l,h,u,T,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,y=g+1,_=g+2;i=ko(this,o,e,n,l,h,u,M,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function w0(s,e,t,n,i,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Wn,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Bo);return l<t.near||l>t.far?null:{distance:l,point:Bo.clone(),object:s}}function ko(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Uo),s.getVertexPosition(c,No),s.getVertexPosition(l,Fo);let h=w0(s,e,t,n,Uo,No,Fo,Nd);if(h){let u=new w;Di.getBarycoord(Nd,Uo,No,Fo,u),i&&(h.uv=Di.getInterpolatedAttribute(i,a,c,l,u,new se)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};Di.getNormal(Uo,No,Fo,d.normal),h.face=d,h.barycoord=u}return h}var Vt=class s extends rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function m(x,g,p,M,y,_,L,T,R,C,b){let v=_/R,P=L/C,k=_/2,F=L/2,U=T/2,V=R+1,B=C+1,Z=0,H=0,te=new w;for(let le=0;le<B;le++){let xe=le*P-F;for(let de=0;de<V;de++){let Ee=de*v-k;te[x]=Ee*M,te[g]=xe*y,te[p]=U,l.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[p]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(de/R),u.push(1-le/C),Z+=1}}for(let le=0;le<C;le++)for(let xe=0;xe<R;xe++){let de=d+xe+V*le,Ee=d+xe+V*(le+1),X=d+(xe+1)+V*(le+1),$=d+(xe+1)+V*le;c.push(de,Ee,$),c.push(Ee,X,$),H+=6}a.addGroup(f,H,b),f+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){let e={};for(let t=0;t<s.length;t++){let n=Js(s[t]);for(let i in n)e[i]=n[i]}return e}function T0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $f(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var A0={clone:Js,merge:Qt},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends on{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=T0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ma=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new w,Fd=new se,Od=new se,Pt=class extends ma{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Fd,Od),t.subVectors(Od,Fd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,ws=1,Zl=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(Es,ws,e,t);i.layers=this.layers,this.add(i);let r=new Pt(Es,ws,e,t);r.layers=this.layers,this.add(r);let o=new Pt(Es,ws,e,t);o.layers=this.layers,this.add(o);let a=new Pt(Es,ws,e,t);a.layers=this.layers,this.add(a);let c=new Pt(Es,ws,e,t);c.layers=this.layers,this.add(c);let l=new Pt(Es,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ga=class extends kt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kl=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ga(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vt(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Ni});r.uniforms.tEquirect.value=t;let o=new He(i,r),a=t.minFilter;return t.minFilter===zt&&(t.minFilter=Tt),new Zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Xc=new w,I0=new w,P0=new Ye,oi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Xc.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||P0.getNormalMatrix(e),i=this.coplanarPoint(Xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new gn,Ho=new w,qr=class{constructor(e=new oi,t=new oi,n=new oi,i=new oi,r=new oi,o=new oi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],M=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+M).normalize(),n[3].setComponents(c-o,d-h,g-m,_-M).normalize(),n[4].setComponents(c-a,d-u,g-x,_-y).normalize(),t===ai)n[5].setComponents(c+a,d+u,g+x,_+y).normalize();else if(t===ha)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function L0(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Xn=class s extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let y=0;y<l;y++){let _=y*u-r;m.push(_,-M,0),x.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let y=M+l*p,_=M+l*(p+1),L=M+1+l*(p+1),T=M+1+l*p;f.push(y,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
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
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
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
#endif`,Pg=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xx=`float getShadowMask() {
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
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,kx=`#if DEPTH_PACKING == 3200
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
}`,Hx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
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
}`,Wx=`uniform float scale;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,Qx=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:D0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:B0,aomap_fragment:k0,aomap_pars_fragment:H0,batching_pars_vertex:z0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:J0,color_fragment:j0,color_pars_fragment:Q0,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:wg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:xg,fog_fragment:_g,fog_pars_fragment:yg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:bg,lights_pars_begin:Eg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Pg,lights_fragment_begin:Lg,lights_fragment_maps:Dg,lights_fragment_end:Ug,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:Hg,map_particle_fragment:zg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Kg,normal_fragment_begin:$g,normal_fragment_maps:Jg,normal_pars_fragment:jg,normal_pars_vertex:Qg,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:cx,project_vertex:lx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:_x,skinning_pars_vertex:yx,skinning_vertex:vx,skinnormal_vertex:Mx,specularmap_fragment:Sx,specularmap_pars_fragment:bx,tonemapping_fragment:Ex,tonemapping_pars_fragment:wx,transmission_fragment:Tx,transmission_pars_fragment:Ax,uv_pars_fragment:Rx,uv_pars_vertex:Cx,uv_vertex:Ix,worldpos_vertex:Px,background_vert:Lx,background_frag:Dx,backgroundCube_vert:Ux,backgroundCube_frag:Nx,cube_vert:Fx,cube_frag:Ox,depth_vert:Bx,depth_frag:kx,distanceRGBA_vert:Hx,distanceRGBA_frag:zx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:Kx,meshmatcap_vert:$x,meshmatcap_frag:Jx,meshnormal_vert:jx,meshnormal_frag:Qx,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:c_,shadow_frag:l_,sprite_vert:h_,sprite_frag:u_},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Gn.physical={uniforms:Qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var zo={r:0,b:0,g:0},$i=new Dt,d_=new Fe;function f_(s,e,t,n,i,r,o){let a=new De(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,_=m(M);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===za)?(h===void 0&&(h=new He(new Vt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Js(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler($i)),h.material.toneMapped=je.getTransfer(_.colorSpace)!==ft,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new He(new Xn(2,2),new an({name:"BackgroundMaterial",uniforms:Js(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(zo,$f(s)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:g}}function p_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(v,P,k,F,U){let V=!1,B=u(F,k,P);r!==B&&(r=B,l(r.object)),V=f(v,F,k,U),V&&m(v,F,k,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(v,P,k,F),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,P,k){let F=k.wireframe===!0,U=n[v.id];U===void 0&&(U={},n[v.id]=U);let V=U[P.id];V===void 0&&(V={},U[P.id]=V);let B=V[F];return B===void 0&&(B=d(c()),V[F]=B),B}function d(v){let P=[],k=[],F=[];for(let U=0;U<t;U++)P[U]=0,k[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,P,k,F){let U=r.attributes,V=P.attributes,B=0,Z=k.getAttributes();for(let H in Z)if(Z[H].location>=0){let le=U[H],xe=V[H];if(xe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor)),le===void 0||le.attribute!==xe||xe&&le.data!==xe.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function m(v,P,k,F){let U={},V=P.attributes,B=0,Z=k.getAttributes();for(let H in Z)if(Z[H].location>=0){let le=V[H];le===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));let xe={};xe.attribute=le,le&&le.data&&(xe.data=le.data),U[H]=xe,B++}r.attributes=U,r.attributesNum=B,r.index=F}function x(){let v=r.newAttributes;for(let P=0,k=v.length;P<k;P++)v[P]=0}function g(v){p(v,0)}function p(v,P){let k=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;k[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),U[v]!==P&&(s.vertexAttribDivisor(v,P),U[v]=P)}function M(){let v=r.newAttributes,P=r.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==v[k]&&(s.disableVertexAttribArray(k),P[k]=0)}function y(v,P,k,F,U,V,B){B===!0?s.vertexAttribIPointer(v,P,k,U,V):s.vertexAttribPointer(v,P,k,F,U,V)}function _(v,P,k,F){x();let U=F.attributes,V=k.getAttributes(),B=P.defaultAttributeValues;for(let Z in V){let H=V[Z];if(H.location>=0){let te=U[Z];if(te===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){let le=te.normalized,xe=te.itemSize,de=e.get(te);if(de===void 0)continue;let Ee=de.buffer,X=de.type,$=de.bytesPerElement,me=X===s.INT||X===s.UNSIGNED_INT||te.gpuType===Lh;if(te.isInterleavedBufferAttribute){let oe=te.data,he=oe.stride,Ue=te.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)p(H.location+Ne,oe.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)g(H.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ne=0;Ne<H.locationSize;Ne++)y(H.location+Ne,xe/H.locationSize,X,le,he*$,(Ue+xe/H.locationSize*Ne)*$,me)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,te.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<H.locationSize;oe++)g(H.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,xe/H.locationSize,X,le,xe*$,xe/H.locationSize*oe*$,me)}}else if(B!==void 0){let le=B[Z];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(H.location,le);break;case 3:s.vertexAttrib3fv(H.location,le);break;case 4:s.vertexAttrib4fv(H.location,le);break;default:s.vertexAttrib1fv(H.location,le)}}}}M()}function L(){C();for(let v in n){let P=n[v];for(let k in P){let F=P[k];for(let U in F)h(F[U].object),delete F[U];delete P[k]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let k in P){let F=P[k];for(let U in F)h(F[U].object),delete F[U];delete P[k]}delete n[v.id]}function R(v){for(let P in n){let k=n[P];if(k[v.id]===void 0)continue;let F=k[v.id];for(let U in F)h(F[U].object),delete F[U];delete k[v.id]}}function C(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function m_(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Lt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!C)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function x_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new oi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,y=M*4,_=p.clippingState||null;c.value=_,_=h(m,d,y,f);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function __(s){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Vs:a===xl&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gl||a===xl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Kl(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var js=class extends ma{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=4,Bd=[.125,.215,.35,.446,.526,.582],es=20,qc=new js,kd=new De,Yc=null,Zc=0,Kc=0,$c=!1,ji=(1+Math.sqrt(5))/2,Ts=1/ji,Hd=[new w(-ji,Ts,0),new w(ji,Ts,0),new w(-Ts,0,ji),new w(Ts,0,ji),new w(0,ji,-Ts),new w(0,ji,Ts),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,Zc,Kc),this._renderer.xr.enabled=$c,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:ro,format:Lt,colorSpace:Kt,depthBuffer:!1},i=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=v_(r,e,t)}return i}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,qc)}_sceneToCubeUV(e,t,n,i){let a=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kd),h.toneMapping=Fi,h.autoClear=!1;let f=new En({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new He(new Vt,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(kd),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Vo(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,qc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hd[(i-r-1)%Hd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let p=[],M=0;for(let R=0;R<es;++R){let C=R/x,b=Math.exp(-C*C/2);p.push(b),R===0?M+=b:R<g&&(M+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[i],L=3*_*(i>y-Ns?i-y+Ns:0),T=4*(this._cubeSize-_);Vo(t,L,T,3*_,2*_),c.setRenderTarget(t),c.render(u,qc)}};function y_(s){let e=[],t=[],n=[],i=s,r=s-Ns+1+Bd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ns?c=Bd[o-s+Ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,C=T>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];M.set(b,x*m*T),y.set(d,g*m*T);let v=[T,T,T,T,T,T];_.set(v,p*m*T)}let L=new rt;L.setAttribute("position",new at(M,x)),L.setAttribute("uv",new at(y,g)),L.setAttribute("faceIndex",new at(_,p)),e.push(L),i>Ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(s,e,t){let n=new hi(s,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function v_(s,e,t){let n=new Float32Array(es),i=new w(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Vd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Gd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function M_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===gl||c===xl,h=c===Vs||c===Gs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qs(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Qs(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function S_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b_(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){let L=M[y+0],T=M[y+1],R=M[y+2];d.push(L,T,T,R,R,L)}}else if(m!==void 0){let M=m.array;x=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let L=y+0,T=y+1,R=y+2;d.push(L,T,T,R,R,L)}}else return;let g=new(Zf(d)?pa:fa)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function T_(s,e,t){let n=new WeakMap,i=new it;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*L*4*u),R=new Ks(T,_,L,u);R.type=Fn,R.needsUpdate=!0;let C=y*4;for(let v=0;v<u;v++){let P=g[v],k=p[v],F=M[v],U=_*L*4*v;for(let V=0;V<P.count;V++){let B=V*C;f===!0&&(i.fromBufferAttribute(P,V),T[U+B+0]=i.x,T[U+B+1]=i.y,T[U+B+2]=i.z,T[U+B+3]=0),m===!0&&(i.fromBufferAttribute(k,V),T[U+B+4]=i.x,T[U+B+5]=i.y,T[U+B+6]=i.z,T[U+B+7]=0),x===!0&&(i.fromBufferAttribute(F,V),T[U+B+8]=i.x,T[U+B+9]=i.y,T[U+B+10]=i.z,T[U+B+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new se(_,L)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function A_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var xa=class extends kt{constructor(e,t,n,i,r,o,a,c,l,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=ts),n===void 0&&h===Xs&&(n=Ws),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jf=new kt,Wd=new xa(1,1),Qf=new Ks,ep=new Yl,tp=new ga,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Kd=new Float32Array(4);function lr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Xd[i];if(r===void 0&&(r=new Float32Array(i),Xd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wa(s,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function R_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function L_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Kd.set(n),s.uniformMatrix2fv(this.addr,!1,Kd),Nt(t,n)}}function D_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Zd.set(n),s.uniformMatrix3fv(this.addr,!1,Zd),Nt(t,n)}}function U_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Yd.set(n),s.uniformMatrix4fv(this.addr,!1,Yd),Nt(t,n)}}function N_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function F_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function O_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function B_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function k_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function H_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function V_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function G_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wd.compareFunction=Yf,r=Wd):r=jf,t.setTexture2D(e||r,i)}function W_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ep,i)}function X_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tp,i)}function q_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qf,i)}function Y_(s){switch(s){case 5126:return R_;case 35664:return C_;case 35665:return I_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return H_;case 36295:return z_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(s,e){s.uniform1fv(this.addr,e)}function K_(s,e){let t=lr(e,this.size,2);s.uniform2fv(this.addr,t)}function $_(s,e){let t=lr(e,this.size,3);s.uniform3fv(this.addr,t)}function J_(s,e){let t=lr(e,this.size,4);s.uniform4fv(this.addr,t)}function j_(s,e){let t=lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q_(s,e){let t=lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ey(s,e){let t=lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ty(s,e){s.uniform1iv(this.addr,e)}function ny(s,e){s.uniform2iv(this.addr,e)}function iy(s,e){s.uniform3iv(this.addr,e)}function sy(s,e){s.uniform4iv(this.addr,e)}function ry(s,e){s.uniform1uiv(this.addr,e)}function oy(s,e){s.uniform2uiv(this.addr,e)}function ay(s,e){s.uniform3uiv(this.addr,e)}function cy(s,e){s.uniform4uiv(this.addr,e)}function ly(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jf,r[o])}function hy(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ep,r[o])}function uy(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tp,r[o])}function dy(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function fy(s){switch(s){case 5126:return Z_;case 35664:return K_;case 35665:return $_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return oy;case 36295:return ay;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}var $l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fy(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function $d(s,e){s.seq.push(e),s.map[e.id]=e}function py(s,e,t){let n=s.name,i=n.length;for(Jc.lastIndex=0;;){let r=Jc.exec(n),o=Jc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){$d(t,l===void 0?new $l(a,s,e):new Jl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new jl(a),$d(t,u)),t=u}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);py(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Jd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var my=37297,gy=0;function xy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var jd=new Ye;function _y(s){je._getMatrix(jd,je.workingColorSpace,s);let e=`mat3( ${jd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Ga:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xy(s.getShaderSource(e),o)}else return i}function yy(s,e){let t=_y(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vy(s,e){let t;switch(e){case Am:t="Linear";break;case Rm:t="Reinhard";break;case Cm:t="Cineon";break;case Ih:t="ACESFilmic";break;case Pm:t="AgX";break;case Lm:t="Neutral";break;case Im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new w;function My(){je.getLuminanceCoefficients(Go);let s=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function by(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ey(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Nr(s){return s!==""}function ef(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(wy,Ay)}var Ty=new Map;function Ay(s,e){let t=Ve[e];if(t===void 0){let n=Ty.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var Ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(s){return s.replace(Ry,Cy)}function Cy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Py(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ly(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Gs&&(e="ENVMAP_MODE_REFRACTION"),e}function Dy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case wm:e="ENVMAP_BLENDING_MIX";break;case Tm:e="ENVMAP_BLENDING_ADD";break}return e}function Uy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ny(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Iy(t),l=Py(t),h=Ly(t),u=Dy(t),d=Uy(t),f=Sy(t),m=by(r),x=i.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(g=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fi?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,yy("linearToOutputTexel",t.outputColorSpace),My(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Ql(o),o=ef(o,t),o=tf(o,t),a=Ql(a),a=ef(a,t),a=tf(a,t),o=nf(o),a=nf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+o,_=M+p+a,L=Jd(i,i.VERTEX_SHADER,y),T=Jd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,L),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(L).trim(),U=i.getShaderInfoLog(T).trim(),V=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,T);else{let Z=Qd(i,L,"vertex"),H=Qd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||U==="")&&(B=!1);B&&(P.diagnostics={runnable:V,programLog:k,vertexShader:{log:F,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(L),i.deleteShader(T),C=new Hs(i,x),b=Ey(i,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,my)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}var Fy=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new th(e),t.set(e,n)),n}},th=class{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}};function Oy(s,e,t,n,i,r,o){let a=new da,c=new eh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,v,P,k,F){let U=k.fog,V=F.geometry,B=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),H=Z&&Z.mapping===za?Z.image.height:null,te=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=le!==void 0?le.length:0,de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Ee,X,$,me;if(te){let ut=Gn[te];Ee=ut.vertexShader,X=ut.fragmentShader}else Ee=b.vertexShader,X=b.fragmentShader,c.update(b),$=c.getVertexShaderID(b),me=c.getFragmentShaderID(b);let oe=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,We=!!b.map,J=!!b.matcap,ne=!!Z,I=!!b.aoMap,Ae=!!b.lightMap,ie=!!b.bumpMap,Me=!!b.normalMap,ce=!!b.displacementMap,Oe=!!b.emissiveMap,Se=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,z=b.clearcoat>0,Y=b.dispersion>0,Q=b.iridescence>0,K=b.sheen>0,Re=b.transmission>0,pe=S&&!!b.anisotropyMap,be=z&&!!b.clearcoatMap,Je=z&&!!b.clearcoatNormalMap,re=z&&!!b.clearcoatRoughnessMap,we=Q&&!!b.iridescenceMap,Be=Q&&!!b.iridescenceThicknessMap,ke=K&&!!b.sheenColorMap,Te=K&&!!b.sheenRoughnessMap,tt=!!b.specularMap,Ze=!!b.specularColorMap,xt=!!b.specularIntensityMap,D=Re&&!!b.transmissionMap,ge=Re&&!!b.thicknessMap,q=!!b.gradientMap,j=!!b.alphaMap,ve=b.alphaTest>0,_e=!!b.alphaHash,Xe=!!b.extensions,Et=Fi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Et=s.toneMapping);let Gt={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:Ee,fragmentShader:X,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Kt,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:J,envMap:ne,envMapMode:ne&&Z.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Ae,bumpMap:ie,normalMap:Me,displacementMap:d&&ce,emissiveMap:Oe,normalMapObjectSpace:Me&&b.normalMapType===Hm,normalMapTangentSpace:Me&&b.normalMapType===qf,metalnessMap:Se,roughnessMap:A,anisotropy:S,anisotropyMap:pe,clearcoat:z,clearcoatMap:be,clearcoatNormalMap:Je,clearcoatRoughnessMap:re,dispersion:Y,iridescence:Q,iridescenceMap:we,iridescenceThicknessMap:Be,sheen:K,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:tt,specularColorMap:Ze,specularIntensityMap:xt,transmission:Re,transmissionMap:D,thicknessMap:ge,gradientMap:q,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:_e,combine:b.combine,mapUv:We&&x(b.map.channel),aoMapUv:I&&x(b.aoMap.channel),lightMapUv:Ae&&x(b.lightMap.channel),bumpMapUv:ie&&x(b.bumpMap.channel),normalMapUv:Me&&x(b.normalMap.channel),displacementMapUv:ce&&x(b.displacementMap.channel),emissiveMapUv:Oe&&x(b.emissiveMap.channel),metalnessMapUv:Se&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:be&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(b.sheenRoughnessMap.channel),specularMapUv:tt&&x(b.specularMap.channel),specularColorMapUv:Ze&&x(b.specularColorMap.channel),specularIntensityMapUv:xt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:j&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Me||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(We||j),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:he,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:de,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Et,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===ft,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wt,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)v.push(P),v.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(M(v,b),y(v,b),v.push(s.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function M(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let v=m[b.type],P;if(v){let k=Gn[v];P=A0.clone(k.uniforms)}else P=b.uniforms;return P}function L(b,v){let P;for(let k=0,F=h.length;k<F;k++){let U=h[k];if(U.cacheKey===v){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Ny(s,v,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function By(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ky(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function of(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ky),n.length>1&&n.sort(d||rf),i.length>1&&i.sort(d||rf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Hy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new of,s.set(n,[o])):i>=r.length?(o=new of,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function zy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new De};break;case"SpotLight":t={position:new w,direction:new w,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Vy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Gy=0;function Wy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xy(s){let e=new zy,t=Vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let i=new w,r=new Fe,o=new Fe;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,y=0,_=0,L=0,T=0,R=0;l.sort(Wy);for(let b=0,v=l.length;b<v;b++){let P=l[b],k=P.color,F=P.intensity,U=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],F);R++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=B,f++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(k).multiplyScalar(F),B.distance=U,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[x]=B;let Z=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=V,_++}x++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(k).multiplyScalar(F),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=B,g++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(F),B.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==L||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=L,C.numLightProbes=R,n.version=Gy++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function af(s){let e=new Xy(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new af(s),e.set(i,[a])):r>=o.length?(a=new af(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var nh=class extends on{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ih=class extends on{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`;function Ky(s,e,t){let n=new qr,i=new se,r=new se,o=new it,a=new nh({depthPacking:km}),c=new ih,l={},h=t.maxTextureSize,u={[Wn]:qt,[qt]:Wn,[wt]:wt},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Yy,fragmentShader:Zy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let p=this.type;this.render=function(T,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Ni),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==ri&&this.type===ri,U=p===ri&&this.type!==ri;for(let V=0,B=T.length;V<B;V++){let Z=T[V],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let te=H.getFrameExtents();if(i.multiply(te),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||F===!0||U===!0){let xe=this.type!==ri?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new hi(i.x,i.y,xe),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let le=H.getViewportCount();for(let xe=0;xe<le;xe++){let de=H.getViewport(xe);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),k.viewport(o),H.updateMatrices(Z,xe),n=H.getFrustum(),_(R,C,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===ri&&M(H,C),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,v,P)};function M(T,R){let C=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,C,f,x,null)}function y(T,R,C,b){let v=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=v.uuid,F=R.uuid,U=l[k];U===void 0&&(U={},l[k]=U);let V=U[F];V===void 0&&(V=v.clone(),U[F]=V,R.addEventListener("dispose",L)),v=V}if(v.visible=R.visible,v.wireframe=R.wireframe,b===ri?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=s.properties.get(v);k.light=C}return v}function _(T,R,C,b,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let F=e.update(T),U=T.material;if(Array.isArray(U)){let V=F.groups;for(let B=0,Z=V.length;B<Z;B++){let H=V[B],te=U[H.materialIndex];if(te&&te.visible){let le=y(T,te,b,v);T.onBeforeShadow(s,T,R,C,F,le,H),s.renderBufferDirect(C,null,F,le,T,H),T.onAfterShadow(s,T,R,C,F,le,H)}}}else if(U.visible){let V=y(T,U,b,v);T.onBeforeShadow(s,T,R,C,F,V,null),s.renderBufferDirect(C,null,F,V,T,null),T.onAfterShadow(s,T,R,C,F,V,null)}}let k=T.children;for(let F=0,U=k.length;F<U;F++)_(k[F],R,C,b,v)}function L(T){T.target.removeEventListener("dispose",L);for(let C in l){let b=l[C],v=T.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var $y={[ll]:hl,[ul]:pl,[dl]:ml,[zs]:fl,[hl]:ll,[pl]:ul,[ml]:dl,[fl]:zs};function Jy(s,e){function t(){let D=!1,ge=new it,q=null,j=new it(0,0,0,0);return{setMask:function(ve){q!==ve&&!D&&(s.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){D=ve},setClear:function(ve,_e,Xe,Et,Gt){Gt===!0&&(ve*=Et,_e*=Et,Xe*=Et),ge.set(ve,_e,Xe,Et),j.equals(ge)===!1&&(s.clearColor(ve,_e,Xe,Et),j.copy(ge))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ge=!1,q=null,j=null,ve=null;return{setReversed:function(_e){if(ge!==_e){let Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let Et=ve;ve=null,this.setClear(Et)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?oe(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(_e){q!==_e&&!D&&(s.depthMask(_e),q=_e)},setFunc:function(_e){if(ge&&(_e=$y[_e]),j!==_e){switch(_e){case ll:s.depthFunc(s.NEVER);break;case hl:s.depthFunc(s.ALWAYS);break;case ul:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case dl:s.depthFunc(s.EQUAL);break;case fl:s.depthFunc(s.GEQUAL);break;case pl:s.depthFunc(s.GREATER);break;case ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ve!==_e&&(ge&&(_e=1-_e),s.clearDepth(_e),ve=_e)},reset:function(){D=!1,q=null,j=null,ve=null,ge=!1}}}function i(){let D=!1,ge=null,q=null,j=null,ve=null,_e=null,Xe=null,Et=null,Gt=null;return{setTest:function(ut){D||(ut?oe(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(ut){ge!==ut&&!D&&(s.stencilMask(ut),ge=ut)},setFunc:function(ut,Cn,Jn){(q!==ut||j!==Cn||ve!==Jn)&&(s.stencilFunc(ut,Cn,Jn),q=ut,j=Cn,ve=Jn)},setOp:function(ut,Cn,Jn){(_e!==ut||Xe!==Cn||Et!==Jn)&&(s.stencilOp(ut,Cn,Jn),_e=ut,Xe=Cn,Et=Jn)},setLocked:function(ut){D=ut},setClear:function(ut){Gt!==ut&&(s.clearStencil(ut),Gt=ut)},reset:function(){D=!1,ge=null,q=null,j=null,ve=null,_e=null,Xe=null,Et=null,Gt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,L=null,T=null,R=new De(0,0,0),C=0,b=!1,v=null,P=null,k=null,F=null,U=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let te=null,le={},xe=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Ee=new it().fromArray(xe),X=new it().fromArray(de);function $(D,ge,q,j){let ve=new Uint8Array(4),_e=s.createTexture();s.bindTexture(D,_e),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<q;Xe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ge+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return _e}let me={};me[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(s.DEPTH_TEST),o.setFunc(zs),ie(!1),Me(ud),oe(s.CULL_FACE),I(Ni);function oe(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function he(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ue(D,ge){return u[D]!==ge?(s.bindFramebuffer(D,ge),u[D]=ge,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ge),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(D,ge){let q=f,j=!1;if(D){q=d.get(ge),q===void 0&&(q=[],d.set(ge,q));let ve=D.textures;if(q.length!==ve.length||q[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Xe=ve.length;_e<Xe;_e++)q[_e]=s.COLOR_ATTACHMENT0+_e;q.length=ve.length,j=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,j=!0);j&&s.drawBuffers(q)}function We(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let J={[Qi]:s.FUNC_ADD,[cm]:s.FUNC_SUBTRACT,[lm]:s.FUNC_REVERSE_SUBTRACT};J[hm]=s.MIN,J[um]=s.MAX;let ne={[dm]:s.ZERO,[fm]:s.ONE,[pm]:s.SRC_COLOR,[al]:s.SRC_ALPHA,[vm]:s.SRC_ALPHA_SATURATE,[_m]:s.DST_COLOR,[gm]:s.DST_ALPHA,[mm]:s.ONE_MINUS_SRC_COLOR,[cl]:s.ONE_MINUS_SRC_ALPHA,[ym]:s.ONE_MINUS_DST_COLOR,[xm]:s.ONE_MINUS_DST_ALPHA,[Mm]:s.CONSTANT_COLOR,[Sm]:s.ONE_MINUS_CONSTANT_COLOR,[bm]:s.CONSTANT_ALPHA,[Em]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,ge,q,j,ve,_e,Xe,Et,Gt,ut){if(D===Ni){x===!0&&(he(s.BLEND),x=!1);return}if(x===!1&&(oe(s.BLEND),x=!0),D!==am){if(D!==g||ut!==b){if((p!==Qi||_!==Qi)&&(s.blendEquation(s.FUNC_ADD),p=Qi,_=Qi),ut)switch(D){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ca:s.blendFunc(s.ONE,s.ONE);break;case dd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ca:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case dd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,y=null,L=null,T=null,R.set(0,0,0),C=0,g=D,b=ut}return}ve=ve||ge,_e=_e||q,Xe=Xe||j,(ge!==p||ve!==_)&&(s.blendEquationSeparate(J[ge],J[ve]),p=ge,_=ve),(q!==M||j!==y||_e!==L||Xe!==T)&&(s.blendFuncSeparate(ne[q],ne[j],ne[_e],ne[Xe]),M=q,y=j,L=_e,T=Xe),(Et.equals(R)===!1||Gt!==C)&&(s.blendColor(Et.r,Et.g,Et.b,Gt),R.copy(Et),C=Gt),g=D,b=!1}function Ae(D,ge){D.side===wt?he(s.CULL_FACE):oe(s.CULL_FACE);let q=D.side===qt;ge&&(q=!q),ie(q),D.blending===Os&&D.transparent===!1?I(Ni):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function Me(D){D!==rm?(oe(s.CULL_FACE),D!==P&&(D===ud?s.cullFace(s.BACK):D===om?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),P=D}function ce(D){D!==k&&(B&&s.lineWidth(D),k=D)}function Oe(D,ge,q){D?(oe(s.POLYGON_OFFSET_FILL),(F!==ge||U!==q)&&(s.polygonOffset(ge,q),F=ge,U=q)):he(s.POLYGON_OFFSET_FILL)}function Se(D){D?oe(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+V-1),te!==D&&(s.activeTexture(D),te=D)}function S(D,ge,q){q===void 0&&(te===null?q=s.TEXTURE0+V-1:q=te);let j=le[q];j===void 0&&(j={type:void 0,texture:void 0},le[q]=j),(j.type!==D||j.texture!==ge)&&(te!==q&&(s.activeTexture(q),te=q),s.bindTexture(D,ge||me[D]),j.type=D,j.texture=ge)}function z(){let D=le[te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){Ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function Te(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function tt(D,ge){let q=l.get(ge);q===void 0&&(q=new WeakMap,l.set(ge,q));let j=q.get(D);j===void 0&&(j=s.getUniformBlockIndex(ge,D.name),q.set(D,j))}function Ze(D,ge){let j=l.get(ge).get(D);c.get(ge)!==j&&(s.uniformBlockBinding(ge,j,D.__bindingPointIndex),c.set(ge,j))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,le={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,L=null,T=null,R=new De(0,0,0),C=0,b=!1,v=null,P=null,k=null,F=null,U=null,Ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:he,bindFramebuffer:Ue,drawBuffers:Ne,useProgram:We,setBlending:I,setMaterial:Ae,setFlipSided:ie,setCullFace:Me,setLineWidth:ce,setPolygonOffset:Oe,setScissorTest:Se,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:we,texImage3D:Be,updateUBOMapping:tt,uniformBlockBinding:Ze,texStorage2D:Je,texStorage3D:re,texSubImage2D:K,texSubImage3D:Re,compressedTexSubImage2D:pe,compressedTexSubImage3D:be,scissor:ke,viewport:Te,reset:xt}}function cf(s,e,t,n){let i=jy(n);switch(t){case kf:return s*e;case zf:return s*e;case Vf:return s*e*2;case Nh:return s*e/i.components*i.byteLength;case Fh:return s*e/i.components*i.byteLength;case Gf:return s*e*2/i.components*i.byteLength;case Oh:return s*e*2/i.components*i.byteLength;case Hf:return s*e*3/i.components*i.byteLength;case Lt:return s*e*4/i.components*i.byteLength;case Bh:return s*e*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:case Ml:return Math.max(s,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(s,8)*Math.max(e,8)/2;case Sl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case aa:case kl:case Hl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wf:case zl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vl:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(s){switch(s){case Zt:case Ff:return{byteLength:1,components:1};case Wr:case Of:case ro:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case ts:case Lh:case Fn:return{byteLength:4,components:1};case Bf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Qy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return f?new OffscreenCanvas(A,S):Xr("canvas")}function x(A,S,z){let Y=1,Q=Se(A);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(Y*Q.width),Re=Math.floor(Y*Q.height);u===void 0&&(u=m(K,Re));let pe=S?m(K,Re):u;return pe.width=K,pe.height=Re,pe.getContext("2d").drawImage(A,0,0,K,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Re+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,z,Y,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===s.RED&&(z===s.FLOAT&&(K=s.R32F),z===s.HALF_FLOAT&&(K=s.R16F),z===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.R8UI),z===s.UNSIGNED_SHORT&&(K=s.R16UI),z===s.UNSIGNED_INT&&(K=s.R32UI),z===s.BYTE&&(K=s.R8I),z===s.SHORT&&(K=s.R16I),z===s.INT&&(K=s.R32I)),S===s.RG&&(z===s.FLOAT&&(K=s.RG32F),z===s.HALF_FLOAT&&(K=s.RG16F),z===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RG8UI),z===s.UNSIGNED_SHORT&&(K=s.RG16UI),z===s.UNSIGNED_INT&&(K=s.RG32UI),z===s.BYTE&&(K=s.RG8I),z===s.SHORT&&(K=s.RG16I),z===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RGB8UI),z===s.UNSIGNED_SHORT&&(K=s.RGB16UI),z===s.UNSIGNED_INT&&(K=s.RGB32UI),z===s.BYTE&&(K=s.RGB8I),z===s.SHORT&&(K=s.RGB16I),z===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),z===s.UNSIGNED_INT&&(K=s.RGBA32UI),z===s.BYTE&&(K=s.RGBA8I),z===s.SHORT&&(K=s.RGBA16I),z===s.INT&&(K=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){let Re=Q?Ga:je.getTransfer(Y);z===s.FLOAT&&(K=s.RGBA32F),z===s.HALF_FLOAT&&(K=s.RGBA16F),z===s.UNSIGNED_BYTE&&(K=Re===ft?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,S){let z;return A?S===null||S===ts||S===Ws?z=s.DEPTH24_STENCIL8:S===Fn?z=s.DEPTH32F_STENCIL8:S===Wr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Ws?z=s.DEPTH_COMPONENT24:S===Fn?z=s.DEPTH_COMPONENT32F:S===Wr&&(z=s.DEPTH_COMPONENT16),z}function L(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&h.delete(S)}function R(A){let S=A.target;S.removeEventListener("dispose",R),v(S)}function C(A){let S=n.get(A);if(S.__webglInit===void 0)return;let z=A.source,Y=d.get(z);if(Y){let Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(A),Object.keys(Y).length===0&&d.delete(z)}n.remove(A)}function b(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let z=A.source,Y=d.get(z);delete Y[S.__cacheKey],o.memory.textures--}function v(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=A.textures;for(let Y=0,Q=z.length;Y<Q;Y++){let K=n.get(z[Y]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(A)}let P=0;function k(){P=0}function F(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function U(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){let z=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,A,S);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function B(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function Z(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function H(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let te={[mn]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},le={[Yt]:s.NEAREST,[Ph]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[zt]:s.LINEAR_MIPMAP_LINEAR},xe={[zm]:s.NEVER,[Ym]:s.ALWAYS,[Vm]:s.LESS,[Yf]:s.LEQUAL,[Gm]:s.EQUAL,[qm]:s.GEQUAL,[Wm]:s.GREATER,[Xm]:s.NOTEQUAL};function de(A,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tt||S.magFilter===Fr||S.magFilter===Ls||S.magFilter===zt||S.minFilter===Tt||S.minFilter===Fr||S.minFilter===Ls||S.minFilter===zt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,te[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,le[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Ls&&S.minFilter!==zt||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let Y=S.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let K=U(S);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;let Re=Q[A.__cacheKey];Re!==void 0&&(Q[A.__cacheKey].usedTimes--,Re.usedTimes===0&&b(S)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return z}function X(A,S,z){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);let Q=Ee(A,S),K=S.source;t.bindTexture(Y,A.__webglTexture,s.TEXTURE0+z);let Re=n.get(K);if(K.version!==Re.__version||Q===!0){t.activeTexture(s.TEXTURE0+z);let pe=je.getPrimaries(je.workingColorSpace),be=S.colorSpace===Un?null:je.getPrimaries(S.colorSpace),Je=S.colorSpace===Un||pe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let re=x(S.image,!1,i.maxTextureSize);re=Oe(S,re);let we=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),ke=y(S.internalFormat,we,Be,S.colorSpace,S.isVideoTexture);de(Y,S);let Te,tt=S.mipmaps,Ze=S.isVideoTexture!==!0,xt=Re.__version===void 0||Q===!0,D=K.dataReady,ge=L(S,re);if(S.isDepthTexture)ke=_(S.format===Xs,S.type),xt&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,we,Be,null));else if(S.isDataTexture)if(tt.length>0){Ze&&xt&&t.texStorage2D(s.TEXTURE_2D,ge,ke,tt[0].width,tt[0].height);for(let q=0,j=tt.length;q<j;q++)Te=tt[q],Ze?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Te.width,Te.height,we,Be,Te.data):t.texImage2D(s.TEXTURE_2D,q,ke,Te.width,Te.height,0,we,Be,Te.data);S.generateMipmaps=!1}else Ze?(xt&&t.texStorage2D(s.TEXTURE_2D,ge,ke,re.width,re.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,we,Be,re.data)):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,we,Be,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ke,tt[0].width,tt[0].height,re.depth);for(let q=0,j=tt.length;q<j;q++)if(Te=tt[q],S.format!==Lt)if(we!==null)if(Ze){if(D)if(S.layerUpdates.size>0){let ve=cf(Te.width,Te.height,S.format,S.type);for(let _e of S.layerUpdates){let Xe=Te.data.subarray(_e*ve/Te.data.BYTES_PER_ELEMENT,(_e+1)*ve/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,_e,Te.width,Te.height,1,we,Xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,re.depth,we,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ke,Te.width,Te.height,re.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,re.depth,we,Be,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ke,Te.width,Te.height,re.depth,0,we,Be,Te.data)}else{Ze&&xt&&t.texStorage2D(s.TEXTURE_2D,ge,ke,tt[0].width,tt[0].height);for(let q=0,j=tt.length;q<j;q++)Te=tt[q],S.format!==Lt?we!==null?Ze?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Te.width,Te.height,we,Be,Te.data):t.texImage2D(s.TEXTURE_2D,q,ke,Te.width,Te.height,0,we,Be,Te.data)}else if(S.isDataArrayTexture)if(Ze){if(xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ke,re.width,re.height,re.depth),D)if(S.layerUpdates.size>0){let q=cf(re.width,re.height,S.format,S.type);for(let j of S.layerUpdates){let ve=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,we,Be,ve)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,Be,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,we,Be,re.data);else if(S.isData3DTexture)Ze?(xt&&t.texStorage3D(s.TEXTURE_3D,ge,ke,re.width,re.height,re.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,Be,re.data)):t.texImage3D(s.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,we,Be,re.data);else if(S.isFramebufferTexture){if(xt)if(Ze)t.texStorage2D(s.TEXTURE_2D,ge,ke,re.width,re.height);else{let q=re.width,j=re.height;for(let ve=0;ve<ge;ve++)t.texImage2D(s.TEXTURE_2D,ve,ke,q,j,0,we,Be,null),q>>=1,j>>=1}}else if(tt.length>0){if(Ze&&xt){let q=Se(tt[0]);t.texStorage2D(s.TEXTURE_2D,ge,ke,q.width,q.height)}for(let q=0,j=tt.length;q<j;q++)Te=tt[q],Ze?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,we,Be,Te):t.texImage2D(s.TEXTURE_2D,q,ke,we,Be,Te);S.generateMipmaps=!1}else if(Ze){if(xt){let q=Se(re);t.texStorage2D(s.TEXTURE_2D,ge,ke,q.width,q.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Be,re)}else t.texImage2D(s.TEXTURE_2D,0,ke,we,Be,re);g(S)&&p(Y),Re.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,z){if(S.image.length!==6)return;let Y=Ee(A,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let K=n.get(Q);if(Q.version!==K.__version||Y===!0){t.activeTexture(s.TEXTURE0+z);let Re=je.getPrimaries(je.workingColorSpace),pe=S.colorSpace===Un?null:je.getPrimaries(S.colorSpace),be=S.colorSpace===Un||Re===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Je=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,we=[];for(let j=0;j<6;j++)!Je&&!re?we[j]=x(S.image[j],!0,i.maxCubemapSize):we[j]=re?S.image[j].image:S.image[j],we[j]=Oe(S,we[j]);let Be=we[0],ke=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),tt=y(S.internalFormat,ke,Te,S.colorSpace),Ze=S.isVideoTexture!==!0,xt=K.__version===void 0||Y===!0,D=Q.dataReady,ge=L(S,Be);de(s.TEXTURE_CUBE_MAP,S);let q;if(Je){Ze&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,tt,Be.width,Be.height);for(let j=0;j<6;j++){q=we[j].mipmaps;for(let ve=0;ve<q.length;ve++){let _e=q[ve];S.format!==Lt?ke!==null?Ze?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,tt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,_e.width,_e.height,ke,Te,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,tt,_e.width,_e.height,0,ke,Te,_e.data)}}}else{if(q=S.mipmaps,Ze&&xt){q.length>0&&ge++;let j=Se(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,tt,j.width,j.height)}for(let j=0;j<6;j++)if(re){Ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we[j].width,we[j].height,ke,Te,we[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,tt,we[j].width,we[j].height,0,ke,Te,we[j].data);for(let ve=0;ve<q.length;ve++){let Xe=q[ve].image[j].image;Ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Xe.width,Xe.height,ke,Te,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,tt,Xe.width,Xe.height,0,ke,Te,Xe.data)}}else{Ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Te,we[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,tt,ke,Te,we[j]);for(let ve=0;ve<q.length;ve++){let _e=q[ve];Ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,ke,Te,_e.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,tt,ke,Te,_e.image[j])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,z,Y,Q,K){let Re=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),be=y(z.internalFormat,Re,pe,z.colorSpace),Je=n.get(S),re=n.get(z);if(re.__renderTarget=S,!Je.__hasExternalTextures){let we=Math.max(1,S.width>>K),Be=Math.max(1,S.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,be,we,Be,S.depth,0,Re,pe,null):t.texImage2D(Q,K,be,we,Be,0,Re,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Me(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,re.__webglTexture,0,ie(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,re.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(A,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,K=_(S.stencilBuffer,Q),Re=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ie(S);Me(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,K,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,A)}else{let Y=S.textures;for(let Q=0;Q<Y.length;Q++){let K=Y[Q],Re=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),be=y(K.internalFormat,Re,pe,K.colorSpace),Je=ie(S);z&&Me(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,be,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,be,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,be,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let Q=Y.__webglTexture,K=ie(S);if(S.depthTexture.format===Bs)Me(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Xs)Me(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(A){let S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),oe(S.__webglDepthbuffer[Y],A,!1);else{let Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),oe(S.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(A,S,z){let Y=n.get(A);S!==void 0&&me(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ue(A)}function We(A){let S=A.texture,z=n.get(A),Y=n.get(S);A.addEventListener("dispose",R);let Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Re=Q.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let be=0;be<S.mipmaps.length;be++)z.__webglFramebuffer[pe][be]=s.createFramebuffer()}else z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)z.__webglFramebuffer[pe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Re)for(let pe=0,be=Q.length;pe<be;pe++){let Je=n.get(Q[pe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Me(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){let be=Q[pe];z.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);let Je=r.convert(be.format,be.colorSpace),re=r.convert(be.type),we=y(be.internalFormat,Je,re,be.colorSpace,A.isXRRenderTarget===!0),Be=ie(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,we,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),de(s.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)me(z.__webglFramebuffer[pe][be],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else me(z.__webglFramebuffer[pe],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,be=Q.length;pe<be;pe++){let Je=Q[pe],re=n.get(Je);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),de(s.TEXTURE_2D,Je),me(z.__webglFramebuffer,A,Je,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),g(Je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),de(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)me(z.__webglFramebuffer[be],A,S,s.COLOR_ATTACHMENT0,pe,be);else me(z.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,pe,0);g(S)&&p(pe),t.unbindTexture()}A.depthBuffer&&Ue(A)}function J(A){let S=A.textures;for(let z=0,Y=S.length;z<Y;z++){let Q=S[z];if(g(Q)){let K=M(A),Re=n.get(Q).__webglTexture;t.bindTexture(K,Re),p(K),t.unbindTexture()}}}let ne=[],I=[];function Ae(A){if(A.samples>0){if(Me(A)===!1){let S=A.textures,z=A.width,Y=A.height,Q=s.COLOR_BUFFER_BIT,K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(A),pe=S.length>1;if(pe)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<S.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let Je=n.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,s.NEAREST),c===!0&&(ne.length=0,I.length=0,ne.push(s.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ne.push(K),I.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let Je=n.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ie(A){return Math.min(i.maxSamples,A.samples)}function Me(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Oe(A,S){let z=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Kt&&z!==Un&&(je.getTransfer(z)===ft?(Y!==Lt||Q!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function ev(s,e){function t(n,i=Un){let r,o=je.getTransfer(i);if(n===Zt)return s.UNSIGNED_BYTE;if(n===Dh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ff)return s.BYTE;if(n===Of)return s.SHORT;if(n===Wr)return s.UNSIGNED_SHORT;if(n===Lh)return s.INT;if(n===ts)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===ro)return s.HALF_FLOAT;if(n===kf)return s.ALPHA;if(n===Hf)return s.RGB;if(n===Lt)return s.RGBA;if(n===zf)return s.LUMINANCE;if(n===Vf)return s.LUMINANCE_ALPHA;if(n===Bs)return s.DEPTH_COMPONENT;if(n===Xs)return s.DEPTH_STENCIL;if(n===Nh)return s.RED;if(n===Fh)return s.RED_INTEGER;if(n===Gf)return s.RG;if(n===Oh)return s.RG_INTEGER;if(n===Bh)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===vl||n===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===kl||n===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wf||n===zl||n===Vl||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var sh=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tv={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new kt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new an({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new rh,g=t.getContextAttributes(),p=null,M=null,y=[],_=[],L=new se,T=null,R=new Pt;R.viewport=new it;let C=new Pt;C.viewport=new it;let b=[R,C],v=new sh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=y[X];return $===void 0&&($=new kr,y[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=y[X];return $===void 0&&($=new kr,y[X]=$),$.getGripSpace()},this.getHand=function(X){let $=y[X];return $===void 0&&($=new kr,y[X]=$),$.getHandSpace()};function F(X){let $=_.indexOf(X.inputSource);if($===-1)return;let me=y[$];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){let $=_[X];$!==null&&(_[X]=null,y[X].disconnect($))}P=null,k=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",U),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){let $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new hi(f.framebufferWidth,f.framebufferHeight,{format:Lt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,me=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?Xs:Bs,me=g.stencil?Ws:ts);let he={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(he),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new hi(d.textureWidth,d.textureHeight,{format:Lt,type:Zt,depthTexture:new xa(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(X){for(let $=0;$<X.removed.length;$++){let me=X.removed[$],oe=_.indexOf(me);oe>=0&&(_[oe]=null,y[oe].disconnect(me))}for(let $=0;$<X.added.length;$++){let me=X.added[$],oe=_.indexOf(me);if(oe===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=_.length){_.push(me),oe=Ue;break}else if(_[Ue]===null){_[Ue]=me,oe=Ue;break}if(oe===-1)break}let he=y[oe];he&&he.connect(me)}}let B=new w,Z=new w;function H(X,$,me){B.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);let oe=B.distanceTo(Z),he=$.projectionMatrix.elements,Ue=me.projectionMatrix.elements,Ne=he[14]/(he[10]-1),We=he[14]/(he[10]+1),J=(he[9]+1)/he[5],ne=(he[9]-1)/he[5],I=(he[8]-1)/he[0],Ae=(Ue[8]+1)/Ue[0],ie=Ne*I,Me=Ne*Ae,ce=oe/(-I+Ae),Oe=ce*-I;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Oe),X.translateZ(ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),he[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Se=Ne+ce,A=We+ce,S=ie-Oe,z=Me+(oe-Oe),Y=J*We/A*Se,Q=ne*We/A*Se;X.projectionMatrix.makePerspective(S,z,Y,Q,Se,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let $=X.near,me=X.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(me=x.depthFar)),v.near=C.near=R.near=$,v.far=C.far=R.far=me,(P!==v.near||k!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,k=v.far),R.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,v.layers.mask=R.layers.mask|C.layers.mask;let oe=X.parent,he=v.cameras;te(v,oe);for(let Ue=0;Ue<he.length;Ue++)te(he[Ue],oe);he.length===2?H(v,R,C):v.projectionMatrix.copy(R.projectionMatrix),le(X,v,oe)};function le(X,$,me){me===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let xe=null;function de(X,$){if(h=$.getViewerPose(l||o),m=$,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let oe=!1;me.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ue=0;Ue<me.length;Ue++){let Ne=me[Ue],We=null;if(f!==null)We=f.getViewport(Ne);else{let ne=u.getViewSubImage(d,Ne);We=ne.viewport,Ue===0&&(e.setRenderTargetTextures(M,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(M))}let J=b[Ue];J===void 0&&(J=new Pt,J.layers.enable(Ue),J.viewport=new it,b[Ue]=J),J.matrix.fromArray(Ne.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ne.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(We.x,We.y,We.width,We.height),Ue===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(J)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")){let Ue=u.getDepthInformation(me[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,i.renderState)}}for(let me=0;me<y.length;me++){let oe=_[me],he=y[me];oe!==null&&he!==void 0&&he.update(oe,$,l||o)}xe&&xe(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let Ee=new Jf;Ee.setAnimationLoop(de),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}},Ji=new Dt,sv=new Fe;function rv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$f(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,Ji.copy(_),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),g.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Ji)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ov(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let _=y.program;n.uniformBlockBinding(M,_)}function l(M,y){let _=i[M.id];_===void 0&&(m(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",g));let L=y.program;n.updateUBOMapping(M,L);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let y=u();M.__bindingPointIndex=y;let _=s.createBuffer(),L=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=i[M.id],_=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=_.length;T<R;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,v=C.length;b<v;b++){let P=C[b];if(f(P,T,b,L)===!0){let k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],U=0;for(let V=0;V<F.length;V++){let B=F[V],Z=x(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,k+U,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,_,L){let T=M.value,R=y+"_"+_;if(L[R]===void 0)return typeof T=="number"||typeof T=="boolean"?L[R]=T:L[R]=T.clone(),!0;{let C=L[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return L[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function m(M){let y=M.uniforms,_=0,L=16;for(let R=0,C=y.length;R<C;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,P=b.length;v<P;v++){let k=b[v],F=Array.isArray(k.value)?k.value:[k.value];for(let U=0,V=F.length;U<V;U++){let B=F[U],Z=x(B),H=_%L,te=H%Z.boundary,le=H+te;_+=te,le!==0&&L-le<Z.storage&&(_+=L-le),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=Z.storage}}}let T=_%L;return T>0&&(_+=L-T),M.__size=_,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var _a=class{constructor(e={}){let{canvas:t=h0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this.toneMapping=Fi,this.toneMappingExposure=1;let _=this,L=!1,T=0,R=0,C=null,b=-1,v=null,P=new it,k=new it,F=null,U=new De(0),V=0,B=t.width,Z=t.height,H=1,te=null,le=null,xe=new it(0,0,B,Z),de=new it(0,0,B,Z),Ee=!1,X=new qr,$=!1,me=!1,oe=new Fe,he=new Fe,Ue=new w,Ne=new it,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function ne(){return C===null?H:1}let I=n;function Ae(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){let N="webgl2";if(I=Ae(N,E),I===null)throw Ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,Me,ce,Oe,Se,A,S,z,Y,Q,K,Re,pe,be,Je,re,we,Be,ke,Te,tt,Ze,xt,D;function ge(){ie=new S_(I),ie.init(),Ze=new ev(I,ie),Me=new g_(I,ie,e,Ze),ce=new Jy(I,ie),Me.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Oe=new w_(I),Se=new By,A=new Qy(I,ie,ce,Se,Me,Ze,Oe),S=new __(_),z=new M_(_),Y=new L0(I),xt=new p_(I,Y),Q=new b_(I,Y,Oe,xt),K=new A_(I,Q,Y,Oe),ke=new T_(I,Me,A),re=new x_(Se),Re=new Oy(_,S,z,ie,Me,xt,re),pe=new rv(_,Se),be=new Hy,Je=new qy(ie),Be=new f_(_,S,z,ce,K,f,c),we=new Ky(_,K,Me),D=new ov(I,Oe,Me,ce),Te=new m_(I,ie,Oe),tt=new E_(I,ie,Oe),Oe.programs=Re.programs,_.capabilities=Me,_.extensions=ie,_.properties=Se,_.renderLists=be,_.shadowMap=we,_.state=ce,_.info=Oe}ge();let q=new oh(_,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=N,t.width=Math.floor(E*H),t.height=Math.floor(N*H),G===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(B*H,Z*H).floor()},this.setDrawingBufferSize=function(E,N,G){B=E,Z=N,H=G,t.width=Math.floor(E*G),t.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,N,G,W){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,N,G,W),ce.viewport(P.copy(xe).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,N,G,W){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,N,G,W),ce.scissor(k.copy(de).multiplyScalar(H).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){ce.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let O=!1;if(C!==null){let ae=C.texture.format;O=ae===Bh||ae===Oh||ae===Fh}if(O){let ae=C.texture.type,ye=ae===Zt||ae===ts||ae===Wr||ae===Ws||ae===Dh||ae===Uh,Ce=Be.getClearColor(),Ie=Be.getClearAlpha(),ze=Ce.r,qe=Ce.g,Pe=Ce.b;ye?(m[0]=ze,m[1]=qe,m[2]=Pe,m[3]=Ie,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=ze,x[1]=qe,x[2]=Pe,x[3]=Ie,I.clearBufferiv(I.COLOR,0,x))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),be.dispose(),Je.dispose(),Se.dispose(),S.dispose(),z.dispose(),K.dispose(),xt.dispose(),D.dispose(),Re.dispose(),q.dispose(),q.removeEventListener("sessionstart",id),q.removeEventListener("sessionend",sd),Xi.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=Oe.autoReset,N=we.enabled,G=we.autoUpdate,W=we.needsUpdate,O=we.type;ge(),Oe.autoReset=E,we.enabled=N,we.autoUpdate=G,we.needsUpdate=W,we.type=O}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){let N=E.target;N.removeEventListener("dispose",Xe),Et(N)}function Et(E){Gt(E),Se.remove(E)}function Gt(E){let N=Se.get(E).programs;N!==void 0&&(N.forEach(function(G){Re.releaseProgram(G)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,O,ae){N===null&&(N=We);let ye=O.isMesh&&O.matrixWorld.determinant()<0,Ce=nm(E,N,G,W,O);ce.setMaterial(W,ye);let Ie=G.index,ze=1;if(W.wireframe===!0){if(Ie=Q.getWireframeAttribute(G),Ie===void 0)return;ze=2}let qe=G.drawRange,Pe=G.attributes.position,st=qe.start*ze,_t=(qe.start+qe.count)*ze;ae!==null&&(st=Math.max(st,ae.start*ze),_t=Math.min(_t,(ae.start+ae.count)*ze)),Ie!==null?(st=Math.max(st,0),_t=Math.min(_t,Ie.count)):Pe!=null&&(st=Math.max(st,0),_t=Math.min(_t,Pe.count));let yt=_t-st;if(yt<0||yt===1/0)return;xt.setup(O,W,Ce,G,Ie);let sn,ct=Te;if(Ie!==null&&(sn=Y.get(Ie),ct=tt,ct.setIndex(sn)),O.isMesh)W.wireframe===!0?(ce.setLineWidth(W.wireframeLinewidth*ne()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ce.setLineWidth(Le*ne()),O.isLineSegments?ct.setMode(I.LINES):O.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else O.isPoints?ct.setMode(I.POINTS):O.isSprite&&ct.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ct.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Le=O._multiDrawStarts,jn=O._multiDrawCounts,lt=O._multiDrawCount,In=Ie?Y.get(Ie).bytesPerElement:1,ds=Se.get(W).currentProgram.getUniforms();for(let dn=0;dn<lt;dn++)ds.setValue(I,"_gl_DrawID",dn),ct.render(Le[dn]/In,jn[dn])}else if(O.isInstancedMesh)ct.renderInstances(st,yt,O.count);else if(G.isInstancedBufferGeometry){let Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jn=Math.min(G.instanceCount,Le);ct.renderInstances(st,yt,jn)}else ct.render(st,yt)};function ut(E,N,G){E.transparent===!0&&E.side===wt&&E.forceSinglePass===!1?(E.side=qt,E.needsUpdate=!0,bo(E,N,G),E.side=Wn,E.needsUpdate=!0,bo(E,N,G),E.side=wt):bo(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),p=Je.get(G),p.init(N),y.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ae=O.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){let Ce=ae[ye];ut(Ce,G,O),W.add(Ce)}else ut(ae,G,O),W.add(ae)}),y.pop(),p=null,W},this.compileAsync=function(E,N,G=null){let W=this.compile(E,N,G);return new Promise(O=>{function ae(){if(W.forEach(function(ye){Se.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){O(E);return}setTimeout(ae,10)}ie.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Cn=null;function Jn(E){Cn&&Cn(E)}function id(){Xi.stop()}function sd(){Xi.start()}let Xi=new Jf;Xi.setAnimationLoop(Jn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(E){Cn=E,q.setAnimationLoop(E),E===null?Xi.stop():Xi.start()},q.addEventListener("sessionstart",id),q.addEventListener("sessionend",sd),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,C),p=Je.get(E,y.length),p.init(N),y.push(p),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(he),me=this.localClippingEnabled,$=re.init(this.clippingPlanes,me),g=be.get(E,M.length),g.init(),M.push(g),q.enabled===!0&&q.isPresenting===!0){let ae=_.xr.getDepthSensingMesh();ae!==null&&Ec(ae,N,-1/0,_.sortObjects)}Ec(E,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(te,le),J=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,J&&Be.addToRenderList(g,E),this.info.render.frame++,$===!0&&re.beginShadows();let G=p.state.shadowsArray;we.render(G,E,N),$===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ae=N.cameras;if(O.length>0)for(let ye=0,Ce=ae.length;ye<Ce;ye++){let Ie=ae[ye];od(W,O,E,Ie)}J&&Be.render(E);for(let ye=0,Ce=ae.length;ye<Ce;ye++){let Ie=ae[ye];rd(g,E,Ie,Ie.viewport)}}else O.length>0&&od(W,O,E,N),J&&Be.render(E),rd(g,E,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,N),xt.resetDefaultState(),b=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&re.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ec(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);let ye=K.update(E),Ce=E.material;Ce.visible&&g.push(E,ye,Ce,G,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let ye=K.update(E),Ce=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(Ce)){let Ie=ye.groups;for(let ze=0,qe=Ie.length;ze<qe;ze++){let Pe=Ie[ze],st=Ce[Pe.materialIndex];st&&st.visible&&g.push(E,ye,st,G,Ne.z,Pe)}}else Ce.visible&&g.push(E,ye,Ce,G,Ne.z,null)}}let ae=E.children;for(let ye=0,Ce=ae.length;ye<Ce;ye++)Ec(ae[ye],N,G,W)}function rd(E,N,G,W){let O=E.opaque,ae=E.transmissive,ye=E.transparent;p.setupLightsView(G),$===!0&&re.setGlobalState(_.clippingPlanes,G),W&&ce.viewport(P.copy(W)),O.length>0&&So(O,N,G),ae.length>0&&So(ae,N,G),ye.length>0&&So(ye,N,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function od(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ro:Zt,minFilter:zt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ae=p.state.transmissionRenderTarget[W.id],ye=W.viewport||P;ae.setSize(ye.z,ye.w);let Ce=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(U),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),J&&Be.render(G);let Ie=_.toneMapping;_.toneMapping=Fi;let ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&re.setGlobalState(_.clippingPlanes,W),So(E,G,W),A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae),ie.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Pe=0,st=N.length;Pe<st;Pe++){let _t=N[Pe],yt=_t.object,sn=_t.geometry,ct=_t.material,Le=_t.group;if(ct.side===wt&&yt.layers.test(W.layers)){let jn=ct.side;ct.side=qt,ct.needsUpdate=!0,ad(yt,G,W,sn,ct,Le),ct.side=jn,ct.needsUpdate=!0,qe=!0}}qe===!0&&(A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae))}_.setRenderTarget(Ce),_.setClearColor(U,V),ze!==void 0&&(W.viewport=ze),_.toneMapping=Ie}function So(E,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ae=E.length;O<ae;O++){let ye=E[O],Ce=ye.object,Ie=ye.geometry,ze=W===null?ye.material:W,qe=ye.group;Ce.layers.test(G.layers)&&ad(Ce,N,G,Ie,ze,qe)}}function ad(E,N,G,W,O,ae){E.onBeforeRender(_,N,G,W,O,ae),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,N,G,W,E,ae),O.transparent===!0&&O.side===wt&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,_.renderBufferDirect(G,N,W,O,E,ae),O.side=Wn,O.needsUpdate=!0,_.renderBufferDirect(G,N,W,O,E,ae),O.side=wt):_.renderBufferDirect(G,N,W,O,E,ae),E.onAfterRender(_,N,G,W,O,ae)}function bo(E,N,G){N.isScene!==!0&&(N=We);let W=Se.get(E),O=p.state.lights,ae=p.state.shadowsArray,ye=O.state.version,Ce=Re.getParameters(E,O.state,ae,N,G),Ie=Re.getProgramCacheKey(Ce),ze=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Xe),ze=new Map,W.programs=ze);let qe=ze.get(Ie);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===ye)return ld(E,Ce),qe}else Ce.uniforms=Re.getUniforms(E),E.onBeforeCompile(Ce,_),qe=Re.acquireProgram(Ce,Ie),ze.set(Ie,qe),W.uniforms=Ce.uniforms;let Pe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=re.uniform),ld(E,Ce),W.needsLights=sm(E),W.lightsStateVersion=ye,W.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function cd(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function ld(E,N){let G=Se.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function nm(E,N,G,W,O){N.isScene!==!0&&(N=We),A.resetTextureUnits();let ae=N.fog,ye=W.isMeshStandardMaterial?N.environment:null,Ce=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kt,Ie=(W.isMeshStandardMaterial?z:S).get(W.envMap||ye),ze=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color,yt=Fi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=_.toneMapping);let sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=sn!==void 0?sn.length:0,Le=Se.get(W),jn=p.state.lights;if($===!0&&(me===!0||E!==v)){let vn=E===v&&W.id===b;re.setState(W,E,vn)}let lt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==jn.state.version||Le.outputColorSpace!==Ce||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Ie||W.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==qe||Le.morphTargets!==Pe||Le.morphNormals!==st||Le.morphColors!==_t||Le.toneMapping!==yt||Le.morphTargetsCount!==ct)&&(lt=!0):(lt=!0,Le.__version=W.version);let In=Le.currentProgram;lt===!0&&(In=bo(W,N,O));let ds=!1,dn=!1,Mr=!1,vt=In.getUniforms(),Vn=Le.uniforms;if(ce.useProgram(In.program)&&(ds=!0,dn=!0,Mr=!0),W.id!==b&&(b=W.id,dn=!0),ds||v!==E){ce.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),d0(oe),f0(oe),vt.setValue(I,"projectionMatrix",oe)):vt.setValue(I,"projectionMatrix",E.projectionMatrix),vt.setValue(I,"viewMatrix",E.matrixWorldInverse);let wi=vt.map.cameraPosition;wi!==void 0&&wi.setValue(I,Ue.setFromMatrixPosition(E.matrixWorld)),Me.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,dn=!0,Mr=!0)}if(O.isSkinnedMesh){vt.setOptional(I,O,"bindMatrix"),vt.setOptional(I,O,"bindMatrixInverse");let vn=O.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),vt.setValue(I,"boneTexture",vn.boneTexture,A))}O.isBatchedMesh&&(vt.setOptional(I,O,"batchingTexture"),vt.setValue(I,"batchingTexture",O._matricesTexture,A),vt.setOptional(I,O,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",O._indirectTexture,A),vt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",O._colorsTexture,A));let Sr=G.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&ke.update(O,G,In),(dn||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,vt.setValue(I,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vn.envMap.value=Ie,Vn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Vn.envMapIntensity.value=N.environmentIntensity),dn&&(vt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&im(Vn,Mr),ae&&W.fog===!0&&pe.refreshFogUniforms(Vn,ae),pe.refreshMaterialUniforms(Vn,W,H,Z,p.state.transmissionRenderTarget[E.id]),Hs.upload(I,cd(Le),Vn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hs.upload(I,cd(Le),Vn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(I,"center",O.center),vt.setValue(I,"modelViewMatrix",O.modelViewMatrix),vt.setValue(I,"normalMatrix",O.normalMatrix),vt.setValue(I,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let vn=W.uniformsGroups;for(let wi=0,Ti=vn.length;wi<Ti;wi++){let hd=vn[wi];D.update(hd,In),D.bind(hd,In)}}return In}function im(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function sm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,G){Se.get(E.texture).__webglTexture=N,Se.get(E.depthTexture).__webglTexture=G;let W=Se.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let G=Se.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){C=E,T=N,R=G;let W=!0,O=null,ae=!1,ye=!1;if(E){let Ie=Se.get(E);if(Ie.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ie.__hasExternalTextures)A.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pe=E.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&Se.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);let qe=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?O=qe[N][G]:O=qe[N],ae=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[G]:O=qe,P.copy(E.viewport),k.copy(E.scissor),F=E.scissorTest}else P.copy(xe).multiplyScalar(H).floor(),k.copy(de).multiplyScalar(H).floor(),F=Ee;if(ce.bindFramebuffer(I.FRAMEBUFFER,O)&&W&&ce.drawBuffers(E,O),ce.viewport(P),ce.scissor(k),ce.setScissorTest(F),ae){let Ie=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,G)}else if(ye){let Ie=Se.get(E.texture),ze=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,G||0,ze)}b=-1},this.readRenderTargetPixels=function(E,N,G,W,O,ae,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){ce.bindFramebuffer(I.FRAMEBUFFER,Ce);try{let Ie=E.texture,ze=Ie.format,qe=Ie.type;if(!Me.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-O&&I.readPixels(N,G,W,O,Ze.convert(ze),Ze.convert(qe),ae)}finally{let Ie=C!==null?Se.get(C).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,W,O,ae,ye){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){let Ie=E.texture,ze=Ie.format,qe=Ie.type;if(!Me.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&G>=0&&G<=E.height-O){ce.bindFramebuffer(I.FRAMEBUFFER,Ce);let Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(N,G,W,O,Ze.convert(ze),Ze.convert(qe),0);let st=C!==null?Se.get(C).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,st);let _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await u0(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Pe),I.deleteSync(_t),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,G=0){E.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(E.image.width*W),ae=Math.floor(E.image.height*W),ye=N!==null?N.x:0,Ce=N!==null?N.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ye,Ce,O,ae),ce.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,W=null,O=0){E.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let ae,ye,Ce,Ie,ze,qe,Pe,st,_t,yt=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(ae=G.max.x-G.min.x,ye=G.max.y-G.min.y,Ce=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,ze=G.min.y,qe=G.isBox3?G.min.z:0):(ae=yt.width,ye=yt.height,Ce=yt.depth||1,Ie=0,ze=0,qe=0),W!==null?(Pe=W.x,st=W.y,_t=W.z):(Pe=0,st=0,_t=0);let sn=Ze.convert(N.format),ct=Ze.convert(N.type),Le;N.isData3DTexture?(A.setTexture3D(N,0),Le=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Le=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let jn=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),In=I.getParameter(I.UNPACK_SKIP_PIXELS),ds=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qe);let Mr=E.isDataArrayTexture||E.isData3DTexture,vt=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Vn=Se.get(E),Sr=Se.get(N),vn=Se.get(Vn.__renderTarget),wi=Se.get(Sr.__renderTarget);ce.bindFramebuffer(I.READ_FRAMEBUFFER,vn.__webglFramebuffer),ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ti=0;Ti<Ce;Ti++)Mr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,O,qe+Ti),E.isDepthTexture?(vt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,O,_t+Ti),I.blitFramebuffer(Ie,ze,ae,ye,Pe,st,ae,ye,I.DEPTH_BUFFER_BIT,I.NEAREST)):vt?I.copyTexSubImage3D(Le,O,Pe,st,_t+Ti,Ie,ze,ae,ye):I.copyTexSubImage2D(Le,O,Pe,st,_t+Ti,Ie,ze,ae,ye);ce.bindFramebuffer(I.READ_FRAMEBUFFER,null),ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Le,O,Pe,st,_t,ae,ye,Ce,sn,ct,yt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,O,Pe,st,_t,ae,ye,Ce,sn,yt.data):I.texSubImage3D(Le,O,Pe,st,_t,ae,ye,Ce,sn,ct,yt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Pe,st,ae,ye,sn,ct,yt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Pe,st,yt.width,yt.height,sn,yt.data):I.texSubImage2D(I.TEXTURE_2D,O,Pe,st,ae,ye,sn,ct,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,In),I.pixelStorei(I.UNPACK_SKIP_ROWS,ds),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),O===0&&N.generateMipmaps&&I.generateMipmap(Le),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G=null,W=null,O=0){return E.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,G,W,O)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,ce.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}},ya=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var er=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dt,this.environmentIntensity=1,this.environmentRotation=new Dt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new w,ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yr=class extends on{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,Ar=new w,Rs=new w,Cs=new w,Is=new se,Rr=new se,np=new Fe,Wo=new w,Cr=new w,Xo=new w,lf=new se,jc=new se,hf=new se,va=class extends bt{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tr(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new ns(n,3,0,!1)),As.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),np.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;qo(Wo.set(-.5,-.5,0),Cs,o,Rs,i,r),qo(Cr.set(.5,-.5,0),Cs,o,Rs,i,r),qo(Xo.set(.5,.5,0),Cs,o,Rs,i,r),lf.set(0,0),jc.set(1,0),hf.set(1,1);let a=e.ray.intersectTriangle(Wo,Cr,Xo,!1,Ar);if(a===null&&(qo(Cr.set(-.5,.5,0),Cs,o,Rs,i,r),jc.set(0,1),a=e.ray.intersectTriangle(Wo,Xo,Cr,!1,Ar),a===null))return;let c=e.ray.origin.distanceTo(Ar);c<e.near||c>e.far||t.push({distance:c,point:Ar.clone(),uv:Di.getInterpolation(Ar,Wo,Cr,Xo,lf,jc,hf,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qo(s,e,t,n,i,r){Is.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*Is.x-i*Is.y,Rr.y=i*Is.x+r*Is.y):Rr.copy(Is),s.copy(e),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(np)}var uf=new w,df=new it,ff=new it,av=new w,pf=new Fe,Yo=new w,Qc=new gn,mf=new Fe,el=new $s,Ma=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pd,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qc.copy(this.boundingSphere),Qc.applyMatrix4(i),e.ray.intersectsSphere(Qc)!==!1&&(mf.copy(i).invert(),el.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;df.fromBufferAttribute(i.attributes.skinIndex,e),ff.fromBufferAttribute(i.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ff.getComponent(r);if(o!==0){let a=df.getComponent(r);pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(av.copy(uf).applyMatrix4(pf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zr=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qn=class extends kt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Yt,h=Yt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gf=new Fe,cv=new Fe,Sa=class s{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:cv;gf.multiplyMatrices(a,t[r]),gf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qn(t,e,e,Lt,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zr),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Yn=class extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new Fe,xf=new Fe,Zo=[],_f=new bn,lv=new Fe,Ir=new He,Pr=new gn,nr=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),_f.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(_f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Pr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),xf.multiplyMatrices(n,Ps),Ir.matrixWorld=xf,Ir.raycast(e,Zo);for(let o=0,a=Zo.length;o<a;o++){let c=Zo[o];c.instanceId=r,c.object=this,t.push(c)}Zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qn(new Float32Array(i*this.count),i,this.count,Nh,Fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ui=class extends on{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ba=new w,Ea=new w,yf=new Fe,Lr=new $s,Ko=new gn,tl=new w,vf=new w,ir=class extends bt{constructor(e=new rt,t=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ba.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ba.distanceTo(Ea);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;yf.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),M=h.getX(x+1),y=$o(this,e,Lr,c,p,M);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=$o(this,e,Lr,c,x,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=$o(this,e,Lr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=$o(this,e,Lr,c,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(ba.fromBufferAttribute(o,i),Ea.fromBufferAttribute(o,r),t.distanceSqToSegment(ba,Ea,tl,vf)>n)return;tl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(tl);if(!(c<e.near||c>e.far))return{distance:c,point:vf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Mf=new w,Sf=new w,Oi=class extends ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mf.fromBufferAttribute(t,i),Sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mf.distanceTo(Sf);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Kr=class extends on{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bf=new Fe,ah=new $s,Jo=new gn,jo=new w,Ta=class extends bt{constructor(e=new rt,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;bf.copy(i).invert(),ah.copy(e.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);jo.fromBufferAttribute(u,g),Ef(jo,g,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)jo.fromBufferAttribute(u,m),Ef(jo,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ef(s,e,t,n,i,r,o){let a=ah.distanceSqToPoint(s);if(a<t){let c=new w;ah.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var cn=class extends kt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new se:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,i=[],r=[],o=[],a=new w,c=new Fe;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(It(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends wn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ch=class extends $r{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Qo=new w,nl=new Vh,il=new Vh,sl=new Vh,lh=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Qo.subVectors(i[0],i[1]).add(i[0]),l=Qo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Qo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),nl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),il.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),sl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),il.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nl.calc(c),il.calc(c),sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function hv(s,e){let t=1-s;return t*t*e}function uv(s,e){return 2*(1-s)*s*e}function dv(s,e){return s*s*e}function Hr(s,e,t,n){return hv(s,e)+uv(s,t)+dv(s,n)}function fv(s,e){let t=1-s;return t*t*t*e}function pv(s,e){let t=1-s;return 3*t*t*s*e}function mv(s,e){return 3*(1-s)*s*s*e}function gv(s,e){return s*s*s*e}function zr(s,e,t,n,i){return fv(s,e)+pv(s,t)+mv(s,n)+gv(s,i)}var Aa=class extends wn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(e,i.x,r.x,o.x,a.x),zr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hh=class extends wn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(e,i.x,r.x,o.x,a.x),zr(e,i.y,r.y,o.y,a.y),zr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends wn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uh=class extends wn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends wn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,i.x,r.x,o.x),Hr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends wn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,i.x,r.x,o.x),Hr(e,i.y,r.y,o.y),Hr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(wf(a,c.x,l.x,h.x,u.x),wf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:ch,CatmullRomCurve3:lh,CubicBezierCurve:Aa,CubicBezierCurve3:hh,EllipseCurve:$r,LineCurve:Ra,LineCurve3:uh,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:dh,SplineCurve:Ia}),ph=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new fh[i.type]().fromJSON(i))}return this}},Jr=class extends ph{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ca(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Aa(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new $r(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sr=class s extends rt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=It(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,d=new se,f=new w,m=new w,x=new w,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let M=0;M<=t;M++){let y=n+M*h*i,_=Math.sin(y),L=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*L,o.push(u.x,u.y,u.z),d.x=M/t,d.y=T/(e.length-1),a.push(d.x,d.y);let R=c[3*T+0]*_,C=c[3*T+1],b=c[3*T+0]*L;l.push(R,C,b)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){let _=y+M*e.length,L=_,T=_+e.length,R=_+e.length+1,C=_+1;r.push(L,T,C),r.push(R,C,T)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Pa=class s extends sr{constructor(e=1,t=1,n=4,i=8){let r=new Jr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},La=class s extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class s extends rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function M(){let _=new w,L=new w,T=0,R=(t-e)/n;for(let C=0;C<=r;C++){let b=[],v=C/r,P=v*(t-e)+e;for(let k=0;k<=i;k++){let F=k/i,U=F*c+a,V=Math.sin(U),B=Math.cos(U);L.x=P*V,L.y=-v*n+g,L.z=P*B,u.push(L.x,L.y,L.z),_.set(V,R,B).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-v),b.push(m++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){let v=x[b][C],P=x[b+1][C],k=x[b+1][C+1],F=x[b][C+1];(e>0||b!==0)&&(h.push(v,P,F),T+=3),(t>0||b!==r-1)&&(h.push(P,k,F),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){let L=m,T=new se,R=new w,C=0,b=_===!0?e:t,v=_===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let P=m;for(let k=0;k<=i;k++){let U=k/i*c+a,V=Math.cos(U),B=Math.sin(U);R.x=b*B,R.y=g*v,R.z=b*V,u.push(R.x,R.y,R.z),d.push(0,v,0),T.x=V*.5+.5,T.y=B*.5*v+.5,f.push(T.x,T.y),m++}for(let k=0;k<i;k++){let F=L+k,U=P+k;_===!0?h.push(U,U+1,F):h.push(U+1,U,F),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jr=class extends Jr{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Jr().fromJSON(i))}return this}},xv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=ip(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Sv(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Qr(r,o,t,a,c,f,0),o}};function ip(s,e,t,n,i){let r,o;if(i===Dv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Tf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Tf(r,s[r],s[r+1],o);return o&&Xa(o,o.next)&&(to(o),o=o.next),o}function is(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||St(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Av(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?yv(s,n,i,r):_v(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),to(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=vv(is(s),e,t),Qr(s,e,t,n,i,r,2)):o===2&&Mv(s,e,t,n,i,r):Qr(is(s),e,t,n,i,r,1);break}}}function _v(s){let e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Fs(i,a,r,c,o,l,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=mh(f,m,e,t,n),M=mh(x,g,e,t,n),y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Fs(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Fs(a,h,c,u,l,d,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Fs(a,h,c,u,l,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Fs(a,h,c,u,l,d,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Xa(i,r)&&sp(i,n,n.next,r)&&eo(i,r)&&eo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),to(n),to(n.next),n=s=r),n=n.next}while(n!==s);return is(n)}function Mv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iv(o,a)){let c=rp(o,a);o=is(o,o.next),c=is(c,c.next),Qr(o,e,t,n,i,r,0),Qr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Sv(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ip(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Cv(l));for(i.sort(bv),r=0;r<i.length;r++)t=Ev(i[r],t);return t}function bv(s,e){return s.x-e.x}function Ev(s,e){let t=wv(s,e);if(!t)return e;let n=rp(t,s);return is(n,n.next),is(t,t.next)}function wv(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Fs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),eo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Tv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Tv(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function Av(s,e,t,n){let i=s;do i.z===0&&(i.z=mh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Rv(i)}function Rv(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function mh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Cv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Fs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Iv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Pv(s,e)&&(eo(s,e)&&eo(e,s)&&Lv(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||Xa(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Xa(s,e){return s.x===e.x&&s.y===e.y}function sp(s,e,t,n){let i=ta(St(s,e,t)),r=ta(St(s,e,n)),o=ta(St(t,n,s)),a=ta(St(t,n,e));return!!(i!==r&&o!==a||i===0&&ea(s,t,e)||r===0&&ea(s,n,e)||o===0&&ea(t,s,n)||a===0&&ea(t,e,n))}function ea(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ta(s){return s>0?1:s<0?-1:0}function Pv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&sp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function eo(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function Lv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rp(s,e){let t=new gh(s.i,s.x,s.y),n=new gh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Tf(s,e,t,n){let i=new gh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function to(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Vr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Af(e),Rf(n,e);let o=e.length;t.forEach(Af);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Rf(n,t[c]);let a=xv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Af(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Da=class s extends rt{constructor(e=new jr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Uv,y,_=!1,L,T,R,C;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),T=new w,R=new w,C=new w),d||(g=0,f=0,m=0,x=0);let b=a.extractPoints(l),v=b.shape,P=b.holes;if(!Vr.isClockWise(v)){v=v.reverse();for(let J=0,ne=P.length;J<ne;J++){let I=P[J];Vr.isClockWise(I)&&(P[J]=I.reverse())}}let F=Vr.triangulateShape(v,P),U=v;for(let J=0,ne=P.length;J<ne;J++){let I=P[J];v=v.concat(I)}function V(J,ne,I){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ne,I)}let B=v.length,Z=F.length;function H(J,ne,I){let Ae,ie,Me,ce=J.x-ne.x,Oe=J.y-ne.y,Se=I.x-J.x,A=I.y-J.y,S=ce*ce+Oe*Oe,z=ce*A-Oe*Se;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(S),Q=Math.sqrt(Se*Se+A*A),K=ne.x-Oe/Y,Re=ne.y+ce/Y,pe=I.x-A/Q,be=I.y+Se/Q,Je=((pe-K)*A-(be-Re)*Se)/(ce*A-Oe*Se);Ae=K+ce*Je-J.x,ie=Re+Oe*Je-J.y;let re=Ae*Ae+ie*ie;if(re<=2)return new se(Ae,ie);Me=Math.sqrt(re/2)}else{let Y=!1;ce>Number.EPSILON?Se>Number.EPSILON&&(Y=!0):ce<-Number.EPSILON?Se<-Number.EPSILON&&(Y=!0):Math.sign(Oe)===Math.sign(A)&&(Y=!0),Y?(Ae=-Oe,ie=ce,Me=Math.sqrt(S)):(Ae=ce,ie=Oe,Me=Math.sqrt(S/2))}return new se(Ae/Me,ie/Me)}let te=[];for(let J=0,ne=U.length,I=ne-1,Ae=J+1;J<ne;J++,I++,Ae++)I===ne&&(I=0),Ae===ne&&(Ae=0),te[J]=H(U[J],U[I],U[Ae]);let le=[],xe,de=te.concat();for(let J=0,ne=P.length;J<ne;J++){let I=P[J];xe=[];for(let Ae=0,ie=I.length,Me=ie-1,ce=Ae+1;Ae<ie;Ae++,Me++,ce++)Me===ie&&(Me=0),ce===ie&&(ce=0),xe[Ae]=H(I[Ae],I[Me],I[ce]);le.push(xe),de=de.concat(xe)}for(let J=0;J<g;J++){let ne=J/g,I=f*Math.cos(ne*Math.PI/2),Ae=m*Math.sin(ne*Math.PI/2)+x;for(let ie=0,Me=U.length;ie<Me;ie++){let ce=V(U[ie],te[ie],Ae);oe(ce.x,ce.y,-I)}for(let ie=0,Me=P.length;ie<Me;ie++){let ce=P[ie];xe=le[ie];for(let Oe=0,Se=ce.length;Oe<Se;Oe++){let A=V(ce[Oe],xe[Oe],Ae);oe(A.x,A.y,-I)}}}let Ee=m+x;for(let J=0;J<B;J++){let ne=d?V(v[J],de[J],Ee):v[J];_?(R.copy(L.normals[0]).multiplyScalar(ne.x),T.copy(L.binormals[0]).multiplyScalar(ne.y),C.copy(y[0]).add(R).add(T),oe(C.x,C.y,C.z)):oe(ne.x,ne.y,0)}for(let J=1;J<=h;J++)for(let ne=0;ne<B;ne++){let I=d?V(v[ne],de[ne],Ee):v[ne];_?(R.copy(L.normals[J]).multiplyScalar(I.x),T.copy(L.binormals[J]).multiplyScalar(I.y),C.copy(y[J]).add(R).add(T),oe(C.x,C.y,C.z)):oe(I.x,I.y,u/h*J)}for(let J=g-1;J>=0;J--){let ne=J/g,I=f*Math.cos(ne*Math.PI/2),Ae=m*Math.sin(ne*Math.PI/2)+x;for(let ie=0,Me=U.length;ie<Me;ie++){let ce=V(U[ie],te[ie],Ae);oe(ce.x,ce.y,u+I)}for(let ie=0,Me=P.length;ie<Me;ie++){let ce=P[ie];xe=le[ie];for(let Oe=0,Se=ce.length;Oe<Se;Oe++){let A=V(ce[Oe],xe[Oe],Ae);_?oe(A.x,A.y+y[h-1].y,y[h-1].x+I):oe(A.x,A.y,u+I)}}}X(),$();function X(){let J=i.length/3;if(d){let ne=0,I=B*ne;for(let Ae=0;Ae<Z;Ae++){let ie=F[Ae];he(ie[2]+I,ie[1]+I,ie[0]+I)}ne=h+g*2,I=B*ne;for(let Ae=0;Ae<Z;Ae++){let ie=F[Ae];he(ie[0]+I,ie[1]+I,ie[2]+I)}}else{for(let ne=0;ne<Z;ne++){let I=F[ne];he(I[2],I[1],I[0])}for(let ne=0;ne<Z;ne++){let I=F[ne];he(I[0]+B*h,I[1]+B*h,I[2]+B*h)}}n.addGroup(J,i.length/3-J,0)}function $(){let J=i.length/3,ne=0;me(U,ne),ne+=U.length;for(let I=0,Ae=P.length;I<Ae;I++){let ie=P[I];me(ie,ne),ne+=ie.length}n.addGroup(J,i.length/3-J,1)}function me(J,ne){let I=J.length;for(;--I>=0;){let Ae=I,ie=I-1;ie<0&&(ie=J.length-1);for(let Me=0,ce=h+g*2;Me<ce;Me++){let Oe=B*Me,Se=B*(Me+1),A=ne+Ae+Oe,S=ne+ie+Oe,z=ne+ie+Se,Y=ne+Ae+Se;Ue(A,S,z,Y)}}}function oe(J,ne,I){c.push(J),c.push(ne),c.push(I)}function he(J,ne,I){Ne(J),Ne(ne),Ne(I);let Ae=i.length/3,ie=M.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);We(ie[0]),We(ie[1]),We(ie[2])}function Ue(J,ne,I,Ae){Ne(J),Ne(ne),Ne(Ae),Ne(ne),Ne(I),Ne(Ae);let ie=i.length/3,Me=M.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);We(Me[0]),We(Me[1]),We(Me[3]),We(Me[1]),We(Me[2]),We(Me[3])}function Ne(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function We(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Nv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new fh[i.type]().fromJSON(i)),new s(n,e.options)}},Uv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(d,1-m),new se(x,1-p)]:[new se(a,1-c),new se(h,1-u),new se(f,1-m),new se(g,1-p)]}};function Nv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var rr=class s extends rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let T=L/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=h[p][M+1],_=h[p][M],L=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(y,_,T),(p!==n-1||c<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ot=class extends on{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ft=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function na(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ov(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function op(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Bi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xh=class extends Bi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Us:r=e,a=2*t-n;break;case la:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Us:o=e,c=2*n-t;break;case la:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+M*o[l+L]+y*o[c+L]+_*o[u+L];return r}},Ua=class extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},_h=class extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Fv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ys;var ki=class extends Tn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=qs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Tn{};Na.prototype.ValueTypeName="color";var fi=class extends Tn{};fi.prototype.ValueTypeName="number";var yh=class extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ge.slerpFlat(r,0,o,l-a,o,l,c);return r}},pi=class extends Tn{InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=qs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends Tn{};mi.prototype.ValueTypeName="vector";var or=class{constructor(e="",t=-1,n=[],i=kh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Ov(c);c=Cf(c,1,h),l=Cf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new fi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];op(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){let y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new fi(".morphTargetInfluence["+x+"]",g,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(mi,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(mi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Bv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return mi;case"color":return Na;case"quaternion":return pi;case"bool":case"boolean":return ki;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bv(s.type);if(s.times===void 0){let t=[],n=[];op(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ui={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},vh=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Hv=new vh,gi=class{constructor(e){this.manager=e!==void 0?e:Hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},Mh=class extends Error{constructor(e,t){super(e),this.response=t}},no=class extends gi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=si[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,R=h.length;T<R;T++){let C=h[T];C.onProgress&&C.onProgress(L)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Mh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ui.add(e,l);let h=si[e];delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=si[e];if(h===void 0)throw this.manager.itemError(e),l;delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Sh=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ui.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Xr("img");function c(){h(),Ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ar=class extends gi{constructor(e){super(e)}load(e,t,n,i){let r=new kt,o=new Sh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},io=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var rl=new Fe,If=new w,Pf=new w,so=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bh=class extends so{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fa=class extends io{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Lf=new Fe,Dr=new w,ol=new w,Eh=class extends so{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),ol.copy(n.position),ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ol),n.updateMatrixWorld(),i.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}},Oa=class extends io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wh=class extends so{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new wh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ba=class extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ka=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ui.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ui.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ui.add(e,c),r.manager.itemStart(e)}};var Th=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ge.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Ge.multiplyQuaternionsFlat(e,o,e,t,e,n),Ge.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Gh="\\[\\]\\.:\\/",zv=new RegExp("["+Gh+"]","g"),Wh="[^"+Gh+"]",Vv="[^"+Gh.replace("\\.","")+"]",Gv=/((?:WC+[\/:])*)/.source.replace("WC",Wh),Wv=/(WCOD+)?/.source.replace("WCOD",Vv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),Yv=new RegExp("^"+Gv+Wv+Xv+qv+"$"),Zv=["material","materials","bones","map"],Ah=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=Yv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Ah;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ds,endingEnd:Ds};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Nm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Om:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case kh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Fm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Um){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Us,i.endingEnd=Us):(e?i.endingStart=this.zeroSlopeAtStart?Us:Ds:i.endingStart=la,t?i.endingEnd=this.zeroSlopeAtEnd?Us:Ds:i.endingEnd=la)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Kv=new Float32Array(1),Ha=class extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new Th(mt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ua(new Float32Array(2),new Float32Array(2),1,Kv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?or.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Rh(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?or.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ao=32768,ht=1024,An=ao/ht,Xh=-200,ap=3200,hr=15,Bn=new w(-.402,.742,.536).normalize(),cp=Math.atan2(Bn.z,Bn.x)-.5979,lp=new De(1,.94,.84),hp=10.5,qh=[.37,.41,.52],Yh=[.8,.86,.98],ln={x0:-520,x1:520,z:0,halfW:11,y:hr},hn=new w(260,hr,-150),xn=9.81,co=s=>1.225*Math.pow(1-225577e-10*Math.min(11e3,Math.max(0,s)),4.2559);function en(s,e){let t=2.2+5.5*Math.min(1,Math.max(0,s)/3e3);return e.set(-.85*t,0,.35*t)}var ss=3.28084,up=1.94384,dp=2.23694,fp=3.6;var ur=s=>`vec3(${s.map(e=>e.toFixed(4)).join(",")})`;function pp(){let s=Ve;s.fog_pars_vertex=`
#ifdef USE_FOG
  varying vec3 vFogRel;
#endif`,s.fog_vertex=`
#ifdef USE_FOG
  vFogRel = transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
#endif`,s.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform float fogDensity;
  varying vec3 vFogRel;
  vec3 applyAtmosphere( vec3 col, vec3 rel ) {
    float dist = length( rel );
    vec3 dir = rel / max( dist, 1e-4 );
    const float Hs = 1500.0;
    const float b0 = 4.6e-5;
    float k = rel.y / Hs;
    float od = b0 * dist * exp( - max( cameraPosition.y, 0.0 ) / Hs ) * ( abs( k ) < 1e-3 ? 1.0 : ( 1.0 - exp( - k ) ) / k );
    // a thin uniform Rayleigh term keeps very distant terrain blue even from altitude
    od += 5.0e-6 * dist;
    vec3 trans = exp( - od * vec3( 0.80, 1.05, 1.55 ) );
    float mu = max( dot( dir, ${ur(Bn.toArray())} ), 0.0 );
    vec3 haze = mix( ${ur(qh)}, ${ur(Yh)}, 0.55 * pow( mu, 5.0 ) + 0.25 * pow( mu, 40.0 ) );
    haze *= mix( 0.86, 1.0, smoothstep( -0.25, 0.05, dir.y ) );
    col = col * trans + haze * ( 1.0 - trans );
    // in-cloud white-out
    float cf = 1.0 - exp( - fogDensity * dist );
    return mix( col, fogColor, cf );
  }
#endif`,s.fog_fragment="",s.tonemapping_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = applyAtmosphere( gl_FragColor.rgb, vFogRel );
#endif
#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`}var qa=`
vec3 hazeColor( vec3 dir ) {
  float mu = max( dot( dir, ${ur(Bn.toArray())} ), 0.0 );
  return mix( ${ur(qh)}, ${ur(Yh)}, 0.55 * pow( mu, 5.0 ) + 0.25 * pow( mu, 40.0 ) );
}
vec3 atmos( vec3 col, vec3 rel, float camY, vec3 cloudCol, float cloudDensity ) {
  float dist = length( rel );
  vec3 dir = rel / max( dist, 1e-4 );
  const float Hs = 1500.0;
  float k = rel.y / Hs;
  float od = 4.6e-5 * dist * exp( - max( camY, 0.0 ) / Hs ) * ( abs( k ) < 1e-3 ? 1.0 : ( 1.0 - exp( - k ) ) / k ) + 5.0e-6 * dist;
  vec3 trans = exp( - od * vec3( 0.80, 1.05, 1.55 ) );
  vec3 haze = hazeColor( dir ) * mix( 0.86, 1.0, smoothstep( -0.25, 0.05, dir.y ) );
  col = col * trans + haze * ( 1.0 - trans );
  return mix( col, cloudCol, 1.0 - exp( - cloudDensity * dist ) );
}`;function Zh(s,e){if(e===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===oo||e===Va){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===oo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ya=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=zi.extractUrlBase(e);o=zi.resolveURL(l,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new no(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===yp){try{o[$e.KHR_BINARY_GLTF]=new gu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Qh;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new xu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new _u;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new yu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function $v(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oa(h),l.distance=u;break;case"spot":l=new Fa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Qh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,n){let i=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}},eu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},tu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},iu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},su=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ft}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},du=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},fu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pu=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},mu=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let x=new Fe,g=new w,p=new Ge,M=new w(1,1,1),y=new nr(m.geometry,m.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&M.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(g,p,M));for(let _ in c)if(_==="_COLOR_0"){let L=c[_];y.instanceColor=new Yn(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);bt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},yp="glTF",lo=12,mp={JSON:1313821514,BIN:5130562},gu=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-lo,r=new DataView(e,lo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===mp.JSON){let l=new Uint8Array(e,lo+o,a);this.content=n.decode(l)}else if(c===mp.BIN){let l=lo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Mu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Mu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=dr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(f)},a,l,Kt,d)})})}},_u=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yu=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Za=class extends Bi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,M=1-g,y=p-d+u;for(let _=0;_!==a;_++){let L=o[x+_+a],T=o[x+_+c]*h,R=o[m+_+a],C=o[m+_]*h;r[_]=M*L+y*T+g*R+p*C}return r}},Jv=new Ge,vu=class extends Za{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Jv.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:Yt,9729:Tt,9984:Ph,9985:Fr,9986:Ls,9987:zt},xp={33071:rn,33648:Gr,10497:mn},Kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jv={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),s.DefaultMaterial}function rs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function tM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nM(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=s.indices+":"+Jh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jh(s.targets[n]);return e}function Jh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var sM=new Fe,bu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ar(this.options.manager):this.textureLoader=new ka(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new no(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(r,a,i),xi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Kh[i.type],a=dr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new at(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Kh[i.type],l=dr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(M);y||(x=new l(a,p*f,i.count*f/h),y=new tr(x,f/h),t.cache.add(M,y)),g=new ns(y,c,d%f/h,m)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),g=new at(x,c,m);if(i.sparse!==void 0){let p=Kh.SCALAR,M=dr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,L=new M(o[1],y,i.sparse.count*p),T=new l(o[2],_,i.sparse.count*c);a!==null&&(g=new at(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,C=L.length;R<C;R++){let b=L[R];if(g.setX(b,T[R*c]),c>=2&&g.setY(b,T[R*c+1]),c>=3&&g.setZ(b,T[R*c+2]),c>=4&&g.setW(b,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gp[d.magFilter]||Tt,h.minFilter=gp[d.minFilter]||zt,h.wrapS=xp[d.wrapS]||mn,h.wrapT=xp[d.wrapT]||mn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new kt(x);g.needsUpdate=!0,d(g)}),t.load(zi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),xi(u,o),u.userData.mimeType=o.mimeType||iM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Kr,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ui,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ot}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wt);let h=r.alphaMode||$h.OPAQUE;if(h===$h.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$h.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==En){let u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&o!==En&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&rs(i,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return _p(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=nM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=_p(new rt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Qv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=o[f],p,M=l[f];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ma(x,M):new He(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Rn.TRIANGLE_STRIP?p.geometry=Zh(p.geometry,Va):g.mode===Rn.TRIANGLE_FAN&&(p.geometry=Zh(p.geometry,oo));else if(g.mode===Rn.LINES)p=new Oi(x,M);else if(g.mode===Rn.LINE_STRIP)p=new ir(x,M);else if(g.mode===Rn.LINE_LOOP)p=new wa(x,M);else if(g.mode===Rn.POINTS)p=new Ta(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&tM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),xi(p,r),g.extensions&&rs(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&rs(i,u[0],r),u[0];let d=new gt;r.extensions&&rs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(Zn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new js(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Fe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sa(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,y=d.length;M<y;M++){let _=d[M],L=f[M],T=m[M],R=x[M],C=g[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,L,T,R,C);if(b)for(let v=0;v<b.length;v++)p.push(b[v])}return new or(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Zr:l.length>1?h=new gt:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&rs(n,h,r),r.matrix!==void 0){let u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new gt;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&rs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof on||d instanceof kt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Gi[r.path]===Gi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Gi[r.path]){case Gi.weights:l=fi;break;case Gi.rotation:l=pi;break;case Gi.position:case Gi.scale:l=mi;break;default:n.itemSize===1?l=fi:l=mi;break}let h=i.interpolation!==void 0?jv[i.interpolation]:Ys,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Gi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Su(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof pi?vu:Za;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function rM(s,e,t){let n=e.attributes,i=new bn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let h=Su(dr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Su(dr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _p(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Mu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),xi(s,e),rM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?eM(s,e.targets,t):s})}var Mp="assets/",vp=0,Eu=0,Sp=()=>{};function bp(s){Sp=s}function Ep(s){vp++,Sp(vp/Math.max(1,Eu),s)}async function oM(s){Eu++;let e=await fetch(Mp+s);if(!e.ok)throw new Error("Could not load "+s+" ("+e.status+")");let t=await e.arrayBuffer();return Ep(s),t}async function wu(s){Eu++;let e=await fetch(Mp+s+".json");if(!e.ok)throw new Error("Could not load "+s+" ("+e.status+")");let t=await e.json(),n=atob(t.b64),i=n.length,r=new Uint8Array(i);for(let o=0;o<i;o++)r[o]=n.charCodeAt(o);return Ep(s),r.buffer}var aM={jpg:"image/jpeg",png:"image/png",webp:"image/webp"};async function Ka(s,e=0,t=!0){let n=await oM(s),i=new Blob([n],{type:aM[s.split(".").pop()]||"image/jpeg"}),r,o,a;if(typeof createImageBitmap=="function")try{r=await createImageBitmap(i),o=r.width,a=r.height}catch{r=null}r||(r=await new Promise((f,m)=>{let x=new Image;x.onload=()=>f(x),x.onerror=()=>m(new Error("decode "+s)),x.src=URL.createObjectURL(i)}),o=r.naturalWidth,a=r.naturalHeight);let c=e||o,l=e?Math.round(a*e/o):a,h=document.createElement("canvas");h.width=c,h.height=l;let u=h.getContext("2d",{willReadFrequently:!0});t&&(u.translate(0,l),u.scale(1,-1)),u.drawImage(r,0,0,c,l);let d=u.getImageData(0,0,c,l).data;return r.close&&r.close(),{data:d,width:c,height:l}}async function _i(s,{srgb:e=!1,size:t=0,repeat:n=!0,aniso:i=8,mip:r=!0}={}){let o=await Ka(s,t,!0),a=new qn(new Uint8Array(o.data.buffer),o.width,o.height,Lt,Zt);return a.colorSpace=e?nt:Un,a.wrapS=a.wrapT=n?mn:rn,a.generateMipmaps=r,a.minFilter=r?zt:Tt,a.magFilter=Tt,a.anisotropy=i,a.flipY=!1,a.needsUpdate=!0,a}async function Tu(s,{srgb:e=!1,size:t=1024,aniso:n=8}={}){let i=await Promise.all(s.map(a=>Ka(a,t,!0))),r=new Uint8Array(t*t*4*s.length);i.forEach((a,c)=>r.set(a.data,c*t*t*4));let o=new Ks(r,t,t,s.length);return o.format=Lt,o.type=Zt,o.colorSpace=e?nt:Un,o.wrapS=o.wrapT=mn,o.generateMipmaps=!0,o.minFilter=zt,o.magFilter=Tt,o.anisotropy=n,o.needsUpdate=!0,o}async function $a(s){let e=await wu(s),t=new Ya;return t.register(n=>(n.textureLoader=new ar(n.options.manager),{name:"IMG_TEXTURES"})),await new Promise((n,i)=>t.parse(e,"",n,i))}function wp(s=256,e=7){let t=e>>>0,n=()=>{t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296},i=new Uint8Array(s*s*4);for(let o=0;o<4;o++){let a=new Float32Array(s*s),c=.5,l=0;for(let d=4;d<=64;d*=2){let f=new Float32Array(d*d);for(let m=0;m<d*d;m++)f[m]=n();for(let m=0;m<s;m++)for(let x=0;x<s;x++){let g=x/s*d,p=m/s*d,M=Math.floor(g),y=Math.floor(p),_=g-M,L=p-y;_=_*_*(3-2*_),L=L*L*(3-2*L);let T=(M+1)%d,R=(y+1)%d;a[m*s+x]+=c*((f[y*d+M]*(1-_)+f[y*d+T]*_)*(1-L)+(f[R*d+M]*(1-_)+f[R*d+T]*_)*L)}l+=c,c*=.5}let h=1e9,u=-1e9;for(let d=0;d<a.length;d++){let f=a[d]/l;f<h&&(h=f),f>u&&(u=f)}for(let d=0;d<a.length;d++)i[d*4+o]=Math.round((a[d]/l-h)/(u-h)*255)}let r=new qn(i,s,s,Lt,Zt);return r.wrapS=r.wrapT=mn,r.generateMipmaps=!0,r.minFilter=zt,r.magFilter=Tt,r.needsUpdate=!0,r}var Wi=ao/2,cM=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4( mat3( modelViewMatrix ) * position, 1.0 );
  gl_Position = p.xyww;
}`,lM=`
uniform sampler2D uSkyBase;
uniform sampler2D uSkyGain;
uniform float uRot;
uniform float uEnv;
uniform float uWhite;
varying vec3 vDir;
${qa}
void main() {
  vec3 d = normalize( vDir );
  float u = fract( ( atan( d.z, d.x ) - uRot ) * 0.15915494 + 0.5 );
  float v = asin( clamp( d.y, -1.0, 1.0 ) ) * 0.31830989 + 0.5;
  vec2 suv = vec2( u, max( v, 0.502 ) );
  // HDR sky = tone-compressed base image * 2^(gain map)
  vec3 c = texture2D( uSkyBase, suv ).rgb * exp2( texture2D( uSkyGain, suv ).r * 13.0 ) / 0.8;
  vec3 hz = hazeColor( d );
  if ( uEnv > 0.5 ) {
    c = min( c, vec3( 22.0 ) );
    vec3 ground = vec3( 0.075, 0.095, 0.085 ) * 1.6;
    c = mix( c, ground, smoothstep( 0.02, -0.10, d.y ) );
  } else {
    c = mix( c, hz, smoothstep( 0.055, -0.004, d.y ) );
    c = mix( c, vec3( 0.92, 0.95, 1.02 ), uWhite );
  }
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  // a little dither hides banding in smooth sky gradients
  gl_FragColor.rgb += ( fract( sin( dot( gl_FragCoord.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ) - 0.5 ) / 255.0;
}`;async function Tp(s,e){let[t,n]=await Promise.all([_i("sky_base.jpg",{srgb:!0,repeat:!0,mip:!1,aniso:1}),_i("sky_gain.png",{srgb:!1,repeat:!0,mip:!1,aniso:1})]);for(let m of[t,n])m.wrapT=rn,m.needsUpdate=!0;let i=new rr(1,48,24),r=m=>new an({uniforms:{uSkyBase:{value:t},uSkyGain:{value:n},uRot:{value:cp},uEnv:{value:m},uWhite:{value:0}},vertexShader:m?"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }":cM,fragmentShader:lM,side:qt,depthTest:!1,depthWrite:!1,fog:!1}),o=new He(i,r(0));o.frustumCulled=!1,o.renderOrder=-1e3,e.add(o);let a=new er,c=new He(i,r(1));c.scale.setScalar(50),a.add(c);let l=new Qs(s),h=l.fromScene(a,0,.1,200).texture;l.dispose(),e.environment=h,e.environmentIntensity=1;let u=new cr(lp,hp);u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.bias=-5e-4,u.shadow.normalBias=.04,e.add(u,u.target);let d=u.shadow.camera;d.near=1,d.far=800;let f=(m,x)=>{let g=x*2/u.shadow.mapSize.x,p=new w(Math.round(m.x/g)*g,Math.round(m.y/g)*g,Math.round(m.z/g)*g);u.target.position.copy(p),u.position.copy(p).addScaledVector(Bn,400),d.right!==x&&(d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix()),u.target.updateMatrixWorld()};return f(new w,40),{dome:o,env:h,sun:u,setShadowFocus:f}}var Ja=4,kn=128,hM=`
uniform sampler2D uMacroN;
uniform sampler2D uAux;
uniform sampler2D uNoise;
uniform float uTime;
varying vec3 vTerrPos;
`,ja=class{constructor(){this.group=new gt,this.levels=[],this.cx=1e9,this.cz=1e9}async load(e){let t=await wu("terrain_h"),n=new Uint16Array(t),i=this.H=new Float32Array(ht*ht),r=(ap-Xh)/65535;for(let f=0;f<ht*ht;f++)i[f]=n[f]*r+Xh;let o=new Uint8Array(ht*ht*4);for(let f=0;f<ht;f++)for(let m=0;m<ht;m++){let x=m>0?m-1:m,g=m<ht-1?m+1:m,p=f>0?f-1:f,M=f<ht-1?f+1:f,y=(i[f*ht+x]-i[f*ht+g])/((g-x)*An),_=(i[p*ht+m]-i[M*ht+m])/((M-p)*An),L=1/Math.hypot(y,1,_),T=(f*ht+m)*4;o[T]=(y*L*.5+.5)*255,o[T+1]=(L*.5+.5)*255,o[T+2]=(_*L*.5+.5)*255,o[T+3]=Math.max(0,Math.min(255,(i[f*ht+m]+20)/40*255))}let a=this.macroN=new qn(o,ht,ht,Lt,Zt);a.minFilter=zt,a.magFilter=Tt,a.generateMipmaps=!0,a.anisotropy=4,a.wrapS=a.wrapT=rn,a.needsUpdate=!0;let c=await Ka("terrain_aux.png",0,!1),l=this.aux=new qn(new Uint8Array(c.data.buffer),ht,ht,Lt,Zt);l.minFilter=zt,l.magFilter=Tt,l.generateMipmaps=!0,l.needsUpdate=!0;let h=e.texSize,[u,d]=await Promise.all([Tu(["ta0.jpg","ta1.jpg","ta2.jpg","ta3.jpg","ta4.jpg","ta5.jpg","ta6.jpg","ta7.jpg"],{srgb:!0,size:h,aniso:e.aniso}),Tu(["tn0.jpg","tn1.jpg","tn2.jpg","tn3.jpg","tn4.jpg","tn5.jpg"],{srgb:!1,size:h,aniso:e.aniso})]);this.noise=wp(256,11),this.uniforms={uAlb:{value:u},uNrm:{value:d},uMacroN:{value:a},uAux:{value:l},uNoise:{value:this.noise},uTime:{value:0}},this._build()}_material(e){let t=this.uniforms,n={value:new it(0,0,0,0)},i=new ot({color:16777215,roughness:1,metalness:0});return i.onBeforeCompile=r=>{Object.assign(r.uniforms,t,{uHole:n}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerrPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${hM}
uniform mediump sampler2DArray uAlb;
uniform mediump sampler2DArray uNrm;
uniform vec4 uHole;
float terrSunVis = 1.0; float terrAO = 1.0; float terrRough = 0.95; vec3 terrN = vec3( 0.0, 1.0, 0.0 );
vec3 tA( float layer, vec2 p, vec3 sc, vec2 dx, vec2 dy ) {
  vec3 a = textureGrad( uAlb, vec3( p * sc.x, layer ), dx * sc.x, dy * sc.x ).rgb;
  vec3 b = textureGrad( uAlb, vec3( p * sc.y, layer ), dx * sc.y, dy * sc.y ).rgb;
  return mix( a, b, sc.z );
}
vec2 tNm( float layer, vec2 p, vec3 sc, vec2 dx, vec2 dy ) {
  vec2 a = textureGrad( uNrm, vec3( p * sc.x, layer ), dx * sc.x, dy * sc.x ).xy;
  vec2 b = textureGrad( uNrm, vec3( p * sc.y, layer ), dx * sc.y, dy * sc.y ).xy;
  return mix( a, b, sc.z ) * 2.0 - 1.0;
}`).replace("#include <map_fragment>",`
{
  vec2 tp = vTerrPos.xz;
  float tdist = length( vFogRel );
  // the finer ring covers this area; overlap grows with distance so MSAA edges never leave gaps
  float hm = uHole.z - 0.006 * tdist;
  if ( uHole.w > 0.5 && abs( tp.x - uHole.x ) < hm && abs( tp.y - uHole.y ) < hm ) discard;
  if ( vTerrPos.y < -0.35 ) discard;
  vec2 muv = tp / ${ao.toFixed(1)} + 0.5;
  vec4 mN = texture2D( uMacroN, muv );
  vec3 Nw = normalize( mN.xyz * 2.0 - 1.0 );
  vec3 aux = texture2D( uAux, muv ).rgb;
  vec2 dx = dFdx( tp ), dy = dFdy( tp );
  vec3 nzA = texture2D( uNoise, tp / 3100.0 ).rgb;
  vec3 nzB = texture2D( uNoise, tp / 420.0 + 0.37 ).rgb;
  vec3 nzC = texture2D( uNoise, tp / 61.0 + 0.71 ).rgb;
  vec2 wp = tp + ( nzA.rg - 0.5 ) * 300.0 + ( nzB.gb - 0.5 ) * 36.0;
  float h = vTerrPos.y, slope = 1.0 - Nw.y;
  // two texture scales cross-faded by distance (detail up close, landscape-scale pattern from altitude)
  vec3 sc = tdist < 800.0 ? vec3( 1.0 / 22.0, 1.0 / 150.0, smoothstep( 30.0, 420.0, tdist ) ) : vec3( 1.0 / 150.0, 1.0 / 1150.0, smoothstep( 800.0, 5200.0, tdist ) );
  float brk = ( nzB.r - 0.5 ) * 0.6 + ( nzC.g - 0.5 ) * 0.4;
  float wCliff = smoothstep( 0.36, 0.52, slope + brk * 0.12 );
  float wRock = max( smoothstep( 0.21, 0.35, slope + brk * 0.12 ), smoothstep( 1180.0, 1480.0, h + ( nzA.r - 0.5 ) * 520.0 + slope * 500.0 ) ) * ( 1.0 - wCliff );
  float wSnow = smoothstep( 1500.0, 1640.0, h + ( nzA.g - 0.5 ) * 300.0 - slope * 420.0 + ( nzB.b - 0.5 ) * 120.0 );
  float wSand = ( 1.0 - smoothstep( 1.7, 3.4, h + ( nzB.b - 0.5 ) * 1.6 + ( nzC.b - 0.5 ) * 1.2 ) ) * ( 1.0 - smoothstep( 0.10, 0.24, slope ) );
  float moist = aux.b;
  float wScrub = smoothstep( 0.47, 0.62, nzA.b * 0.75 + nzB.r * 0.25 + moist * 0.22 ) * smoothstep( 9.0, 45.0, h ) * ( 1.0 - smoothstep( 720.0, 1050.0, h + nzB.g * 200.0 ) ) * ( 1.0 - smoothstep( 0.16, 0.30, slope ) );
  float wDirt = smoothstep( 0.66, 0.80, nzB.b * 0.7 + nzC.r * 0.3 + ( nzA.g - 0.5 ) * 0.25 ) * 0.75 * ( 1.0 - wScrub );
  float gmix = smoothstep( 0.30, 0.70, nzA.r * 0.55 + nzB.g * 0.30 + nzC.b * 0.15 + h / 2600.0 - moist * 0.2 );
  float under = ( 1.0 - wSand ) * ( 1.0 - wCliff ) * ( 1.0 - wRock ) * ( 1.0 - wSnow );
  vec3 col = vec3( 0.0 ); vec2 nrm = vec2( 0.0 );
  if ( under > 0.004 ) {
    vec3 gA = tA( 0.0, wp, sc, dx, dy );
    vec3 gB = tA( 1.0, wp * 1.31, sc, dx * 1.31, dy * 1.31 );
    // close-up grass blades for the last metres before touchdown
    if ( tdist < 60.0 ) gB = mix( textureGrad( uAlb, vec3( tp / 2.6, 1.0 ), dx / 2.6, dy / 2.6 ).rgb, gB, smoothstep( 8.0, 60.0, tdist ) );
    col = mix( gB * vec3( 0.86, 1.02, 0.80 ), gA * vec3( 0.80, 0.90, 0.70 ), gmix );
    col *= mix( vec3( 0.82, 0.92, 0.78 ), vec3( 1.10, 1.04, 0.92 ), nzA.g );
    nrm = tNm( 0.0, wp, sc, dx, dy ) * 0.8;
    if ( wDirt > 0.004 ) { col = mix( col, tA( 5.0, wp * 0.83, sc, dx * 0.83, dy * 0.83 ) * 0.92, wDirt ); }
    if ( wScrub > 0.004 ) { vec3 s = tA( 7.0, wp * 0.71, sc, dx * 0.71, dy * 0.71 ); col = mix( col, s * vec3( 0.62, 0.80, 0.56 ), wScrub ); }
  }
  if ( wRock > 0.004 ) { vec3 rk = tA( 2.0, wp, sc, dx, dy ); rk *= mix( vec3( 0.72, 0.70, 0.66 ), vec3( 1.02, 0.98, 0.90 ), nzB.g ) * mix( 0.85, 1.1, nzC.r ); col = mix( col, rk, wRock ); nrm = mix( nrm, tNm( 2.0, wp, sc, dx, dy ) * 1.2, wRock ); }
  if ( wCliff > 0.004 ) {
    // side projections so steep faces do not smear
    float bx = Nw.x * Nw.x / max( Nw.x * Nw.x + Nw.z * Nw.z, 1e-4 );
    float cs = tdist < 1500.0 ? 1.0 / 46.0 : 1.0 / 520.0;
    vec2 pz = vec2( vTerrPos.x, vTerrPos.y ) * cs, px = vec2( vTerrPos.z, vTerrPos.y ) * cs;
    vec3 dpx = dFdx( vTerrPos ) * cs, dpy = dFdy( vTerrPos ) * cs;
    vec3 cA = textureGrad( uAlb, vec3( pz, 3.0 ), dpx.xy, dpy.xy ).rgb;
    vec3 cB = textureGrad( uAlb, vec3( px, 3.0 ), dpx.zy, dpy.zy ).rgb;
    vec3 cl = mix( cA, cB, bx ) * vec3( 0.66, 0.67, 0.70 ) * mix( 0.75, 1.15, nzB.r );
    cl = mix( cl, vec3( dot( cl, vec3( 0.33 ) ) ), 0.45 );
    col = mix( col, cl, wCliff );
    nrm = mix( nrm, tNm( 3.0, wp, sc, dx, dy ) * 1.3, wCliff );
  }
  if ( wSand > 0.004 ) { col = mix( col, tA( 4.0, wp, sc, dx, dy ) * vec3( 0.92, 0.86, 0.76 ), wSand ); nrm = mix( nrm, tNm( 4.0, wp, sc, dx, dy ) * 0.5, wSand ); }
  if ( wSnow > 0.004 ) { col = mix( col, tA( 6.0, wp, sc, dx, dy ) * 1.12, wSnow ); nrm *= 1.0 - 0.7 * wSnow; }
  terrRough = mix( 0.94, 0.62, wSnow );
  // streams / rivers from the drainage map
  float wRiver = smoothstep( 0.66, 0.74, moist ) * ( 1.0 - smoothstep( 0.05, 0.16, slope ) ) * ( 1.0 - wSand ) * step( 1.5, h );
  col = mix( col, vec3( 0.022, 0.050, 0.055 ), wRiver * 0.9 ); terrRough = mix( terrRough, 0.10, wRiver ); nrm *= 1.0 - wRiver;
  col *= mix( 1.0, 0.80, smoothstep( 0.42, 0.62, moist ) * ( 1.0 - wRiver ) );
  // alpine tussock: grass yellows and thins with altitude
  col = mix( col, col * vec3( 1.12, 0.98, 0.72 ), under * smoothstep( 500.0, 1300.0, h ) * 0.7 );
  // wet band at the waterline
  float wet = 1.0 - smoothstep( 0.05, 1.0, h + ( nzC.r - 0.5 ) * 0.4 );
  col *= mix( 1.0, 0.52, wet ); terrRough = mix( terrRough, 0.22, wet * 0.85 );
  // drifting cloud shadows
  float cs2 = texture2D( uNoise, ( tp + vec2( 21.0, -9.0 ) * uTime ) / 6400.0 ).a;
  float cloudSh = 1.0 - 0.62 * smoothstep( 0.54, 0.70, cs2 );
  terrSunVis = aux.r * cloudSh;
  terrAO = aux.g * aux.g;
  float ns = mix( 1.0, 0.45, smoothstep( 400.0, 7000.0, tdist ) );
  terrN = normalize( Nw + vec3( nrm.x, 0.0, nrm.y ) * ns );
  diffuseColor.rgb = col;
}`).replace("#include <roughnessmap_fragment>","float roughnessFactor = terrRough;").replace("#include <normal_fragment_maps>","normal = normalize( mat3( viewMatrix ) * terrN );").replace("#include <lights_fragment_begin>",Ve.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );","getDirectionalLightInfo( directionalLight, directLight ); directLight.color *= terrSunVis;")).replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse *= terrAO; reflectedLight.indirectSpecular *= terrAO;`)},i.customProgramCacheKey=()=>"terrain",i.userData.hole=n,i}_build(){let e=kn+1,t=new Uint32Array(kn*kn*6),n=0;for(let r=0;r<kn;r++)for(let o=0;o<kn;o++){let a=r*e+o,c=a+1,l=a+e,h=l+1;t[n++]=a,t[n++]=l,t[n++]=c,t[n++]=c,t[n++]=l,t[n++]=h}let i=new Float32Array(e*e*3);for(let r=0;r<e*e;r++)i[r*3+1]=1;for(let r=0;r<Ja;r++){let o=new rt,a=new Float32Array(e*e*3);o.setAttribute("position",new at(a,3).setUsage(On)),o.setAttribute("normal",new at(i,3)),o.setIndex(new at(t,1));let c=new He(o,this._material(r));c.frustumCulled=!1,c.receiveShadow=!0,c.matrixAutoUpdate=!1,c.renderOrder=-5+r*.1,this.group.add(c),this.levels.push({mesh:c,pos:a,step:1<<r})}}update(e,t){this.uniforms.uTime.value=t;let n=Math.round(((e.x+Wi)/An-.5)/8)*8,i=Math.round(((e.z+Wi)/An-.5)/8)*8;if(n===this.cx&&i===this.cz)return;this.cx=n,this.cz=i;let r=this.H,o=kn+1,a=(c,l)=>r[Math.max(0,Math.min(ht-1,l))*ht+Math.max(0,Math.min(ht-1,c))];for(let c=0;c<Ja;c++){let l=this.levels[c],h=l.step,u=l.pos,d=c===Ja-1,f=d?0:n-kn/2*h,m=d?0:i-kn/2*h,x=0;for(let g=0;g<o;g++)for(let p=0;p<o;p++){let M=f+p*h,y=m+g*h,_=a(M,y);d||((g===0||g===kn)&&p&1?_=.5*(a(M-h,y)+a(M+h,y)):(p===0||p===kn)&&g&1&&(_=.5*(a(M,y-h)+a(M,y+h)))),u[x++]=(M+.5)*An-Wi,u[x++]=_,u[x++]=(y+.5)*An-Wi}if(l.mesh.geometry.attributes.position.needsUpdate=!0,c+1<Ja){let g=kn/2*h*An-.75;this.levels[c+1].mesh.material.userData.hole.value.set((n+.5)*An-Wi,(i+.5)*An-Wi,g,1)}}}heightAt(e,t){let n=(e+Wi)/An-.5,i=(t+Wi)/An-.5;if(n<0||i<0||n>=ht-1||i>=ht-1)return-150;let r=Math.floor(n),o=Math.floor(i),a=n-r,c=i-o,l=this.H,h=o*ht+r,u=l[h],d=l[h+1],f=l[h+ht],m=l[h+ht+1];return a+c<=1?u+a*(d-u)+c*(f-u):m+(1-a)*(f-m)+(1-c)*(d-m)}normalAt(e,t,n){let r=this.heightAt(e-8,t)-this.heightAt(e+8,t),o=this.heightAt(e,t-8)-this.heightAt(e,t+8);return n.set(r,16,o).normalize()}};async function Ap(s,e){let t=await _i("water_n.jpg",{srgb:!1,aniso:e.aniso}),n=new Xn(1,1,1,1);n.rotateX(-Math.PI/2);let i=new ot({color:16777215,roughness:.12,metalness:0}),r={uMacroN:s.uniforms.uMacroN,uNoise:s.uniforms.uNoise,uTime:s.uniforms.uTime,uWaterN:{value:t}};i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerrPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uMacroN; uniform sampler2D uNoise; uniform sampler2D uWaterN; uniform float uTime;
varying vec3 vTerrPos;
float wRough = 0.12; vec3 wN = vec3( 0.0, 1.0, 0.0 );`).replace("#include <map_fragment>",`
{
  vec2 tp = vTerrPos.xz;
  float wd = length( vFogRel );
  vec2 muv = tp / ${ao.toFixed(1)} + 0.5;
  float th = texture2D( uMacroN, clamp( muv, 0.0, 1.0 ) ).a * 40.0 - 20.0;
  float inMap = step( abs( muv.x - 0.5 ), 0.5 ) * step( abs( muv.y - 0.5 ), 0.5 );
  float depth = mix( 20.0, max( 0.0, - th ), inMap );
  vec3 deep = vec3( 0.004, 0.024, 0.048 );
  vec3 shallow = vec3( 0.014, 0.115, 0.115 );
  vec3 sandC = vec3( 0.17, 0.165, 0.125 );
  vec3 wc = mix( shallow, deep, 1.0 - exp( - depth * 0.20 ) );
  wc = mix( sandC, wc, 1.0 - exp( - depth * 1.25 ) );
  vec2 n1 = texture2D( uWaterN, tp / 47.0 + uTime * vec2( 0.011, 0.006 ) ).xy * 2.0 - 1.0;
  vec2 n2 = texture2D( uWaterN, tp / 13.0 - uTime * vec2( 0.019, 0.027 ) ).xy * 2.0 - 1.0;
  vec2 n3 = texture2D( uWaterN, tp / 420.0 + uTime * vec2( 0.003, -0.002 ) ).xy * 2.0 - 1.0;
  vec2 n4 = texture2D( uWaterN, tp / 2900.0 - uTime * vec2( 0.0006, 0.0004 ) ).xy * 2.0 - 1.0;
  float ns = mix( 0.42, 0.10, smoothstep( 100.0, 7000.0, wd ) );
  wN = normalize( vec3( ( n1.x + n2.x * 0.6 ) * ns + n3.x * 0.11 + n4.x * 0.06, 1.0, ( n1.y + n2.y * 0.6 ) * ns + n3.y * 0.11 + n4.y * 0.06 ) );
  wRough = mix( 0.085, 0.27, smoothstep( 200.0, 14000.0, wd ) );
  // foam where waves meet the shore
  float fn = texture2D( uNoise, tp / 17.0 + uTime * vec2( 0.02, 0.013 ) ).r * 0.6 + texture2D( uNoise, tp / 5.0 - uTime * 0.03 ).g * 0.4;
  float surf = sin( depth * 5.5 - uTime * 1.3 + fn * 5.0 ) * 0.5 + 0.5;
  float foam = smoothstep( 0.8, 0.0, depth ) * smoothstep( 0.45, 0.75, fn + surf * 0.25 ) * inMap;
  wc = mix( wc, vec3( 0.62, 0.66, 0.68 ), foam * 0.8 ); wRough = mix( wRough, 0.6, foam );
  // large-scale colour variation (wind streaks, currents)
  wc *= 0.86 + 0.28 * texture2D( uNoise, tp / 5200.0 + 0.2 ).b;
  diffuseColor.rgb = wc;
}`).replace("#include <roughnessmap_fragment>","float roughnessFactor = wRough;").replace("#include <normal_fragment_maps>","normal = normalize( mat3( viewMatrix ) * wN );")},i.customProgramCacheKey=()=>"water";let o=new He(n,i);return o.scale.set(42e4,1,42e4),o.frustumCulled=!1,o.renderOrder=-20,i.depthWrite=!1,o.receiveShadow=!1,o}function yi(s,e,t,n,i=.07,r=null){let o=[],a=[],c=[];for(let h=0;h<=t;h++)for(let u=0;u<=e;u++){let[d,f]=n(u/e,h/t);o.push(d,s.heightAt(d,f)+i,f),r?a.push(d*r,f*r):a.push(u/e,h/t)}for(let h=0;h<t;h++)for(let u=0;u<e;u++){let d=h*(e+1)+u,f=d+1,m=d+e+1,x=m+1;c.push(d,m,f,f,m,x)}let l=new rt;return l.setAttribute("position",new et(o,3)),l.setAttribute("uv",new et(a,2)),l.setIndex(c),l.computeVertexNormals(),l}function uM(){let t=document.createElement("canvas");t.width=4096,t.height=96;let n=t.getContext("2d"),i=ln.x1-ln.x0,r=4096/i,o=96/(ln.halfW*2);n.fillStyle="rgba(236,236,228,0.92)",n.fillRect(0,2,4096,.9*o*.45),n.fillRect(0,94-.9*o*.45,4096,.9*o*.45);for(let u=95;u<i-95;u+=60)n.fillRect(u*r,96/2-.45*o*.5,30*r,.45*o);for(let u of[0,1]){for(let d=0;d<8;d++){let f=(2.2+d*2.3+(d>=4?1.2:0))*o,m=u?(i-8-30)*r:8*r;n.fillRect(m,f,30*r,1.5*o)}for(let d of[150,300])for(let f of[-1,1]){let m=u?(i-d-22)*r:d*r;n.fillRect(m,96/2+f*5.2*o-1.4*o,22*r,2.8*o)}n.save(),n.translate((u?i-62:62)*r,96/2),n.rotate(u?-Math.PI/2:Math.PI/2),n.font=`700 ${14*o*.72}px Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.scale(1,r/o*1.9),n.fillText(u?"27":"09",0,0),n.restore()}let a=n.getImageData(0,0,4096,96),c=a.data,l=3;for(let u=0;u<c.length;u+=4)l=l*1664525+1013904223>>>0,c[u+3]>0&&(c[u+3]*=.72+.28*((l>>>24)/255));n.putImageData(a,0,0);for(let u of[0,1]){let d=n.createLinearGradient((u?i-420:60)*r,0,(u?i-60:420)*r,0);d.addColorStop(0,"rgba(12,12,12,0)"),d.addColorStop(.5,"rgba(12,12,12,0.5)"),d.addColorStop(1,"rgba(12,12,12,0)"),n.fillStyle=d,n.fillRect((u?i-420:60)*r,96/2-4.5*o,360*r,9*o)}let h=new cn(t);return h.colorSpace=nt,h.anisotropy=16,h.flipY=!1,h}function Rp(s="#aeb4b8"){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");for(let i=0;i<64;i++){let r=.5+.5*Math.sin(i/64*Math.PI*2*8);t.fillStyle=s,t.fillRect(i,0,1,64),t.fillStyle=`rgba(0,0,0,${.22*(1-r)})`,t.fillRect(i,0,1,64),t.fillStyle=`rgba(255,255,255,${.1*r})`,t.fillRect(i,0,1,64)}let n=new cn(e);return n.wrapS=n.wrapT=mn,n.colorSpace=nt,n.anisotropy=8,n}async function Cp(s,e){let t=new gt,[n,i,r]=await Promise.all([_i("asphalt_c.jpg",{srgb:!0,aniso:e.aniso}),_i("asphalt_n.jpg",{aniso:e.aniso}),_i("gravel_c.jpg",{srgb:!0,aniso:e.aniso})]),o=new ot({map:n,normalMap:i,roughness:.92,metalness:0,color:12105912,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=(de,Ee,X=0)=>{let $=new He(de,Ee);return $.receiveShadow=!0,$.renderOrder=X,t.add($),$},{x0:c,x1:l,z:h,halfW:u}=ln;a(yi(s,130,4,(de,Ee)=>[c+(l-c)*de,h-u+2*u*Ee],.06,1/7),o,-3),a(yi(s,130,4,(de,Ee)=>[c+(l-c)*de,h-u+2*u*Ee],.075),new ot({map:uM(),transparent:!0,roughness:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),-2),a(yi(s,4,14,(de,Ee)=>[-150+14*de,-u-95*Ee],.06,1/7),o,-3),a(yi(s,22,12,(de,Ee)=>[-215+150*de,-106-62*Ee],.06,1/7),o,-3);let d=s.heightAt(-140,-200),f=new ot({map:Rp("#b4babd"),roughness:.55,metalness:.55});f.map.repeat.set(10,1);let m=new ot({map:Rp("#8f999e"),roughness:.5,metalness:.6,side:wt});m.map.repeat.set(14,1);let x=new gt;x.position.set(-140,d-.3,-198);let g=new He(new Vt(38,8.5,26),f);g.position.y=4.25,g.castShadow=g.receiveShadow=!0,x.add(g);let p=new jr;p.moveTo(-19.6,0),p.lineTo(0,4.2),p.lineTo(19.6,0),p.lineTo(-19.6,0);let M=new He(new Da(p,{depth:27,bevelEnabled:!1}),m);M.position.set(0,8.5,-13.5),M.castShadow=!0,x.add(M);let y=new He(new Xn(24,6.6),new ot({color:790032,roughness:.9}));y.position.set(0,3.3,13.03),x.add(y);let _=new ot({color:1192030,roughness:.5,metalness:.3}),L=new He(new Vt(38.2,.7,26.2),_);L.position.y=8.2,x.add(L),t.add(x);let T=new He(new Vt(12,3.4,7),new ot({color:14210248,roughness:.85}));T.position.set(-92,s.heightAt(-92,-196)+1.6,-196),T.castShadow=T.receiveShadow=!0,t.add(T);let R=new He(new Vt(13,.3,8),_);R.position.copy(T.position).y+=1.85,R.castShadow=!0,t.add(R);let C=hn,b=new ot({map:r,roughness:.95,color:13682872,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});a(yi(s,24,3,(de,Ee)=>{let X=de*Math.PI*2,$=9*Ee;return[C.x+Math.cos(X)*$,C.z+Math.sin(X)*$]},.07,1/3),b,-3);let v=(de,Ee=1)=>new ot({color:de,roughness:.8,transparent:Ee<1,opacity:Ee,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});a(yi(s,20,1,(de,Ee)=>{let X=de*Math.PI*2,$=1*Ee;return[C.x+Math.cos(X)*$,C.z+Math.sin(X)*$]},.1),v(15909376),-2),a(yi(s,64,1,(de,Ee)=>{let X=de*Math.PI*2,$=24+.9*Ee;return[C.x+Math.cos(X)*$,C.z+Math.sin(X)*$]},.08),v(15658730,.85),-2),a(yi(s,64,1,(de,Ee)=>{let X=de*Math.PI*2,$=49.4+.7*Ee;return[C.x+Math.cos(X)*$,C.z+Math.sin(X)*$]},.08),v(15658730,.6),-2);let P=en(0,new w),k=Math.atan2(-P.z,-P.x);a(yi(s,16,2,(de,Ee)=>{let X=-7+14*de,$=de<.62?1.1:3.4*(1-(de-.62)/.38),me=(Ee*2-1)*$,oe=C.x+34*Math.cos(k+1.9),he=C.z+34*Math.sin(k+1.9);return[oe+X*Math.cos(k)-me*Math.sin(k),he+X*Math.sin(k)+me*Math.cos(k)]},.09),v(14833436),-2);let U=new w(C.x-60,s.heightAt(C.x-60,C.z+46),C.z+46),V=new He(new di(.06,.08,7,8),new ot({color:14540253,roughness:.5,metalness:.6}));V.position.copy(U).y+=3.5,V.castShadow=!0,t.add(V);let B=new di(.42,.16,3.2,12,6,!0);B.rotateZ(Math.PI/2),B.translate(1.6,0,0);let Z=document.createElement("canvas");Z.width=8,Z.height=64;{let de=Z.getContext("2d");for(let Ee=0;Ee<5;Ee++)de.fillStyle=Ee%2?"#f4f4f0":"#e2571c",de.fillRect(0,Ee*12.8,8,12.8)}let H=new cn(Z);H.colorSpace=nt;let te=new He(B,new ot({map:H,roughness:.7,side:wt}));te.position.copy(U).y+=6.8,te.castShadow=!0,t.add(te);let le=B.attributes.position.array.slice();return{group:t,update:de=>{let Ee=en(0,new w);te.rotation.y=Math.atan2(-Ee.z,Ee.x)+Math.sin(de*.7)*.12;let X=B.attributes.position;for(let $=0;$<X.count;$++){let me=le[$*3];X.setY($,le[$*3+1]-me*me*.05+Math.sin(de*6+me*2.2)*.05*me),X.setZ($,le[$*3+2]+Math.sin(de*4.3+me*1.7)*.06*me)}X.needsUpdate=!0}}}async function Ip(s,e){let t=await $a("tree"),n=new gt,i=[],r=12345,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=(u,d)=>Math.abs(d-ln.z)>55&&!(u>-230&&u<-50&&d>-235&&d<-95)&&Math.hypot(u-hn.x,d-hn.z)>95;for(let u=0;u<e.trees;u++){let d,f,m=0;do{let x=u%4;if(x===0)d=-560+o()*1120,f=70+o()*26;else if(x===1)d=-330+o()*240,f=-250-o()*40;else if(x===2){let g=o()*6.283,p=110+o()*150;d=hn.x+Math.cos(g)*p,f=hn.z-40+Math.sin(g)*p*.7-120}else d=-700+o()*1400,f=-330-o()*160}while(!a(d,f)&&++m<20);i.push({x:d,z:f,sc:2.3+o()*1.9,rot:o()*6.283})}let c=new Fe,l=new Ge,h=new w(0,1,0);return t.scene.updateMatrixWorld(!0),t.scene.traverse(u=>{if(!u.isMesh)return;let d=u.material;(d.transparent||d.alphaTest>0||/leav/i.test(d.name))&&(d.transparent=!1,d.alphaTest=.42,d.alphaToCoverage=!0,d.side=wt,d.depthWrite=!0),d.envMapIntensity=.9;let f=new nr(u.geometry,d,i.length);f.castShadow=!0,f.receiveShadow=!0,i.forEach((m,x)=>{l.setFromAxisAngle(h,m.rot),c.compose(new w(m.x,s.heightAt(m.x,m.z)-.15,m.z),l,new w(m.sc,m.sc*(.9+.2*(x*7%5)/5),m.sc)).multiply(u.matrixWorld),f.setMatrixAt(x,c)}),f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),n.add(f)}),n}var dM=s=>Math.max(0,Math.min(1,s));async function Pp(s){let e=await _i("cloud.png",{srgb:!1,repeat:!1,mip:!0,aniso:1}),t=4242,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),i=[],r=[],o=s.clouds;for(let y=0;y<o;y++){let _=n()*6.283,L=3e3+Math.sqrt(n())*26e3,T=Math.cos(_)*L+2e3,R=Math.sin(_)*L-3e3,C=1800+n()*350,b=.75+n()*n()*1.9;if(Math.hypot(T,R)<3e3)continue;let v=1300*b,P=620*b*(.7+n()*.6),k=.6+n()*.5,F=n()*3.14;r.push({x:T,y:C+P*.45,z:R,r:v*.8});let U=Math.round((16+n()*10)*Math.min(1.6,b));for(let V=0;V<U;V++){let B=Math.pow(n(),1.5),Z=n()*6.283,H=Math.sqrt(n())*v*(1-.75*B),te=Math.cos(Z)*H,le=Math.sin(Z)*H*k,xe=(300+n()*260)*Math.sqrt(b)*(1-.45*B)*(.75+.5*(1-H/v));i.push({x:T+te*Math.cos(F)-le*Math.sin(F),y:C+xe*.3+B*P,z:R+te*Math.sin(F)+le*Math.cos(F),sc:xe,rot:n()*6.283,shade:dM(.12+.95*B+(n()-.5)*.18)})}}let a=i.length,c=new Ba;c.setAttribute("position",new et([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),c.setIndex([0,1,2,0,2,3]);let l=new Float32Array(a*4),h=new Float32Array(a*2);c.setAttribute("aOff",new Yn(l,4).setUsage(On)),c.setAttribute("aPar",new Yn(h,2).setUsage(On)),c.instanceCount=a;let u=new an({uniforms:{uTex:{value:e},uCloudFog:{value:0},uDrift:{value:new w}},transparent:!0,depthWrite:!1,fog:!1,vertexShader:`
      attribute vec4 aOff; attribute vec2 aPar;
      uniform vec3 uDrift;
      varying vec2 vUv; varying vec3 vRel; varying float vShade; varying float vFade; varying vec3 vN;
      void main() {
        vec3 c = aOff.xyz + uDrift;
        vec3 camR = vec3( viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0] ), camU = vec3( viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1] );
        float cr = cos( aPar.x ), sr = sin( aPar.x );
        vec2 p = vec2( position.x * cr - position.y * sr, position.x * sr + position.y * cr );
        vec3 wp = c + ( camR * p.x + camU * p.y ) * aOff.w;
        vUv = position.xy * 0.5 + 0.5; vShade = aPar.y;
        vRel = wp - cameraPosition;
        float d = length( c - cameraPosition );
        vFade = smoothstep( aOff.w * 0.25, aOff.w * 1.5, d );
        vec3 toCam = normalize( cameraPosition - c );
        vN = normalize( camR * p.x + camU * p.y + toCam * 0.65 );
        gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
      }`,fragmentShader:`
      uniform sampler2D uTex; uniform float uCloudFog;
      varying vec2 vUv; varying vec3 vRel; varying float vShade; varying float vFade; varying vec3 vN;
      ${qa}
      void main() {
        vec4 t = texture2D( uTex, vUv );
        float a = smoothstep( 0.03, 0.85, t.a ) * vFade;
        if ( a < 0.004 ) discard;
        vec3 sun = vec3( ${Bn.x.toFixed(4)}, ${Bn.y.toFixed(4)}, ${Bn.z.toFixed(4)} );
        float nl = dot( normalize( vN ), sun );
        // height in the cloud drives most of the shading: grey flat bases, sunlit crowns
        float lit = clamp( 0.10 + 0.72 * vShade + 0.30 * nl + ( t.r - 0.62 ) * 0.55 + ( vUv.y - 0.5 ) * 0.22, 0.0, 1.0 );
        vec3 dark = vec3( 0.40, 0.45, 0.56 ), mid = vec3( 1.05, 1.07, 1.12 ), bright = vec3( 2.25, 2.18, 2.05 );
        vec3 col = lit < 0.5 ? mix( dark, mid, lit * 2.0 ) : mix( mid, bright, lit * 2.0 - 1.0 );
        // silver lining toward the sun
        float mu = max( dot( normalize( vRel ), sun ), 0.0 );
        col += vec3( 1.6, 1.5, 1.3 ) * pow( mu, 14.0 ) * ( 1.0 - t.a );
        col = atmos( col, vRel, cameraPosition.y, vec3( 0.92, 0.95, 1.02 ), uCloudFog );
        gl_FragColor = vec4( col, a );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),d=new He(c,u);d.frustumCulled=!1,d.renderOrder=5;let f=new Uint32Array(a),m=new Float32Array(a);for(let y=0;y<a;y++)f[y]=y;let x=u.uniforms.uDrift.value,g=0,p=()=>{for(let y=0;y<a;y++){let _=i[f[y]];l[y*4]=_.x,l[y*4+1]=_.y,l[y*4+2]=_.z,l[y*4+3]=_.sc,h[y*2]=_.rot,h[y*2+1]=_.shade}c.attributes.aOff.needsUpdate=!0,c.attributes.aPar.needsUpdate=!0};return p(),{mesh:d,update:(y,_)=>{let L=en(2e3,new w);if(x.set(L.x*_,0,L.z*_),g++%8===0){let R=y.x-x.x,C=y.y,b=y.z-x.z;for(let v=0;v<a;v++){let P=i[v];m[v]=(P.x-R)**2+(P.y-C)**2+(P.z-b)**2}f.sort((v,P)=>m[P]-m[v]),p()}let T=0;for(let R of r){let C=R.x+x.x-y.x,b=(R.y-y.y)*1.7,v=R.z+x.z-y.z,P=Math.sqrt(C*C+b*b+v*v)/R.r;P<1&&(T=Math.max(T,1-P))}return T},mat:u}}var Vu=Math.PI*2,Lp=(s,e)=>Math.sign(s)*Math.pow(Math.abs(s),e);function fM(s,e,t,n,i){let r=i*i,o=r*i;return .5*(2*e+(-s+t)*i+(2*s-5*e+4*t-n)*r+(-s+3*e-3*t+n)*o)}function Dp(s,e=56,t=32){let n=[],i=[],r=[],o=s[0][0],a=s[s.length-1][0];for(let h=0;h<=e;h++){let u=h/e*(s.length-1),d=Math.min(s.length-2,Math.floor(u)),f=u-d,m=[0,1,2,3,4,5].map(g=>fM(s[Math.max(0,d-1)][g],s[d][g],s[d+1][g],s[Math.min(s.length-1,d+2)][g],f)),x=s[d][0]+(s[d+1][0]-s[d][0])*f;for(let g=0;g<=t;g++){let p=g/t*Vu,M=Math.cos(p),y=Math.sin(p),_=2/Math.max(2,m[5]);n.push(m[2]*Lp(y,_),m[1]+(M>=0?m[3]:m[4])*Lp(M,_),x),i.push((x-o)/(a-o),g/t)}}for(let h=0;h<e;h++)for(let u=0;u<t;u++){let d=h*(t+1)+u,f=d+t+1;r.push(d,d+1,f,d+1,f+1,f)}let c=new rt;c.setAttribute("position",new et(n,3)),c.setAttribute("uv",new et(i,2)),c.setIndex(r),c.computeVertexNormals();let l=c.attributes.normal;for(let h=0;h<=e;h++){let u=h*(t+1),d=u+t,f=l.getX(u)+l.getX(d),m=l.getY(u)+l.getY(d),x=l.getZ(u)+l.getZ(d),g=Math.hypot(f,m,x)||1;l.setXYZ(u,f/g,m/g,x/g),l.setXYZ(d,f/g,m/g,x/g)}return c}function pM(s,e,t=14){let n=[],i=o=>5*s*(.2969*Math.sqrt(o)-.126*o-.3516*o*o+.2843*o*o*o-.1036*o*o*o*o),r=o=>e*(o<.4?(.8*o-o*o)/.16:(.2+.8*o-o*o)/.36);for(let o=0;o<=t;o++){let a=.5*(1+Math.cos(o/t*Math.PI));n.push([a,r(a)+i(a)])}for(let o=1;o<=t;o++){let a=.5*(1-Math.cos(o/t*Math.PI));n.push([a,r(a)-i(a)])}return n}function fr(s,e=.02,t=!1,n=!1){let i=[],r=[],o=[],a=s.map(u=>pM(u[4],e)),c=a[0].length,l=s[s.length-1][0];s.forEach((u,d)=>{a[d].forEach(([f,m],x)=>{let g=(f-.25)*u[1],p=m*u[1],M=u[2]+.25*u[1]+g*Math.cos(u[5])+p*Math.sin(u[5]),y=u[3]+p*Math.cos(u[5])-g*Math.sin(u[5]);n?i.push(y-u[3],u[0]+0,M):i.push(t?-u[0]:u[0],y,M);let _=x<=(c-1)/2;r.push(f,(_?0:.5)+.5*(u[0]/l))})});for(let u=0;u<s.length-1;u++)for(let d=0;d<c-1;d++){let f=u*c+d,m=f+1,x=f+c,g=x+1;t!==n?o.push(f,m,x,m,g,x):o.push(f,x,m,m,x,g)}let h=new rt;return h.setAttribute("position",new et(i,3)),h.setAttribute("uv",new et(r,2)),h.setIndex(o),h.computeVertexNormals(),h}function ho(s,e,t,n,i=1,r=10){let o=new di(n,t,1,r,1,!1);o.scale(1,1,i);let a=new He(o),c=new w().subVectors(e,s);return a.scale.y=c.length(),a.position.copy(s).addScaledVector(c,.5),a.quaternion.setFromUnitVectors(new w(0,1,0),c.clone().normalize()),a.updateMatrix(),o.applyMatrix4(a.matrix),o}function Au(s,e,t,n,i,r){s.roundRect?s.roundRect(e,t,n,i,r):s.rect(e,t,n,i)}function mM(){let t=document.createElement("canvas");t.width=2048,t.height=1024;let n=t.getContext("2d"),i=document.createElement("canvas");i.width=2048/2,i.height=1024/2;let r=i.getContext("2d"),o=-4.15,a=7.25,c=T=>(T-o)/(a-o)*2048,l=T=>T*1024;n.fillStyle="#eef0f1",n.fillRect(0,0,2048,1024),r.fillStyle="rgb(0,95,0)",r.fillRect(0,0,2048/2,1024/2);let h=n.createLinearGradient(0,l(.36),0,l(.64));h.addColorStop(0,"rgba(120,125,130,0)"),h.addColorStop(.5,"rgba(105,108,112,0.55)"),h.addColorStop(1,"rgba(120,125,130,0)"),n.fillStyle=h,n.fillRect(0,l(.36),2048,l(.28));let u=(T,R)=>{let C=b=>T+R*(.035-.085*Math.sin(Math.min(1,b)*Math.PI*.55)+.065*b*b);for(let[b,v,P]of[[.05,0,"#12305e"],[.01,-.04,"#d9762a"],[.006,.034,"#12305e"]]){n.fillStyle=P,n.beginPath();for(let k=0;k<=120;k++){let F=k/120,U=C(F)+R*v;n.lineTo(F*2048,l(U-b/2*(.5+.9*Math.sin(F*3))))}for(let k=120;k>=0;k--){let F=k/120,U=C(F)+R*v;n.lineTo(F*2048,l(U+b/2*(.5+.9*Math.sin(F*3))))}n.closePath(),n.fill()}};u(.285,1),u(.715,-1),h=n.createLinearGradient(c(5.3),0,c(6.6),0),h.addColorStop(0,"rgba(18,48,94,0)"),h.addColorStop(1,"rgba(18,48,94,1)"),n.fillStyle=h,n.fillRect(c(5.3),0,2048-c(5.3),1024);let d=(T,R,C,b,v)=>{let P=(F,U,V,B)=>{F.fillStyle=B,F.beginPath();let Z=T*U,H=C*1024*V,te=(R-T)*U,le=(b-C)*1024*V,xe=v*V;Au(F,Z,H,te,le,xe),F.fill()};P(n,1,1,"#0b1118"),P(r,.5,.5,"rgb(0,10,0)"),n.strokeStyle="#2b2f33",n.lineWidth=3,n.beginPath(),Au(n,T,C*1024,R-T,(b-C)*1024,v),n.stroke();let k=n.createLinearGradient(0,C*1024,0,b*1024);k.addColorStop(0,"rgba(120,160,200,0.20)"),k.addColorStop(1,"rgba(120,160,200,0.02)"),n.fillStyle=k,n.beginPath(),Au(n,T,C*1024,R-T,(b-C)*1024,v),n.fill()};d(c(-2.28),c(-1.42),.008,.185,22),d(c(-2.28),c(-1.42),.815,.992,22);for(let[T,R]of[[.125,.205],[.795,.875]]){d(c(-1.3),c(-.52),T,R,16);for(let C=0;C<5;C++){let b=-.25+C*.8;T>.5&&C>=3||d(c(b),c(b+.56),T+.008,R-.006,18)}}let f=c(2.05),m=c(3.5),x=l(.705),g=l(.905);n.fillStyle="#0d0f11",n.fillRect(f,x,m-f,g-x),r.fillStyle="rgb(0,235,0)",r.fillRect(f/2,x/2,(m-f)/2,(g-x)/2),h=n.createLinearGradient(0,x,0,g),h.addColorStop(0,"rgba(70,74,78,0.55)"),h.addColorStop(.25,"rgba(30,32,34,0.1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(f,x,m-f,g-x),n.strokeStyle="#8a8f94",n.lineWidth=5,n.strokeRect(f,x,m-f,g-x),n.fillStyle="#c9a227",n.fillRect(f,x-5,m-f,7),n.strokeStyle="rgba(40,45,50,0.30)",n.lineWidth=1.5;for(let T of[-3.55,-2.42,-1.42,-.42,1.2,2,3.6,4.6,5.6])n.beginPath(),n.moveTo(c(T),0),n.lineTo(c(T),1024),n.stroke();for(let T of[.07,.43,.57,.93])n.beginPath(),n.moveTo(c(-2.4),l(T)),n.lineTo(c(6.4),l(T)),n.stroke();n.fillStyle="rgba(60,64,70,0.22)";for(let T of[-2.36,-1.36,1.26,3.66,4.66])for(let R=6;R<1024;R+=12)n.fillRect(c(T),R,2,2);n.strokeStyle="rgba(40,45,50,0.45)",n.lineWidth=2,n.strokeRect(c(-1.36),l(.1),c(-.46)-c(-1.36),l(.23)),n.strokeRect(c(-1.36),l(.67),c(-.46)-c(-1.36),l(.23)),h=n.createLinearGradient(c(-3),0,c(.6),0),h.addColorStop(0,"rgba(25,22,20,0.65)"),h.addColorStop(1,"rgba(25,22,20,0)"),n.fillStyle=h,n.beginPath(),n.ellipse(c(-1.3),l(.345),c(.6)-c(-3)>>1,l(.022),0,0,Vu),n.fill(),n.fillStyle="#12305e",n.font='700 74px "Arial Narrow", Arial, sans-serif',n.textBaseline="middle",n.save(),n.translate(c(4.05),l(.215)),n.fillText("N208JR",0,0),n.restore(),n.save(),n.translate(c(5.42),l(.785)),n.scale(-1,-1),n.fillText("N208JR",0,0),n.restore();let p=n.getImageData(0,0,2048,1024),M=p.data,y=9;for(let T=0;T<M.length;T+=4){y=y*1664525+1013904223>>>0;let R=((y>>>24)-128)*.035;M[T]+=R,M[T+1]+=R,M[T+2]+=R}n.putImageData(p,0,0);let _=new cn(t);_.colorSpace=nt,_.anisotropy=8,_.flipY=!1;let L=new cn(i);return L.anisotropy=4,L.flipY=!1,{map:_,rough:L}}function Up(s){let n=document.createElement("canvas");n.width=512,n.height=1024;let i=n.getContext("2d");i.fillStyle="#eceef0",i.fillRect(0,0,512,1024),i.fillStyle="#dfe2e5",i.fillRect(0,1024/2,512,1024/2);for(let o of[0,1024/2]){i.fillStyle="#15171a",i.fillRect(0,o,512*.055,1024/2),i.fillStyle="#12305e",i.fillRect(0,o+1024/2*.9,512,1024/2*.1),i.fillStyle="#d9762a",i.fillRect(0,o+1024/2*.885,512,1024/2*.012),i.strokeStyle="rgba(30,34,38,0.55)",i.lineWidth=2.5,i.beginPath(),i.moveTo(512*.72,o+6),i.lineTo(512*.72,o+1024/2*.86),i.stroke();for(let a of[.06,.5,.86])i.beginPath(),i.moveTo(512*.72,o+1024/2*a),i.lineTo(512,o+1024/2*a),i.stroke();i.strokeStyle="rgba(40,45,50,0.22)",i.lineWidth=1.2;for(let a=.08;a<.88;a+=.085)i.beginPath(),i.moveTo(512*.06,o+1024/2*a),i.lineTo(512*.72,o+1024/2*a),i.stroke();i.beginPath(),i.moveTo(512*.3,o),i.lineTo(512*.3,o+1024/2*.88),i.stroke()}s&&(i.save(),i.translate(512*.6,1024*.5+1024/2*.36),i.rotate(-Math.PI/2),i.scale(-1,1),i.fillStyle="#12305e",i.font="700 96px Arial, sans-serif",i.textAlign="center",i.fillText("N208JR",0,0),i.restore());let r=new cn(n);return r.colorSpace=nt,r.anisotropy=8,r.flipY=!1,r}function gM(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new cn(e)}function xM(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,256*.07,256/2,256/2,256/2);n.addColorStop(0,"rgba(20,20,22,0)"),n.addColorStop(.12,"rgba(22,22,24,0.34)"),n.addColorStop(.7,"rgba(22,22,24,0.17)"),n.addColorStop(.9,"rgba(210,205,190,0.20)"),n.addColorStop(.94,"rgba(230,225,210,0.26)"),n.addColorStop(1,"rgba(22,22,24,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let i=new cn(e);return i.colorSpace=nt,i}function _M(){let s=new gt,e=mM(),t=new Ft({map:e.map,roughnessMap:e.rough,roughness:1,metalness:0,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:1}),n=new Ft({map:Up(!0),roughness:.38,metalness:0,clearcoat:1,clearcoatRoughness:.08}),i=new Ft({map:Up(!1),roughness:.38,metalness:0,clearcoat:1,clearcoatRoughness:.08}),r=new ot({color:10132898,roughness:.32,metalness:.95}),o=new ot({color:1710877,roughness:.7,metalness:.1}),a=new ot({color:789517,roughness:.92}),c=new Ft({color:15330285,roughness:.38,clearcoat:1,clearcoatRoughness:.08}),l=new Ft({color:1192030,roughness:.38,clearcoat:1,clearcoatRoughness:.08}),h=(U,V,B=s)=>{let Z=new He(U,V);return Z.castShadow=!0,Z.receiveShadow=!0,B.add(Z),Z};h(Dp([[-4.15,.02,.27,.27,.27,2],[-3.9,0,.43,.41,.44,2.2],[-3.2,-.02,.6,.52,.58,2.4],[-2.42,0,.73,.63,.68,2.7],[-1.9,.07,.8,.9,.75,2.9],[-1.32,.12,.83,1.02,.79,3.2],[0,.12,.84,1.03,.79,3.5],[2,.14,.82,1,.77,3.3],[3.5,.2,.7,.86,.62,2.8],[5,.36,.43,.56,.36,2.3],[6.6,.52,.16,.3,.16,2],[7.25,.58,.02,.07,.04,2]]),t);let u=1.13,d=[[0,2,-.95,u,.16,.035],[.84,2,-.95,u,.16,.035],[4.2,1.72,-.86,u+.19,.15,.02],[7.55,1.3,-.74,u+.4,.12,0],[7.86,.95,-.55,u+.415,.1,0],[7.96,.4,-.2,u+.42,.06,0]];h(fr(d,.022,!1),i),h(fr(d,.022,!0),n),h(Dp([[-1.15,u-.02,.5,.1,.1,2],[-.7,u,.86,.17,.12,2.6],[.5,u,.86,.17,.12,2.6],[1.25,u-.03,.55,.09,.09,2]],12,16),c);for(let U of[-1,1])h(ho(new w(U*.8,-.5,-.25),new w(U*3.55,u+.05,-.1),.075,.065,2.6),c);let f=[[0,1.42,5.55,.62,.11,-.02],[.2,1.42,5.55,.62,.11,-.02],[3.05,.92,5.95,.66,.1,-.02],[3.18,.55,6.2,.66,.07,-.02]];h(fr(f,0,!1),i),h(fr(f,0,!0),i);let m=h(fr([[0,2.25,4.95,0,.1,0],[.9,1.75,5.55,0,.1,0],[2.05,1.05,6.42,0,.09,0],[2.18,.6,6.75,0,.06,0]],0,!1,!0),l);m.position.y=.72,h(ho(new w(0,.98,3.4),new w(0,.8,5.3),.035,.05,1,6),c);let x=(U,V)=>{let B=[];for(let H=0;H<=10;H++){let te=-Math.PI/2+H/10*Math.PI;B.push(new se(U-V*.5+Math.cos(te)*V*.5,Math.sin(te)*V*.5))}let Z=new sr([new se(.001,-V*.42),new se(U*.55,-V*.42),...B,new se(U*.55,V*.42),new se(.001,V*.42)],20);return Z.rotateZ(Math.PI/2),Z},g=-1.74,p=.37;for(let U of[-1,1]){h(ho(new w(U*.62,-.62,.45),new w(U*1.72,g+.02,.45),.09,.07,2.2),c);let V=h(x(p,.24),a);V.position.set(U*1.8,g,.45);let B=h(new di(p*.5,p*.5,.25,14),r);B.rotation.z=Math.PI/2,B.position.copy(V.position)}h(ho(new w(0,-.52,-3.05),new w(0,g-.1,-3.15),.06,.05,1),r),h(x(.31,.2),a).position.set(0,g-.09,-3.15);let y=h(new di(.075,.085,.55,12,1,!0),new ot({color:4866104,roughness:.45,metalness:.9,side:wt}));y.position.set(.63,-.26,-3.05),y.rotation.set(Math.PI/2-.25,0,-.55);let _=h(new Vt(.02,.32,.2),c);_.position.set(0,1.42,1.9),_.rotation.x=-.35,h(new Vt(.02,.24,.14),c).position.set(0,-.78,1),h(ho(new w(-4.6,u+.16,-.75),new w(-4.6,u+.16,-1.15),.012,.008,1,6),r);let T=new gt;T.position.set(0,.02,-4.18),s.add(T);let R=h(new sr([0,.05,.11,.17,.22,.255,.27,.27].map((U,V)=>new se(U+1e-4,[.62,.6,.53,.42,.28,.14,.04,0][V])),24),r,T);R.rotation.x=-Math.PI/2;let C=new gt;T.add(C);let b=(()=>{let U=[];for(let B=0;B<=8;B++){let Z=.2+B/8*1.14,H=.1+.17*Math.sin(Math.pow(B/8,.75)*Math.PI)*(1-.25*B/8);U.push([Z,H,-H*.5,0,.11-.05*B/8,.95-.75*B/8])}let V=fr(U,.02);return V.rotateZ(Math.PI/2),V})();for(let U=0;U<3;U++){let V=h(b,o,C);V.rotation.z=U*Vu/3}let v=new He(new La(1.36,48),new En({map:xM(),transparent:!0,depthWrite:!1,side:wt,toneMapped:!1,opacity:.9}));v.position.z=-.12,T.add(v);let P=gM(),k=(U,V,B,Z,H)=>{let te=new va(new Yr({map:P,color:U,blending:ca,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return te.scale.setScalar(H),te.position.set(V,B,Z),s.add(te),te},F={red:k(16722458,-7.9,u+.42,-.35,.2),green:k(2293589,7.9,u+.42,-.35,.2),strobeL:k(16777215,-7.92,u+.42,-.1,.45),strobeR:k(16777215,7.92,u+.42,-.1,.45),beacon:k(16724e3,0,2.95,6.6,.4)};return s.userData={prop:T,blades:C,disc:v,lights:F,gearHeight:-(g-p)+0,door:new w(-1.05,-.15,2.75)},s}var uo=3400,os=25.96,pr=15.88,Ru=1.65,Qa=3.3,Cu=19800,Iu=26500,Pu=13400,sc=.28,rc=5,oc=.262,Lu=-.21,yM=5,Du=.4,Np=.033,Fp=.041,Uu=.04,Nu=-1.4,vM=-14,ec=1.12,MM=-.4,SM=-.19,bM=.095,EM=-.13,wM=.068,TM=-.012,AM=-.06,RM=.115,CM=.674,Fu=.42,IM=.33,PM=.42,Op=503e3,LM=.85,DM=10500,UM=5.73,NM=199,FM=[{r:new w(-1.8,-2.11,.45),k:125e3,c:13e3,limit:92e3,main:!0},{r:new w(1.8,-2.11,.45),k:125e3,c:13e3,limit:92e3,main:!0},{r:new w(0,-2.14,-3.15),k:42e3,c:5200,limit:58e3,steer:!0},{r:new w(0,.38,7.15),k:16e4,c:9e3,limit:11e4,skid:!0}],OM=[new w(-7.95,1.5,-.3),new w(7.95,1.5,-.3),new w(0,-1.33,-4.2),new w(0,-.8,.4)],ac=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},tn=Zn.clamp,as={cl:0,st:0};function BM(s){if(s>oc){let e=s-oc,t=(sc+rc*oc)*(.7+.3*Math.exp(-e/.2)),n=ac(.45,.8,s);as.cl=t*(1-n)+1.1*Math.sin(2*s)*n,as.st=Math.min(1,e/.08)}else if(s<Lu){let e=Lu-s,t=(sc+rc*Lu)*(.7+.3*Math.exp(-e/.2)),n=ac(.45,.8,-s);as.cl=t*(1-n)+1.1*Math.sin(2*s)*n,as.st=Math.min(1,e/.08)}else as.cl=sc+rc*s,as.st=0;return as}var kM=(s,e)=>s>ln.x0-5&&s<ln.x1+5&&Math.abs(e-ln.z)<ln.halfW+1||s>-152&&s<-134&&e>-108&&e<0||s>-217&&s<-63&&e>-170&&e<-104,HM=new w,tc=new w,Bp=new Ge,nc=new w,fo=new w,zM=new w,po=new w,Ou=new Ge,mr=new w,Bu=new w,ku=new w,mo=new w,Kn=new w,cs=new w,kp=new w,gr=new w,Hu=new w,Hp=new w,zu=new w,ic=new w(0,1,0),VM=new w(1,0,0),GM=new w,cc=class{constructor(e,t){this.terrain=e,this.model=t||_M(),this.gearH=this.model.userData.gearHeight,this.pos=new w,this.vel=new w,this.quat=new Ge,this.omega=new w,this.throttle=0,this.power=0,this.trim=0,this.ctl={pitch:0,roll:0,yaw:0,brake:0},this.sx=0,this.sy=0,this.sr=0,this.onGround=!1,this.crashed=!1,this.autopilot=null,this.ias=0,this.alpha=0,this.beta=0,this.gLoad=1,this.rpm=.4,this.propAngle=0,this.time=0,this.stall=0,this.wow=0,this.tailStrike=-9}trimFor(e,t){let n=co(t)/1.225,i=.5*1.225*e*e*os,r=uo*xn,o=(r/i-sc-Du*Uu/ec)/(rc+Du*Nu/ec),a=-(Uu+Nu*o)/ec,c=r/i,l=i*(Np+Fp*c*c),h=e/Math.sqrt(n),u=0,d=1;for(let f=0;f<24;f++){let m=(u+d)/2;this.thrust(m,h,n)<l?u=m:d=m}return{alpha:o,de:a,throttle:(u+d)/2,tas:h}}thrust(e,t,n){if(e<.003)return 0;let i=Op*e*Math.min(1,1.25*Math.pow(n,.7)),r=DM*e*Math.pow(n,.33),o=LM*i/Math.max(t,3);return Math.pow(Math.pow(r,-3)+Math.pow(o,-3),-1/3)}spawnAir(e,t,n,i,r){let o=this.trimFor(r,t),a=new Ge().setFromAxisAngle(ic,i);this.quat.copy(a).multiply(new Ge().setFromAxisAngle(VM,o.alpha)),en(t,tc),this.vel.set(0,0,-o.tas).applyQuaternion(a).add(tc),this.pos.set(e,t,n),this.omega.set(0,0,0),this.trim=o.de,this.throttle=this.power=o.throttle,this.sx=this.sy=this.sr=0,this.ctl.pitch=this.ctl.roll=this.ctl.yaw=this.ctl.brake=0,this.onGround=!1,this.crashed=!1,this.rpm=.4+.6*o.throttle,this.autopilot={alt:t,bank:0};for(let c=0;c<4800;c++)this.step(1/240);this.autopilot=null,this.pos.set(e,t,n),this.ctl.pitch=this.ctl.roll=this.ctl.yaw=0,this.sx=this.sy=this.sr=0,this.sync()}spawnRunway(e,t,n){this.quat.setFromAxisAngle(ic,n),this.pos.set(e,this.terrain.heightAt(e,t)+this.gearH-.115,t),this.vel.set(0,0,0),this.omega.set(0,0,0),this.onGround=!0,this.crashed=!1,this.autopilot=null,this.throttle=this.power=0,this.trim=.05,this.sx=this.sy=this.sr=0,this.rpm=.4,this.sync()}get forward(){return nc.set(0,0,-1).applyQuaternion(this.quat)}heading(){let e=this.forward;return Math.atan2(e.x,-e.z)}pitch(){return Math.asin(tn(this.forward.y,-1,1))}bankSigned(){return fo.set(1,0,0).applyQuaternion(this.quat),Math.asin(tn(fo.y,-1,1))}agl(){return this.pos.y-this.gearH-Math.max(0,this.terrain.heightAt(this.pos.x,this.pos.z))}update(e){if(this.crashed)return;let t=Math.max(1,Math.min(16,Math.ceil(e/(1/240)))),n=e/t;for(let i=0;i<t&&!this.crashed;i++)this.step(n);this.time+=e,this.sync(e)}step(e){let t=this.ctl,n=this.omega;this.autopilot&&this.runAutopilot(e);let i=Math.min(1,e*9);this.sx+=(tn(t.roll,-1,1)-this.sx)*i,this.sy+=(tn(t.pitch,-1,1)-this.sy)*i,this.sr+=(tn(t.yaw,-1,1)-this.sr)*i,this.power+=(this.throttle-this.power)*Math.min(1,e/1.5);let r=he=>he*(.5+.5*he*he),o=this.wow>.2?tn(this.sr+this.sx*(1-ac(18,32,this.ias)),-1,1):this.sr,a=tn(r(this.sy)*Fu+this.trim,-Fu,Fu),c=r(this.sx)*IM,l=o*PM,h=co(this.pos.y),u=h/1.225;en(this.pos.y,tc);let d=HM.copy(this.vel).sub(tc),f=Math.max(.5,d.length()),m=Math.max(f,9);Ou.copy(this.quat).invert(),po.copy(d).applyQuaternion(Ou);let x=Math.atan2(-po.y,Math.max(.5,-po.z)),g=Math.asin(tn(po.x/f,-1,1));this.alpha=x,this.beta=g,this.ias=f*Math.sqrt(u);let p=.5*h*f*f,M=-n.z,y=n.x,_=-n.y;fo.set(1,0,0).applyQuaternion(this.quat),nc.set(0,0,-1).applyQuaternion(this.quat),zM.set(0,1,0).applyQuaternion(this.quat),zu.copy(d).multiplyScalar(1/f),Hp.crossVectors(fo,zu).normalize();let L=this.thrust(this.power,Math.max(0,-po.z),u),T=p+.45*L/UM,R=Op*this.power*Math.min(1,1.25*Math.pow(u,.7))/NM,C=this.pos.y-this.terrain.heightAt(this.pos.x,this.pos.z),b=Math.max(.05,(C+.6)/pr),v=Math.min(1,16*b*(16*b)/(1+16*b*(16*b))),P=0,k=0,F=0,U=0,V=0;for(let he=-1;he<=1;he+=2){let Ue=Math.max(3,f-he*_*Qa),Ne=x+he*M*Qa/m+he*g*RM,We=BM(Ne),J=We.cl-he*CM*c*(1-.55*We.st),ne=.5*h*Ue*Ue*os*.5,I=ne*J,Ae=Math.sin(Ne),ie=ne*(Fp*v*J*J+We.st*1.9*Ae*Ae+.012*Math.abs(c));P+=I,k+=ie,F-=he*Qa*I,U+=he*Qa*ie,We.st>V&&(V=We.st)}this.stall=V,this.stallWarn=x>oc-.055&&this.wow<.05;let B=p*os,Z=y*Ru/(2*m),H=_*pr/(2*m);P+=B*(yM*Z)-T*os*Du*a,k+=B*(Np+.9*g*g);let te=B*MM*g+T*os*SM*l,le=tn(x,-.9,.9),xe=B*Ru*(Uu+Nu*le+vM*Z)+T*os*Ru*ec*a;F+=B*pr*(TM*l+AM*M*pr/(2*m))-.35*R+325,U+=B*pr*(bM*g+EM*H)+T*os*pr*wM*l-.05*L*(1+6*Math.max(0,x))+240,Bu.set(0,-xn*uo,0).addScaledVector(Hp,P).addScaledVector(zu,-k).addScaledVector(fo,te).addScaledVector(nc,L),this.gLoad=P/(uo*xn),mo.set(xe,-U,-F),ku.set(0,0,0);let de=0,Ee=!1;if(C<14){kp.copy(n).applyQuaternion(this.quat),gr.copy(nc),gr.y=0,gr.lengthSq()<1e-6&&gr.set(0,0,-1),gr.normalize();for(let he of FM){Kn.copy(he.r).applyQuaternion(this.quat);let Ue=this.pos.x+Kn.x,Ne=this.pos.z+Kn.z,We=this.terrain.heightAt(Ue,Ne),J=We-(this.pos.y+Kn.y);if(J<=0)continue;if(We<.2){this.crash("water");return}cs.crossVectors(kp,Kn).add(this.vel);let ne=he.k*J-he.c*cs.y;if(ne<0&&(ne=0),ne>he.limit){this.crash("gear");return}de+=ne,Ee=!0,he.skid&&(this.tailStrike=this.time),mr.copy(gr),he.steer&&mr.applyAxisAngle(ic,-o*.5*(1-.75*ac(8,30,f))),Hu.crossVectors(mr,ic);let I=kM(Ue,Ne),Ae=cs.dot(mr),ie=cs.dot(Hu),Me=-ne*(he.skid?.35:I?.8:.55)*Math.tanh(ie/.6),ce=-ne*(he.skid?.35:(I?.02:.075)+(he.main?.5*t.brake:0))*Math.tanh(Ae/.4);cs.set(0,ne,0).addScaledVector(Hu,Me).addScaledVector(mr,ce),Bu.add(cs),ku.add(GM.crossVectors(Kn,cs))}for(let he of OM){Kn.copy(he).applyQuaternion(this.quat).add(this.pos);let Ue=this.terrain.heightAt(Kn.x,Kn.z);if(Kn.y<Math.max(Ue,0)-.02){this.crash(Ue<.2?"water":"ground");return}}}this.wow=de/(uo*xn),this.onGround=Ee,mo.add(ku.applyQuaternion(Ou));let X=(mo.x-(Pu-Iu)*n.y*n.z)/Cu,$=(mo.y-(Cu-Pu)*n.z*n.x)/Iu,me=(mo.z-(Iu-Cu)*n.x*n.y)/Pu;n.x+=X*e,n.y+=$*e,n.z+=me*e,this.vel.addScaledVector(Bu,e/uo),this.pos.addScaledVector(this.vel,e);let oe=n.length();oe>1e-7&&(Bp.setFromAxisAngle(mr.copy(n).multiplyScalar(1/oe),oe*e),this.quat.multiply(Bp).normalize())}runAutopilot(e){let t=this.autopilot,n=this.ctl,i=-this.bankSigned(),r=-this.omega.z,o=this.omega.x;n.roll=tn((t.bank-i)*1.6-r*1.3,-.7,.7);let a=tn((t.alt-this.pos.y)*.1,-6,5),c=a-this.vel.y;this.trim=tn(this.trim+c*.0025*e,-.25,.3),n.pitch=tn(c*.03-o*1.6,-.5,.5),n.yaw=tn(this.beta*1.5,-.3,.3),t.throttle!=null&&(this.throttle=t.throttle)}crash(e){this.crashed=e,this.vel.set(0,0,0)}sync(e=0){let t=this.model;t.position.copy(this.pos),t.quaternion.copy(this.quat);let n=t.userData;if(!n.blades)return;this.rpm+=(.4+.6*this.power-this.rpm)*Math.min(1,e*2.5),this.propAngle+=e*this.rpm*190,n.blades.rotation.z=this.propAngle,n.disc.material.opacity=tn((this.rpm-.2)*1.4,0,.7),n.blades.visible=this.rpm<.55;let i=this.time,r=n.lights,o=i%1.2<.06||(i+.18)%1.2<.06?1:0;r.strobeL.material.opacity=r.strobeR.material.opacity=o,r.beacon.material.opacity=i%1<.12?1:0}};var WM=Math.PI/180,_n=Zn.clamp,nn=Zn.lerp,At=(s,e,t)=>{let n=_n((t-s)/(e-s),0,1);return n*n*(3-2*n)},ls=s=>"mixamorig"+s,zp={arch:{Spine:[["L",-6]],Spine1:[["L",-8]],Spine2:[["L",-8]],Neck:[["L",-14]],Head:[["L",-20]],LeftArm:[["U",24],["F",12]],RightArm:[["U",-24],["F",-12]],LeftForeArm:[["F",82]],RightForeArm:[["F",-82]],LeftHand:[["F",8]],RightHand:[["F",-8]],LeftUpLeg:[["L",16],["F",20]],RightUpLeg:[["L",16],["F",-20]],LeftLeg:[["L",48]],RightLeg:[["L",48]],LeftFoot:[["L",22]],RightFoot:[["L",22]]},track:{Spine:[["L",2]],Spine1:[["L",3]],Spine2:[["L",3]],Neck:[["L",-16]],Head:[["L",-26]],LeftArm:[["F",-66],["U",8]],RightArm:[["F",66],["U",-8]],LeftForeArm:[["F",-4]],RightForeArm:[["F",4]],LeftUpLeg:[["L",6],["F",7]],RightUpLeg:[["L",6],["F",-7]],LeftLeg:[["L",4]],RightLeg:[["L",4]],LeftFoot:[["L",38]],RightFoot:[["L",38]]},pull:{Spine:[["L",-6]],Spine1:[["L",-8]],Spine2:[["L",-8]],Neck:[["L",-14]],Head:[["L",-20]],LeftArm:[["U",10],["F",40]],RightArm:[["F",72],["U",-30]],LeftForeArm:[["F",95]],RightForeArm:[["U",-55]],LeftUpLeg:[["L",16],["F",20]],RightUpLeg:[["L",16],["F",-20]],LeftLeg:[["L",48]],RightLeg:[["L",48]],LeftFoot:[["L",22]],RightFoot:[["L",22]]},canopy:{Spine:[["L",4]],Neck:[["L",4]],Head:[["L",6]],LeftArm:[["F",52],["U",-18]],RightArm:[["F",-52],["U",18]],LeftForeArm:[["F",34]],RightForeArm:[["F",-34]],LeftUpLeg:[["L",-30],["F",6]],RightUpLeg:[["L",-30],["F",-6]],LeftLeg:[["L",42]],RightLeg:[["L",42]]},flare:{Spine:[["L",2]],Neck:[["L",-6]],Head:[["L",-8]],LeftArm:[["F",-58],["U",-14]],RightArm:[["F",58],["U",14]],LeftForeArm:[["F",-10]],RightForeArm:[["F",10]],LeftUpLeg:[["L",-14],["F",5]],RightUpLeg:[["L",-14],["F",-5]],LeftLeg:[["L",22]],RightLeg:[["L",22]]},stand:{LeftArm:[["F",-72]],RightArm:[["F",72]],LeftForeArm:[["F",-8]],RightForeArm:[["F",8]]}},Xu=class{constructor(e){this.rig=new gt,this.pivot=new gt,this.rig.add(this.pivot);let t=this.model=e.scene;this.pivot.add(t),t.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1,d.material&&(d.material.envMapIntensity=1,d.material.metalness=Math.min(d.material.metalness,.3)))}),t.updateMatrixWorld(!0),this.bones={},t.traverse(d=>{d.isBone&&(this.bones[d.name]=d)});let n=d=>this.bones[ls(d)].getWorldPosition(new w),i=n("LeftArm").sub(n("RightArm")).normalize(),r=n("Head").sub(n("Hips")).normalize();i.addScaledVector(r,-i.dot(r)).normalize();let o=new w().crossVectors(i,r).normalize();this.axes={L:i,U:r,F:o},this.hipHeight=n("Hips").y,this.rest={};for(let d in this.bones){let f=this.bones[d];this.rest[d]={q:f.quaternion.clone(),qw:f.getWorldQuaternion(new Ge)}}this.restHips=this.bones[ls("Hips")].position.clone();let a=new Fe().makeBasis(i,r,o),c=new Fe().makeBasis(new w(-1,0,0),new w(0,1,0),new w(0,0,-1)),l=new Ge().setFromRotationMatrix(c.multiply(a.clone().invert())),h=new gt;h.quaternion.copy(l),this.pivot.remove(t),h.add(t),this.pivot.add(h);let u=n("Hips").applyQuaternion(l);h.position.set(-u.x,-u.y,-u.z),this.cUp=new Ge,this.cProne=new Ge().setFromAxisAngle(new w(1,0,0),-Math.PI/2),this.poseCache={};for(let d in zp)this.poseCache[d]=this._compile(zp[d]);this.mixer=new Ha(t),this.clips={};for(let d of e.animations)this.clips[d.name]=this.mixer.clipAction(d);this.animating=!1,this._buildGear(),this.setPose({arch:1},0)}_compile(e){let t={};for(let n in e){let i=this.rest[ls(n)];if(!i)continue;let r=new Ge;for(let[a,c]of e[n])r.premultiply(new Ge().setFromAxisAngle(this.axes[a],c*WM));let o=i.qw.clone().invert().multiply(r).multiply(i.qw);t[ls(n)]=i.q.clone().multiply(o)}return t}setPose(e,t){if(this.animating)return;let n=new Ge;for(let i in this.bones){let r=this.bones[i],o=this.rest[i],a=null,c=0;for(let l in e){let h=e[l];if(h<=1e-4)continue;let u=this.poseCache[l][i]||o.q;a?(c+=h,a.slerp(u,h/c)):(a=n.copy(u),c=h)}r.quaternion.copy(a||o.q)}this.bones[ls("Hips")].position.copy(this.restHips),this.pivot.quaternion.copy(this.cProne).slerp(this.cUp,t)}playClip(e,t=.25){this.animating||(this.animating=!0,this.pivot.quaternion.copy(this.cUp));for(let n in this.clips){let i=this.clips[n];n===e?i.reset().fadeIn(t).play():i.fadeOut(t)}}stopClips(){this.animating=!1,this.mixer.stopAllAction()}_buildGear(){let e=new ot({color:1382171,roughness:.78,metalness:.05}),t=new ot({color:13127706,roughness:.7}),n=this.bones[ls("Spine2")],i=new gt,r=new He(new Pa(.115,.34,6,14),e);r.scale.set(1.45,1,.62),r.castShadow=!0;let o=new He(new Vt(.2,.09,.02),t);o.position.set(0,-.12,-.078),i.add(r,o);for(let g of[-1,1]){let p=new He(new Vt(.045,.52,.02),e);p.position.set(g*.115,.02,.27),p.castShadow=!0,i.add(p)}let a=new He(new Vt(.3,.04,.02),e);a.position.set(0,.06,.275),i.add(a);let l=this.rest[ls("Spine2")].qw.clone().invert(),h=g=>g.clone().applyQuaternion(l),{L:u,U:d,F:f}=this.axes,m=new Fe().makeBasis(h(u),h(d),h(f));i.quaternion.setFromRotationMatrix(m);let x=1/n.getWorldScale(new w).x;i.scale.setScalar(x),i.position.copy(h(f).multiplyScalar(-.165*x)).add(h(d).multiplyScalar(.02*x)),n.add(i),this.gear=i}},Si=9,go=4,lc=12,XM=7.4,qM=3,_o=5.6,YM=[1058381,1058381,15264234,14242590,14242590,14242590,15264234,1058381,1058381];function ZM(){let e=96*Si,t=512,n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");for(let o=0;o<Si;o++)i.fillStyle="#"+YM[o].toString(16).padStart(6,"0"),i.fillRect(o*96,0,96,t);i.strokeStyle="rgba(0,0,0,0.085)",i.lineWidth=1;for(let o=0;o<=e;o+=6)i.beginPath(),i.moveTo(o+.5,0),i.lineTo(o+.5,t),i.stroke();for(let o=0;o<=t;o+=6)i.beginPath(),i.moveTo(0,o+.5),i.lineTo(e,o+.5),i.stroke();for(let o=0;o<=Si;o++){let a=i.createLinearGradient(o*96-14,0,o*96+14,0);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.5,"rgba(0,0,0,0.28)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(o*96-14,0,28,t),i.fillStyle="rgba(255,255,255,0.20)",i.fillRect(o*96-1.5,0,3,t)}i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,t-10,e,10),i.fillRect(0,0,e,6);let r=new cn(n);return r.colorSpace=nt,r.anisotropy=8,r.flipY=!1,r}var qu=class{constructor(){this.group=new gt,this.inflation=0,this.brakeL=0,this.brakeR=0,this.time=0;let e=Si*go+1,t=lc+1;this.base={top:[],bot:[]},this.meta=[];let n=new De,i=new Float32Array(e*t*2*3),r=new Float32Array(e*t*2*2),o=new Float32Array(e*t*2*3),a=[];for(let u=0;u<2;u++)for(let d=0;d<e;d++)for(let f=0;f<t;f++){let m=(u*e+d)*t+f,x=Math.min(Si-1,Math.floor(d/go));if(n.setRGB(1,1,1),u===1&&n.multiplyScalar(.88),o.set([n.r,n.g,n.b],m*3),r.set([d/(e-1),f/lc],m*2),d<e-1&&f<t-1){let g=m,p=m+1,M=m+t,y=M+1;u===0?a.push(g,p,M,p,y,M):a.push(g,M,p,p,M,y)}}let c=this.geo=new rt;c.setAttribute("position",new at(i,3).setUsage(On)),c.setAttribute("uv",new at(r,2)),c.setAttribute("color",new at(o,3)),c.setIndex(a);let l=this.mat=new ot({map:ZM(),vertexColors:!0,roughness:.5,metalness:0,side:wt});l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
  #if NUM_DIR_LIGHTS > 0
    reflectedLight.directDiffuse += diffuseColor.rgb * directionalLights[ 0 ].color * 0.20 * max( dot( - normal, directionalLights[ 0 ].direction ), 0.0 );
  #endif`)},this.mesh=new He(c,l),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.lineGeo=new rt,this.linePos=new Float32Array(400*3),this.lineGeo.setAttribute("position",new at(this.linePos,3).setUsage(On)),this.lines=new Oi(this.lineGeo,new ui({color:14210764,transparent:!0,opacity:.85})),this.lines.frustumCulled=!1,this.group.add(this.lines);let h=new ot({color:1058381,roughness:.6,side:wt});this.slider=new He(new Xn(.62,.5),h),this.slider.rotation.x=-Math.PI/2,this.slider.castShadow=!0,this.group.add(this.slider),this.pilot=new He(new rr(.36,14,8,0,Math.PI*2,0,Math.PI*.55),new ot({color:14242590,roughness:.6,side:wt})),this.pilot.castShadow=!0,this.group.add(this.pilot),this.stabs=[];for(let u of[-1,1]){let d=new rt;d.setAttribute("position",new at(new Float32Array(9),3).setUsage(On));let f=new He(d,h);f.frustumCulled=!1,f.castShadow=!0,this.group.add(f),this.stabs.push(f)}this.risers=[new w(-.21,.55,.02),new w(.21,.55,.02)],this.hands=[new w(-.45,.75,-.15),new w(.45,.75,-.15)],this.update(0,1)}_pt(e,t,n,i,r){let o=this.inflation,a=nn(.1,1,At(.05,.85,o)),c=e*(XM/2/_o)*a,l=qM*nn(.55,1,At(0,.6,o))*(1-.1*e*e),h=.135*At(.15,1,o),u=t,d=5*h*(.2969*Math.sqrt(u)-.126*u-.3516*u*u+.2843*u*u*u-.1036*u*u*u*u),f=1+.3*Math.sin(i*Math.PI),m=n>0?d*1.25*f:-d*.35*(.6+.4*f);n<0&&u<.06&&(m=d*.5);let x=(e<0?this.brakeL:this.brakeR)*(.55+.45*Math.abs(e))+Math.min(this.brakeL,this.brakeR)*.25,g=Math.max(0,(u-.62)/.38);m-=x*g*g*.2;let p=(1-At(.5,1,o))*.16,M=Math.sin(this.time*31+e*9+t*7)*Math.cos(this.time*23+e*5.3)*p,y=_o+(m+M)*l;return r.set(Math.sin(c)*y,Math.cos(c)*y-_o+0,(u-.3)*l+.05),r.y+=nn(-1.6,0,At(0,.5,o)),r}update(e){this.time+=e;let t=Si*go+1,n=lc+1,i=new w,r=this.geo.attributes.position;for(let m=0;m<2;m++)for(let x=0;x<t;x++){let g=x/(t-1)*2-1,p=x%go/go;for(let M=0;M<n;M++)this._pt(g,M/lc,m===0?1:-1,p,i),r.setXYZ((m*t+x)*n+M,i.x,i.y,i.z)}r.needsUpdate=!0,this.geo.computeVertexNormals();let o=this.linePos,a=0,c=(m,x)=>{o[a++]=m.x,o[a++]=m.y,o[a++]=m.z,o[a++]=x.x,o[a++]=x.y,o[a++]=x.z},l=new w,h=new w,u=this.attachY;for(let m=0;m<=Si;m+=m===0||m===Si-1?1:2){let x=m/Si*2-1,g=x<0?0:1;for(let[p,M]of[[.08,-.07],[.3,-.03],[.55,.05],[.8,.09]])this._pt(x,p,-1,0,l),h.copy(this.risers[g]),h.y=u,h.z+=M,h.x+=x*.05,c(l,h)}for(let m=0;m<2;m++){let x=this.hands[m].clone();x.y=u-.25-.55*(m===0?this.brakeL:this.brakeR);for(let g of[.25,.5,.75,.97])this._pt((m===0?-1:1)*g,1,-1,0,l),h.set((m===0?-1:1)*.9*g,u+2.2,.75),c(l,h),c(h,x);for(let g of[-.07,.07])h.copy(this.risers[m]),h.y=u,h.z+=g,l.copy(this.risers[m]),l.y=u-.52,c(h,l)}for(;a<o.length;a++)o[a]=0;this.lineGeo.attributes.position.needsUpdate=!0;for(let m=0;m<2;m++){let x=m===0?-1:1,g=this.stabs[m].geometry.attributes.position;this._pt(x,.15,-1,0,l),g.setXYZ(0,l.x,l.y,l.z),this._pt(x,.85,-1,0,l),g.setXYZ(1,l.x,l.y,l.z),this._pt(x,.5,-1,0,l),g.setXYZ(2,l.x*.985,l.y-.55*this.inflation,l.z),g.needsUpdate=!0,this.stabs[m].geometry.computeVertexNormals()}let d=At(.35,1,this.inflation);this.slider.position.set(0,nn(-.9,u+.12,d),.02),this.slider.scale.setScalar(nn(.6,1,d)),this._pt(0,.45,1,.5,l);let f=nn(2.4,1.3,At(.3,1,this.inflation));this.pilot.position.set(l.x,l.y+.25+(1-At(.2,.8,this.inflation))*1.2,l.z+f),this.pilot.rotation.x=nn(0,1.25,At(.3,1,this.inflation)),this.pilot.scale.setScalar(nn(1,.55,At(.5,1,this.inflation)))}get attachY(){return-_o+.5}},Gu=_o,vi=new w,hc=new w,uc=new w,Mi=new w,dc=new Fe,KM=new Ge,xr=new w(0,1,0),$M=new w,Wu=95,JM=17.65,xo=[0,.5,.75,1],jM=[.55,.82,1.02,1.25],QM=[.21,.31,.42,.62],Vp=(s,e)=>{for(let t=1;t<xo.length;t++)if(e<=xo[t]){let n=(e-xo[t-1])/(xo[t]-xo[t-1]);return s[t-1]+(s[t]-s[t-1])*n}return s[s.length-1]},fc=class{constructor(e,t,n){this.terrain=t,this.body=new Xu(e),this.canopy=new qu,this.group=new gt,this.group.add(this.body.rig,this.canopy.group),this.group.visible=!1,n.add(this.group),this.pos=new w,this.vel=new w,this.heading=0,this.state="none",this.ctl={x:0,y:0,pull:!1,flare:0},this.stats={},this.reset()}reset(){this.state="none",this.group.visible=!1,this.t=0,this.track=0,this.turn=0,this.deployT=0,this.upright=0,this.canopy.inflation=0,this.canopy.group.visible=!1,this.brake=[0,0],this.fwd=0,this.sink=0,this.bank=0,this.swing=0,this.swingV=0,this.yawRate=0,this.stats={exitAlt:0,freefall:0,maxSpeed:0,deployAlt:0,canopyTime:0,landing:null,dist:0,vLand:0,hLand:0},this.cv=this.cv||new w,this.cv.set(0,0,0),this.dive=0,this.stallT=0,this.pulling=!1,this.shake=0,this.gForce=1,this.landedT=0,this.runSpeed=0,this.body.stopClips(),this.pullT=0,this.fallen=!1,this.stood=!1,this.headDir=null}exit(e,t,n){this.reset(),this.pos.copy(e),this.vel.copy(t),this.heading=n,this.state="freefall",this.group.visible=!0,this.stats.exitAlt=e.y-Math.max(0,this.terrain.heightAt(e.x,e.z)),this.sync(0)}agl(){return this.pos.y-.95-Math.max(0,this.terrain.heightAt(this.pos.x,this.pos.z))}hvec(e){return e.set(Math.sin(this.heading),0,-Math.cos(this.heading))}airspeed(){return en(this.pos.y,Mi),vi.copy(this.vel).sub(Mi).length()}deploy(){this.state==="freefall"&&(this.state="deploy",this.deployT=0,this.stats.deployAlt=this.agl(),this.stats.freefall=this.t,this.canopy.group.visible=!0,this.canopy.inflation=0)}update(e){if(this.state==="none")return;let t=Math.max(1,Math.min(6,Math.ceil(e/(1/90)))),n=e/t;for(let i=0;i<t;i++)this.step(n);this.sync(e)}step(e){let t=this.ctl,n=this.stats;this.t+=e;let i=co(this.pos.y);en(this.pos.y,Mi);let r=vi.copy(this.vel).sub(Mi),o=Math.max(.01,r.length());if(this.state==="freefall"||this.state==="deploy"){let c=_n(t.y,-1,1);this.track+=(c-this.track)*Math.min(1,e*2.2),this.turn+=(_n(t.x,-1,1)-this.turn)*Math.min(1,e*3.5);let l=Math.max(0,this.track),h=Math.max(0,-this.track),u=nn(.72,.52,l)+.16*h;this.heading+=this.turn*1.9*e*(this.state==="freefall"?1:.3);let d=this.hvec(hc),f=uc.set(0,-xn,0),m=0;this.state==="deploy"&&(this.deployT+=e,m=At(1.1,4.8,this.deployT),m=m*m*(3-2*m)*.55+m*.45,this.canopy.inflation=Math.max(.02,m),this.upright=At(.7,2,this.deployT),u+=.9*At(.2,1.1,this.deployT)+30*Math.pow(m,2.2));let x=.5*i*u*o*o/Wu;this.state==="deploy"&&(x=Math.min(x,34+6*m)),f.addScaledVector(r,-x/o);let g=.5*i*(.5*l-.07*h)*o*o/Wu*(this.state==="freefall"?1:1-m),p=new w().copy(d).addScaledVector(r,-d.dot(r)/(o*o)).normalize();f.addScaledVector(p,g),this.gForce=f.clone().add(new w(0,xn,0)).length()/xn,this.vel.addScaledVector(f,e),this.pos.addScaledVector(this.vel,e),n.maxSpeed=Math.max(n.maxSpeed,o),this.state==="freefall"?(t.pull&&(this.pulling=!0),this.pulling&&(this.pullT+=e,this.pullT>.4&&this.deploy())):this.deployT>5&&(this.state="canopy",this.canopy.inflation=1,this.upright=1,this.bank=0,this.canopyT=0,this.stallT=0,this.dive=0,this.cv.copy(this.vel).sub(Mi).addScaledVector(d,2.5)),this.shake=this.state==="deploy"?.5*(1-m)+.5*At(1.1,1.9,this.deployT)*(1-At(3.6,5,this.deployT)):_n(o/70,0,1)*.35}else if(this.state==="canopy"){this.canopyT+=e,n.canopyTime=this.canopyT;let c=_n(Math.max(t.flare,-t.y),0,1),l=_n(Math.max(c,-t.x),0,1),h=_n(Math.max(c,t.x),0,1),u=Math.min(1,e*4.5);this.brake[0]+=(l-this.brake[0])*u,this.brake[1]+=(h-this.brake[1])*u,this.dive+=(_n(t.y,0,1)-this.dive)*Math.min(1,e*3);let d=(this.brake[0]+this.brake[1])/2,f=Math.min(this.brake[0],this.brake[1]),m=this.brake[1]-this.brake[0],x=this.cv,g=Math.max(.5,x.length()),p=Vp(jM,d)-.13*this.dive,M=Vp(QM,d)-.015*this.dive,y=f>.9&&g*Math.sqrt(i/1.225)<9;this.stallT=_n(this.stallT+(y?e:-1.5*e),0,2.5);let _=At(1,1.8,this.stallT);p=nn(p,.55,_),M=nn(M,1,_);let L=_n(m*1.15,-1.15,1.15)*(1-.3*f);this.bank+=(L-this.bank)*Math.min(1,e/.75);let T=Math.hypot(x.x,x.z),R=this.heading;T>1.5&&(this.heading=Math.atan2(x.x,-x.z));let C=vi.copy(x).multiplyScalar(1/g),b=hc.set(Math.cos(this.heading),0,Math.sin(this.heading)),v=uc.crossVectors(b,C).normalize(),P=.5*i*g*g*JM/Wu,k=Math.cos(this.bank),F=Math.sin(this.bank),U=(v.x*k+b.x*F)*P*p-C.x*P*M,V=(v.y*k+b.y*F)*P*p-C.y*P*M-xn,B=(v.z*k+b.z*F)*P*p-C.z*P*M,Z=U*C.x+(V+xn)*C.y+B*C.z;x.x+=U*e,x.y+=V*e,x.z+=B*e,this.vel.copy(x).add(Mi),this.pos.addScaledVector(this.vel,e);let H=this.heading-R;H>Math.PI?H-=2*Math.PI:H<-Math.PI&&(H+=2*Math.PI),this.yawRate+=(H/e-this.yawRate)*Math.min(1,e*6);let te=_n(-Z*.045+.08*this.dive-.03,-.55,.3);this.swingV+=((te-this.swing)*9-this.swingV*2.2)*e,this.swing+=this.swingV*e,this.fwd=T,this.sink=-x.y,this.stalled=_,this.gForce=Math.hypot(U,V+xn,B)/xn,this.shake=.03+.08*Math.abs(m)+.25*_}else if(this.state==="landed"){if(this.landedT+=e,this.runSpeed>.1){let c=this.hvec(hc);this.runSpeed=Math.max(0,this.runSpeed-4.2*e),this.pos.addScaledVector(c,this.runSpeed*e)}this.pos.y=Math.max(0,this.terrain.heightAt(this.pos.x,this.pos.z))+.98,this.canopy.inflation=Math.max(.12,this.canopy.inflation-e*.9),this.shake=0;return}let a=Math.max(0,this.terrain.heightAt(this.pos.x,this.pos.z));this.pos.y-.95<=a&&this.land(a)}land(e){let t=this.stats,n=this.state==="canopy";en(0,Mi);let i=-this.vel.y,r=Math.hypot(this.vel.x,this.vel.z);t.vLand=i,t.hLand=r,t.dist=Math.hypot(this.pos.x-hn.x,this.pos.z-hn.z);let o=this.terrain.heightAt(this.pos.x,this.pos.z)<.2;this.terrain.normalAt(this.pos.x,this.pos.z,vi);let a=vi.y<.9,c;n?i>7.5||r>17?c="injured":o?c="water":i>3.6||r>9.5||a?c="tumble":i>2||r>6.5?c="slide":c="standup":c=this.state==="deploy"&&i<9?"hard":"fatal",t.landing=c,t.water=o,this.state="landed",this.landedT=0,this.pos.y=e+.98,this.upright=1,this.runSpeed=c==="standup"||c==="slide"?Math.min(r,6):0,this.vel.set(0,0,0),this.impact=_n(i/8+r/25,.15,1),this.shake=0,c==="standup"||c==="slide"?this.body.playClip(this.runSpeed>2.2?"Run":"Walk",.12):this.fallen=!0}sync(e){let t=this.body,n=t.rig,i=this.canopy.group;this.group.position.copy(this.pos),n.position.set(0,0,0);let r=this.hvec(hc);if(this.state==="freefall"||this.state==="deploy"){en(this.pos.y,Mi);let o=vi.copy(this.vel).sub(Mi),a=Math.max(.01,o.length());o.multiplyScalar(1/a);let c=uc.copy(r).addScaledVector(xr,.75);c.addScaledVector(o,-c.dot(o)),c.lengthSq()<1e-4&&c.copy(xr).addScaledVector(o,-xr.dot(o)),c.normalize(),this.headDir||(this.headDir=c.clone()),this.headDir.lerp(c,Math.min(1,e*4+(e===0?1:0))).normalize();let l=this.headDir,h=o,u=l.clone().negate(),d=h.clone().negate(),f=new w().crossVectors(d,u).normalize();u.crossVectors(f,d).normalize(),dc.makeBasis(f,d,u);let m=KM.setFromRotationMatrix(dc).clone(),x=new Ge().setFromEuler(new Dt(-.42*Math.max(0,this.track)+.16*Math.max(0,-this.track),0,-.45*this.turn,"YXZ"));m.multiply(x);let g=new Ge().setFromAxisAngle(xr,-this.heading);if(n.quaternion.copy(m),this.upright>0){let p=g.clone(),M=m.clone().multiply(new Ge().setFromAxisAngle(new w(1,0,0),-Math.PI/2));n.quaternion.copy(M).slerp(p,this.upright),t.setPose(this.upright<1?{arch:1-this.upright,canopy:this.upright}:{canopy:1},1)}else{let p=Math.max(0,this.track),M=_n(this.pullT/.3,0,1);t.setPose({arch:(1-p)*(1-M),track:p*(1-M),pull:M},0)}if(this.state==="deploy"){let p=uc.copy(o).negate().lerp(xr,At(1.8,4.7,this.deployT)).normalize();dc.lookAt($M,r.clone().addScaledVector(p,-r.dot(p)).normalize(),p),i.quaternion.setFromRotationMatrix(dc),i.position.copy(p).multiplyScalar(nn(1,Gu+.05,At(.3,1.9,this.deployT))),i.position.addScaledVector(vi.set(0,1,0).applyQuaternion(n.quaternion),.45*this.upright),this.canopy.brakeL=this.canopy.brakeR=.5*(1-At(4.1,5,this.deployT)),this.canopy.update(e)}}else if(this.state==="canopy"||this.state==="landed"){let o=new Ge().setFromEuler(new Dt(this.swing,-this.heading,-this.bank*.9,"YXZ"));if(this.state==="canopy"){n.quaternion.copy(o);let a=Math.min(this.brake[0],this.brake[1]);t.setPose({canopy:1-a,flare:a},1),i.quaternion.copy(o),i.position.set(0,.45,0).applyQuaternion(o).add(vi.set(0,Gu,0).applyQuaternion(o)),this.canopy.brakeL=this.brake[0],this.canopy.brakeR=this.brake[1],this.canopy.update(e)}else{let a=new Ge().setFromAxisAngle(xr,-this.heading),c=this.stats.landing;if(this.fallen){let h=At(0,.45,this.landedT);n.quaternion.copy(a).multiply(new Ge().setFromEuler(new Dt(-1.45*h,0,.25*h))),this.group.position.y-=.72*h,t.setPose({arch:.5,stand:.5},1)}else n.quaternion.copy(a),this.runSpeed<=.1&&!this.stood&&(this.stood=!0,t.playClip("Idle",.35)),t.mixer.update(e);let l=At(0,2.2,this.landedT);i.quaternion.copy(a).multiply(new Ge().setFromEuler(new Dt(nn(0,1.52,l),0,0))),i.position.set(0,nn(.45,-.55,l),0).add(vi.set(0,Gu*nn(1,.62,l),0).applyQuaternion(i.quaternion)),this.canopy.brakeL=this.canopy.brakeR=1,this.canopy.update(e),c==="water"&&(this.group.position.y-=.9*At(0,1,this.landedT))}}this.canopy.group.visible=this.state==="deploy"||this.state==="canopy"||this.state==="landed"}};var pc=class{constructor(){this.keys=new Set,this.stick={x:0,y:0,id:null},this.look={yaw:0,pitch:0,id:null,lx:0,ly:0,idle:9},this.pressed=new Set,this.actHeld=!1,this.throttleSet=null,this.touch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.enabled=!1;let e=h=>document.getElementById(h);this.el={stick:e("stick"),knob:e("knob"),thr:e("thr"),thrFill:e("thrFill"),act:e("btnAct"),cam:e("btnCam"),pause:e("btnPause"),canvas:e("c")},addEventListener("keydown",h=>{if(h.repeat)return;let u=h.code;this.keys.add(u),u==="Space"&&(this.pressed.add("act"),this.actHeld=!0,h.preventDefault()),u==="KeyC"&&this.pressed.add("cam"),(u==="Escape"||u==="KeyP")&&this.pressed.add("pause"),u==="KeyM"&&this.pressed.add("mute"),u==="KeyU"&&this.pressed.add("units"),u==="KeyN"&&this.pressed.add("restart"),(u.startsWith("Arrow")||u==="PageUp"||u==="PageDown")&&h.preventDefault()}),addEventListener("keyup",h=>{this.keys.delete(h.code),h.code==="Space"&&(this.actHeld=!1)}),addEventListener("blur",()=>{this.keys.clear(),this.actHeld=!1});let t=this.el.canvas,n=h=>{if(!this.enabled)return;let u=h.clientX<innerWidth*.46&&h.clientY>innerHeight*.28;if(h.pointerType!=="mouse"&&u&&this.stick.id===null){this.stick.id=h.pointerId,this.stick.cx=h.clientX,this.stick.cy=h.clientY;let d=this.el.stick;d.classList.add("free"),d.style.left=h.clientX+"px",d.style.top=h.clientY+"px"}else this.look.id===null&&(this.look.id=h.pointerId,this.look.lx=h.clientX,this.look.ly=h.clientY);try{t.setPointerCapture(h.pointerId)}catch{}},i=h=>{if(h.pointerId===this.stick.id){let d=(h.clientX-this.stick.cx)/54,f=(h.clientY-this.stick.cy)/54,m=Math.hypot(d,f);m>1&&(d/=m,f/=m),this.stick.x=d,this.stick.y=-f,this.el.knob.style.transform=`translate(${d*54}px, ${f*54}px)`}else h.pointerId===this.look.id&&(this.look.yaw-=(h.clientX-this.look.lx)*.0055,this.look.pitch=Math.max(-1.3,Math.min(1.3,this.look.pitch+(h.clientY-this.look.ly)*.0045)),this.look.lx=h.clientX,this.look.ly=h.clientY,this.look.idle=0)},r=h=>{if(h.pointerId===this.stick.id){this.stick.id=null,this.stick.x=this.stick.y=0,this.el.knob.style.transform="";let u=this.el.stick;u.classList.remove("free"),u.style.left="",u.style.top=""}h.pointerId===this.look.id&&(this.look.id=null)};t.addEventListener("pointerdown",n),t.addEventListener("pointermove",i),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",h=>h.preventDefault());let o=(h,u,d)=>{h.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),u()});for(let f of["pointerup","pointercancel","pointerleave"])h.addEventListener(f,()=>d&&d())};o(this.el.act,()=>{this.pressed.add("act"),this.actHeld=!0},()=>{this.actHeld=!1}),o(this.el.cam,()=>this.pressed.add("cam")),o(this.el.pause,()=>this.pressed.add("pause"));let a=this.el.thr,c=null,l=h=>{let u=a.getBoundingClientRect();this.throttleSet=Math.max(0,Math.min(1,1-(h.clientY-u.top)/u.height))};a.addEventListener("pointerdown",h=>{c=h.pointerId;try{a.setPointerCapture(c)}catch{}l(h),h.preventDefault()}),a.addEventListener("pointermove",h=>{h.pointerId===c&&l(h)});for(let h of["pointerup","pointercancel"])a.addEventListener(h,()=>{c=null})}k(...e){for(let t of e)if(this.keys.has(t))return!0;return!1}axisX(){return Math.max(-1,Math.min(1,(this.k("KeyD","ArrowRight")?1:0)-(this.k("KeyA","ArrowLeft")?1:0)+this.stick.x))}axisY(){return Math.max(-1,Math.min(1,(this.k("KeyW","ArrowUp")?1:0)-(this.k("KeyS","ArrowDown")?1:0)+this.stick.y))}rudder(){return(this.k("KeyE")?1:0)-(this.k("KeyQ")?1:0)}throttleDelta(){return(this.k("KeyR","PageUp","Equal","ShiftLeft")?1:0)-(this.k("KeyF","PageDown","Minus")?1:0)}brake(){return this.k("KeyB")?1:0}trim(){return(this.k("KeyT")?1:0)-(this.k("KeyG")?1:0)}take(e){let t=this.pressed.has(e);return this.pressed.delete(e),t}update(e){if(this.look.idle+=e,this.look.id===null&&this.look.idle>1.6){let t=Math.min(1,e*2.2);this.look.yaw-=this.look.yaw*t,this.look.pitch-=this.look.pitch*t}}};var mc=class{constructor(){this.ctx=null,this.on=!0,this.ready=!1}start(){if(this.ready){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=this.master=t.createGain();n.gain.value=this.on?.9:0;let i=t.createDynamicsCompressor();n.connect(i),i.connect(t.destination);let r=t.sampleRate*3,o=t.createBuffer(1,r,t.sampleRate),a=o.getChannelData(0),c=0,l=0,h=0;for(let g=0;g<r;g++){let p=Math.random()*2-1;c=.99765*c+p*.099046,l=.963*l+p*.2965164,h=.57*h+p*1.0526913,a[g]=(c+l+h+p*.1848)*.22}this.noiseBuf=o;let u=(g,p,M)=>{let y=t.createBufferSource();y.buffer=o,y.loop=!0;let _=t.createBiquadFilter();_.type=g,_.frequency.value=p,_.Q.value=M;let L=t.createGain();return L.gain.value=0,y.connect(_),_.connect(L),L.connect(n),y.start(),{src:y,f:_,g:L}};this.windLo=u("lowpass",300,.4),this.windHi=u("bandpass",1800,.7);let d=this.engGain=t.createGain();d.gain.value=0;let f=this.engLP=t.createBiquadFilter();f.type="lowpass",f.frequency.value=900,d.connect(f),f.connect(n),this.engOsc=[1,2,3.01,.5].map((g,p)=>{let M=t.createOscillator();M.type=p===3?"triangle":"sawtooth";let y=t.createGain();return y.gain.value=[.5,.26,.14,.4][p],M.connect(y),y.connect(d),M.start(),{o:M,m:g}});let m=this.whine=t.createOscillator();m.type="sine";let x=this.whineG=t.createGain();x.gain.value=0,m.connect(x),x.connect(n),m.start(),this.engNoise=u("bandpass",420,.6),this.flap=u("bandpass",700,1.2),this.ready=!0}catch{this.ready=!1}}setOn(e){this.on=e,this.ready&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}update(e){if(!this.ready)return;let t=this.ctx.currentTime,n=.08,i=Math.min(1.4,e.wind/62),r=i*i;this.windLo.g.gain.setTargetAtTime(.9*r*(e.muffled?.35:1),t,n),this.windLo.f.frequency.setTargetAtTime(160+520*i,t,n),this.windHi.g.gain.setTargetAtTime(.5*r*i*(e.muffled?.2:1),t,n),this.windHi.f.frequency.setTargetAtTime(900+2200*i,t,n);let o=1/(1+Math.pow(e.engDist/55,1.6)),a=1+Math.max(-.25,Math.min(.25,(e.engRel||0)/340)),c=(58+44*e.engine)*a;for(let l of this.engOsc)l.o.frequency.setTargetAtTime(c*l.m,t,n);this.engGain.gain.setTargetAtTime((.1+.2*e.engine)*o*(e.engineOn?1:0),t,n),this.engLP.frequency.setTargetAtTime(380+900*e.engine*(.4+.6*o),t,n),this.whine.frequency.setTargetAtTime((2100+1700*e.engine)*a,t,n),this.whineG.gain.setTargetAtTime(.012*(.4+e.engine)*o*(e.engineOn?1:0),t,n),this.engNoise.g.gain.setTargetAtTime(.22*(.3+e.engine)*o*(e.engineOn?1:0),t,n),this.flap.g.gain.setTargetAtTime(.5*(e.flutter||0)*(.6+.4*Math.sin(t*70)),t,.02)}beep(e=2700,t=.09,n=.12,i=0){if(!this.ready||!this.on)return;let r=this.ctx,o=r.createOscillator(),a=r.createGain(),c=r.currentTime+i;o.type="square",o.frequency.value=e,a.gain.setValueAtTime(0,c),a.gain.linearRampToValueAtTime(n,c+.005),a.gain.setValueAtTime(n,c+t),a.gain.linearRampToValueAtTime(0,c+t+.02),o.connect(a),a.connect(this.master),o.start(c),o.stop(c+t+.05)}burst(e=180,t=.7,n=.9,i="lowpass"){if(!this.ready||!this.on)return;let r=this.ctx,o=r.createBufferSource(),a=r.createBiquadFilter(),c=r.createGain(),l=r.currentTime;o.buffer=this.noiseBuf,a.type=i,a.frequency.setValueAtTime(e*4,l),a.frequency.exponentialRampToValueAtTime(e,l+t*.6),c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(n,l+.03),c.gain.exponentialRampToValueAtTime(.001,l+t),o.connect(a),a.connect(c),c.connect(this.master),o.start(l,Math.random()*2),o.stop(l+t+.1)}thud(e=.8){if(!this.ready||!this.on)return;let t=this.ctx,n=t.createOscillator(),i=t.createGain(),r=t.currentTime;n.frequency.setValueAtTime(110,r),n.frequency.exponentialRampToValueAtTime(38,r+.22),i.gain.setValueAtTime(e,r),i.gain.exponentialRampToValueAtTime(.001,r+.3),n.connect(i),i.connect(this.master),n.start(r),n.stop(r+.35),this.burst(900,.25,e*.5,"bandpass")}};var $t=s=>document.getElementById(s),gc=class{constructor(){this.units="imp",this.mode="",this.t=0,this.bannerUntil=0,this.bannerKey="",this.el={hud:$t("hud"),inst:$t("inst"),banner:$t("banner"),phase:$t("phase"),light:$t("light"),dz:$t("dz"),dzArrow:$t("dzArrow"),alti:$t("alti"),hint:$t("hint"),touch:$t("touch"),act:$t("btnAct"),thr:$t("thr"),thrFill:$t("thrFill"),white:$t("whiteout"),pause:$t("btnPause")},this.ctx=this.el.alti.getContext("2d"),this.rows={}}show(e,t){this.el.hud.hidden=!e,this.el.touch.hidden=!(e&&t),this.el.pause.hidden=!e,this.el.hint.hidden=t}alt(e){return this.units==="imp"?[Math.round(e*ss/10)*10,"ft"]:[Math.round(e),"m"]}spd(e,t){return this.units==="imp"?[Math.round(e*(t?up:dp)),t?"kt":"mph"]:[Math.round(e*fp),"km/h"]}setMode(e,t){if(e===this.mode)return;this.mode=e;let n={flight:[["spd","AIRSPEED"],["alt","ALTITUDE"],["vs","CLIMB"],["hdg","HEADING"],["thr","THROTTLE"]],freefall:[["alt","ALTITUDE"],["spd","FALL RATE"],["fwd","TRACK"],["time","FREEFALL"]],canopy:[["alt","ALTITUDE"],["vs","DESCENT"],["spd","GROUND SPD"],["wind","WIND"]],landed:[]}[e]||[];this.el.inst.innerHTML=n.map(([r,o])=>`<span>${o}</span><b class="num" id="i_${r}">\u2013</b>`).join(""),this.el.inst.hidden=n.length===0,this.rows={};for(let[r]of n)this.rows[r]=$t("i_"+r);this.el.thr.hidden=e!=="flight",this.el.act.textContent={flight:"JUMP",freefall:"PULL",canopy:"FLARE",landed:""}[e]||"",this.el.act.hidden=e==="landed",this.el.alti.hidden=e==="landed";let i={flight:"<kbd>W</kbd><kbd>S</kbd> elevator \xB7 <kbd>A</kbd><kbd>D</kbd> ailerons \xB7 <kbd>Q</kbd><kbd>E</kbd> rudder \xB7 <kbd>R</kbd><kbd>F</kbd> throttle \xB7 <kbd>T</kbd><kbd>G</kbd> trim \xB7 <kbd>Space</kbd> jump",freefall:"<kbd>W</kbd> track forward \xB7 <kbd>S</kbd> slow \xB7 <kbd>A</kbd><kbd>D</kbd> turn \xB7 <kbd>Space</kbd> pull \xB7 <kbd>C</kbd> camera",canopy:"<kbd>A</kbd><kbd>D</kbd> toggles \xB7 <kbd>S</kbd> or <kbd>Space</kbd> both brakes / flare \xB7 <kbd>W</kbd> front risers \xB7 <kbd>C</kbd> camera",landed:""}[e];this.el.hint.innerHTML=i||"",this.el.hint.hidden=t||!i}set(e,t,n){let i=this.rows[e];if(i){let r=t+(n?`<i>${n}</i>`:"");i._s!==r&&(i.innerHTML=r,i._s=r)}}banner(e,t,n="",i="",r=2.5){if(e===this.bannerKey&&this.t<this.bannerUntil)return;this.bannerKey=e,this.bannerUntil=this.t+r;let o=this.el.banner;o.className="show "+i,o.innerHTML=t+(n?`<small>${n}</small>`:"")}clearBanner(){this.bannerUntil=0}update(e,t){if(this.t+=e,this.t>this.bannerUntil&&this.el.banner.classList.remove("show"),this.acc=(this.acc||0)+e,this.acc<.07)return;this.acc=0;for(let r of["alt","ias","vs","hdg","thr","fall","fwd","time","sink","gs","wind"])(t[r]!==t[r]||t[r]===void 0)&&(t[r]=0);t.windFrom=t.windFrom||"";let[n,i]=this.alt(t.alt);if(this.set("alt",n.toLocaleString("en-US"),i),this.mode==="flight"){let[r,o]=this.spd(t.ias,!0);this.set("spd",r,o),this.units==="imp"?this.set("vs",(t.vs>=0?"+":"")+Math.round(t.vs*ss*60/50)*50,"fpm"):this.set("vs",(t.vs>=0?"+":"")+t.vs.toFixed(1),"m/s"),this.set("hdg",String(Math.round(t.hdg)).padStart(3,"0"),"\xB0"),this.set("thr",Math.round(t.thr*100),"%"),this.el.thrFill.style.height=Math.round(t.thr*100)+"%"}else if(this.mode==="freefall"){let[r,o]=this.spd(t.fall,!1);this.set("spd",r,o);let[a,c]=this.spd(t.fwd,!1);this.set("fwd",a,c),this.set("time",t.time.toFixed(0),"s")}else if(this.mode==="canopy"){this.units==="imp"?this.set("vs",(t.sink*ss).toFixed(0),"ft/s"):this.set("vs",t.sink.toFixed(1),"m/s");let[r,o]=this.spd(t.gs,!1);this.set("spd",r,o);let[a,c]=this.spd(t.wind,!1);this.set("wind",a+" "+t.windFrom,c)}this.el.phase.textContent=t.phase,this.el.light.className=t.green?"go":"",this.el.dz.textContent="DZ "+(this.units==="imp"?(t.dzDist/1852).toFixed(1)+" nm":(t.dzDist/1e3).toFixed(1)+" km"),this.el.dzArrow.style.transform=`rotate(${t.dzBearing}deg)`,this.el.act.classList.toggle("dim",!t.actReady),this.el.white.style.opacity=Math.min(.9,t.cloud*.85).toFixed(2),this.el.alti.hidden||this.drawAlti(t.alt,t.altWarn)}drawAlti(e,t){let n=this.ctx,i=336,r=i/2;n.clearRect(0,0,i,i),n.save(),n.translate(r,r);let o=this.units==="imp",a=o?12e3:4e3,c=Math.max(0,o?e*ss:e),l=o?12:8;n.beginPath(),n.arc(0,0,r-4,0,6.283),n.fillStyle="rgba(8,11,15,0.72)",n.fill(),n.lineWidth=5,n.strokeStyle=t?"#ff4d4d":"rgba(255,255,255,0.55)",n.stroke();let h=f=>f/a*6.283-Math.PI/2,u=(f,m,x)=>{n.beginPath(),n.arc(0,0,r-20,h(f),h(m)),n.lineWidth=16,n.strokeStyle=x,n.stroke()};u(0,o?2500:750,"rgba(255,60,60,0.85)"),u(o?2500:750,o?4e3:1200,"rgba(255,210,63,0.85)"),n.fillStyle="#fff",n.strokeStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font="700 30px ui-sans-serif, system-ui, Arial";for(let f=0;f<l*2;f++){let m=f/(l*2)*6.283-Math.PI/2,x=f%2===0;n.beginPath(),n.moveTo(Math.cos(m)*(r-12),Math.sin(m)*(r-12)),n.lineTo(Math.cos(m)*(r-(x?36:26)),Math.sin(m)*(r-(x?36:26))),n.lineWidth=x?4:2,n.stroke(),x&&n.fillText(String(o?f/2:(f/2*.5).toFixed(1).replace(".0","")),Math.cos(m)*(r-60),Math.sin(m)*(r-60))}let d=h(c%a);n.beginPath(),n.moveTo(Math.cos(d)*(r-30),Math.sin(d)*(r-30)),n.lineTo(Math.cos(d+2.6)*20,Math.sin(d+2.6)*20),n.lineTo(Math.cos(d-2.6)*20,Math.sin(d-2.6)*20),n.closePath(),n.fillStyle="#ff7a2f",n.fill(),n.beginPath(),n.arc(0,0,11,0,6.283),n.fillStyle="#e8e8e8",n.fill(),n.font="600 20px ui-sans-serif, system-ui, Arial",n.fillStyle="rgba(255,255,255,0.6)",n.fillText(o?"FT \xD7 1000":"KM",0,62),n.restore()}};function Gp(){let s=(e,t,n)=>`<li><a href="https://polyhaven.com/a/${e}" target="_blank" rel="noopener">${t}</a>${n?" \u2014 "+n:""}</li>`;return`
  <h3>POLY HAVEN (CC0)</h3>
  <ul>
    ${s("kloofendal_48d_partly_cloudy_puresky","Kloofendal 48d Partly Cloudy (Pure Sky) \u2014 HDRI sky and all lighting")}
    ${s("aerial_grass_rock","Aerial Grass Rock","Rob Tuytel")}${s("sparse_grass","Sparse Grass","Amal Kumar")}${s("aerial_rocks_02","Aerial Rocks 02","Rob Tuytel")}
    ${s("rock_face_03","Rock Face 03","Dario Barresi, Rico Cilliers")}${s("aerial_beach_01","Aerial Beach 01","Rob Tuytel")}${s("dirt_aerial_02","Dirt Aerial 02","Rob Tuytel")}
    ${s("snow_02","Snow 02")}${s("coast_sand_rocks_02","Coast Sand Rocks 02")}${s("rocky_trail","Rocky Trail","Amal Kumar")}${s("asphalt_02","Asphalt 02")}
    ${s("tree_small_02","Tree Small 02 \u2014 scanned tree model")}
  </ul>
  <h3>OTHER OPEN ASSETS</h3>
  <ul>
    <li>Skydiver body: \u201CSoldier\u201D sample character from the <a href="https://github.com/mrdoob/three.js" target="_blank" rel="noopener">three.js examples</a> (a Mixamo character), re-posed and fitted with a parachute rig.</li>
    <li>Water normal map: three.js examples. Cloud sprite: <a href="https://github.com/pmndrs/assets" target="_blank" rel="noopener">pmndrs/assets</a> (CC0).</li>
    <li>Rendering: <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> (MIT).</li>
  </ul>
  <h3>MADE FOR THIS DEMO</h3>
  <ul>
    <li>The island (height map shaped by a river-erosion simulation, with baked sun shadows), the turboprop, the ram-air parachute, the airfield and all sound are generated in code.</li>
    <li>Physics: the aircraft is a six-degree-of-freedom model sized like a Cessna 208 (two-panel wing, stall and spin, propeller effects, sprung landing gear) in a standard atmosphere; freefall uses body drag and tracking lift; the canopy flies on a lift and drag polar, so glide, diving turns, flare and stall are not scripted. There is no automatic opening device.</li>
    <li>Poly Haven files were taken from copies bundled in public GitHub repositories (PlayCanvas engine examples, jevpilot, aeon-living-worlds). No itch.io assets are included.</li>
  </ul>`}var pt=s=>document.getElementById(s),un=Zn.clamp,xc=Zn.lerp,$u=new w(0,1,0),Zp=new URLSearchParams(location.search),$n={get(s,e){try{let t=localStorage.getItem("dropzone."+s);return t===null?e:t}catch{return e}},set(s,e){try{localStorage.setItem("dropzone."+s,e)}catch{}}},eS=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Wp={high:{name:"high",prMax:2,texSize:1024,aniso:8,shadow:2048,clouds:40,trees:40},low:{name:"low",prMax:1.5,texSize:512,aniso:4,shadow:1024,clouds:24,trees:16}},yo=Zp.get("q")||$n.get("q","auto"),bi=Wp[yo==="auto"?eS||Math.min(screen.width,screen.height)<700?"low":"high":yo]||Wp.high;pp();var Ju=pt("c"),zn=new _a({canvas:Ju,antialias:!0,powerPreference:"high-performance"});zn.outputColorSpace=nt;zn.toneMapping=Ih;zn.toneMappingExposure=.7;zn.shadowMap.enabled=!0;zn.shadowMap.type=Ch;var hs=Math.min(devicePixelRatio||1,bi.prMax),yn=new er;yn.fog=new ya(new De(.92,.95,1.02),0);var Mt=new Pt(58,1,.3,32e4);function Mc(){zn.setPixelRatio(hs),zn.setSize(innerWidth,innerHeight,!1),Mt.aspect=innerWidth/innerHeight,Mt.updateProjectionMatrix()}addEventListener("resize",Mc);Mc();var Ke=new pc,Rt=new mc,Qe=new gc;Qe.units=$n.get("units","imp");Rt.on=$n.get("snd","on")==="on";var Sc,Hn,Xp,Kp,ju,ue,Ot,ee={phase:"loading",paused:!0,time:0,cam:{flight:0,jump:0},cloud:0,green:!1,best:+$n.get("best",0),resultShown:!1,beeps:{},frame:0},Qu=["chase","nose","wing"],$p=["chase","helmet"];async function tS(){bp((i,r)=>{pt("barFill").style.width=Math.round(Math.min(1,i)*100)+"%"}),Sc=await Tp(zn,yn),Sc.sun.shadow.mapSize.set(bi.shadow,bi.shadow),Hn=new ja,await Hn.load(bi),yn.add(Hn.group),Xp=await Ap(Hn,bi),yn.add(Xp);let[s,e,t,n]=await Promise.all([Cp(Hn,bi),Ip(Hn,bi),Pp(bi),$a("soldier")]);Kp=s,yn.add(s.group,e),ju=t,yn.add(t.mesh),ue=new cc(Hn),yn.add(ue.model),Ot=new fc(n,Hn,yn),vo("air",!0),pt("loading").hidden=!0,pt("startUI").hidden=!1,ee.phase="menu",zn.compile(yn,Mt),window.__ready=!0}function vo(s,e=!1){if(Ot.reset(),ee.resultShown=!1,ee.beeps={},ee.exitT=0,ee.landT=0,ee.crashT=0,ee.greenShown=!1,pt("result").hidden=!0,pt("flash").style.opacity=0,s==="air"){let t=en(4e3,new w),n=Math.atan2(-t.x,t.z),i=new w(Math.sin(n),0,-Math.cos(n)),r=new w(hn.x,0,hn.z).addScaledVector(i,-3300);ue.spawnAir(r.x,hr+3962,r.z,-n,46.3)}else ue.spawnRunway(ln.x1-60,ln.z,Math.PI/2);ee.phase=e?"menu":"flight",yr.init=!1,Ke.look.yaw=0,Ke.look.pitch=0,e||(Qe.setMode("flight",Ke.touch),Qe.clearBanner(),Qe.banner("start",s==="air"?"JUMP RUN":"CLEARED FOR TAKEOFF",s==="air"?"Trimmed for 90 kt, drop zone ahead \xB7 exit when the light turns green":"Full power, ease the stick back at 75 kt, climb at 105 kt","",5))}function Jp(){if(ue.agl()<280){Qe.banner("low","TOO LOW TO JUMP","Climb above 1,000 ft first","warn",2);return}let s=ue.model.userData.door.clone().applyQuaternion(ue.quat).add(ue.pos),e=new w(1,0,0).applyQuaternion(ue.quat),t=ue.vel.clone().addScaledVector(e,-2.6).addScaledVector($u,-1.2);Ot.exit(s.addScaledVector(e,-.9),t,ue.heading()),ue.autopilot={alt:ue.pos.y,bank:.3,throttle:Math.min(1,ue.throttle*1.08)},ee.phase="jump",ee.exitT=0,Qe.setMode("freefall",Ke.touch),Qe.clearBanner(),Rt.burst(500,.5,.5,"bandpass")}function nS(){if(ee.resultShown)return;ee.resultShown=!0;let s=Ot.stats,e=s.landing,t=e==="fatal"||e==="hard",n=0,i=[];if(!t){let h=Math.max(0,Math.round(1e3-s.dist*8));n+=h,n+={standup:400,slide:250,tumble:80,water:-100,injured:-300}[e]||0,n+=Math.round(Math.min(70,s.freefall)*8),s.deployAlt<600&&(n-=150)}n=Math.max(0,n);let r=t?"\u2715":n>=1500?"S":n>=1200?"A":n>=850?"B":n>=450?"C":"D",o={standup:"Stand-up landing",slide:"Slid it in \u2014 safe",tumble:"Tumbled on touchdown",water:"Splashdown",injured:"Hard landing",hard:"Canopy never finished opening",fatal:"No canopy"}[e],a=t?"Nothing opens the parachute for you. Pull by 3,500 ft: the altimeter turns yellow at 4,000 and red at 2,500.":s.deployAlt<600?"That was a very low pull. A canopy needs about 600 ft to open.":e==="standup"&&s.dist<12?"Dead centre and on your feet.":e==="injured"?"Flare earlier: brakes fully down about 4 m above the ground.":e==="tumble"?"Finish the flare and land into the wind to walk away.":e==="water"?"Wet, but alive. Watch the wind drift on the way down.":s.dist>120?"Safe landing. Next time, steer for the orange arrow and the gravel circle.":"Nicely flown.";n>ee.best&&!t&&(ee.best=n,$n.set("best",String(n)));let c=h=>{let[u,d]=Qe.alt(h);return u.toLocaleString("en-US")+" "+d},l=h=>{let[u,d]=Qe.spd(h,!1);return u+" "+d};pt("resTitle").textContent=o.toUpperCase(),pt("score").textContent=n.toLocaleString("en-US"),pt("grade").textContent=r,pt("resLine").textContent=a,pt("resStats").innerHTML=[["Exit altitude",c(s.exitAlt)],["Freefall",s.freefall.toFixed(0)+" s"],["Top speed",l(s.maxSpeed)],["Canopy opened at",s.deployAlt?c(s.deployAlt):"\u2014"],["Touchdown",t?l(s.vLand):s.vLand.toFixed(1)+" m/s down \xB7 "+l(s.hLand)+" across"],["Distance from target",t?"\u2014":Qe.units==="imp"?Math.round(s.dist*ss)+" ft":s.dist.toFixed(1)+" m"],["Best score",ee.best.toLocaleString("en-US")]].map(([h,u])=>`<span>${h}</span><b>${u}</b>`).join(""),pt("result").hidden=!1,Qe.show(!1,!1),Ke.enabled=!1}function vr(s){Rt.start(),pt("menu").hidden=!0,ee.paused=!1,Ke.enabled=!0,Qe.show(!0,Ke.touch),s&&vo(s),Ju.focus&&Ju.focus()}pt("startAir").onclick=()=>vr("air");pt("startGround").onclick=()=>vr("ground");pt("againAir").onclick=()=>vr("air");pt("againGround").onclick=()=>vr("ground");pt("resume").onclick=()=>vr(null);pt("creditsBtn").onclick=()=>{let s=pt("credits");s.innerHTML||(s.innerHTML=Gp()),s.hidden=!s.hidden};function ed(s,e,t){let n=pt(s),i=r=>{for(let o of n.children)o.classList.toggle("on",o.dataset.v===r)};i(e),n.onclick=r=>{let o=r.target.dataset&&r.target.dataset.v;o&&(i(o),t(o))}}ed("segUnits",Qe.units,s=>{Qe.units=s,$n.set("units",s),Qe.mode=""});ed("segSnd",Rt.on?"on":"off",s=>{Rt.setOn(s==="on"),$n.set("snd",s)});ed("segQ",yo,s=>{$n.set("q",s),s!==yo&&(pt("segQ").insertAdjacentHTML("afterend",'<span id="qnote">applies after reload</span>'),yo=s)});pt("keys").innerHTML=Ke.touch?"<b>Left thumb</b><span>Stick: fly the plane, steer the fall, steer and flare the canopy</span><b>Orange button</b><span>Jump, then pull, then flare. Nothing opens the canopy for you.</span><b>Drag right side</b><span>Look around</span><b>THR slider</b><span>Engine power</span>":"<b>W / S</b><span>Plane: stick forward / back \xB7 Freefall: track / slow \xB7 Canopy: front risers / brakes</span><b>A / D</b><span>Ailerons, turn, steer</span><b>Q / E</b><span>Rudder (also steers the nose wheel)</span><b>R / F</b><span>Throttle \xB7 <b>T / G</b> elevator trim \xB7 <b>B</b> wheel brakes</span><b>Space</b><span>Jump, then pull, then flare. Nothing opens the canopy for you.</span><b>C \xB7 P \xB7 M \xB7 U</b><span>Camera \xB7 Pause \xB7 Mute \xB7 Units</span><b>Mouse drag</b><span>Look around</span>";function jp(){ee.phase==="menu"||ee.phase==="loading"||!pt("result").hidden||(ee.paused=!0,Ke.enabled=!1,pt("menu").hidden=!1,pt("resume").hidden=!1,Qe.show(!1,!1))}var yr={pos:new w,tgt:new w,yaw:0,init:!1,fov:58,roll:0},Jt=new w,Ht=new w,Ei=new w,bc=new w,Yu=new Ge,XS=new Fe;function qp(s,e,t){let n=((e-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return s+n*t}function _c(s,e,t,n,i){let r=Math.cos(t);return i.set(s.x-Math.sin(e)*r*n,s.y+Math.sin(t)*n,s.z+Math.cos(e)*r*n)}function iS(s){let e=Ke.look,t=yr,n=!1,i=58,r=5,o=.5,a=0,c=0;if(ee.phase==="jump"){let d=Ot,f=$p[ee.cam.jump],m=d.hvec(Ei).clone();if(t.yaw=t.init?qp(t.yaw,d.heading,1-Math.exp(-s*3.2)):d.heading,d.state==="landed")_c(d.pos,d.heading+2.5+d.landedT*.22+e.yaw,un(.22+e.pitch,.03,1.2),7.5,Jt),Ht.copy(d.pos),Ht.y+=.5,i=50,r=2.2;else if(f==="helmet"){let x=d.body.bones.mixamorigHead.getWorldPosition(bc),g=Ht.set(0,1,0).applyQuaternion(d.body.rig.quaternion).clone(),p=new w(0,0,-1).applyQuaternion(d.body.rig.quaternion),M;d.upright<.5?(M=g.clone().multiplyScalar(-.92).addScaledVector(p,.5).normalize(),t.upVec=p.clone(),Jt.copy(x).addScaledVector(g,-.16).addScaledVector(p,.1)):(M=p.clone().addScaledVector(g,-.22).normalize(),t.upVec=g.clone(),Jt.copy(x).addScaledVector(p,.16).addScaledVector(g,.06)),M.applyAxisAngle(t.upVec,e.yaw).applyAxisAngle(Ei.crossVectors(M,t.upVec).normalize(),-e.pitch),Ht.copy(Jt).addScaledVector(M,10),n=!0,i=86,o=.1}else if(d.state==="canopy")_c(d.pos,t.yaw+e.yaw,un(.2+e.pitch,-.9,1.3),12.5,Jt),Ht.copy(d.pos).addScaledVector(m,e.yaw?0:3.5),Ht.y+=2.9,i=60,r=4.5,a=d.bank*.2;else{let x=xc(.62,.3,d.upright);_c(d.pos,t.yaw+e.yaw,un(x+e.pitch,-.9,1.4),xc(4.6,11.5,d.upright),Jt),Ht.copy(d.pos).addScaledVector(m,e.yaw?0:xc(1.6,3,d.upright)),Ht.y+=xc(-.2,2.8,d.upright),i=66+un(d.vel.length()/70,0,1)*9,r=ee.exitT<1.2?2.2:6}c=d.shake*.05}else{let d=ee.phase==="menu"?"chase":Qu[ee.cam.flight],f=ue.heading();if(d==="chase"){t.yaw=t.init?qp(t.yaw,f,1-Math.exp(-s*2.6)):f;let m=ee.phase==="menu"?ee.time*.06+2.2:0;_c(ue.pos,t.yaw+e.yaw+m,un(.2+e.pitch*.8,-.5,1.3),ee.phase==="menu"?24:20,Jt),Ht.copy(ue.pos).addScaledVector(ue.forward,e.yaw===0&&!m?5:0),Ht.y+=1.4,m&&Mt.aspect>1.3&&(Ei.subVectors(Ht,Jt).cross($u).normalize(),Ht.addScaledVector(Ei,-8.5)),i=54+un(ue.ias/90,0,1)*7,r=7,o=1,a=ue.bankSigned()*-.18}else d==="nose"?(Jt.set(0,.86,-3.05).applyQuaternion(ue.quat).add(ue.pos),Yu.copy(ue.quat).multiply(new Ge().setFromEuler(new Dt(-e.pitch-.05,e.yaw,0,"YXZ"))),Ht.set(0,0,-10).applyQuaternion(Yu).add(Jt),n=!0,i=68,o=.2,t.upVec=Ei.set(0,1,0).applyQuaternion(ue.quat).clone()):(Jt.set(-4.4,.42,.2).applyQuaternion(ue.quat).add(ue.pos),Yu.copy(ue.quat).multiply(new Ge().setFromEuler(new Dt(-e.pitch,e.yaw,0,"YXZ"))),Ht.set(-.6,-.1,3.2).applyQuaternion(ue.quat).add(ue.pos),(e.yaw||e.pitch)&&Ht.sub(Jt).applyQuaternion(new Ge().setFromEuler(new Dt(-e.pitch,e.yaw,0,"YXZ"))).add(Jt),n=!0,i=74,o=.2,t.upVec=Ei.set(0,1,0).applyQuaternion(ue.quat).clone());c=ue.onGround?un(ue.vel.length()/60,0,1)*.02:.004+ue.stall*.03}if(n||!t.init)t.pos.copy(Jt),t.tgt.copy(Ht),t.init=!0;else{let d=1-Math.exp(-s*r);t.pos.lerp(Jt,d),t.tgt.lerp(Ht,Math.min(1,d*1.6))}let h=Math.max(0,Hn.heightAt(t.pos.x,t.pos.z))+.6;t.pos.y<h&&(t.pos.y=h),Mt.position.copy(t.pos),c>0&&(Mt.position.x+=(Math.random()-.5)*c,Mt.position.y+=(Math.random()-.5)*c,Mt.position.z+=(Math.random()-.5)*c),Mt.up.copy(n&&t.upVec?t.upVec:$u),Mt.lookAt(t.tgt),t.roll+=(a-t.roll)*Math.min(1,s*3),!n&&Math.abs(t.roll)>1e-4&&Mt.rotateZ(t.roll),t.fov+=(i-t.fov)*Math.min(1,s*3);let u=Mt.aspect<1?Math.min(95,t.fov*(1+(1-Mt.aspect)*.55)):t.fov;(Math.abs(Mt.fov-u)>.05||Mt.near!==o)&&(Mt.fov=u,Mt.near=o,Mt.updateProjectionMatrix())}var sS=s=>["N","NE","E","SE","S","SW","W","NW"][Math.round((s%360+360)%360/45)%8],_r={x:0,y:0};function rS(s,e){let t=(Ke.k("KeyD","ArrowRight")?1:0)-(Ke.k("KeyA","ArrowLeft")?1:0),n=(Ke.k("KeyW","ArrowUp")?1:0)-(Ke.k("KeyS","ArrowDown")?1:0),i=(r,o)=>{let a=(o===0?3.2:Math.sign(o)!==Math.sign(r)&&r!==0?4:1.5)*s;return Math.abs(o-r)<=a?o:r+Math.sign(o-r)*a};return _r.x=i(_r.x,t),_r.y=i(_r.y,n),e.x=un(_r.x+Ke.stick.x,-1,1),e.y=un(_r.y+Ke.stick.y,-1,1),e}var Zu={x:0,y:0};function Qp(s){ee.time+=s,rS(s,Zu);let e=Zu.x,t=Zu.y;if(Ke.take("pause")){jp();return}if(Ke.take("mute")&&(Rt.setOn(!Rt.on),$n.set("snd",Rt.on?"on":"off")),Ke.take("units")){Qe.units=Qe.units==="imp"?"met":"imp",$n.set("units",Qe.units);let l=Qe.mode;Qe.mode="",Qe.setMode(l,Ke.touch)}if(Ke.take("restart")){vo("air"),Qe.show(!0,Ke.touch),Ke.enabled=!0;return}let n=Ke.take("act"),i=Ke.take("cam"),r=ee.phase==="jump"?Ot.pos:ue.pos,o=Ei.set(hn.x-r.x,0,hn.z-r.z),a=o.length(),c={phase:"",green:!1,dzDist:a,dzBearing:0,actReady:!0,cloud:ee.cloud,alt:0,altWarn:!1};if(ee.phase==="flight"||ee.phase==="menu"){ee.phase==="flight"?(ue.ctl.pitch=-t,ue.ctl.roll=e,ue.ctl.yaw=Ke.rudder(),ue.ctl.brake=Ke.brake()||(Ke.touch&&ue.onGround&&ue.throttle<.03?1:0),ue.trim=un(ue.trim+Ke.trim()*s*.035,-.2,.3),Ke.throttleSet!==null&&(ue.throttle=Ke.throttleSet,Ke.throttleSet=null),ue.throttle=un(ue.throttle+Ke.throttleDelta()*s*.55,0,1),i&&(ee.cam.flight=(ee.cam.flight+1)%Qu.length,yr.init=!1)):ue.autopilot||(ue.autopilot={alt:ue.pos.y,bank:.3,throttle:Math.min(1,ue.throttle*1.08)}),ue.update(s);let l=ue.agl();ee.green=!ue.onGround&&l>900&&a<1500,ee.phase==="flight"&&(ee.green&&!ee.greenShown&&(ee.greenShown=!0,Qe.banner("green","GREEN LIGHT",Ke.touch?"Tap JUMP":"Press Space to jump","go",5),Rt.beep(1300,.25,.1)),!ee.green&&a>2500&&(ee.greenShown=!1),ue.time-ue.tailStrike<.1&&ue.time>1&&(Qe.banner("tail","TAIL STRIKE","Too much back stick: ease off","warn",1.2),ee.time-(ee.beeps.tail||0)>.5&&(ee.beeps.tail=ee.time,Rt.burst(1400,.35,.5,"bandpass"))),ue.stallWarn&&ee.time-(ee.beeps.horn||0)>.22&&(ee.beeps.horn=ee.time,Rt.beep(1150,.14,.09)),ue.stall>.3&&!ue.onGround&&Qe.banner("stall","STALL","Stick forward, add power, level the wings with rudder","warn",.6),n&&Jp(),ue.crashed&&(ee.phase="crashed",ee.crashT=0,Rt.thud(1),pt("flash").style.opacity=1,Qe.banner("crash",ue.crashed==="water"?"DITCHED IN THE SEA":ue.crashed==="gear"?"GEAR COLLAPSED":"AIRCRAFT LOST",ue.crashed==="gear"?"Touchdown was too hard \xB7 back to jump run in a moment":"Back to jump run in a moment","bad",3.5))),c.phase=ue.onGround?"ON THE GROUND":ee.green?"OVER THE DROP ZONE":l<900?"CLIMB":"JUMP RUN",c.green=ee.green,c.actReady=l>280,c.alt=Math.max(0,ue.pos.y-ue.gearH-hr),c.ias=ue.ias,c.vs=ue.vel.y,c.hdg=(ue.heading()*180/Math.PI%360+360)%360,c.thr=ue.throttle,c.dzBearing=(Math.atan2(o.x,-o.z)-ue.heading())*180/Math.PI}else if(ee.phase==="crashed")ee.crashT+=s,ee.crashT>3.2&&vo("air"),c.phase="AIRCRAFT LOST",c.alt=0,c.ias=0,c.vs=0,c.hdg=0,c.thr=0;else if(ee.phase==="jump"){let l=Ot;ee.exitT+=s,l.ctl.x=e,l.ctl.y=t,l.ctl.pull=n&&l.state==="freefall"&&ee.exitT>1,l.ctl.flare=l.state==="canopy"&&Ke.actHeld?1:0,i&&(ee.cam.jump=(ee.cam.jump+1)%$p.length,yr.init=!1);let h=l.state;ue.update(s),l.update(s);let u=l.agl(),d=Math.max(0,l.pos.y-.95-hr);if(Qe.setMode(l.state==="freefall"?"freefall":l.state==="landed"?"landed":"canopy",Ke.touch),h!==l.state&&(l.state==="deploy"&&(Qe.banner("dep","PILOT CHUTE OUT","Canopy opening\u2026","",2.6),Rt.burst(140,1.9,1)),l.state==="canopy"&&(Qe.banner("open","GOOD CANOPY","Steer for the orange arrow \xB7 flare with both brakes about 3 m above the ground","go",5),Rt.burst(90,.5,.6)),l.state==="landed"&&(ee.landT=0,l.stats.water?Rt.burst(700,1.2,.9,"bandpass"):Rt.thud(l.impact))),l.state==="freefall")c.phase="FREEFALL",c.fall=Math.max(0,-l.vel.y),c.fwd=Math.hypot(l.vel.x,l.vel.z),c.time=l.t,u<1700&&!ee.beeps.a&&(ee.beeps.a=1,Rt.beep(2400,.12,.1),Rt.beep(2400,.12,.1,.25)),u<1150&&(Qe.banner("pull","PULL",Ke.touch?"Tap PULL":"Press Space","warn",.5),(!ee.beeps.b||ee.time-ee.beeps.b>.5)&&(ee.beeps.b=ee.time,Rt.beep(2900,.2,.12))),u<650&&(Qe.banner("pull2","PULL NOW","","bad",.4),ee.time-(ee.beeps.c||0)>.16&&(ee.beeps.c=ee.time,Rt.beep(3300,.1,.14))),c.altWarn=u<1150;else if(l.state==="deploy"||l.state==="canopy"){c.phase=l.state==="deploy"?"OPENING":u<300?"FINAL APPROACH":"UNDER CANOPY";let f=en(l.pos.y,bc);c.sink=Math.max(0,-l.vel.y),c.gs=Math.hypot(l.vel.x,l.vel.z),c.wind=f.length(),c.windFrom=sS(Math.atan2(-f.x,f.z)*180/Math.PI),l.state==="canopy"&&u<5&&u>.5&&Math.min(l.brake[0],l.brake[1])<.6&&Qe.banner("flare","FLARE",Ke.touch?"Stick all the way back":"Hold S or Space","warn",.4),l.state==="canopy"&&l.stalled>.5&&u>6&&Qe.banner("cstall","CANOPY STALLED","Let the brakes up","warn",.5)}else c.phase="LANDED",ee.landT+=s,ee.landT>2.6&&nS();c.alt=d,c.dzBearing=(Math.atan2(o.x,-o.z)-yr.yaw)*180/Math.PI,c.actReady=l.state==="freefall"?ee.exitT>1&&!l.pulling:l.state!=="landed"}Qe.update(s,c)}function oS(){if(!Rt.ready)return;let s=ee.phase==="jump",e=Mt.position,t=e.distanceTo(ue.pos),n=Ei.copy(ue.pos).sub(e).normalize(),i=s?-bc.copy(ue.vel).sub(Ot.vel).dot(n):0,r=!s&&Qu[ee.cam.flight]!=="chase",o=s?Ot.state==="landed"?3:Ot.airspeed()*(Ot.state==="canopy"?.9:1):ue.vel.length()*(r?.75:.5);(ee.phase==="menu"||ee.paused)&&(o*=.3),Rt.update({wind:o,engine:ue.rpm,engDist:s?t:r?4:16,engRel:i,engineOn:!ue.crashed,flutter:s&&Ot.state==="deploy"?un(1.2-Ot.canopy.inflation,0,1):s&&Ot.state==="canopy"?.06+Math.abs(Ot.yawRate)*.12:0,muffled:ee.cloud>.4})}var td=90,em=[],us=new Float32Array(td*6),nd=new rt;nd.setAttribute("position",new at(us,3).setUsage(On));var vc=new ui({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Mo=new Oi(nd,vc);Mo.frustumCulled=!1;Mo.renderOrder=8;yn.add(Mo);for(let s=0;s<td;s++)em.push(new w(0,-1e6,0));function aS(s){let e=Ot,t=ee.phase==="jump"&&(e.state==="freefall"||e.state==="deploy"),n=t?e.vel.length():0,i=t?un((n-22)/45,0,1)*.16*(1-e.upright):0;if(vc.opacity+=(i-vc.opacity)*Math.min(1,s*4),Mo.visible=vc.opacity>.004,!Mo.visible)return;let r=Ei.copy(e.vel).normalize(),o=Mt.position,a=n*.03,c=bc.set(r.z,0,-r.x);c.lengthSq()<1e-4&&c.set(1,0,0),c.normalize();let l=Ht.crossVectors(r,c);for(let h=0;h<td;h++){let u=em[h],d=u.x-o.x,f=u.y-o.y,m=u.z-o.z,x=d*r.x+f*r.y+m*r.z;if(x<-7||x>26||d*d+f*f+m*m>900){let g=Math.random()*6.283,p=1.6+Math.random()*9;u.copy(o).addScaledVector(r,12+Math.random()*13).addScaledVector(c,Math.cos(g)*p).addScaledVector(l,Math.sin(g)*p)}us[h*6]=u.x,us[h*6+1]=u.y,us[h*6+2]=u.z,us[h*6+3]=u.x-r.x*a,us[h*6+4]=u.y-r.y*a,us[h*6+5]=u.z-r.z*a}nd.attributes.position.needsUpdate=!0}var Yp=performance.now(),yc=16,Ku=0;function tm(s){requestAnimationFrame(tm);let e=(s-Yp)/1e3;if(Yp=s,!(e>0))return;let t=e;if(e=Math.min(e,.05),ee.phase==="loading")return;if(Ke.update(e),!ee.paused||ee.phase==="menu"){let a=ee.subFrames||1;for(let c=0;c<a;c++)Qp(e)}iS(e);let n=ee.phase==="jump"?Ot.pos:ue.pos;Hn.update(Mt.position,ee.time),Kp.update(ee.time);let i=ju.update(Mt.position,ee.time);ee.cloud+=(i-ee.cloud)*Math.min(1,e*3),yn.fog.density=ee.cloud*ee.cloud*.03,ju.mat.uniforms.uCloudFog.value=yn.fog.density,Sc.dome.material.uniforms.uWhite.value=un(ee.cloud*1.6,0,1);let r=n.y-Math.max(0,Hn.heightAt(n.x,n.z)),o=ee.phase==="jump"?r<60?34:13:r<60?55:24;if(Sc.setShadowFocus(ee.phase==="jump"&&Ot.state!=="freefall"?Jt.copy(n).setY(n.y+(r<60?0:3)):n,o),aS(e),oS(),zn.render(yn,Mt),yc+=(t*1e3-yc)*.05,Ku+=t,Ku>2.5&&!Zp.get("fixedpr")){Ku=0;let a=Math.min(devicePixelRatio||1,bi.prMax);yc>30&&hs>.6?(hs=Math.max(.6,hs*.85),Mc()):yc<15&&hs<a&&(hs=Math.min(a,hs*1.1),Mc())}ee.frame++}document.addEventListener("visibilitychange",()=>{document.hidden&&jp()});tS().then(()=>requestAnimationFrame(tm)).catch(s=>{console.error(s),pt("loadText").textContent="Could not start: "+(s&&s.message?s.message:s)});window.__game={S:ee,get plane(){return ue},get jumper(){return Ot},begin:vr,doJump:Jp,startFlight:vo,camera:Mt,input:Ke,hud:Qe,renderer:zn,camState:yr,ff(s){let e=Math.round(s*60);for(let t=0;t<e;t++)Qp(1/60)}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
