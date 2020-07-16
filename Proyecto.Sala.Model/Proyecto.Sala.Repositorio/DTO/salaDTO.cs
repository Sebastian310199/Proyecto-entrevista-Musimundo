namespace Proyecto.Sala.Repositorio.DTO
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("public.sala")]
    public partial class salaDTO
    {
        [Key]
        public int id_sala { get; set; }

        [Required]
        [StringLength(8000)]
        public string nombre_sala { get; set; }

        public int capacidad_sala { get; set; }

        [Required]
        [StringLength(8000)]
        public string tipo_sala { get; set; }

        [Column(TypeName = "date")]
        public DateTime fecha_sala { get; set; }
    }
}
