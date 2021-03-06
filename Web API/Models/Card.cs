﻿using System;
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
        public int id { get; set; }
            
        [Column (TypeName = "varchar(150)" )] //define name data type 
        public string name {get; set;}
        
        //integer no need define 
        public int priority { get; set; }

        public int column { get; set; }

        [ForeignKey("column")]
        public Bar Bar{ get; set; }
    }
}
