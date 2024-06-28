export const login = async () => {
    const url = "http://localhost:3000/api/auth/login";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            password: "asfd",
            email: "email de prueba"
        })
    });
    const data = await response.json();
    return data;
}