using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web_API.Models
{
    public class Bar
    {

        [Key] //define id as primary key
        public int BarId { get; set; }

        [Column(TypeName = "varchar(150)")] //define name data type 
        [Required]
        public string Name { get; set; }

        public virtual ICollection<Card> Cards { get; set; }
    }
}
