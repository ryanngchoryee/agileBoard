using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web_API.Models
{
    public class AgileDBContext:DbContext
    {

        //constructor
        public AgileDBContext(DbContextOptions<AgileDBContext> options):base(options){}

        public DbSet<Card> Card { get; set; }

    }
}
