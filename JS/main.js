let user = document.querySelector(".username") ,
button = document.querySelector(".btn") ,
repos = document.querySelector(".data");

function getRepos() {
    console.log("function")
}

button.onclick = ()=> {
    if(user.value === "") {
        repos.innerHTML = "<span>Enter the User Name Please</span>";
    }
    else {
        fetch(`https://api.github.com/users/${user.value}/repos`)
        .then((res)=>{
            return res.json();
        })
        .then((repo)=>{
            repos.innerHTML = "";
            repo.forEach((ele) => {
                let mainDiv = document.createElement("div"),
                repoName = document.createTextNode(ele.name),
                right = document.createElement("div"),
                theUrl = document.createElement("a"),
                urlName = document.createTextNode("visit");
                
                theUrl.href = `https://github.com/${user.value}/${ele.name}`;
                theUrl.setAttribute("target" , "_blank");
                theUrl.appendChild(urlName);

                let stars = document.createElement("span"),
                starsText = document.createTextNode(`${ele.stargazers_count} stars`);
                stars.appendChild(starsText);

                stars.className = "stars";
                mainDiv.className = "mainDiv";
                theUrl.className = "theUrl";
                right.className = "right";

                mainDiv.appendChild(right);
                right.appendChild(stars);
                right.appendChild(theUrl);
                mainDiv.prepend(repoName);
                repos.appendChild(mainDiv);
            });
            
                //ElzeroWebSchool

        });

        
    }
}