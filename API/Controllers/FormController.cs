using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail([FromBody] FormData formData)
        {
            // Console.WriteLine("Received a request to send an email.");

            if (formData == null || string.IsNullOrEmpty(formData.Email))
            {
                // Console.WriteLine("Invalid form data.");
                return BadRequest("Invalid form data.");
            }
            // Console.WriteLine($"Data: \nName: {formData.Name} \nEmail: {formData.Email}");

            try
            {
                // Retrieve credentials from environment variables
                var smtpEmail = Environment.GetEnvironmentVariable("SMTP_EMAIL") ?? "avram1andrei@gmail.com";
                var smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD");
                var smtpHost = Environment.GetEnvironmentVariable("SMTP_HOST");
                var smtpPort = int.Parse(Environment.GetEnvironmentVariable("SMTP_PORT") ?? "587");

                // Console.WriteLine($"Credentials: \n{smtpEmail} \n{smtpPassword} \n{smtpHost} \n{smtpPort}");
                
                var smtpClient = new SmtpClient(smtpHost)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpEmail, smtpPassword),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(formData.Email),
                    Subject = "New Form Submission",
                    Body = $"Name: {formData.Name}\n" +
                           $"Country Code: {formData.CountryCode}\n" +
                           $"Contact Number: {formData.ContactNumber}\n" +
                           $"Email: {formData.Email}\n" +
                           $"Industry: {formData.Industry}\n" +
                           $"Project Description: {formData.ProjectDescription}",
                    IsBodyHtml = false,
                };

                mailMessage.To.Add(smtpEmail);

                await smtpClient.SendMailAsync(mailMessage);
                return Ok("Email sent successfully.");
            }
            catch (System.Exception ex)
            {
                // Log the error (not shown here)
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}