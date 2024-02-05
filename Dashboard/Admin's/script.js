
document.addEventListener("DOMContentLoaded", function () {
    const psButton = document.querySelector("#nav-bar button:nth-child(1)");
    const assignPOsButton = document.querySelector("#nav-bar button:nth-child(2)");
    const manageDepsButton = document.querySelector("#nav-bar button:nth-child(3)");
    const manageCompButton = document.querySelector("#nav-bar button:nth-child(4)");
    const verifyCitizenButton = document.querySelector("#nav-bar button:nth-child(5)");
    const adminStatisticsButton = document.querySelector("#nav-bar button:nth-child(6)");
    const manageSettingsButton = document.querySelector("#nav-bar button:nth-child(7)");

    const psDivision = document.getElementById("PS");
    const assignPOsDivision = document.getElementById("AssignPOs");
    const manageDepsDivision = document.getElementById("managedeps");
    const manageCompDivision = document.getElementById("managecomp");
    const verifyCitizenDivision = document.getElementById("verifycitizen");
    const adminStatisticsDivision = document.getElementById("adminstatistics");
    const manageSettingsDivision = document.getElementById("manageSettings");

    psButton.addEventListener("click", () => showDivision(psDivision));
    assignPOsButton.addEventListener("click", () => showDivision(assignPOsDivision));
    manageDepsButton.addEventListener("click", () => showDivision(manageDepsDivision));
    manageCompButton.addEventListener("click", () => showDivision(manageCompDivision));
    verifyCitizenButton.addEventListener("click", () => showDivision(verifyCitizenDivision));
    adminStatisticsButton.addEventListener("click", () => showDivision(adminStatisticsDivision));
    manageSettingsButton.addEventListener("click", () => showDivision(manageSettingsDivision));

    function showDivision(division) {
        // Hide all divisions
        hideAllDivisions();

        // Show the selected division
        division.style.display = "block";
    }

    function hideAllDivisions() {
        psDivision.style.display = "none";
        assignPOsDivision.style.display = "none";
        manageDepsDivision.style.display = "none";
        manageCompDivision.style.display = "none";
        verifyCitizenDivision.style.display = "none";
        adminStatisticsDivision.style.display = "none";
        manageSettingsDivision.style.display = "none";
    }
});
