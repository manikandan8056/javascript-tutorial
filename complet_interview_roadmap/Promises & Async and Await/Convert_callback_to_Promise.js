// Suppose you have an old callback-based function:

function getUser(callback) {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Mani"
        };

        callback(null, user);
    }, 1000);
}

// Usage:

getUser((error, user) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(user);
});

// We can convert it into a Promise:

function getUserPromise() {
    return new Promise((resolve, reject) => {
        getUser((error, user) => {
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        });
    });
}

// Now:

getUserPromise()
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });

// Or:

async function execute() {
    try {
        const user = await getUserPromise();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
// Node.js interview point

// Node.js commonly uses the error-first callback pattern:

callback(error, result);

// Promises convert this into:

resolve(result);
reject(error);