let users =[
   {
      identite : {nom: "Adili", prenom:"Tarik", genre :"H"},
      profil : "Stagiaire",
      specialite :"DD",
      classe : "102",
      notes :{M101 : 10, M102: 14, M103: 17}
  }  
  ,
  {
   identite : {nom: "Essalih", prenom:"Hiba", genre :"F"},
   profil : "Stagiaire",
   specialite :"IX",
   classe : "102",
   notes :{M101 : 14, M102: 17, M103: 15}
},
 {
   identite : {nom: "Adili", prenom:"Adil", genre :"H"},
   profil : "Stagiaire",
   specialite :"IA",
   classe : "102",
   notes :{M101 : 12, M102: 14, M103: 17}
}  
, 
{
   identite : {nom: "Zaher", prenom:"Niamat Allah", genre :"F"},
   profil : "Stagiaire",
   specialite :"ID",
   classe : "102",
   notes :{M101 : 12, M102: 14, M103: 16}
}  
,
]
let specialites = ["Développement Digital", "UI/UX", "Infrastructure Digital", "Intéligence Artificielle"]

i = 0;
const afficher = () => {
   if (i % 2 == 0) {
      document.getElementById("form").style.display = "flex";
      document.getElementById("st_cards").style.display = "none";
   } else {
      document.getElementById("form").style.display = "none";
      document.getElementById("st_cards").style.display = "flex";
   }
   i++;
   document.getElementById('modify').style.display = 'none'
   document.getElementById('ajouter').style.display = 'block'
};
const moyy = (n) => {
   let note1 = Number(n.M101)
   let note2 = Number(n.M102)
   let note3 = Number(n.M103)
   let moy = (note1 + note2 + note3) / 3
   return moy.toFixed(2)
}

 const affichercards = () => {
   let info ="";
    users.map((u,i) => {
   info+= `<div class="card col-2 blue" id="st_card" style="background-color:${u.identite.genre === 'H' ? 'rgb(144, 182, 254)' : u.identite.genre==='F'? 'rgb(242, 214, 180)':'rgb(255, 255, 255)'}">
        <div class="edit">
           <button onclick="supprimer(${i})"><img src="./trash-removebg-preview.png" alt=""></button>
           <button onclick="modifier(${i})"><img src="./edit-removebg-preview.png" alt=""></button>
        </div>
        <div>
           <img src="${u.identite.genre === 'H'? src='./derry-removebg-preview.png' : src='./Capture_d_écran_2024-03-26_113618-removebg-preview.png'}"class="${u.identite.genre === 'H' ? 'derry' : 'bent'}" >
           <h2 id="nom" style="color:${u.identite.genre === 'H' ? 'rgb(106, 106, 232)' : 'chocolate'}">${u.identite.nom} ${u.identite.prenom}</h2>
           <h3 id="grp">Stagiaire - ${u.specialite}${u.classe}</h3>
           <h4 id="moyenne" style="background-color:${u.identite.genre === 'H' ? 'rgb(216, 230, 255)' :u.identite.genre === 'F' ? 'rgb(254, 236, 214)':'rgb(255, 255, 255)'}"><span id="rank" style="background-color:${u.identite.genre === 'H' ? 'rgb(106, 106, 232)' :u.identite.genre === 'F'? 'chocolate':'white'}">#${i+1} </span> Moyenne: ${moyy(u.notes)}</h4>
        </div>
     </div>`
   });
 
   document.getElementById("st_cards").innerHTML = info
 };
affichercards()

const Developpementsort = () => {
   const DDUsers = users.filter(user => user.specialite === "DD")
   affichercards2(DDUsers)
}
const IXsort = () => {
   const IXUsers = users.filter(user => user.specialite === "IX")
   affichercards2(IXUsers)
}
const Infrastructuresort = () => {
   const IDUsers = users.filter(user => user.specialite === "ID")
   affichercards2(IDUsers)
}
const IAsort = () => {
   const IAUsers = users.filter(user => user.specialite === "IA")
   affichercards2(IAUsers)
}
const affichercards2 = (utd) => {
   let info = ""
   utd.map((u,i) => {
     info+= `<div class="card col-2 blue" id="st_card" style="background-color:${u.identite.genre === 'H' ? 'rgb(144, 182, 254)' : u.identite.genre==='F'? 'rgb(242, 214, 180)':'rgb(255, 255, 255)'}">
        <div class="edit">
           <button onclick="supprimer(${i})"><img src="./trash-removebg-preview.png" alt=""></button>
           <button onclick="modifier(${i})"><img src="./edit-removebg-preview.png" alt=""></button>
        </div>
        <div>
           <img src="${u.identite.genre === 'H'? src='./derry-removebg-preview.png' : src='./Capture_d_écran_2024-03-26_113618-removebg-preview.png'}"class="${u.identite.genre === 'H' ? 'derry' : 'bent'}" >
           <h2 id="nom" style="color:${u.identite.genre === 'H' ? 'rgb(106, 106, 232)' : 'chocolate'}">${u.identite.nom} ${u.identite.prenom}</h2>
           <h3 id="grp">Stagiaire - ${u.specialite}${u.classe}</h3>
           <h4 id="moyenne" style="background-color:${u.identite.genre === 'H' ? 'rgb(216, 230, 255)' :u.identite.genre === 'F' ? 'rgb(254, 236, 214)':'rgb(255, 255, 255)'}"><span style="background-color:${u.identite.genre === 'H' ? 'rgb(106, 106, 232)' :u.identite.genre === 'F'? 'chocolate':'white'}">#${i+1} </span> Moyenne: ${moyy(u.notes)}</h4>
        </div>
     </div>`
   });
 
   document.getElementById("st_cards").innerHTML = info
 };
const ajouter=()=>{
   document.getElementById('form').style.display = 'none'
   document.getElementById('warning').style.display = 'none'
   document.getElementById('st_cards').style.display = 'flex'

let name =document.getElementById("name").value
let prenom =document.getElementById("prenom").value
let genre=document.getElementById("genre").value
let specialite=document.getElementById("specialite").value
let classe=document.getElementById("classe").value
let M101=Number(document.getElementById("M101").value)
let M102=Number(document.getElementById("M102").value)
let M103=Number(document.getElementById("M103").value)


let newUser = {
   identite: { nom: name, prenom: prenom, genre: genre },
   profil: "Stagiaire",
   specialite: specialite,
   classe: classe,
   notes: { M101: M101, M102: M102, M103: M103 }
 };
 users.push(newUser);
 document.getElementById("name").value = "";
 document.getElementById("prenom").value = "";
 document.getElementById("genre").value = "";
 document.getElementById("specialite").value = "";
 document.getElementById("classe").value = "";
 document.getElementById("M101").value = "";
 document.getElementById("M102").value = "";
 document.getElementById("M103").value = "";
affichercards()
i++
}

// const supprimer = (user) => {
//    // users.map((u) => {
//       // document.getElementById("n&p").innerHTML = `${user.identite.nom} ${user.identite.prenom}`
//    // })
//    document.getElementById("warning").style.display = "block"
//    document.getElementById("st_cards").style.display = "none"

// }
// const confirmer = () => {
//    let sup = prompt("Entrez l'indice de l'element que vous souhaiter supprimer")
//    let index= Number(sup)

//    document.getElementById("st_card").remove()
//    document.getElementById("warning").style.display = "none"
//    document.getElementById("st_cards").style.display = "flex"
//    users.splice(index, 1);
// affichercards();
// }
function supprimer(i){
   document.getElementById("warning").innerHTML=`
   <img src="./warning-removebg-preview.png" alt="warning">
         <p class="text-primary">Voulez vous vraiment supprimer le stagiaire <span id="n&p">${users[i].identite.nom} ${users[i].identite.prenom}</span>?</p>
         <div>
            <button onclick="confirmer()" class="btn btn-primary btn-lg">Confirmer</button>
            <button onclick="annuler()" class="btn btn-secondary btn-lg">Annuler</button>
         </div>
   `
   users[i].supprimer=true
   document.getElementById("warning").style.display="block"
   document.getElementById("st_cards").style.display="none"
}
function confirmer(i){
for(i in users){
   if(users[i].supprimer==true){
       users.splice(i,1)
   }
document.getElementById("warning").style.display = "none"
document.getElementById("st_cards").style.display = "flex"
affichercards()
}
}
const annuler = () => {
   document.getElementById("warning").style.display = "none"
   document.getElementById("st_cards").style.display = "flex"
}

const modifier = (i) => { 
   document.getElementById("name").value = users[i].identite.nom;
   document.getElementById("prenom").value = users[i].identite.prenom;
   document.getElementById("genre").value = users[i].identite.genre;
   document.getElementById("specialite").value = users[i].specialite;
   document.getElementById("classe").value = users[i].classe;
   document.getElementById("M101").value = users[i].notes.M101;
   document.getElementById("M102").value = users[i].notes.M102;
   document.getElementById("M103").value = users[i].notes.M103;
   users[i].modifier=true
   document.getElementById("form").style.display = "flex";
   document.getElementById("st_cards").style.display = "none";
   document.getElementById("ajouter").style.display = "none";
   document.getElementById("modify").style.display = "block";
};

const modifyy = (i)=>{
for(i=0;i<users.length;i++){
   if(users[i].modifier==true){
      users[i].identite={
         nom:document.getElementById("name").value, 
         prenom:document.getElementById("prenom").value, 
         genre:document.getElementById("genre").value,
    };
    users[i].profil="stagiaire",
    users[i].specialite=document.getElementById("specialite").value,
    users[i].classe=document.getElementById("classe").value,
    users[i].notes={
      M101 :Number(document.getElementById("M101").value),
      M102:Number(document.getElementById("M102").value),
      M103: Number(document.getElementById("M103").value)
    }
   users[i].modifier=false
   }

}
document.getElementById("name").value = "";
document.getElementById("prenom").value = "";
document.getElementById("genre").value = "";
document.getElementById("specialite").value = "";
document.getElementById("classe").value = "";
document.getElementById("M101").value = "";
document.getElementById("M102").value = "";
document.getElementById("M103").value = "";
affichercards()
document.getElementById("st_cards").style.display="flex"
document.getElementById("form").style.display="none"
}




