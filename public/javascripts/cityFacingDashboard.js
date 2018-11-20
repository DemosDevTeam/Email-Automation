$(()=>{
    let eventCount = 1;
    let councilCount = 1;
    let townCount = 1;
    let actionCount = 1;

    let addform = (selector,count,deleteName)=>{
        $(selector).append('<div id="'+deleteName+''+count+'" class="box">\n' +
            '        <button id='+deleteName+'Delete'+ count+' type="button" class="btn btn-danger position">Remove Content Block</button>\n'+
            '                <br>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Title</label>\n' +
            '                    <input type="text" class="form-control" placeholder="Title" name="title">\n' +
            '                </div>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Text</label>\n' +
            '                    <input type="text" class="form-control" placeholder="Text" name="text">\n' +
            '                </div>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Associated Media</label>\n' +
            '                    <input type="file" class="form-control" placeholder="Choose File" name="associatedMedia">\n' +
            '                </div>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Links To Video & External Pages</label>\n' +
            '                    <input type="text" class="form-control" placeholder="Links" name="links">\n' +
            '                </div>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Content Tags</label>\n' +
            '                    <select id="dataPicker" class="form-control" multiple  name="contentTags">\n' +
            '                        <option value="Housing">Housing</option>\n' +
            '                        <option value="Public Spaces">Public Spaces</option>\n' +
            '                        <option value="Health and Wellness">Health and Wellness</option>\n' +
            '                        <option value="Transportation">Transportation</option>\n' +
            '                        <option value="Education">Education</option>\n' +
            '                        <option value="Environment">Environment</option>\n' +
            '                        <option value="Economic Development">Economic Development</option>\n' +
            '                    </select>\n' +
            '                </div>\n' +
            '                <div class="form-group">\n' +
            '                    <label>Associated Questions</label>\n' +
            '                    <input type="text" class="form-control" placeholder="Associated Questions" name="associatedQuestions">\n' +
            '                </div>\n' +
            '            </div>\n')
    };


    $("#addEvents ").click(()=> {
        addform('#events', ++eventCount,"events");
    });

    $("#events").on("click","button[id^='eventsDelete']",(e)=>{
        let num = e.target.id.match(/[0-9]+/g);
        $("#events"+num[0]).remove();
        eventCount= eventCount-1;
    });

    $("#addCouncilUpdates").click(()=> {
        addform('#council', ++councilCount,"council");
    });

    $("#council").on("click","button[id^='councilDelete']",(e)=>{
        // let id = $(this).attr('id');
        let num = e.target.id.match(/[0-9]+/g);
        $("#council"+num[0]).remove();
        councilCount= councilCount-1;

    });

    $("#addContentTags").click(()=> {
        addform('#town', ++townCount,"town");

    });

    $("#town").on("click","button[id^='townDelete']",(e)=>{
        let num = e.target.id.match(/[0-9]+/g);
        $("#town"+num[0]).remove();
        townCount= townCount-1;


    });

    $("#addCommunityAction ").click(()=> {
        addform('#action', ++actionCount,"action");

    });

    $("#action").on("click","button[id^='actionDelete']",(e)=>{
        let num = e.target.id.match(/[0-9]+/g);
        $("#action"+num[0]).remove();
        actionCount= actionCount-1;

    });

    let called = 0;
    let ajax_recaller = (forms)=>{
        $.ajax({
            type: "POST",
            data: forms[called].serialize(),
            url: forms[called].attr('action'),
            success: (data)=> {
                called++;

                if(called < forms.length) {
                    ajax_recaller(forms);
                } else {
                    called=0;
                    alert('All forms has been submitted!');
                }

            }
        });

    };


    $(document).on('click','#submitForm',function(){
        let x=0;

        let forms=[];
        $('.ajax_form').each(function(){
            forms[x] = $(this);
            x++;
        });
        ajax_recaller(forms);
    });


});
