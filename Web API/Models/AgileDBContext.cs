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

        public DbSet<Card> Cards { get; set; }

        public DbSet<Bar> Bars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Card>().ToTable("Card");
            modelBuilder.Entity<Bar>().ToTable("Bar");

            modelBuilder.Entity<Card>()
                .Property(b => b.Priority)
                .HasDefaultValue(0);

            modelBuilder.Entity<Bar>().HasData(
                new Bar() { BarId = 1, Name = "To-do" },
                new Bar() { BarId = 2, Name = "Ongoing" },
                new Bar() { BarId = 3, Name = "Completed" }
            );

            modelBuilder.Entity<Card>().HasData(
                new Card() { CardId = 1, Name = "Test 1", Column = 1 },
                new Card() { CardId = 2, Name = "Test 2", Column = 2 },
                new Card() { CardId = 3, Name = "Test 3", Column = 3 }
            );
        }

    }
}
