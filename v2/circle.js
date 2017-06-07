//const BindCall=(function(x){const e=x.prototype;return e.bind.bind(e.call)})(Function);
//function $query(x){return document.querySelector(x)}
//================================================================================

function $id(x){return document.getElementById(x)}
//
function addClass(a,b){function f(x){a.setAttribute(c,x)}const c='class',s=a.getAttribute(c);if(s){if(s.includes(b)!==true){f(s+'\u0020'+b)}}else{f(b)}}
function remClass(a,b){const c='class',s=a.getAttribute(c);if(s&&s.includes(b)){a.setAttribute(c,s.split(/\s+/).filter(function(a){return a!==b}).join('\u0020'))}}
//
const $progress=$id('progress');
//
const setBarCircle=(function(svg){
 function f(x){return R(100*(x*49+50))/100}
 function s(a,b,c,d){e.setAttribute('d','M50\u00201\u0020A\u002049\u002049,0,'+a+',1,'+b+'\u0020'+c+',L\u002050\u002050\u0020z');l.innerHTML=d+'%'}
 const o=Math, R=o.round, C=o.cos, S=o.sin, g=svg, m=g.children, e=m[1], l=m[3], k='complete';
 g.reset=function(){const o=g,p=k;remClass(o,p);o[p]=false;s(0,50,1,0)}
 return function(a){
	const o=g,p=k;
  if(o[p]!==true){
		let x=a,b=0,c=50,d=1;
		if(x>0){
			x=R(x);
			if(x<100){
			 const i=2*-(x/100)*3.1415+1.57;
			 b=x>c?1:0;c=f(C(i));d=f(-S(i));
			}else{
			 x=100;addClass(g,p);o[p]=true;
			}
		}else{
			x=0;remClass(g,p);
		};
		s(b,c,d,x);
	}
 }
})($progress);
//==============================================
const $percent=$id('percent');
$id('update').onclick=function(){setBarCircle($percent.value)};
$id('reset').onclick=function(){$progress.reset();$percent.value='';};
