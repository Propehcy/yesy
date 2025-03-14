function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Illuminati Britain":
		chaine_villes = "PF +Apo + Logan + Diablo ▲▲▲|Illuminati + Apo (sans BB) ▲▲|Cabale + PF ▲▲";
		break;
		case "Imperissables + Mephisto":
		chaine_villes = "Maitres du mal + Odin (sans Ultron) ▲";
		break;
		case "Odinati + Sasquatch (sans BB ni Mister Fantastic)":
		chaine_villes = "PF - BK - Apo - Echo ▲ + clean up";
		break;
		case "Orchis":
		chaine_villes = "Nightstalkers + Crecerelle (sans MK) ▲▲▲|Nightstalkers ▲▲▲|Conscience Collective + SUS (sans Venom) ▲▲▲";
		break;
		case "Orchis + Dormamu (sans Sentinel Omega)": 
		chaine_villes = "Nighstalkers + Ares (sans MK) ▲▲▲";
		break; /* Orchis */
		case "Orchis + Emma Xmen (sans LDS)": 
		chaine_villes = "Nightstalkers + Crecerelle + Emma Frost (sans MK ni Homme Chose ▲▲|Nightstalkers + Crecerelle (sans MK) ▲▲|Nightstalkers + Guardian (sans MK) ▲▲|Nightstalkers + Kang (sans MK) ▲▲|Annihilateurs + Apo (sans Surfer) ▲▲▲";
		break; /* Orchis */
		case "Orchis + Mephisto": 
		chaine_villes = "Annihilateurs + Odin (sans Surfer) ▲▲";
		break; /* Orchis */
		case "Orchis + Mysterio": 
		chaine_villes = "Conscience Collective + SUS (sans Venom) ▲▲▲";
		break; /* Orchis */
		case "Orchis + Strange (sans LDS)": 
		chaine_villes = "Nightstalkers + Crecerelle (sans MK) ▲▲▲";
		break; /* Orchis */
		
		
	}
	
	return chaine_villes;
}