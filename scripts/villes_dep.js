function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "001":
		chaine_villes = "PF + BK + Diablo + Emma Xmen ▲▲▲ <br> test <br> test";
		break;
		case "26":
		chaine_villes = "Bourg de P&eacute;age|Bourg l&egrave;s Valence|Ch&acirc;teauneuf sur Is&egrave;re|Crest|Dieulefit|Donz&egrave;re|Mont&eacute;limar|Nyons|Pierrelatte|Romans sur Is&egrave;re|Valence";
		break;
		case "38":
		chaine_villes = "Bourgoin Jallieu|Chamrousse|Echirolles|Grenoble|Meylan|Sassenage|Vienne|Voiron|Voreppe";
		break;
		case "69":
		chaine_villes = "Sup6|Ecully|Givors|Lyon|Saint Priest|Ternay|Vaulx-en-Velin|Villefranche-sur-Sa&ocirc;ne|Villeurbanne";
		break;
		case "01": 
		chaine_villes = "Chamb&eacute;ry|Le bourget du lac|Tournon|Voglans";
		break; /* Orchis */
		case "Odinati":
		chaine_villes = "PF + Apo + Echo + BK|Starjammers";
		break;
	}
	
	return chaine_villes;
}

