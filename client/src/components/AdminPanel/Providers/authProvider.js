
const authProvider = {
    login: ({ username }) => {

        return Promise.resolve();
    },
    logout: () => {
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
};

export default authProvider;