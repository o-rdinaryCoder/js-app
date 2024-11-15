function fetchWebsiteData() {
    const url = "https://finance-tracker-sc33.onrender.com/auth"; 
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Website content fetched successfully:", data);
            // Process the data as needed
        })
        .catch(error => {
            console.error("Error fetching website data:", error);
        });
}


setInterval(fetchWebsiteData, 300000);


fetchWebsiteData();
