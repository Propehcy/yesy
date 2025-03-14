function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Absolute A-Force Trio + Thanos EG + Pavitr (sans Guepe ni Ironheart)":
		chaine_villes = "Cabale + Apo + BK▲▲▲";
		break;
		case "Annihilateurs + BK + Skrull (sans Surfer ni Ultimus)":
		chaine_villes = "Mercenaires d'argent + Odin (sans Deathpool) ▲▲▲|2 attaques suicides et Nightstalkers + Ares [Passif Nv 6] (sans MK) ▲";
		break;
		case "Annihilateurs + CB + Mephisto (sans Surfer ni Ultimus)":
		chaine_villes = "1 suicide, 1 time out et Nightstalkers + Ares [Passif Nv 6] (sans MK) ▲▲";
		break;
		case "Annihilateurs + Groot + Rocket":
		chaine_villes = "Mercenaires d'argent + Apo (sans Deathpool) ▲▲";
		break;
		case "Annihilateurs + Skrull (sans Surfer)": 
		chaine_villes = "2 attaques suicides et Nightstalkers + Ares [Passif Nv 6] (sans MK) clean up ▲";
		break; /* Orchis */
		case "Annihilateurs + Skrull + Sasquatch (sans Surfer ni Ultimus)": 
		chaine_villes = "2 attaques suicides et Nightstalkers + Ares [Passif Nv 6] (sans MK) ▲|Cabale + Apo + Ultimus et clean up IX ▲▲|Apo + SK + Kahhori + Ultimus + Emma Frost v1 ▲▲";
		break; /* Orchis */
		case "Astral": 
		chaine_villes = "Mercenaires d'argent + Doom (sans Deathpool)▲▲▲";
		break; /* Orchis */
		case "Kahhori + Skrull + Annihilateurs (sans Thanos ni Ultimus)": 
		chaine_villes = "Apo + BK + Kang + Emma frost + Skrull ▲";
		break; /* Orchis */
		case "Nightstalkers + Mephisto (sans Homme chose)": 
		chaine_villes = "Cabale + Kang + Mephisto ▲▲▲|1 suicide, 1 time out et Nightstalkers + Ares [Passif Nv 6] (sans MK) ▲▲";
		break; /* Orchis */
		case "Odinati + JuggZ (sans BB ni Fantastic)": 
		chaine_villes = "PF + Apo + BK + Echo ▲ + clean up";
		break; /* Orchis */
		case "Odinati + Sasquatch (sans BB ni Fantastic)": 
		chaine_villes = "PF + Apo + Echo + Pretaunt ▲ + clean up";
		break; /* Orchis */
		case "Thanos EG + Gladiator + Gorr + Skrull + Doom": 
		chaine_villes = "Cabale + Kang + Guardian ▲ (Impossible ?)";
		break; /* Orchis */
					
	}
	
	return chaine_villes;
}