              let anchorList = document.querySelectorAll("a.scrolltolink"); 
        anchorList.forEach(link => { 
            link.onclick = function (event) {
                event.preventDefault(); 
                let destination = document.querySelector(this.hash);  
                destination.scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            } 
        }); 