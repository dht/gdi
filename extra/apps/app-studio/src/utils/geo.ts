export const getLocation = () => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (data) => {
                const { coords } = data;
                const { latitude, longitude } = coords;

                resolve({
                    success: true,
                    latitude: latitude.toFixed(1),
                    longitude: longitude.toFixed(1),
                });
            },
            (error: any) => {
                resolve({
                    success: false,
                    error,
                });
            }
        );
    });
};
