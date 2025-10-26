//Смена языка
        let lang = 0;
        document.getElementById("lang-change").onclick = function(){
            const langRu = document.querySelectorAll(".ru");
            const langEn = document.querySelectorAll(".en");
			offset=9999999;
            switch(lang){
                case 0:
                    for (var i = 0; i < langRu.length; i++ ) {
                        langRu[i].style.display = "none";
                    }
                    for (var i = 0; i < langEn.length; i++ ) {
                        langEn[i].style.display = "block";
                    }
                    lang = 1;
                    break;
                case 1:
                    for (var i = 0; i < langRu.length; i++ ) {
                        langRu[i].style.display = "block";
                    }
                    for (var i = 0; i < langEn.length; i++ ) {
                        langEn[i].style.display = "none";
                    }
                    lang = 0;
                    break;
            }
        }
		//Описания
		
		//const move = document.getElementById("description");

		//document.body.onpointermove = event => {
			//const { clientX, clientY } = event;

			//move.animate({
			//	left: `${clientX}px`,
			//	top: `${clientY}px`
			
			//}, {duration: 0, fill: "forwards"})

		//}
		
		
		let offset = 0;
        let offcoord = 0;
		offset = window.pageYOffset;
		if (document.documentElement.clientWidth > 1015) {
			if(window.pageYOffset > 10){
				header.style = "background-color:#4F5C6B; box-shadow: 0px 0.3rem 1rem 0.3rem #080B0F7F;";
				nav.style = "color:#111924;";
			}
			else{
				header.style = "background-color:#4F5C6B00; box-shadow: none;";
				nav.style = "color:#FFFFFFCC;";
			}
		}
        window.addEventListener('scroll', function(){
            //const download = document.getElementById("download");
			const nav = document.getElementById("nav");
            const header = document.getElementById("header");
            //const titles = document.getElementById("titles");
			let direction = offset <= window.pageYOffset;

			//offcoord = Math.min(Math.max(offcoord + window.pageYOffset - offset, 0), 48);
            //header.style.setProperty("--offset", -offcoord + "px");

			if (document.documentElement.clientWidth > 1015) {
				if(window.pageYOffset > 20){
					header.style = "background-color:#4F5C6B; box-shadow: 0px 0.3rem 1rem 0.3rem #080B0F7F;";
					nav.style = "color:#111924;";
				}
				else{
					header.style = "background-color:#4F5C6B00; box-shadow: none;";
					nav.style = "color:#FFFFFFCC;";
				}
			}

			offset = window.pageYOffset;
		});
		
			// if (document.documentElement.clientWidth > 1120) {
				// if(window.pageYOffset > 2500){
					// download.style.display = "none";
				// }
				// else if(window.pageYOffset > 2100){
					// download.style = "opacity: 0%; display:inherit;";
				// }
				// else{
					// download.style = "opacity: 100%; display:inherit;";
				// }
			// }
		
        // function search(){
            // input = document.getElementById("search").value;
			// offset=9999999;
            // if(input != ''){
                // document.getElementById("section-instructions").style.display = "none";
                // document.getElementById("section-logo").style.display = "none";
                // document.getElementById("section-main-container").style.display = "none";
                // input = '/'+input+'/g';
            // }
            // else{
                // document.getElementById("section-instructions").style.display = "block";
                // document.getElementById("section-logo").style.display = "block";
                // document.getElementById("section-main-container").style.display = "block";
            // }
            // return input;
        // }