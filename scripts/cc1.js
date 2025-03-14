function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Astral + Mephisto (sans Moon Dragon)":
		chaine_villes = "2 suicides + Nightstalkers clean up ▲|2 suicides + IX clean up ▲▲▲";
		break;
		case "Conscience collective + Sasquatch (sans Venom)":
		chaine_villes = "Superior 6 + Vautour▲▲▲";
		break;
		case "Illuminati + Thanos EG (sans Mister Fantastic)":
		chaine_villes = "Absolute A-Force suicide + clean up Astral ▲▲▲|PF + Logan + Dormamu + Diablo ▲▲|Cabale + Kang + Odin ▲▲";
		break;
		case "Imperissables + Robbie":
		chaine_villes = "Cabale + Kang + Vautour ▲▲▲";
		break;
		case "Liberty": 
		chaine_villes = "Superior 6 + Vautour (sans Robot) ▲ + clean up";
		break; /* Orchis */
		case "Mephisto + Thanos EG + SK + Kahhori + Miss Marvel Classic": 
		chaine_villes = "2 suicides + Odin et un pre taunt clean up ▲|2 suicides + Nightstalkers clean up ▲";
		break; /* Orchis */
		case "Mighty AV": 
		chaine_villes = "Superior 6 + Vautour▲▲▲";
		break; /* Orchis */
		case "Mighty AV + Morgan (sans Hercules)": 
		chaine_villes = "Superior 6 + Vautour (sans Robot) ▲▲▲|IX ▲▲▲";
		break; /* Orchis */
		case "Mighty AV + Dormamu + Quicksilver (sans Hercules ni Faucon)": 
		chaine_villes = "IX ▲▲▲";
		break; /* Orchis */
		case "Odinati (sans BB)": 
		chaine_villes = "PF + Apo + BK + Echo ▲ + clean up ";
		break; /* Orchis */
		case "Odinati (sans Fantastic)": 
		chaine_villes = "PF + Apo + BK + Echo ▲ + clean up|Mephisto + PF + Apo + Kahhori ▲▲▲|Mephisto + Guardian + Echo + BK + Diablo ▲▲▲|Mephisto + PF + BK + Echo ▲▲▲";
		break; /* Orchis */
		case "Odinati + BK (sans BB ni Fantastic)": 
		chaine_villes = "PF + Apo + BK + Echo ▲ + clean up|2 suicides + Annihilateurs Odin (sans Sufer) clean up ▲▲";
		break; /* Orchis */
		case "Orchis": 
		chaine_villes = "Nightstalkers ▲▲▲";
		break; /* Orchis */
		case "Secret Defenders": 
		chaine_villes = "New Warriors ▲▲(One shot Strange)";
		break; /* Orchis */
		case "Superior 6": 
		chaine_villes = "Cabale + Kang + Titania ▲";
		break; /* Orchis */
					
	}
	
	return chaine_villes;
}

