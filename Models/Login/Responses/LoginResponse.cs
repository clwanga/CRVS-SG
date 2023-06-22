namespace CRVS_SG.Models.Login.Responses
{
    public class LoginResponse
    {
        public class LoginRequestResponseData
        {
            public int UserId { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
            public string Groups { get; set; }
        }

        public class LoginRequestResponse
        {
            public int code { get; set; }
            public string msg { get; set; }
            public LoginRequestResponseData data { get; set; }

        }
    }
}
