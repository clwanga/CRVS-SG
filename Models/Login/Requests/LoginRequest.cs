using System.ComponentModel.DataAnnotations;

namespace CRVS_SG.Models.Login.Requests
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Username Required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password Required")]
        public string Password { get; set; }
    }
}
