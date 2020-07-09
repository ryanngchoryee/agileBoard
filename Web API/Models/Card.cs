using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web_API.Models
{
    public class Card
    {
        [Key] //define id as primary key
        public int CardId { get; set; }
            
        [Column (TypeName = "varchar(150)" )] //define name data type 
        [Required]
        public string Name {get; set;}
        
        //integer no need define 
        public int? Priority { get; set; }

        public int Column { get; set; }

        [ForeignKey("Column")]
        [Required]
        public virtual Bar Bar{ get; set; }
    }
}
