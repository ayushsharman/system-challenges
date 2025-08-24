const apiKey = "d42ba8f42emsh97817a01de27f1ap1640c7jsn92910a3e996d";

document.getElementById("getWeather").addEventListener("click", async () => {
    const cityInput = document.getElementById("city").value;
    const [lat, lon] = cityInput.split(",");

    if (!lat || !lon) {
        document.getElementById("weatherResult").innerText = "❌ Please enter latitude and longitude.";
        return;
    }

    const url = `https://meteostat.p.rapidapi.com/point/monthly?lat=${lat.trim()}&lon=${lon.trim()}&alt=43&start=2020-01-01&end=2020-12-31`;

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "meteostat.p.rapidapi.com"
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
            const months = data.data.map(entry => {
                const date = new Date(entry.date);
                const monthName = date.toLocaleString("default", { month: "long" });

                return `
            <tr>
                <td>${monthName}</td>
                <td>${entry.tavg !== null ? entry.tavg + " °C" : "N/A"}</td>
                <td>${entry.prcp !== null ? entry.prcp + " mm" : "N/A"}</td>
            </tr>
        `;
            }).join("");

            document.getElementById("weatherResult").innerHTML = `
        <table border="1" style="margin:0 auto;">
            <tr><th>Month</th><th>Avg Temp</th><th>Precipitation</th></tr>
            ${months}
        </table>
    `;
        } else {
            document.getElementById("weatherResult").innerText = "No data found.";
        }

    } catch (error) {
        console.error(error);
        document.getElementById("weatherResult").innerText = "⚠ Error fetching data.";
    }
});
