 // Recupère le contenu du DOM - attention: crée plusieurs éléments
 sections = document.querySelectorAll("main > section")
 
 // On boucle sur toutes les sections pour extraire innerText
 for (var i = 0; i<(sections.length)-1 ; i++){
    text_sections += sections[i].innerText;    
}
sections = sections.replaceAll("\n"," ")