var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

//login authentication
builder.Services.AddSession(options =>
{
    options.IOTimeout = TimeSpan.FromSeconds(12);
    options.IdleTimeout = TimeSpan.FromSeconds(12);
});
builder.Services.AddAuthentication("crvs_stakeholders_cookiesAuth").AddCookie("crvs_stakeholders_cookiesAuth", options =>
{
    options.Cookie.Name = "crvs_stakeholders_cookiesAuth";
    options.AccessDeniedPath = "/Login/Logout";
    options.LoginPath = "/Login/Login";
    options.LogoutPath = "/Login/Logout";
    options.ExpireTimeSpan = TimeSpan.FromHours(12);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseSession();
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Login}/{action=Login}/{id?}");

app.Run();
