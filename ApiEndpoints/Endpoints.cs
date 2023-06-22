

namespace CRVS_SG.ApiEndpoints
{
    public static class Endpoints
    {
        //base url
        public static string BaseURL = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("API_BASE_URLS")["BASE_URL"];

        public const string baseForEndPoints = "api";

        public static string Login = baseForEndPoints + "/Login";

        //Default messagegs

        public static class Defaults
        {
            public static string Exception = "Something went wrong, please contact system Admin";
        }
    }
}
