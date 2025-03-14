function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Astral":
		chaine_villes = "IX ▲▲▲|Cabale + Kang + Dormamu ▲▲▲";
		break;
		case "Astral + Dormamu":
		chaine_villes = "Mercenaires argent + Noir (sans Deathpool) ▲▲";
		break;
		case "Gambit + Sunfire + Rogue + Forge + Cyclope":
		chaine_villes = "Superior 6 + Vautour (sans Robot)▲▲";
		break;
		case "Spiders Society":
		chaine_villes = "Superior 6 + Vautour (sans Robot)▲▲▲|Secret Defenders + Cosmic Ghost Rider (no Strange) ▲";
		break;
		case "Spiders Society + Daken (sans Ghost)": 
		chaine_villes = "Logan + Pandapool + Rogue + Miss Marvel Hardlight + Black Cat ▲▲▲";
		break; /* Orchis */
		case "Spiders Society + Mephisto (sans Ghost)": 
		chaine_villes = "2 attaques suicides + Secrets defenders + Cosmic rider (sans Strange) ▲▲|PF + Apo + Mephisto + Sasquatch ▲▲▲";
		break; /* Orchis */
		case "Spiders Society + Mephisto (sans Noir)": 
		chaine_villes = "Superior 6 + Odin (sans Doc Oc) ▲";
		break; /* Orchis */
		case "Spiders Society + Sasquatch": 
		chaine_villes = "2 suicides + Secrets Defenders + CGR clean up ▲▲▲";
		break; /* Orchis */
		case "Spiders Society + Weaver (sans Ghost)": 
		chaine_villes = "IX ▲▲▲|Superior 6 ▲▲▲";
		break; /* Orchis */
		case "Spiders Society + Weaver (sans Pavitr)": 
		chaine_villes = "Superior 6 ▲▲▲|Superior 6 + Vautour (sans robot) ▲|Superior 6 + Mysterio (sans robot) ▲▲▲|IX ▲▲▲";
		break; /* Orchis */
					
	}
	
	return chaine_villes;
}