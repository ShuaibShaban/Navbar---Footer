function userFetcher() {
    let cache = {};
    return function(username) {
        if (cache[username]) {
            return Promise.resolve(cache[username]);
        }
        return fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("User not found");
                }
                return response.json();
            })
            .then(data => {
                cache[username] = data;
                return data;
            });
    };
}

const fetchGitHubUser = userFetcher();
document.getElementById("fetchUser").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const output = document.getElementById("output");
    output.innerHTML = "Loading...";
    
    fetchGitHubUser(username).then(user => {
        output.innerHTML = `
            <div class="user-card">
                <img src="${user.avatar_url}" alt="Avatar">
                <div>
                    <strong>Name:</strong> ${user.name || "N/A"}<br>
                    <strong>Username:</strong> ${user.login}<br>
                    <strong>Followers:</strong> ${user.followers}<br>
                    <strong>Following:</strong> ${user.following}<br>
                    <strong>Public Repos:</strong> ${user.public_repos}
                </div>
            </div>
        `;
    }).catch(error => {
        output.innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
});