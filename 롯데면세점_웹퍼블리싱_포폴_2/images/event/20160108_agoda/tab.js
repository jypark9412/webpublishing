function agodaTab(input){
	var tab1 = document.getElementById("agoda_tab1");
	var tab2 = document.getElementById("agoda_tab2");
	var tab3 = document.getElementById("agoda_tab3");
	var tab4 = document.getElementById("agoda_tab4");
	var tab5 = document.getElementById("agoda_tab5");
	var tab6 = document.getElementById("agoda_tab6");

	var tab1_img = document.getElementById("tab1_img");
	var tab2_img = document.getElementById("tab2_img");
	var tab3_img = document.getElementById("tab3_img");
	var tab4_img = document.getElementById("tab4_img");
	var tab5_img = document.getElementById("tab5_img");
	var tab6_img = document.getElementById("tab6_img");

	tab1.style.display = "none";
	tab2.style.display = "none";
	tab3.style.display = "none";
	tab4.style.display = "none";
	tab5.style.display = "none";
	tab6.style.display = "none";
	
	document.getElementById(input).style.display = "block";
	
	tab1_img.src = "tab_01_off.png";
	tab2_img.src = "tab_02_off.png";
	tab3_img.src = "tab_03_off.png";
	tab4_img.src = "tab_04_off.png";
	tab5_img.src = "tab_05_off.png";
	tab6_img.src = "tab_06_off.png";

	if (input == "agoda_tab1") tab1_img.src ="tab_01_on.png";
	if (input == "agoda_tab2") tab2_img.src ="tab_02_on.png";
	if (input == "agoda_tab3") tab3_img.src ="tab_03_on.png";
	if (input == "agoda_tab4") tab4_img.src ="tab_04_on.png";
	if (input == "agoda_tab5") tab5_img.src ="tab_05_on.png";
	if (input == "agoda_tab6") tab6_img.src ="tab_06_on.png";

	return false;
}