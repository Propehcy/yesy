function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "A-Force Absolute":
		chaine_villes = "PF + BK + Diablo + Emma Xmen ▲▲▲|IX▲▲▲ (Pas ult avant Tornade)|Cabale + BK + 1 ▲▲";
		break;
		case "A-Force Absolute + SUS (sans IH)":
		chaine_villes = "Cabale + BK + SuS ▲▲▲";
		break;
		case "Gladiator + Gorr + Ultimus + SUS + Cap Sam":
		chaine_villes = "IX ▲▲▲ (Pas ult avant Tornade)";
		break;
		case "Mephisto + SK + BK + Pavitr + Kahhori":
		chaine_villes = "2 suicides + IX clean up ▲▲|2 suicides + PF + Logan + Gorr + Emma X-men clean up ▲";
		break;
		case "Mighty AV": 
		chaine_villes = "IX ▲▲▲";
		break; /* Orchis */
		case "Odinati (sans BB)":
		chaine_villes = "PF - BK - Apo - Echo ▲ + clean up|Starjammers ▲ + clean up";
		break;
		case "Odinati (sans Fantasctic)":
		chaine_villes = "PF + Apo + Echo + Pretaunt + clean up ▲▲|Starjammers ▲ + clean up";
		break;
		case "Odinati + Sasquatch (sans BB ni Fantastic)":
		chaine_villes = "PF + Apo + Echo + Pretaunt + clean up ▲▲|Starjammers ▲ + clean up";
		break;
		case "Odinati + Skrull + Sasquatch (sans BB ni Fantastic ni CB)":
		chaine_villes = "GGC + Vautour + Doc Oc + Apo + BK ▲";
		break;
		case "Orchis":
		chaine_villes = "IX ▲▲▲ (Pas ult avant Tornade)|Cabale Kang Titania ▲▲▲ (Pas ult avant Namor)|Conscience Collective + SUS (sans Venom) ▲▲▲";
		break;
		case "Secrets Defender + Dormamu + SK (sans Black Cat ni Robbie)":
		chaine_villes = "Cabale Kang Titania ▲▲▲ |Superior 6 + Véga + Vautour (sans Anti-Araignée ni Lizard) ▲▲ |Nightstalkers + BK (sans Homme chose)▲";
		break;
		case "Skrull + Thanos EG + Gladiator + Kahhori + Miss Marvel Classic":
		chaine_villes = "IX (pas ult avant Tornade tour 2) ▲▲▲";
		break;
		case "Spiders society":
		chaine_villes = "Sup 6 ▲▲▲|IX ▲▲▲|Cabale Kang Titania ▲";
		break;
		case "Xtrem X-men + Rogue (sans Cyclope)":
		chaine_villes = "Cabale Kang Titania ▲▲▲";
		break;
		
	}
	
	return chaine_villes;
}


