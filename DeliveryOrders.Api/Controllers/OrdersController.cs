using DeliveryOrders.Api.Data;
using DeliveryOrders.Api.DTOs;
using DeliveryOrders.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrders.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrdersController(AppDbContext context)
    {
        _context = context;
    }

    // GET api/orders
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
    {
        var orders = await _context.Orders
            .OrderByDescending(o => o.Id)
            .ToListAsync();

        return Ok(orders);
    }

    // GET api/orders/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Order>> GetOrder(int id)
    {
        var order = await _context.Orders.FindAsync(id);

        if (order == null)
        {
            return NotFound();
        }

        return Ok(order);
    }

    // POST api/orders
    [HttpPost]
    public async Task<ActionResult<Order>> CreateOrder(CreateOrderDto dto)
    {
        var order = new Order
        {
            SenderCity = dto.SenderCity,
            SenderAddress = dto.SenderAddress,
            ReceiverCity = dto.ReceiverCity,
            ReceiverAddress = dto.ReceiverAddress,
            Weight = dto.Weight,
            PickupDate = dto.PickupDate,
            CreatedAt = DateTimeOffset.UtcNow,
        };

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
    }
}