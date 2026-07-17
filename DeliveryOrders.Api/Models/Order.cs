using System.ComponentModel.DataAnnotations;

namespace DeliveryOrders.Api.Models;

public class Order
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string SenderCity { get; set; } = string.Empty;

    [Required]
    [MaxLength(300)]
    public string SenderAddress { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string ReceiverCity { get; set; } = string.Empty;

    [Required]
    [MaxLength(300)]
    public string ReceiverAddress { get; set; } = string.Empty;

    [Required]
    [Range(0.01, 100000)]
    public decimal Weight { get; set; }

    [Required]
    public DateTime PickupDate { get; set; }

    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}