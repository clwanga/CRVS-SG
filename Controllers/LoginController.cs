using CRVS_SG.ApiEndpoints;
using CRVS_SG.Enums;
using CRVS_SG.Models.Login.Requests;
using CRVS_SG.Models.Login.Responses;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Connections.Features;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;
using System.Security.Claims;
using static CRVS_SG.Models.Login.Responses.LoginResponse;

namespace CRVS_SG.Controllers
{
    [Authorize]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<LoginRequestResponse> ProcessLoginRequest(LoginRequest loginRequest)
        {
            RestClient restClient = new(Endpoints.BaseURL);

            //initialize variables
            int code = 0;
            string message = string.Empty;
            LoginRequestResponseData dataList = new LoginRequestResponseData();

            try
            {
                if (loginRequest != null) 
                {
                    string jsonString = JsonConvert.SerializeObject(loginRequest);

                    var request = new RestRequest(Endpoints.Login).AddJsonBody(jsonString);

                    try
                    {
                       var response = await restClient.ExecutePostAsync<LoginRequestResponse>(request);

                        if (!response.IsSuccessful)
                        { 

                            code = (int)ErrorCode.GeneralFailure;
                            //message = "Something went wrong failed to login, Check your Internet Connection";
                            message = response.ErrorMessage;
                        }

                        if (response.Content != null)
                        {
                            var deserializedObject = JsonConvert.DeserializeObject<LoginRequestResponse>(response.Content);

                            code = deserializedObject.code;
                            message = deserializedObject.msg;
                            dataList = deserializedObject.data;

                            return (new LoginRequestResponse
                            {
                                code = code,
                                msg = message,
                                data = dataList
                            });
                              
                        }
                    }
                    catch (JsonSerializationException exception)
                    {
                        message = exception.Message;
                        code = (int)ErrorCode.GeneralFailure;
                    }

                    return (new LoginRequestResponse()
                    {
                        code = code,
                        msg = message
                    });
                }
                else
                {
                    return (new LoginRequestResponse()
                    {
                        code = (int)ErrorCode.DataValidationError,
                        msg = "Invalid Login Request"
                    });
                }
            }
            catch (Exception ex)
            {
                return (new LoginRequestResponse()
                {
                    code = (int)ErrorCode.GeneralFailure,
                    msg = ex.Message,
                });
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<JsonResult> LoginRequest(LoginRequest loginForm)
        {
            //object initialization 
            LoginRequest loginRequest = new()
            {
                Username = loginForm.Username.ToString().Trim(),
                Password = loginForm.Password.ToString().Trim()
            };

            LoginRequestResponse loginResponse = new();

            if (loginRequest != null)
            {
                loginResponse = await ProcessLoginRequest(loginRequest);
            }

            HttpContext.Session.SetString("Username", loginForm.Username);

            if (loginResponse != null && loginResponse.code == 200 && loginResponse.data.Groups[0].Equals("CRVS_STAKEHOLDER_ADMIN")) 
            {
                try
                {
                    if (!int.TryParse(loginResponse.data.UserId.ToString(), out int returnValue))
                    {
                        TempData["ErrorCode"] = loginResponse.code.ToString();
                        TempData["ErrorMessage"] = "Login Failed";

                        var response = new 
                        {
                            code = 101,
                            Redirect = "Login",
                            Response = "Login Failed"
                        };

                        return Json(response);
                    }
                }
                catch (Exception)
                {
                    var Response = new
                    {
                        code = 101,
                        Redirect = "Login",
                        Response = Endpoints.Defaults.Exception

                    };

                    return Json(Response);
                }

                HttpContext.Session.SetString("Username", loginResponse.data.UserName);
                HttpContext.Session.SetInt32("LoggedInUserId", loginResponse.data.UserId);
                HttpContext.Session.SetString("LoggedInUserGroup", loginResponse.data.Groups[0].ToString());

                var claims = new List<Claim>
                {
                    new Claim("LoggedInUserId",loginResponse.data.UserId.ToString()),
                    new Claim("Username", loginResponse.data.UserName),
                    new Claim("LoggedInUserGroup", loginResponse.data.Groups[0].ToString())

                };

                var identity = new ClaimsIdentity(claims, "crvs_stakeholders_cookiesAuth");
                ClaimsPrincipal claimsPrincipal = new(identity);

                await HttpContext.SignInAsync("crvs_stakeholders_cookiesAuth", claimsPrincipal);

                TempData["ErrorCode"] = loginResponse.code.ToString();
                TempData["ErrorMessage"] = loginResponse.msg;

                var mResponse = new
                {
                    Code = 200,
                    Redirect = "Dashboard-Home",
                    Response = loginResponse.msg
                };

                return Json(mResponse);
            }
            else
            {
                TempData["ErrorCode"] = ErrorCode.DataValidationError.ToString();
                TempData["ErrorMessage"] = loginResponse.msg.ToString();

                var Response = new
                {
                    Code = 101,
                    Redirect = "Login",
                    Response = loginResponse.msg.ToString()
                };
                return Json(Response);
            }

        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();

            return RedirectToAction("Login", "Login");
        }
    }
}
