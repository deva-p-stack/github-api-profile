import './style.css'




let desc = document.querySelector('.desc');
let con = document.querySelector('.con');
let image = document.querySelector('.image');
let profile_name = document.querySelector('.profile_name');
let twobtn = document.querySelector('.twobtn');
let followingf = document.querySelector('.Following');
let repof = document.querySelector('.repo');

const APIURL = "https://api.github.com/users/";

const search = document.getElementById("name");
const subbtn = document.querySelector(".subbtn");


subbtn.addEventListener("click", function () {
    const searchValue = search.value; 

   

    fetch(APIURL + searchValue)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);

            con.classList.remove("hidden");

            let img = document.createElement('img');
            img.src = data.avatar_url;
            img.width= 120;
            img.className="border mt-5 rounded-full border border-4 border-gray-300  "

            let name = document.createElement('h2');
            name.textContent = data.login;
            name.className = "text-2xl font-medium mx-auto  ";

            let bio = document.createElement('h3');
            bio.textContent = data.bio;


            let followers = document.createElement('p');
            followers.textContent = data.followers;  
            followers.className = " px-4 py-2 text-lg  flex gap-2  rounded-xl ";
            

            let following = document.createElement('p');
            following.textContent = data.following ;
            following.className = "px-4 py-2 text-lg  flex gap-2  rounded-xl";

            let repo = document.createElement('p');
            repo.textContent = data.public_repos;
            repo.className = "px-4 py-2 text-lg  flex gap-2  rounded-xl";



            let locationg = document.createElement('h3');
            locationg.textContent = "🌍 "+ data.location;

            image.append(img);
            profile_name.append(name);
           desc.append(bio);
            con.append(locationg);
             twobtn.append(followers);
             followingf.append(following);
             repof.append(repo);



        })
.catch((error) => console.error(err));
        
});












