var data = '{"donne":[{"title":"Gnat By Eminem","imagepath":"../images/gnat.jpg"},{"title":"Like a river By Joyner Lucas","imagepath":"../images/like_a_river.jpg"},{"title":"Middle Child By J-Cole","imagepath":"../images/middle_child_jcole.jpg"},{"title":"Roses By SAINt JHN","imagepath":"../images/roses.jpg"},{"title":"Sweet Child Of Mine By Guns & Roses","imagepath":"../images/guns&roses.jpg"},{"title":"Nothing Else Matters By Metallica","imagepath":"../images/nothing_else_matters.jpg"},{"title":"Thinking Out Loud By Ed Sheeran","imagepath":"../images/thinking_out_loud_ed_sheeran.jpg"},{"title":"Always Remember Us That Way By Lady Gaga","imagepath":"../images/always_remember_us_that_way.jpg"}]}';

var json = JSON.parse(data);



document.addEventListener('DOMContentLoaded', function () {
        for (let i=1 ; i<9;i++){
            document.getElementById('title-'+i).innerHTML = json.donne[i-1].title
            document.getElementById('image-'+i).src = json.donne[i-1].imagepath
        }
   
});

document.addEventListener('DOMContentLoaded', function () {
    
     document.getElementById('1').onclick = myFunction(1);
    
    

});

function myFunction(i){
    document.getElementById('greet').innerHTML = json.donne[i].title
}

