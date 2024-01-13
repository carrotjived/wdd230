
const currentDate = new Date();
const lastModified = new Date(document.lastModified)


document.getElementsByTagName("p")[0].innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`; 
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;