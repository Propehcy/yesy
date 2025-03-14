function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Astral":
		chaine_villes = "Cabale + Kang + Doom ▲▲▲|Mercenaires argent ▲▲▲";
		break;
		case "IX (sans Cable ni Polaris)":
		chaine_villes = "IX ▲▲▲";
		break;
		case "Xtrem X-men + Rogue (sans Cyclope)":
		chaine_villes = "Cabale Kang Titania ▲▲▲|IX ▲▲▲";
		break;
		case "Xtrem X-men + Rogue (sans Diablo)":
		chaine_villes = "Cabale Kang Titania ▲▲▲|IX ▲▲▲|Spiders Society + Black Cat (sans Noir) ▲▲▲";
		break;
		case "Xtrem X-men + Rogue (sans Solar)": 
		chaine_villes = "Cabale Kang Titania ▲▲▲|Superior 6 + Vautour (sans Anti-Araignée) ▲▲▲ |IX ▲▲▲ |Cabale + Dormamu + Black Cat ▲▲|PF + Kang + Titania + Dormamu ▲▲|PF + Logan + Polaris + Cable ▲▲▲|Mercenaires argent ▲▲▲|Astral + Kang (sans Emma) ▲▲▲|Logan + Daken + Pandapool + Weaver + Spiderman 2099 ▲▲▲";
		break; /* Orchis */
		
		
	}
	
	return chaine_villes;
}