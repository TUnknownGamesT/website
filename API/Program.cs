var builder = WebApplication.CreateBuilder(args);

// Configure URLs to listen on both HTTP and HTTPS on port 5001 and 5002
builder.WebHost.UseUrls("http://localhost:5001", "https://localhost:5002");

// Define CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder
        .WithOrigins("http://localhost:3001")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });

    options.AddPolicy("CorsPolicy", builder =>
    {
        builder
        .WithOrigins("185.191.126.248:80")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapFallbackToController("Index", "FallBack");

app.MapControllers();

app.Run();
