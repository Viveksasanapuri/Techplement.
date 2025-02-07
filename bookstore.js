function searchCourses() {
    let query = document.getElementById('searchQuery').value.trim(); // Get the input value

    if (!query) {
        alert("Please enter a course name.");
        return;
    }

    
    console.log("Search query:", query);

    const urls = {
        "Udemy": `https://www.udemy.com/courses/search/?q=${encodeURIComponent(query)}`,
        "UpGrad": `https://www.upgrad.com/search/all?q=${encodeURIComponent(query)}`,
        "Coursera": `https://www.coursera.org/search?query=${encodeURIComponent(query)}`
    };

    let resultsDiv = document.getElementById('results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'results';
        document.body.appendChild(resultsDiv);
    }
    resultsDiv.innerHTML = "<h2>Search Results:</h2>";

    for (let platform in urls) {
        let link = document.createElement('a');
        link.href = urls[platform];
        link.target = "_blank";
        link.innerText = `Search on ${platform}`;
        resultsDiv.appendChild(link);
    }
}
