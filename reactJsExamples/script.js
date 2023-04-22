const desplayResult = (target,value, nextLine = "</br>") => {
    document.getElementById(target).innerHTML += nextLine + value;
}