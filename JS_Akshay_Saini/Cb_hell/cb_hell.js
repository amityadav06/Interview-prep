// ================================================================================================================
//                                 Call back hell example
// ================================================================================================================


getUser(id, function(err, user) {
    if (err) {
        console.error(err);
    } else {
        getPosts(user.id, function(err, posts) {
            if (err) {
                console.error(err);
            } else {
                getComments(posts[0].id, function(err, comments) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(comments);
                    }
                });
            }
        });
    }
});

// ================================================================================================================
//                    Callback hell to Promise chaning
// ================================================================================================================
function getUser(id) {
    return new Promise((resolve, reject) => {
        // Simulate an async operation
        setTimeout(() => {
            const user = { id, name: 'John Doe' }; // Example user
            resolve(user);
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        // Simulate an async operation
        setTimeout(() => {
            const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
            resolve(posts);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise((resolve, reject) => {
        // Simulate an async operation
        setTimeout(() => {
            const comments = [{ id: 1, text: 'Great post!' }, { id: 2, text: 'Thanks for sharing!' }];
            resolve(comments);
        }, 1000);
    });
}

// Using the functions
getUser(id)
    .then(user => {
        return getPosts(user.id);
    })
    .then(posts => {
        return getComments(posts[0].id);
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(err => {
        console.error(err);
    });
