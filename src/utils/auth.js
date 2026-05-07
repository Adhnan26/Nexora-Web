export const loginUser = (email, password) => {

    if (!email || !password) {
        return null;
    }

    const user = {
        name: email.split("@")[0],
        email,
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    return user;
};

export const logoutUser = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(
        localStorage.getItem("user")
    );
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("user");
};