module.exports = {
    sortContent: (content, preferences) => {
        console.log("preferences:");
        console.log(preferences);
        console.log("content:");
        console.log(content);
        content.map(cont => {
            cont.score = 0;
            let tags = cont.contentTags;
            for(let i=0; i<tags.length; i++){
                switch(tags[i]){
                    case 'housing':
                        if(preferences.housing == 1){
                            cont.score++;
                        }
                    break;

                    case 'publicSpaces':
                        if(preferences.publicSpaces == 1){
                            cont.score++;
                        }
                    break;
                    
                    case 'healthAndWellness':
                        if(preferences.healthAndWellness == 1){
                            cont.score++;
                        }
                    break;

                    case 'transportation':
                        if(preferences.transportation == 1){
                            cont.score++;
                        }
                    break;

                    case 'education':
                        if(preferences.education == 1){
                            cont.score++;
                        }
                    break;

                    case 'environment':
                        if(preferences.education == 1){
                            cont.score++;
                        }
                    break;

                    case 'economicDevelopment':
                        if(preferences.education == 1){
                            cont.score++;
                        }
                    break;
                }
            }
        })

        //insertion sort the content based on score for each piece
        for(let i=1; i<content.length; i++){
            let key = content[i].score;
            let j = i - 1;

            console.log("key value for content in position " + i + " of content array:");
            console.log(key);

            while(j >= 0 && content[j].score < key){
                //swap to left
                content[j+1] = content[j];
                j--;
                console.log("made swap");
            }
            console.log("content arr after first loop through sorting:");
            console.log(content);
        }

        console.log("content array after sorting:");
        console.log(content);
    }
}