function PokazSekcje(ShowID) {
    const allsection = document.querySelectorAll(".Section");
    allsection.forEach(Section => {
        if (Section.id === ShowID) {
            if (Section.style.display === "block") {
                Section.style.display = "none"; // ukryj, jeśli już widać
            } else {
                Section.style.display = "block"; // pokaż, jeśli jest ukryta
            }
        } else {
            Section.style.display = "none"; // wszystkie inne sekcje ukryj
        }
    });
}

document.getElementById("About").addEventListener("click", () => {
    PokazSekcje("ProjectsBar");
});
document.getElementById("Watch").addEventListener("click", () => {
    window.open('https://youtube.com/playlist?list=PL_HWI71S0ZLPn08iKxRPcRW0MsfB7nMKQ&si=qjTk7L9eH_0SJSoo', '_blank')
});
document.getElementById("Info").addEventListener("click", () => {
    PokazSekcje("InfoBar")
});
document.getElementById("Calendar").addEventListener("click", () => {
    PokazSekcje("CalendarBar");
});
document.getElementById("Howplay").addEventListener("click", () => {
    PokazSekcje("TutorialBar");
});
document.getElementById("ReportBug").addEventListener("click", () => {
    PokazSekcje("BugBar");
});
document.getElementById("Game").addEventListener("click", () => {
    window.open('https://forms.gle/QR9oZ2Q8YgB4ZR1NA', '_blank')
});
document.getElementById("Website").addEventListener("click", () => {
    window.open('https://forms.gle/iAqeB9XUxC5Pq2a6A', '_blank')
});
document.getElementById("Changelog").addEventListener("click", () => {
    PokazSekcje("ChangelogBar");
});
document.getElementById("calendarbuttongamedev1").addEventListener("click", () => {
    window.open('https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fdiscord.com%2F&source_ve_path=MTM5MTE3LDEzOTExNywxMzkxMTcsMzY4NDIsMTY0OTksMjg2NjQsMTY0NTAz&v=_Ws4QrdT55s&feature=youtu.be', '_blank')
});
document.getElementById("Contact").addEventListener("click", () => {
    PokazSekcje("ContactBar");
});
document.getElementById("discord").addEventListener("click", () => {
    window.open('https://discord.gg/nUAGXFyMWm', '_blank')
});