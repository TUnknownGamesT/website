namespace API.Models
{
    public class FormData
    {
        public required string Name { get; set; }
        public required string CountryCode { get; set; }
        public required string ContactNumber { get; set; }
        public required string Email { get; set; }
        public string? Industry { get; set; } 
        public required string ProjectDescription { get; set; }
    }
}
