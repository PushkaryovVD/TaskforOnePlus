document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector("#coinTable tbody");

            data.forEach((coin) => {
                const { id, symbol, name } = coin;
                const newRow = document.createElement("tr");
                newRow.innerHTML = `<td>${id}</td><td>${symbol}</td><td>${name}</td>`;
                
                if (symbol === "usdt") {
                    newRow.style.backgroundColor = "green"; // Устанавливаем зеленый фон для usdt
                } else if (data.indexOf(coin) < 5) {
                    newRow.style.backgroundColor = "blue"; // Устанавливаем синий фон для первых 5 валют
                }

                tableBody.appendChild(newRow);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
