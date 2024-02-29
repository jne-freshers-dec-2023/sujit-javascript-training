

function downloadMovie(url, fn) {
    setTimeout(function() {
        console.log('downloading movie');
        fn();
    }, 2000);
}


downloadMovie('some url', function() {
    console.log('download completed');
    downloadMovie('some url2', function() {
        console.log('download completed');
        downloadMovie('some url3', function() {
            console.log('download completed');
            downloadMovie('some url4', function() {
                console.log('download completed');
                downloadMovie('some url5', function() {
                    console.log('download completed');
                    downloadMovie('some url6', function() {
                        console.log('download completed');
                    });                    
                });                
            });            
        });        
    });    
});
