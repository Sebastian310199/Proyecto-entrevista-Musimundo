using Proyecto.Sala.Model.Entidades;
using Proyecto.Sala.Model.Interfaces;
using Proyecto.Sala.Repositorio.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Proyecto.Sala.Repositorio.Repositorios
{
   public class SalaRepository : ISalaRepository
    {
        SalaDBContext dbContext = new SalaDBContext();

        public SalaRepository()
        { }
       
        public void DeleteSala(int id)
        {
            var sala = dbContext.sala.SingleOrDefault(e => e.id_sala == id);
            
            if (sala != null)
            {
                dbContext.sala.Remove(sala);
                dbContext.SaveChanges();
            }

        }

        public SalaEntidad GetSalaID(int id)
        {
            throw new NotImplementedException();
        }

        public List<SalaEntidad> GetSalas()
        {
            var listaSala = (from data in this.dbContext.sala
                             select data).OrderBy(o => o.nombre_sala)
                             .ToList();

            List<SalaEntidad> listaEntidad = new List<SalaEntidad>();
            listaSala.ForEach(e =>
            {
               listaEntidad.Add(MapperSala(e));

            });

            return listaEntidad;

        }

        public void PostSala(SalaEntidad salaEntidad)
        {
            dbContext.sala.Add(MapperSala(salaEntidad));
            dbContext.SaveChanges();
        }

        public void PutSala(SalaEntidad salaEntidad)
        {
            var sala = this.dbContext.sala.SingleOrDefault(e=> e.id_sala == salaEntidad.Id);
           
            if (sala != null)
            {
                salaDTO dtosala = this.MapperSalaUpdate(salaEntidad);
                
               
                this.dbContext.SaveChanges();
            }
           
        }

        private SalaEntidad MapperSala(salaDTO salaData)
        {
            SalaEntidad sala = new SalaEntidad();

            sala.Id = salaData.id_sala;
            sala.Nombre = salaData.nombre_sala;
            sala.TipoSala = salaData.tipo_sala;
            sala.Fecha = salaData.fecha_sala;
            sala.Capacidad = salaData.capacidad_sala;
            return sala;
        }
        private salaDTO MapperSala(SalaEntidad salaData)
        {
            salaDTO sala = new salaDTO();

            sala.id_sala= salaData.Id;
            sala.nombre_sala = salaData.Nombre;
            sala.tipo_sala = salaData.TipoSala;
            sala.fecha_sala = salaData.Fecha;
            sala.capacidad_sala = salaData.Capacidad;

            return sala;
        }
        private salaDTO MapperSalaUpdate(SalaEntidad salaData)
        {
            salaDTO sala = this.dbContext.sala.FirstOrDefault(x => x.id_sala == salaData.Id);
            
            sala.id_sala = salaData.Id;
            sala.nombre_sala = salaData.Nombre;
            sala.tipo_sala = salaData.TipoSala;
            sala.fecha_sala = salaData.Fecha;
            sala.capacidad_sala = salaData.Capacidad;

            return sala;
        }
   

    }
}
