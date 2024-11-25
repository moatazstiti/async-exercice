//1
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
        console.log(value);
    }
}
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
//2
async function awaitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve("API data fetched successfully"), 2000);
        });
    };
    const data = await fetchData();
    console.log(data);
}
awaitCall();
//3
async function awaitCallWithErrorHandling() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                success ? resolve("API data fetched successfully") : reject("Failed to fetch API data");
            }, 2000);
        });
    };
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
awaitCallWithErrorHandling();

parallelCalls(["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"]);