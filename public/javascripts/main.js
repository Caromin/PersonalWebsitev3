$(document).ready(function(){
    const slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: 0,
        delay: 0,
        duration: 2000,
        interval: 300,
        viewOffset: {
            bottom: 100
        }
    };

    const slideRight = {
        distance: '150%',
        origin: 'right',
        opacity: 1,
        delay: 0,
        duration: 2000,
        interval: 500,
    }

    // generates the progress bars
    $.ajax({
        url: '../stylesheets/skillset.json',
        datatType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            // first point is which part of the array you are in
            // second param is the data, renamed as anything
            $(data.skills).each(function(index, info){
                let title = info.title;
                let style = info.style;
                let value = info.value;
                let skillProgressBar = 
                    `<div class='marginbottom marginright widthProgressBar slide-up'>
                        <p class='bluetextbold text-uppercase'>${title}</p>
                        <div class='progressBarContainer'>
                            <div class="progress">
                            <div class="progress-bar-animated progress-bar progress-bar-striped" role="progressbar" style="width: ${style}" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>
                        </div>
                    </div>`

                $('#skillset').append(skillProgressBar);
                ScrollReveal().reveal('.slide-up', slideUp);
            })
        }
    });

    // generates the projects section
    $.ajax({
        url: '../stylesheets/languages.json',
        datatType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            // first point is which part of the array you are in
            // second param is the data, renamed as anything
            $(data.projects).each(function(index, info){
                let active = info.active;
                let id = info.id;
                let link = info.link;
                let title = info.title;
                let languages = info.languages;
                var newLanguage = "";
                
                $.each(languages, function(index, value){
                    let language = `
                    <div class='d-flex align-items-center blacktextborder justify-content-center'>
                        ${value}
                    </div>`;

                    newLanguage += language;
                })

                let projectContainer = `
                    <div class='marginbottom d-flex align-items-start flex-column'>
                        <div id='${id}' class='projects'>
                            <a class='fullcover' href='${link}' target="_blank"></a>
                        </div>
                        <div class='marginbottom margintop'>
                            <a id="activeCheck" class='blacktextbold' href='${link}' target="_blank">${title}</a>
                        </div>
                        <div class='width75p d-flex flex-wrap'>
                            ${newLanguage}
                        </div>
                    </div>`;

                if (active === true) {
                    $('#finishedProjects').prepend(projectContainer);
                    $("#activeCheck").html(`<span style="color: red;" class="boldthick">Active:</span> ${title}`);
                } else {
                    $('#finishedProjects').append(projectContainer);
                }    
            })
        }
    });

    ScrollReveal().reveal('.slide-right', slideRight);
});