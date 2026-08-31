export const config = {
    appName: process.env.NEXT_PUBLIC_APP_NAME || "Rock Solid Fence",
    appSubtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || "Leads Center",
    apiUrl:
        process.env.NEXT_PUBLIC_API_URL ||
        "https://us-central1-rock-solid-fencing.cloudfunctions.net/leadsApi",
    storageKey: process.env.NEXT_PUBLIC_STORAGE_KEY || "rsf_api_key",
    /** When set, dashboard opens without a password prompt. */
    dashboardApiKey: process.env.NEXT_PUBLIC_DASHBOARD_API_KEY || "",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
}
