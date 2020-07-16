namespace Proyecto.Sala.Repositorio.DTO
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SalaDBContext : DbContext
    {
        public SalaDBContext()
            : base("name=SalaDBContext")
        {
        }

        public virtual DbSet<salaDTO> sala { get; set; }

      
    }
}
