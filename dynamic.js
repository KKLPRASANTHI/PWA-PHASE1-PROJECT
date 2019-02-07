function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		} 
			}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	edu(data.education);
	lang(data.languages);
	skill(data.skills);
	acheivements(data.achmnts);
	profil(data.prfl);
})
var left=document.querySelector(".left");
function profile(p){
var pimg=document.createElement("img");
pimg.src=p.img;
left.appendChild(pimg);
var ph3=document.createElement("h3");
ph3.textContent=p.name;
left.appendChild(ph3);
var proll=document.createElement("p");
proll.textContent=p.roll;
left.appendChild(proll);
var inst=document.createElement("p");
inst.textContent=p.Institute;
left.appendChild(inst);
var plc=document.createElement("p");
plc.textContent=p.place;
left.appendChild(plc);
}
var right=document.querySelector(".right");
function career(c){
	var head=document.createElement("h1");
	head.textContent=c.hdng;
	right.appendChild(head);
	var chr=document.createElement("hr");
	right.appendChild(chr);
	var ch2=document.createElement("h2");
	ch2.textContent=c.chdng;
	right.appendChild(ch2);
	var prgh=document.createElement("p");
	prgh.textContent=c.info;
	right.appendChild(prgh);
}
function edu(e){
	var ehe=document.createElement("h2");
	ehe.innerHTML="Educational Details:";
	right.appendChild(ehe);
	var ehr=document.createElement("hr");
	right.appendChild(ehr);
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>s.no</td><td>degree</td><td>Institute</td><td>yop</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].s+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);
}
function lang(l){
	var lh=document.createElement("h2");
	lh.textContent="Languages Known";
	right.appendChild(lh);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<l.length;i++){
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.appendChild(li);
	}

}
function skill(s){
	var ulst=document.createElement("h2");
	ulst.textContent="Technical skills";
	right.appendChild(ulst);
	var udl=document.createElement("ul");
	right.appendChild(udl);
	for(i=0;i<s.length;i++)
	{
		var lst=document.createElement("li");
		lst.textContent=s[i].sk;
		udl.appendChild(lst);
	}
}
function acheivements(a){
	var act=document.createElement("h2");
	act.textContent="Acheivements";
	right.appendChild(act);
	var udrl=document.createElement("ul");
	right.appendChild(udrl);
	for(i=0;i<a.length;i++)
	{
		var lis=document.createElement("li");
		lis.textContent=a[i].acm;
		udrl.appendChild(lis);
	}
}
function profil(u){
	var pfl=document.createElement("h2");
	pfl.textContent="Profile";
	right.appendChild(pfl);
	var ukl=document.createElement("ul");
	right.appendChild(ukl);
	for(i=0;i<u.length;i++)
	{
		var ldt=document.createElement("li");
		ldt.textContent=u[i].pdt;
		ukl.appendChild(ldt);
	}
}


