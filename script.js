const address=document.querySelector("#address-form")
const dong=document.querySelector("#dong")
const thoat=document.querySelector("#thoat")
const thoat1=document.querySelector("#thoat1")
const dn=document.querySelector("#dangnhap")
const dk=document.querySelector("#dangki")
const t1=document.querySelector("#t1")
const imgsum=document.querySelectorAll(".mhtrai-top img")
let index=0
const right=document.querySelector(".fa-chevron-right")
const left=document.querySelector(".fa-chevron-left")

const imgso=document.querySelectorAll(".mhtrai-bot li")
address.addEventListener("click",function(){
    document.querySelector(".address-form").style.display="flex"
})
dn.addEventListener("click",function(){
    document.querySelector(".dangnhap").style.display="flex"
})
dk.addEventListener("click",function(){
    document.querySelector(".dangki").style.display="flex"
})
dong.addEventListener("click",function(){
    document.querySelector(".address-form").style.display="none"
})
thoat.addEventListener("click",function(){
    document.querySelector(".dangnhap").style.display="none"
})
thoat1.addEventListener("click",function(){
    document.querySelector(".dangnhap").style.display="none"
})
t.addEventListener("click",function(){
    document.querySelector(".dangki").style.display="none"
})
t1.addEventListener("click",function(){
    document.querySelector(".dangki").style.display="none"
})
right.addEventListener("click",function(){
    index=index+1
    if(index>imgsum.length-1){
        index=0
    }
    document.querySelector(".mhtrai-top").style.right=index*100+"%"
})
left.addEventListener("click",function(){
    index=index-1
    if(index<0){
        index=imgsum.length-1
    }
    document.querySelector(".mhtrai-top").style.right=index*100+"%"
})
imgso.forEach(function(anh,index){
    anh.addEventListener("click",function(){
        removeat()
        document.querySelector(".mhtrai-top").style.right=index*100+"%"
        anh.classList.add("active")
    })
})
function removeat(){
    let imgtive=document.querySelector('.active')
    imgtive.classList.remove("active")
}
function chuyenanh(){
    index=index+1
    if(index>imgsum.length-1){
        index=0
    }
    removeat()
    document.querySelector(".mhtrai-top").style.right=index*100+"%"
    imgso[index].classList.add("active")
} 
setInterval(chuyenanh,5000)
document.querySelectorAll('.menu-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
