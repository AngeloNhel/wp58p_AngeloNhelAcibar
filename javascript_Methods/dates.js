const dateFormatter = (target, format) => {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

       let formatDate = format.replace('yyyy',year);
       formatDate = formatDate.replace('mm',month.toString().padStart(2,'0'));
       formatDate = formatDate.replace('dd',day.toString().padStart(2,'0'));    
       
}


const desplayResult = (target,value,nextLine = "</br>") => {
    document.getElementById(target).innerHTML += nextLine + value;

}


