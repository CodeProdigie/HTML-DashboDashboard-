const body=document.querySelector('body');
const toggler=document.querySelector('.theme-toggler');
const darktoggler=document.querySelector('.dark');
const lighttoggler=document.querySelector('.light');
const sidebar=document.querySelector('.sidebar');
const sales=document.querySelector('.sales');
const expenses=document.querySelector('.expenses');
const income=document.querySelector('.income');
const table=document.querySelector('table');
const update1=document.querySelector('.recent-updates .u1');
const update2=document.querySelector('.recent-updates .u2');
const update3=document.querySelector('.recent-updates .u3');
const online=document.querySelector('.sales-analytics .online');
const offline=document.querySelector('.sales-analytics .offline');
const customer=document.querySelector('.sales-analytics .customer');
const menu=document.querySelector('.menu-btn i');
const menucontents=document.querySelector('.sidebar a .e0');
const menucontents1=document.querySelector('.sidebar a .e1');
const menucontents2=document.querySelector('.sidebar a .e2');
const menucontents3=document.querySelector('.sidebar a .e3');
const menucontents4=document.querySelector('.sidebar a .e4');
const menucontents5=document.querySelector('.sidebar a .e5');
const menucontents7=document.querySelector('.sidebar a .e7');
const menucontents8=document.querySelector('.sidebar a .e8');
const menucontents9=document.querySelector('.sidebar a .e9');
const menucontents10=document.querySelector('.sidebar a .e10');


darktoggler.addEventListener('click',function(){
this.style.background='#7380ec';
lighttoggler.style.background='#fff';
lighttoggler.style.color='black';
sidebar.style.background='#181a1e';
sales.style.background='#181a1e';
expenses.style.background='#181a1e';
income.style.background='#181a1e';
table.style.background='#181a1e';
update1.style.background='#181a1e';
update2.style.background='#181a1e';
update3.style.background='#181a1e';
online.style.background='#181a1e';
offline.style.background='#181a1e';
customer.style.background='#181a1e';
body.style.background='#202528';
body.style.transition='2s';
})

lighttoggler.addEventListener('click',function(){
this.style.background='#7380ec';
darktoggler.style.background='#fff';
darktoggler.style.color='black';
sidebar.style.background='#f6f6f9';
sales.style.background='#f6f6f9';
expenses.style.background='#f6f6f9';
income.style.background='#f6f6f9';
table.style.background='#f6f6f9';
update1.style.background='#f6f6f9';
update2.style.background='#f6f6f9';
update3.style.background='#f6f6f9';
online.style.background='#f6f6f9';
offline.style.background='#f6f6f9';
customer.style.background='#f6f6f9';
body.style.background='#edeffd';
body.style.transition='2s';
})

menu.addEventListener('click',function(){
menu.classList.toggle('fa-times');
if(this.classList.toggle('fa-bars')){
    sidebar.style.width='4.6em';
    menucontents.style.display='none';
    menucontents1.style.display='none';
    menucontents2.style.display='none';
    menucontents3.style.display='none';
    menucontents4.style.display='none';
    menucontents5.style.display='none';
    menucontents7.style.display='none';
    menucontents8.style.display='none';
    menucontents9.style.display='none';
    menucontents10.style.display='none';
    toggler.style.display='block';
    toggler.style.width='1rem';
    toggler.style.transform='translateY(45px)';
    menucontents.style.transition='.5s';
    menucontents1.style.transition='.5s';
    menucontents2.style.transition='.5s';
    menucontents3.style.transition='.5s';
    menucontents4.style.transition='.5s';
    menucontents5.style.transition='.5s';
    menucontents7.style.transition='.5s';
    menucontents8.style.transition='.5s';
    menucontents9.style.transition='.5s';
    menucontents10.style.transition='.5s';
    sidebar.style.transition='.5s';
}
else{
    sidebar.style.width='7.5em';
    menucontents.style.display='block';
    menucontents1.style.display='block';
    menucontents2.style.display='block';
    menucontents3.style.display='block';
    menucontents4.style.display='block';
    menucontents5.style.display='block';
    menucontents7.style.display='block';
    menucontents8.style.display='block';
    menucontents9.style.display='block';
    menucontents10.style.display='block';
    toggler.style.display='flex';
    toggler.style.width='4.2rem';
    toggler.style.transform='translate(30px,120px)';
    menucontents.style.transition='.5s';
    menucontents1.style.transition='.5s';
    menucontents2.style.transition='.5s';
    menucontents3.style.transition='.5s';
    menucontents4.style.transition='.5s';
    menucontents5.style.transition='.5s';
    menucontents7.style.transition='.5s';
    menucontents8.style.transition='.5s';
    menucontents9.style.transition='.5s';
    menucontents10.style.transition='.5s';
    sidebar.style.transition='.5s';
}
})